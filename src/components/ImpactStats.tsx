const stats = [
  {
    value: "5+",
    label: "Years in Growth & Healthcare Marketing",
    description: "Across healthcare diagnostics, B2B/B2C campaigns, and demand generation.",
  },
  {
    value: "APAC",
    label: "Multi-Market International Experience",
    description: "Supporting international growth initiatives and market expansion strategy.",
  },
  {
    value: "300+",
    label: "Member Marketing Community",
    description: "Built and hosted an active community focused on career growth and marketing strategy.",
  },
  {
    value: "Cross-functional",
    label: "Sales & Provider Enablement Assets",
    description: "Training materials, workflows, and content for sales, partners, providers, and patients.",
  },
];

export default function ImpactStats() {
  return (
    <section className="bg-white border-y border-slate-200 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-10 text-center">
          Selected Impact
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2 p-6 rounded-xl bg-surface border border-slate-100 hover:border-accent-muted transition-colors"
            >
              <span className="text-3xl font-bold text-accent">{stat.value}</span>
              <span className="text-sm font-semibold text-slate-900 leading-snug">
                {stat.label}
              </span>
              <span className="text-sm text-slate-500 leading-relaxed">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
