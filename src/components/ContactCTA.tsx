import { Mail, Download, MapPin } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-muted mb-3">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Open to Growth Marketing, Demand Gen, and Healthcare Marketing roles
          </h2>
          <p className="text-base text-slate-400 leading-relaxed mb-10">
            If you&apos;re building a marketing team that needs someone who can
            run campaigns, build reporting systems, and work across sales and
            operations — let&apos;s talk.
          </p>

          <div className="flex flex-col gap-4">
            {/* Email */}
            <a
              href="mailto:surih930@gmail.com"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-accent transition-colors shrink-0">
                <Mail className="w-4.5 h-4.5 text-slate-400 group-hover:text-accent transition-colors" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Email</p>
                <p className="text-sm font-medium text-white group-hover:text-accent transition-colors">
                  surih930@gmail.com
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/suri-huang09/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-accent transition-colors shrink-0">
                <LinkedInIcon className="w-4 h-4 text-slate-400 group-hover:text-accent transition-colors" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">LinkedIn</p>
                <p className="text-sm font-medium text-white group-hover:text-accent transition-colors">
                  linkedin.com/in/suri-huang09
                </p>
              </div>
            </a>

            {/* Resume */}
            <a href="/resume.pdf" download className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-accent transition-colors shrink-0">
                <Download className="w-4.5 h-4.5 text-slate-400 group-hover:text-accent transition-colors" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Resume</p>
                <p className="text-sm font-medium text-white group-hover:text-accent transition-colors">
                  Download PDF
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <MapPin className="w-4.5 h-4.5 text-slate-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Location</p>
                <p className="text-sm font-medium text-white">
                  Irvine, CA · Open to Remote
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
