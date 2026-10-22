"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Send, X, RotateCcw } from "lucide-react";

type Message = { role: "user" | "assistant"; content: string };
const questions = ["What is Suri’s marketing focus?", "Where can I explore her projects?", "How can I contact Suri?"];
const answers = [
  { keywords: ["focus", "background", "experience", "gtm", "背景", "经历", "方向"], text: "Suri uses funnel strategy and customer insight to diagnose growth barriers, build practical solutions with sales and customer success, and track what works. Her experience spans B2B demand generation, sales enablement, provider activation, and lifecycle marketing. / Suri 擅长用 funnel 思维和客户洞察识别增长卡点，跨团队设计解决方案，并通过追踪复盘持续优化。" },
  { keywords: ["project", "work", "case", "项目", "作品", "案例"], text: "Explore the Work page for case studies and the Side projects section for personal initiatives. Three toolkits are available: Marketing Performance Dashboard, Sales Enablement Hub, and Partner Content Editors (One-Pager Editor + Landing Page Editor). Open Work → Tools I Built for screenshot walkthroughs using demo content. Broader case narratives remain in progress. / Work 页面 Tools I Built 已收录三个工具组，使用演示内容；完整案例叙述仍在完善。" },
  { keywords: ["contact", "email", "reach", "联系", "邮箱"], text: "You can contact Suri at surih930@gmail.com. / 欢迎通过 surih930@gmail.com 联系 Suri。" },
];

export default function PortfolioChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  useEffect(() => { if (open) inputRef.current?.focus(); }, [open]);
  useEffect(() => { if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight; }, [messages]);
  function close() { setOpen(false); launcherRef.current?.focus(); }
  function reset() { setMessages([]); setInput(""); inputRef.current?.focus(); }
  function send(value = input) {
    const question = value.trim();
    if (!question) return;
    const normalized = question.toLowerCase();
    const entry = answers.find(a => a.keywords.some(k => /^[a-z]+$/.test(k) ? new RegExp(`\\b${k}\\b`).test(normalized) : normalized.includes(k)));
    const answer = entry?.text || "This question isn’t in the prepared Q&A yet. Please contact Suri at surih930@gmail.com. / 这个问题暂未收录，请直接联系 Suri。";
    setMessages(previous => [...previous.slice(-38), {role: "user", content: question}, {role: "assistant", content: answer}]);
    setInput("");
  }
  return <div className="portfolio-chat">
    {open && <section id="portfolio-chat-panel" className="chat-panel" role="dialog" aria-modal="false" aria-labelledby="chat-title" onKeyDown={e => { if (e.key === "Escape") { e.stopPropagation(); close(); } }}>
      <header className="chat-header"><div className="chat-orb" aria-hidden="true">✳</div><div><h2 id="chat-title">Ask Me Anything</h2><p>Prepared Q&A · 预设问答</p></div><button className="chat-icon-button" aria-label="Close Ask Me Anything" onClick={close}><X size={19}/></button></header>
      <div className="chat-log" ref={logRef} role="log" aria-label="Portfolio conversation" aria-live="polite" aria-relevant="additions text">
        {!messages.length && <div className="chat-welcome"><p className="eyebrow">A little help getting to know me</p><h3>Your questions<br/><em>A clearer picture</em></h3><p>Explore prepared answers about Suri. Choose a topic or type a question — in English or 中文.</p><div className="chat-prompts">{questions.map(q => <button key={q} onClick={() => { send(q); inputRef.current?.focus(); }}>{q}<ArrowUpRight size={15}/></button>)}</div></div>}
        {messages.map((message, i) => <div className={`chat-message chat-${message.role}`} key={i}><span>{message.role === "user" ? "You" : "Portfolio guide"}</span><p>{message.content}</p></div>)}
      </div>
      <div className="chat-source-note">Sources: <Link href="/about" onClick={close}>experience</Link> + <Link href="/projects" onClick={close}>projects</Link>. Draft content; details may need confirmation.</div>
      <form className="chat-form" onSubmit={e => { e.preventDefault(); void send(); }}>
        <label className="sr-only" htmlFor="portfolio-chat-input">Ask about Suri’s experience</label>
        <textarea id="portfolio-chat-input" ref={inputRef} value={input} maxLength={1200} rows={2} onChange={e => setInput(e.target.value)} placeholder="Ask about growth, enablement, or tools…" onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); void send(); } }} />
        <div className="chat-form-bottom"><button type="button" className="chat-reset" onClick={reset}><RotateCcw size={13}/> New chat</button><span>{input.length}/1200</span><button className="chat-send" type="submit" aria-label="Send question" disabled={!input.trim()}><Send size={16}/></button></div>
      </form>
      <p className="chat-privacy">Prepared answers, matched by topic. No AI generation or API calls. Chats stay in this page until cleared or refreshed.</p>
    </section>}
    <button ref={launcherRef} className={`chat-launcher ${open ? "chat-launcher-open" : ""}`} aria-expanded={open} aria-controls="portfolio-chat-panel" aria-label={open ? "Close Ask Me Anything" : "Open Ask Me Anything"} onClick={() => open ? close() : setOpen(true)}>{open ? <X size={20}/> : <><MessageCircle size={20}/><span>Ask Me Anything</span><i aria-hidden="true"/></>}</button>
  </div>;
}
