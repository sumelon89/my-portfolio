import {
  TrendingUp,
  BarChart2,
  MessageSquare,
  Users,
  Megaphone,
  BookOpen,
} from "lucide-react";

const problems = [
  {
    icon: TrendingUp,
    title: "Build qualified lead pipelines",
    description:
      "Design campaigns and sales-support systems that move opportunities from awareness to conversation to pipeline.",
  },
  {
    icon: BarChart2,
    title: "Turn campaign data into revenue insights",
    description:
      "Create reporting workflows that connect marketing activity to funnel progress, revenue tracking, and business decisions.",
  },
  {
    icon: MessageSquare,
    title: "Translate complex healthcare products into clear marketing messages",
    description:
      "Turn diagnostic science and clinical workflows into compelling, accessible content for providers, partners, and patients.",
  },
  {
    icon: Users,
    title: "Support sales teams with enablement systems",
    description:
      "Build training, FAQ, and workflow materials that help sales and support teams communicate clearly and reduce friction.",
  },
  {
    icon: Megaphone,
    title: "Launch campaigns across DTC, B2B, and partner channels",
    description:
      "Execute integrated campaigns across education, promotion, and conversion touchpoints for multiple audience types.",
  },
  {
    icon: BookOpen,
    title: "Build community-led content and thought leadership",
    description:
      "Create ongoing content, events, and engagement loops that build credibility and audience around a brand or niche.",
  },
];

export default function BusinessProblems() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            What I do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Business Problems I Solve
          </h2>
          <p className="text-base text-slate-500 leading-relaxed">
            I focus on execution-to-strategy work: turning market opportunities
            into measurable pipeline activity and making complex marketing
            decisions clearer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className="bg-white rounded-xl p-6 border border-slate-100 hover:border-accent-muted hover:shadow-sm transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-accent-light flex items-center justify-center mb-4">
                  <Icon className="w-4.5 h-4.5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2 leading-snug">
                  {problem.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
