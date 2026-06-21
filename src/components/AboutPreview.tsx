import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[65ch]">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            About
          </p>
          <h2 className="text-3xl font-bold text-navy mb-3">A bit about me</h2>
          <div className="w-10 h-[3px] bg-gold rounded-full mb-8"></div>

          <blockquote className="text-xl text-navy font-medium leading-relaxed border-l-[3px] border-gold pl-5 mb-8 italic">
            &ldquo;I build marketing systems that connect data to people — and pipeline to revenue.&rdquo;
          </blockquote>

          <p className="text-base text-slate-600 leading-[1.8] mb-8">
            Six years of building demand gen programs, healthcare marketing campaigns, and growth systems across B2B and healthcare technology. I specialize in turning messy funnel data into qualified pipeline — and keeping marketing, sales, and ops aligned enough to close it.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-orange hover:gap-3 transition-all duration-200"
          >
            Full background
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
