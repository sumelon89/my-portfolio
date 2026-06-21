import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Briefcase,
  Target,
  Zap,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — Suri Huang",
  description:
    "B2B demand generation and growth marketer with 6+ years building full-funnel pipeline programs across healthcare technology, ABM, and lifecycle automation.",
};

const experience = [
  {
    company: "SpectraCell Laboratories Inc.",
    companyNote: "Healthcare Technology · Houston, TX (Remote)",
    role: "Marketing & International Business Liaison Lead",
    period: "07/2024 – Present",
    note: "Promoted from Digital Marketing Associate (03/2024)",
    scopeNote: "Scope: Growth Marketing, Demand Generation & APAC GTM",
    bullets: [
      "Generated $500K+ in marketing-qualified pipeline and six-figure closed-won revenue across paid media, webinars, and partner programs.",
      "Architected a HubSpot lead lifecycle (7+ nurture workflows, engagement-based scoring), lifting lead-to-MQL conversion by 27%.",
      "Expanded into 8 APAC markets in 3 months, growing distributor engagement by 40%.",
    ],
  },
  {
    company: "TDCX",
    companyNote: "Global Marketing Agency · Beijing, China",
    role: "Senior Digital Marketing Consultant",
    period: "05/2022 – 04/2023",
    note: null,
    scopeNote: null,
    bullets: [
      "Optimized 350+ SMB accounts, improving quality scores to 90%+ and shortening conversion cycles by 40%.",
      "Mentored 12 junior consultants on campaign strategy and performance.",
    ],
  },
  {
    company: "BeBeyond Education",
    companyNote: "Beijing, China",
    role: "Senior Marketing Specialist",
    period: "05/2020 – 05/2022",
    note: null,
    scopeNote: null,
    bullets: [
      "Built a demand gen playbook from zero, achieving 23% lead-to-deal conversion.",
      "Drove account-based outreach across 21 institutional partners through full lifecycle to closed deal.",
    ],
  },
];

const education = [
  {
    school: "Northeastern University",
    location: "Boston, MA",
    degree: "M.S. in Analytics",
    period: "2018 – 2019",
  },
  {
    school: "Nantong University",
    location: "Jiangsu, China",
    degree: "B.S. in Education",
    period: "2014 – 2018",
  },
];

const industryFocus = [
  { area: "Healthcare Technology", line: "Complex clinical workflows → clear marketing for providers and partners." },
  { area: "B2B Demand Generation", line: "Full-funnel pipeline programs from ICP definition through closed-won." },
  { area: "Account-Based Marketing", line: "ABM and partner-led initiatives for strategic accounts across segments." },
  { area: "Marketing-to-Sales Alignment", line: "Structured handoffs, lead scoring, and SLA frameworks that convert pipeline." },
  { area: "Analytics & Attribution", line: "Reporting systems that connect campaign activity to revenue impact." },
  { area: "APAC Market Expansion", line: "Localized GTM, distributor enablement, and cross-border campaign execution." },
];

const workingStyle = [
  {
    icon: Target,
    title: "Execution meets strategy",
    description:
      "Comfortable owning a full-funnel program and building the reporting system that evaluates it.",
  },
  {
    icon: Briefcase,
    title: "Marketing-to-sales alignment",
    description:
      "I've built handoff frameworks and worked directly with sales to refine ICP, scoring, and pipeline conversion.",
  },
  {
    icon: Zap,
    title: "Clarity over complexity",
    description:
      "Whether it's a healthcare product or a funnel report, I make information easier to act on.",
  },
];

