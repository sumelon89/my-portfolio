import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Briefcase,
  Target,
  Zap,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — Suri Huang",
  description:
    "Growth marketer with 5+ years across healthcare diagnostics, B2B/B2C demand generation, provider acquisition, and APAC market expansion.",
};

const experience = [
  {
    company: "SpectraCell Laboratories",
    role: "Marketing & International Business Liaison Lead",
    period: "2024 – Present",
    type: "Full-time",
    bullets: [
      "Led growth marketing, campaign planning, and sales enablement projects across healthcare diagnostics products.",
      "Supported provider acquisition, partner marketing, and APAC market expansion initiatives.",
      "Created educational and sales-support materials for providers, partners, patients, and internal teams.",
      "Built reporting and campaign tracking workflows to connect marketing activity with revenue and business decisions.",
      "Coordinated cross-functional work across Sales, Customer Support, Shipping, Finance, IT, and clinical education teams.",
    ],
  },
  {
    company: "SpectraCell Laboratories",
    role: "Digital Marketing Associate",
    period: "2024",
    type: "Full-time",
    bullets: [
      "Supported digital marketing campaigns, social content, product education, and website updates.",
      "Developed marketing materials for DTC and provider-facing audiences.",
      "Assisted with campaign execution, content planning, and performance tracking.",
    ],
  },
];

const industryFocus = [
  {
    area: "Healthcare Diagnostics",
    description:
      "Translating complex clinical and lab testing products into clear, audience-appropriate marketing for providers, partners, and patients.",
  },
  {
    area: "B2B Demand Generation",
    description:
      "Building lead generation systems and funnel infrastructure that move business opportunities into qualified pipeline activity.",
  },
  {
    area: "DTC Growth Campaigns",
    description:
      "Planning and executing consumer-facing healthcare campaigns across education, promotion, and conversion stages.",
  },
  {
    area: "Provider & Partner Marketing",
    description:
      "Developing partner-facing and provider-facing assets that support adoption, education, and long-term retention.",
  },
  {
    area: "Sales Enablement",
    description:
      "Creating training, FAQ, and workflow documentation that helps sales and support teams operate with clarity and reduce friction.",
  },
  {
    area: "APAC Market Expansion",
    description:
      "Supporting international market initiatives including localization, partner development, and cross-border GTM planning.",
  },
];

const workingStyle = [
  {
    icon: Target,
    title: "Execution meets strategy",
    description:
      "I move between campaign execution and strategic planning — comfortable running a campaign and building the reporting system that evaluates it.",
  },
  {
    icon: Briefcase,
    title: "Cross-functional by default",
    description:
      "I've worked across Sales, CS, Finance, IT, and clinical teams, and I know how to keep marketing work moving even in complex organizational environments.",
  },
  {
    icon: Zap,
    title: "Clarity over complexity",
    description:
      "Whether it's a healthcare product explanation or a revenue report, I make complex information easier to act on — for the team and for the audience.",
  },
];

const tools = [
  "HubSpot",
  "Salesforce",
  "GA4",
  "SQL",
  "Tableau",
  "Clay",
  "Make",
  "Zapier",
  "Notion",
  "Airtable",
  "Canva",
  "Figma",
];

const capabilities = [
  "Demand Generation & Lead Gen",
  "Lifecycle & Seasonal Campaigns",
  "Campaign Analytics & Revenue Reporting",
  "Sales Enablement & Training Assets",
  "Provider & Partner Marketing",
  "Healthcare Product Messaging",
  "DTC Growth Strategy",
  "Marketing Automation & Ops",
  "Community Building & Thought Leadership",
  "APAC Market Expansion",
  "Cross-functional Coordination",
  "Content Strategy & Copywriting",
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
              Growth marketer with 5+ years of experience building demand
              generation systems, running healthcare marketing campaigns, and
              working across sales, operations, and international business to
              connect marketing activity to revenue outcomes.
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
                My work sits at the intersection of marketing execution and
                business strategy — I build the campaigns, systems, and content
                that help growth teams operate faster and make more informed
                decisions. Most of my experience is in healthcare diagnostics
                marketing, where I&apos;ve had to translate complex lab and
                clinical workflows into campaigns that work for providers,
                patients, and business partners simultaneously.
              </p>
              <p>
                I specialize in demand generation and lifecycle campaigns, but
                I&apos;m just as comfortable building a revenue-tracking
                dashboard or writing a provider training guide. I&apos;ve worked
                across Sales, Customer Support, Finance, and IT teams —
                coordinating cross-functional projects where marketing has to
                hold together multiple moving parts.
              </p>
              <p>
                On the international side, I&apos;ve supported APAC market
                expansion work, including partner-facing materials, localization
                strategy, and cross-border GTM coordination. I&apos;ve also
                built a 300+ member marketing community focused on
                execution-to-strategy transitions, which has sharpened my
                thinking on content, community, and thought leadership as
                long-term growth channels.
              </p>
            </div>

            {/* Quick facts */}
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-6">
                At a glance
              </p>
              {[
                { label: "Experience", value: "5+ years" },
                { label: "Domain", value: "Healthcare Diagnostics" },
                { label: "Specialization", value: "Growth & Demand Gen" },
                { label: "International", value: "APAC Markets" },
                { label: "Community", value: "300+ member marketing group" },
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
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                          {job.company}
                        </p>
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

      {/* Industry Focus */}
      <section className="py-16 bg-white border-y border-slate-200">
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
                className="bg-surface rounded-xl p-6 border border-slate-100 hover:border-accent-muted transition-colors"
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
      <section className="py-16 bg-surface">
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
                <div key={item.title} className="bg-white rounded-xl p-6 border border-slate-100">
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
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            What I bring
          </p>
          <h2 className="text-3xl font-bold text-slate-900 mb-10">
            Tools &amp; Capabilities
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Capabilities */}
            <div className="bg-surface rounded-xl p-6 border border-slate-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                Core capabilities
              </p>
              <div className="flex flex-wrap gap-2">
                {capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="text-xs font-medium text-slate-600 bg-white border border-slate-200 px-2.5 py-1.5 rounded-md"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-surface rounded-xl p-6 border border-slate-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                Tools &amp; platforms
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm font-medium text-accent bg-accent-light border border-accent-muted px-3 py-1.5 rounded-lg"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
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
              out directly if you&apos;re looking for a growth marketer who can
              execute campaigns and build the systems behind them.
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
