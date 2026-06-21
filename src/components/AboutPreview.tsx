import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            About me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Bridging marketing execution and business strategy
          </h2>
          <div className="space-y-4 text-base text-slate-500 leading-relaxed mb-8">
            <p>
              I specialize in connecting campaign execution to revenue outcomes —
              building the systems, content, and reporting that help growth teams
              operate with more clarity and speed. My background spans healthcare
              diagnostics marketing, B2B and DTC demand generation, provider and
              partner enablement, and multi-market expansion work in the APAC
              region.
            </p>
            <p>
              I work best in cross-functional environments where marketing,
              sales, and operations need to move together — translating complex
              products into actionable campaigns, and turning funnel data into
              decisions the business can act on.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
          >
            Read full background
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