const skillGroups = [
  {
    category: "Demand Gen",
    skills: ["ICP Development", "ABM", "Lifecycle Nurture", "Lead Scoring", "Funnel Optimization", "A/B Testing"],
  },
  {
    category: "Analytics & CRM",
    skills: ["HubSpot", "Salesforce", "Google Analytics", "Tableau", "SQL", "Excel"],
  },
  {
    category: "Channels",
    skills: ["Google Ads", "Meta", "LinkedIn", "TikTok", "Email", "Webinars"],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Back */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-navy transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>

      {/* Page header */}
      <section className="bg-gradient-to-b from-slate-50/80 to-surface pb-16 pt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-navy/70 border border-navy/15 bg-navy/5 px-3.5 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-navy"></span>
              Growth Marketing &amp; International Business Lead
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-5 leading-tight">
              Suri Huang
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-[60ch]">
              B2B demand generation and growth marketer with 6+ years building full-funnel pipeline programs across healthcare technology and B2B environments.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
                Professional Summary
              </p>
              <h2 className="text-2xl font-bold text-navy mb-3">Background</h2>
              <div className="w-8 h-[3px] bg-gold rounded-full mb-7"></div>

              <div className="space-y-4 text-base text-slate-600 leading-[1.8] max-w-[65ch]">
                <p>
                  I specialize in ICP development, audience segmentation, lifecycle automation, ABM, and marketing-to-sales alignment — with a track record of turning campaign and funnel insight into qualified pipeline and revenue impact.
                </p>
                <p>
                  At SpectraCell, I architected HubSpot lead lifecycle frameworks, defined MQL criteria, designed 7+ automated nurture workflows, and established structured handoffs that converted 30–40% of routed leads into active opportunities — generating $500K+ in marketing-qualified pipeline over 12 months.
                </p>
                <blockquote className="text-base text-navy font-medium border-l-[3px] border-gold pl-4 italic">
                  &ldquo;I build marketing systems that connect data to people — and pipeline to revenue.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Quick facts */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
                At a glance
              </p>
              {[
                { label: "Experience", value: "6+ years" },
                { label: "Location", value: "Irvine, CA" },
                { label: "Domain", value: "Healthcare Technology" },
                { label: "Specialization", value: "Demand Gen & ABM" },
                { label: "International", value: "8+ APAC Markets" },
                { label: "Open to", value: "Remote · Hybrid · On-site" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center gap-4 py-3 border-b border-slate-100 last:border-0"
                >
                  <span className="text-xs text-slate-400 uppercase tracking-wide">{item.label}</span>
                  <span className="text-sm font-semibold text-navy text-right">{item.value}</span>
                </div>
              ))}
              <div className="pt-5">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-orange transition-colors duration-200 w-full justify-center"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            Work Experience
          </p>
          <h2 className="text-2xl font-bold text-navy mb-3">Career History</h2>
          <div className="w-8 h-[3px] bg-gold rounded-full mb-10"></div>

          <div className="relative">
            <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-200 hidden sm:block"></div>

            <div className="space-y-8">
              {experience.map((job, idx) => (
                <div key={idx} className="relative sm:pl-12">
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-navy border-2 border-white ring-2 ring-navy/20 hidden sm:block -translate-x-1/2"></div>

                  <div className="bg-white rounded-xl border border-slate-100 p-6 hover:shadow-sm transition-shadow duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-navy mb-0.5">
                          {job.company}
                        </p>
                        <p className="text-[11px] text-slate-400 mb-1.5">{job.companyNote}</p>
                        <h3 className="text-base font-bold text-slate-900">{job.role}</h3>
                      </div>
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md h-fit shrink-0">
                        {job.period}
                      </span>
                    </div>

                    {(job.note || job.scopeNote) && (
                      <div className="mb-4 space-y-0.5">
                        {job.note && <p className="text-xs text-slate-400 italic">{job.note}</p>}
                        {job.scopeNote && <p className="text-xs font-medium text-navy/60">{job.scopeNote}</p>}
                      </div>
                    )}

                    <ul className="space-y-2">
                      {job.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ChevronRight className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                          <span className="text-sm text-slate-600 leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            Education
          </p>
          <h2 className="text-2xl font-bold text-navy mb-3">Academic Background</h2>
          <div className="w-8 h-[3px] bg-gold rounded-full mb-10"></div>

          <div className="grid sm:grid-cols-2 gap-4">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="bg-surface rounded-xl border border-slate-100 p-6 flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-lg bg-navy/5 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 text-navy" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-navy mb-1">
                    {edu.school}
                  </p>
                  <p className="text-sm font-bold text-slate-900">{edu.degree}</p>
                  <p className="text-xs text-slate-400 mt-1">
                    {edu.location} · {edu.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            Domain expertise
          </p>
          <h2 className="text-2xl font-bold text-navy mb-3">Industry Focus</h2>
          <div className="w-8 h-[3px] bg-gold rounded-full mb-10"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industryFocus.map((item) => (
              <div
                key={item.area}
                className="bg-white rounded-xl p-5 border border-slate-100 hover:shadow-sm transition-shadow duration-200"
              >
                <h3 className="text-sm font-bold text-navy mb-1.5">{item.area}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            Working style
          </p>
          <h2 className="text-2xl font-bold text-navy mb-3">How I Work</h2>
          <div className="w-8 h-[3px] bg-gold rounded-full mb-10"></div>

          <div className="grid sm:grid-cols-3 gap-5">
            {workingStyle.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-surface rounded-xl p-6 border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-navy/5 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-navy" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            What I bring
          </p>
          <h2 className="text-2xl font-bold text-navy mb-3">Technical Skills</h2>
          <div className="w-8 h-[3px] bg-gold rounded-full mb-10"></div>

          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
              >
                <span className="text-[11px] font-semibold uppercase tracking-widest text-navy/50 sm:w-36 shrink-0">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium text-slate-700 bg-white border border-slate-200 px-3 py-1.5 rounded-full hover:border-navy/30 hover:text-navy transition-colors duration-150"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white mb-3">Want the full picture?</h2>
            <div className="w-8 h-[3px] bg-gold rounded-full mb-6"></div>
            <p className="text-sm text-blue-100/60 leading-relaxed mb-8">
              Download my resume or reach out directly — I&apos;m open to growth marketing, demand gen, and healthcare marketing roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 bg-white text-navy font-semibold text-sm px-6 py-3 rounded-lg hover:bg-gold-light transition-colors duration-200"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="mailto:surih930@gmail.com"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold text-sm px-6 py-3 rounded-lg hover:border-orange hover:text-orange transition-colors duration-200"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
