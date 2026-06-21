import { Mail, Download, MapPin } from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const contacts = [
  {
    href: "mailto:surih930@gmail.com",
    icon: Mail,
    label: "surih930@gmail.com",
    external: false,
  },
  {
    href: "https://www.linkedin.com/in/suri-huang09/",
    icon: LinkedInIcon,
    label: "linkedin.com/in/suri-huang09",
    external: true,
  },
  {
    href: "/resume.pdf",
    icon: Download,
    label: "Download Resume",
    external: false,
    download: true,
  },
];

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-navy">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-blue-300 mb-2">
            Get in touch
          </p>
          <h2 className="text-3xl font-bold text-white mb-3">Let&apos;s talk</h2>
          <div className="w-10 h-[3px] bg-gold rounded-full mb-8"></div>

          <p className="text-base text-blue-100/60 leading-relaxed mb-10">
            Open to Growth Marketing, Demand Gen, and Healthcare Marketing roles. If you&apos;re building a team that turns pipeline insight into revenue — let&apos;s connect.
          </p>

          <div className="flex flex-col gap-4">
            {contacts.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  download={c.download ? true : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange/40 group-hover:bg-orange/5 transition-all duration-200 shrink-0">
                    <Icon className="w-4 h-4 text-blue-200 group-hover:text-orange transition-colors duration-200" />
                  </div>
                  <span className="text-sm font-medium text-blue-100 group-hover:text-white transition-colors duration-200">
                    {c.label}
                  </span>
                </a>
              );
            })}

            {/* Location (non-clickable) */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-blue-200/40" />
              </div>
              <span className="text-sm text-blue-200/40">
                Irvine, CA · Open to Remote
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
