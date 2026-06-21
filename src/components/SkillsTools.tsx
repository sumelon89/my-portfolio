const skillGroups = [
  {
    category: "Growth & Campaign Strategy",
    skills: [
      "Demand Generation",
      "Lifecycle Marketing",
      "DTC Campaigns",
      "B2B Lead Gen",
      "Campaign Planning",
      "Funnel Strategy",
      "Seasonal Campaigns",
      "Promotion Design",
    ],
  },
  {
    category: "Healthcare & Provider Marketing",
    skills: [
      "Provider Acquisition",
      "Patient Education",
      "Healthcare Diagnostics",
      "Partner Marketing",
      "Co-branded Content",
      "Clinical Messaging",
      "Sales Enablement",
    ],
  },
  {
    category: "Analytics & CRM",
    skills: [
      "Campaign Reporting",
      "Revenue Tracking",
      "Funnel Analytics",
      "Performance Dashboards",
      "CRM Management",
      "Data-driven Decisions",
    ],
  },
  {
    category: "Automation & GTM Ops",
    skills: [
      "Marketing Automation",
      "Workflow Design",
      "Cross-functional Ops",
      "GTM Planning",
      "Process Documentation",
    ],
  },
  {
    category: "Creative & Content",
    skills: [
      "Content Strategy",
      "Copywriting",
      "Thought Leadership",
      "Community Building",
      "Event Programming",
      "Social Content",
    ],
  },
  {
    category: "Market Expansion",
    skills: [
      "APAC Market Strategy",
      "International Business",
      "Localization",
      "Partner Development",
      "Cross-border GTM",
    ],
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

export default function SkillsTools() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Skills &amp; Tools
          </h2>
          <p className="text-base text-slate-500 leading-relaxed">
            Execution-to-strategy capabilities across growth, healthcare
            marketing, analytics, and cross-functional operations.
          </p>
        </div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white rounded-xl p-6 border border-slate-100"
            >
              <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="bg-white rounded-xl p-6 border border-slate-100">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">
            Tools &amp; Platforms
          </h3>
          <div className="flex flex-wrap gap-3">
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
    </section>
  );
}
