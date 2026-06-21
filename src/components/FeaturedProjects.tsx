const projects = [
  {
    id: 1,
    tag: "Demand Gen · Lead Gen · Funnel Strategy",
    title: "Lead Generation & Pipeline Development",
    description:
      "Built campaign and sales-support systems to turn healthcare market opportunities into qualified leads, provider conversations, and measurable pipeline activity.",
    impactLabel: "Key outcomes",
    impact: [
      "Qualified leads generated",
      "Provider conversations initiated",
      "Campaign launch speed",
    ],
  },
  {
    id: 2,
    tag: "Analytics · Reporting · Revenue Insights",
    title: "Marketing Analytics & Revenue Reporting",
    description:
      "Created reporting workflows to track campaign performance, revenue progress, funnel activity, and promotion results, helping the team make faster marketing and business decisions.",
    impactLabel: "Key outcomes",
    impact: [
      "Revenue tracking visibility",
      "Campaign performance dashboards",
      "Funnel activity reporting",
    ],
  },
  {
    id: 3,
    tag: "Campaign Strategy · Lifecycle · DTC Growth",
    title: "Campaign Strategy & Lifecycle Marketing",
    description:
      "Planned and executed seasonal healthcare campaigns across education, promotion, and conversion touchpoints, connecting product messaging with audience needs and revenue goals.",
    impactLabel: "Key outcomes",
    impact: [
      "Campaign calendar & content system",
      "Promotion performance",
      "Audience-to-revenue alignment",
    ],
  },
  {
    id: 4,
    tag: "Partner Marketing · Co-branding · Healthcare Content",
    title: "Partner & Co-branded Marketing",
    description:
      "Developed partner-facing and patient-facing marketing materials that translated complex diagnostic products into clear, branded education experiences for healthcare partners.",
    impactLabel: "Key outcomes",
    impact: [
      "Partner asset library",
      "Patient education materials",
      "Provider adoption support",
    ],
  },
  {
    id: 5,
    tag: "Sales Enablement · Training · Cross-functional Ops",
    title: "Sales Enablement & Operational Clarity",
    description:
      "Built sales enablement and training resources that helped sales, customer support, and operations explain complex testing workflows clearly and reduce provider-facing friction.",
    impactLabel: "Key outcomes",
    impact: [
      "Training & FAQ assets",
      "Workflow documentation",
      "Reduced communication friction",
    ],
  },
  {
    id: 6,
    tag: "Community · Content Strategy · Thought Leadership",
    title: "Marketing Community & Thought Leadership",
    description:
      "Built and hosted a 300+ member marketing community, creating niche discussions, event programming, and recap content around career growth, marketing strategy, and execution-to-strategy transitions.",
    impactLabel: "Key outcomes",
    impact: [
      "300+ community members",
      "Recurring events & engagement loops",
      "Content calendar & recap system",
    ],
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Case Studies
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-base text-slate-500 leading-relaxed">
            Each project is framed around the business problem it addresses —
            from pipeline development to campaign analytics to sales enablement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col bg-surface rounded-xl border border-slate-100 hover:border-accent-muted hover:shadow-md transition-all overflow-hidden"
            >
              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                {/* Tag */}
                <p className="text-[11px] font-semibold uppercase tracking-wider text-accent mb-3">
                  {project.tag}
                </p>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Impact placeholder */}
                <div className="mt-5 pt-4 border-t border-dashed border-slate-200">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    {project.impactLabel}
                  </p>
                  <ul className="flex flex-col gap-1">
                    {project.impact.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs text-slate-500"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent-muted shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card footer */}
              <div className="px-6 py-3 bg-white border-t border-slate-100">
                <span className="text-xs text-slate-400 italic">
                  Detailed metrics available on request
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
