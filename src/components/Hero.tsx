import Link from "next/link";
import { ArrowRight, Download, User } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="max-w-3xl">
          {/* Role badge */}
          <div className="inline-flex items-center gap-2 bg-accent-light border border-accent-muted text-accent text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
            Growth Marketing &amp; International Business Lead
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.1]">
            Suri Huang
          </h1>

          {/* Headline */}
          <p className="text-xl sm:text-2xl text-slate-700 font-medium leading-relaxed mb-4">
            I build demand generation systems, launch healthcare growth
            campaigns, and turn funnel data into revenue decisions.
          </p>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl">
            B2B demand generation and growth marketer with 6+ years of experience
            building full-funnel pipeline programs across healthcare technology,
            lifecycle automation, ABM, and marketing-to-sales alignment.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors"
            >
              View Work
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 border border-slate-200 font-semibold text-sm px-6 py-3 rounded-lg hover:border-accent hover:text-accent transition-colors"
            >
              <User className="w-4 h-4" />
              About Me
            </Link>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 text-slate-600 font-semibold text-sm px-6 py-3 rounded-lg hover:text-accent transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Decorative accent line */}
        <div className="mt-20 flex items-center gap-3">
          <div className="w-12 h-0.5 bg-accent rounded-full"></div>
          <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">
            Healthcare · Growth · Analytics · Expansion
          </span>
        </div>
      </div>
    </section>
  );
}
