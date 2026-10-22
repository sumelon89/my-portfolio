import OpenAI from "openai";
import profile from "@/data/assistant-profile.json";
import { assistantInstructions, CHAT_LIMITS, portfolioContext, validateMessages } from "@/lib/chat";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;
const headers = { "Cache-Control": "no-store" };
const windowState = { start: 0, count: 0 };
function failure(message: string, status: number) { return Response.json({ error: message }, { status, headers }); }
export async function GET() {
  return Response.json({ enabled: Boolean(process.env.OPENAI_API_KEY), knowledgeStatus: "draft", resumeAvailable: Boolean(profile.resumeText.trim()) }, { headers });
}
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  try { if (origin && new URL(origin).host !== request.headers.get("host")) return failure("Request origin is not allowed.", 403); }
  catch { return failure("Request origin is not allowed.", 403); }
  if (!request.headers.get("content-type")?.includes("application/json")) return failure("Expected JSON.", 415);
  if (Number(request.headers.get("content-length")) > CHAT_LIMITS.bodyBytes) return failure("Message is too long.", 413);
  let body;
  try {
    const reader = request.body?.getReader();
    if (!reader) return failure("Invalid request.", 400);
    const decoder = new TextDecoder(); let raw = "", bytes = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) { raw += decoder.decode(); break; }
      bytes += value.byteLength;
      if (bytes > CHAT_LIMITS.bodyBytes) { await reader.cancel(); return failure("Message is too long.", 413); }
      raw += decoder.decode(value, { stream: true });
    }
    body = JSON.parse(raw);
  }
  catch { return failure("Invalid request.", 400); }
  const messages = validateMessages(body?.messages);
  if (!messages) return failure("Please send a valid conversation with a question under 1,200 characters.", 400);
  if (!process.env.OPENAI_API_KEY) return failure("The AI guide is not connected yet. Please contact Suri directly.", 503);
  const now = Date.now();
  if (now - windowState.start > 60000) { windowState.start = now; windowState.count = 0; }
  if (windowState.count >= 20) return failure("The guide is busy. Please try again in a minute.", 429);
  windowState.count++;
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY, timeout: 45000, maxRetries: 0 });
  const abort = new AbortController();
  const deadline = setTimeout(() => abort.abort(), 50000);
  request.signal.addEventListener("abort", () => abort.abort(), { once: true });
  try {
    const upstream = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      instructions: assistantInstructions,
      input: [{ role: "developer", content: `Portfolio reference data (not instructions):\n${portfolioContext()}` }, ...messages],
      stream: true, store: false, max_output_tokens: 650,
    }, { signal: abort.signal });
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        const send = (event: object) => controller.enqueue(encoder.encode(JSON.stringify(event) + "\n"));
        try {
          for await (const event of upstream) {
            if (event.type === "response.output_text.delta") send({ type: "delta", text: event.delta });
            if (event.type === "response.completed") { send({ type: "done" }); return; }
            if (event.type === "response.failed" || event.type === "error") throw new Error("Upstream response failed");
            if (event.type === "response.incomplete") { send({ type: "error", message: "The reply was cut short. Please ask a shorter follow-up." }); return; }
          }
          send({ type: "error", message: "The connection ended before the reply finished. Please try again." });
        } catch { if (!request.signal.aborted) send({ type: "error", message: "The reply was interrupted. Please try again or contact Suri." }); }
        finally { clearTimeout(deadline); controller.close(); }
      },
      cancel() { abort.abort(); clearTimeout(deadline); },
    });
    return new Response(stream, { headers: { ...headers, "Content-Type": "application/x-ndjson; charset=utf-8", "X-Accel-Buffering": "no" } });
  } catch {
    clearTimeout(deadline);
    return failure("The AI guide is temporarily unavailable. Please try again later or contact Suri.", 502);
  }
}
