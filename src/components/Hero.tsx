import Link from "next/link";
import { ArrowRight, MapPin, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center bg-gradient-to-b from-slate-50/80 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
        {/* Role badge */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-navy/70 border border-navy/15 bg-navy/5 px-3.5 py-1.5 rounded-full mb-8">
          B2B Demand Generation &amp; Growth Marketing
        </div>

        {/* Name */}
        <h1 className="text-[clamp(3rem,8vw,5rem)] font-bold text-navy tracking-tight leading-[1.05] mb-6">
          Suri Huang
        </h1>

        {/* Headline */}
        <p className="text-xl sm:text-2xl text-slate-600 font-normal leading-relaxed mb-5 max-w-[52ch]">
          Turning funnel data into{" "}
          <span className="text-navy font-semibold">$500K+ in qualified pipeline</span>
          {" "}across healthcare tech and B2B environments.
        </p>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-slate-400 mb-10">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span>Irvine, CA · Open to Remote</span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://www.linkedin.com/in/suri-huang09/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-navy text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-orange transition-colors duration-200"
          >
            View LinkedIn
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 text-navy border border-navy/25 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-navy hover:text-white hover:border-navy transition-colors duration-200"
          >
            Contact Me
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
