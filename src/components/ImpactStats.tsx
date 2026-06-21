const stats = [
  {
    value: "$500K+",
    label: "Qualified Pipeline",
    sub: "generated in 12 months",
  },
  {
    value: "27%",
    label: "Lead-to-MQL Lift",
    sub: "via HubSpot lifecycle",
  },
  {
    value: "8",
    label: "APAC Markets",
    sub: "expanded in 3 months",
  },
  {
    value: "6+",
    label: "Years Experience",
    sub: "B2B & healthcare growth",
  },
];

export default function ImpactStats() {
  return (
    <section className="bg-navy py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-blue-200 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-blue-300/50">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
