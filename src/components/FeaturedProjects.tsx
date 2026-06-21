const projects = [
  {
    id: 1,
    category: "Demand Gen · Lead Gen",
    title: "Lead Generation & Pipeline Development",
    description:
      "Campaign and sales systems that turn healthcare market opportunities into qualified pipeline activity.",
    metrics: ["$500K+ pipeline generated", "Qualified provider conversations"],
  },
  {
    id: 2,
    category: "Analytics · Revenue Insights",
    title: "Marketing Analytics & Revenue Reporting",
    description:
      "Reporting workflows that track campaign performance, funnel activity, and revenue progress in one place.",
    metrics: ["Revenue tracking dashboards", "Funnel visibility across stages"],
  },
  {
    id: 3,
    category: "Campaign Strategy · Lifecycle",
    title: "Campaign Strategy & Lifecycle Marketing",
    description:
      "Seasonal healthcare campaigns connecting product messaging to audience needs and revenue goals.",
    metrics: ["Multi-channel campaign calendar", "Education-to-conversion flow"],
  },
  {
    id: 4,
    category: "Partner Marketing · Healthcare Content",
    title: "Partner & Co-branded Marketing",
    description:
      "Partner and patient-facing materials that translate diagnostic products into clear branded education.",
    metrics: ["40% distributor engagement lift", "Partner asset library built"],
  },
  {
    id: 5,
    category: "Sales Enablement · Ops",
    title: "Sales Enablement & Operational Clarity",
    description:
      "Training and workflow resources that help sales and support teams explain complex workflows clearly.",
    metrics: ["7+ nurture workflows", "27% lead-to-MQL lift"],
  },
  {
    id: 6,
    category: "Community · Thought Leadership",
    title: "Marketing Community & Thought Leadership",
    description:
      "Built and hosted a 300+ member community around career growth and marketing strategy.",
    metrics: ["300+ active members", "Recurring events & content loop"],
  },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            Case Studies
          </p>
          <h2 className="text-3xl font-bold text-navy mb-3">Featured Projects</h2>
          <div className="w-10 h-[3px] bg-gold rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col bg-surface rounded-xl hover:shadow-md transition-shadow duration-200 overflow-hidden group"
            >
              <div className="flex flex-col flex-1 p-6">
                {/* Category */}
                <p className="text-[10px] font-semibold uppercase tracking-widest text-navy/50 mb-3">
                  {project.category}
                </p>

                {/* Title */}
                <h3 className="text-sm font-bold text-navy mb-3 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Metric pills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-[11px] font-medium text-navy bg-navy/5 border border-navy/10 px-2.5 py-1 rounded-full"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gold accent bottom bar on hover */}
              <div className="h-[3px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
