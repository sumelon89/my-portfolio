const skillGroups = [
  {
    category: "Demand Gen",
    skills: [
      "ICP Development",
      "ABM",
      "Lifecycle Nurture",
      "Lead Scoring",
      "Funnel Optimization",
      "A/B Testing",
    ],
  },
  {
    category: "Analytics & CRM",
    skills: [
      "HubSpot",
      "Salesforce",
      "Google Analytics",
      "Tableau",
      "SQL",
      "Excel",
    ],
  },
  {
    category: "Channels",
    skills: [
      "Google Ads",
      "Meta",
      "LinkedIn",
      "TikTok",
      "Email",
      "Webinars",
    ],
  },
];

export default function SkillsTools() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            Capabilities
          </p>
          <h2 className="text-3xl font-bold text-navy mb-3">
            Skills &amp; Tools
          </h2>
          <div className="w-10 h-[3px] bg-gold rounded-full"></div>
        </div>

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
  );
}
