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
    "B2B demand generation and growth marketer with 6+ years of experience building full-funnel pipeline programs across healthcare technology, ABM, lifecycle automation, and marketing-to-sales alignment.",
};

const experience = [
  {
    company: "SpectraCell Laboratories Inc.",
    companyNote: "Healthcare Technology Company · Houston, TX (Remote)",
    role: "Marketing & International Business Liaison Lead",
    period: "07/2024 – Present",
    type: "Full-time",
    promotedFrom: "Promoted from Digital Marketing Associate (03/2024 – 07/2024)",
    scopeNote: "Scope: Growth Marketing, Demand Generation & APAC GTM",
    bullets: [
      "Owned demand generation strategy and channel mix across paid media, webinars, educational seminars, and partner programs, generating $500K+ in marketing-qualified pipeline and supporting six-figure closed-won revenue over 12 months.",
      "Architected the lead lifecycle framework in HubSpot: defined MQL criteria, designed 7+ automated nurture workflows across funnel stages, and implemented engagement-based scoring, lifting lead-to-MQL conversion by 27%.",
      "Established structured marketing-to-sales handoff with a 24–48 hour SLA that converted 30–40% of routed leads into active opportunities.",
      "Defined and refined ICP with sales across provider type, geography, and emerging verticals to improve campaign targeting precision.",
      "Led account-based and partner-led marketing initiatives for strategic franchise, channel, and corporate accounts.",
      "Expanded into 8+ APAC markets within 3 months, developing localized GTM strategy, pricing, and distributor enablement that increased partner engagement by 40%.",
    ],
  },
  {
    company: "TDCX",
    companyNote: "Global Marketing Agency · Beijing, China",
    role: "Senior Digital Marketing Consultant",
    period: "05/2022 – 04/2023",
    type: "Full-time",
    promotedFrom: null,
    scopeNote: null,
    bullets: [
      "Owned performance and funnel optimization for 350+ SMB accounts (100–120/quarter), improving quality scores to 90%+ and shortening conversion cycles by 40%.",
      "Translated campaign and funnel data into strategic recommendations on spend allocation and conversion optimization.",
      "Mentored 12 junior consultants on performance marketing strategy and account management.",
    ],
  },
  {
    company: "BeBeyond Education",
    companyNote: "Beijing, China",
    role: "Senior Marketing Specialist",
    period: "05/2020 – 05/2022",
    type: "Full-time",
    promotedFrom: null,
    scopeNote: null,
    bullets: [
      "Designed the demand gen playbook for a new service line from zero: defined ICP and lead scoring tiers, achieving 23% lead-to-deal conversion.",
      "Executed account-based outreach targeting 21 institutional partners, owning full lifecycle from prospecting through co-branded events to closed deal.",
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
  {
    area: "Healthcare Technology",
    description:
      "Translating complex clinical and diagnostic workflows into clear, audience-appropriate marketing for providers, partners, and patients.",
  },
  {
    area: "B2B Demand Generation",
    description:
      "Building full-funnel pipeline programs — from ICP definition and lead scoring through lifecycle nurture and marketing-to-sales handoff.",
  },
  {
    area: "Account-Based Marketing",
    description:
      "Running ABM and partner-led initiatives for strategic accounts across franchise, channel, and corporate segments.",
  },
  {
    area: "Provider & Partner Marketing",
    description:
      "Developing partner-facing and provider-facing assets and enablement programs that drive adoption and engagement.",
  },
  {
    area: "Marketing Analytics & Attribution",
    description:
      "Building reporting systems that connect campaign activity to pipeline, funnel velocity, and revenue impact.",
  },
  {
    area: "APAC Market Expansion",
    description:
      "Localized GTM strategy, distributor enablement, and cross-border campaign execution across 8+ APAC markets.",
  },
];

const workingStyle = [
  {
    icon: Target,
    title: "Execution meets strategy",
    description:
      "I move between campaign execution and strategic planning — comfortable owning a full-funnel program and building the reporting system that measures it.",
  },
  {
    icon: Briefcase,
    title: "Marketing-to-sales alignment",
    description:
      "I've built structured handoff frameworks and worked directly with sales to define ICP, refine lead scoring, and convert pipeline into revenue.",
  },
  {
    icon: Zap,
    title: "Clarity over complexity",
    description:
      "Whether it's a healthcare product explanation or a funnel attribution report, I make complex information easier to act on — for the team and the audience.",
  },
];

const skillGroups = [
  {
    category: "Demand Gen",
    skills: [
      "ICP Development",
      "ABM",
      "Audience Segmentation",
      "Lead Scoring & Qualification",
      "Lifecycle Nurture",
      "Marketing-Sales Handoff",
      "Pipeline Attribution",
      "Funnel Optimization",
      "A/B Testing",
    ],
  },
  {
    category: "Analytics & CRM",
    skills: [
      "Google Analytics — Certified",
      "HubSpot — Certified",
      "Salesforce",
      "Tableau",
      "SQL",
      "Excel / Google Sheets",
    ],
  },
  {
    category: "Channels",
    skills: [
      "Google Ads — Certified",
      "Meta Ads",
      "LinkedIn Ads",
      "TikTok Ads",
      "Email Marketing",
      "Webinar Programs",
      "Partner Marketing",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Back link */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>

      {/* Page header */}
      <section className="bg-surface pb-16 pt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent-light border border-accent-muted text-accent text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Growth Marketing &amp; International Business Lead
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              Suri Huang
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
              B2B demand generation and growth marketer with 6+ years of
              experience building full-funnel pipeline programs across healthcare
              technology and B2B environments.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5 text-base text-slate-600 leading-relaxed">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">
                Professional Summary
              </p>
              <p>
                I&apos;m a B2B demand generation and growth marketer with 6+
                years of experience building full-funnel pipeline programs across
                healthcare technology and B2B environments. I specialize in ICP
                development, audience segmentation, lifecycle automation, ABM,
                and marketing-to-sales alignment — with a strong track record of
                turning campaign and funnel insights into qualified pipeline and
                revenue impact.
              </p>
              <p>
                At SpectraCell Laboratories, I architected the lead lifecycle
                framework in HubSpot, defined MQL criteria, designed 7+ automated
                nurture workflows, and established a structured marketing-to-sales
                handoff that converted 30–40% of routed leads into active
                opportunities. Over 12 months, these programs generated $500K+ in
                marketing-qualified pipeline and supported six-figure closed-won
                revenue.
              </p>
              <p>
                On the international side, I led APAC market expansion into 8+
                markets within 3 months, developing localized GTM strategy,
                pricing, and distributor enablement. I work best in
                cross-functional environments where marketing, sales, and
                operations need to move together — and where the work requires
                both execution depth and strategic judgment.
              </p>
            </div>

            {/* Quick facts */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">
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
                  className="flex justify-between items-start gap-4 py-3 border-b border-slate-100 last:border-b-0"
                >
                  <span className="text-sm text-slate-400">{item.label}</span>
                  <span className="text-sm font-medium text-slate-900 text-right">
                    {item.value}
                  </span>
                </div>
              ))}
              <div className="pt-4">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-accent-dark transition-colors w-full justify-center"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Timeline */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-10">
            Work Experience
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-200 hidden sm:block"></div>

            <div className="space-y-10">
              {experience.map((job, idx) => (
                <div key={idx} className="relative sm:pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-white ring-2 ring-accent-muted hidden sm:block -translate-x-1/2"></div>

                  <div className="bg-white rounded-xl border border-slate-100 p-6 sm:p-7">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-0.5">
                          {job.company}
                        </p>
                        <p className="text-xs text-slate-400 mb-2">{job.companyNote}</p>
                        <h3 className="text-lg font-bold text-slate-900">
                          {job.role}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                          {job.period}
                        </span>
                        <span className="text-xs font-medium text-accent bg-accent-light border border-accent-muted px-2.5 py-1 rounded-md">
                          {job.type}
                        </span>
                      </div>
                    </div>

                    {/* Promotion / scope notes */}
                    {(job.promotedFrom || job.scopeNote) && (
                      <div className="flex flex-col gap-1 mb-4">
                        {job.promotedFrom && (
                          <p className="text-xs text-slate-400 italic">
                            {job.promotedFrom}
                          </p>
                        )}
                        {job.scopeNote && (
                          <p className="text-xs font-medium text-slate-500">
                            {job.scopeNote}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Bullets */}
                    <ul className="space-y-2.5">
                      {job.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          <span className="text-sm text-slate-600 leading-relaxed">
                            {bullet}
                          </span>
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
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-10">
            Education
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="bg-surface rounded-xl border border-slate-100 p-6 flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4.5 h-4.5 text-accent" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Domain expertise
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mb-10">
            Industry Focus
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industryFocus.map((item) => (
              <div
                key={item.area}
                className="bg-white rounded-xl p-6 border border-slate-100 hover:border-accent-muted transition-colors"
              >
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  {item.area}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Working style
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mb-10">
            How I Work
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {workingStyle.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-surface rounded-xl p-6 border border-slate-100">
                  <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center mb-4">
                    <Icon className="w-4.5 h-4.5 text-accent" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools & Capabilities */}
      <section className="py-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            What I bring
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mb-10">
            Technical Skills
          </h2>

          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="bg-white rounded-xl p-6 border border-slate-100"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1.5 rounded-md"
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
      <section className="py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want the full picture?
            </h2>
            <p className="text-base text-slate-400 leading-relaxed mb-8">
              Download my resume for a complete view of my experience, or reach
              out directly if you&apos;re building a demand gen or growth marketing
              team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-accent-dark transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="mailto:surih930@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white border border-slate-700 font-semibold text-sm px-6 py-3 rounded-lg hover:border-slate-500 transition-colors"
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
