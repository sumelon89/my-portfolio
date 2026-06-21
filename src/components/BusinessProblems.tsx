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
    line: "Full-funnel campaigns that move opportunities into measurable pipeline.",
  },
  {
    icon: BarChart2,
    title: "Turn campaign data into revenue insights",
    line: "Reporting that connects marketing activity to business decisions.",
  },
  {
    icon: MessageSquare,
    title: "Translate complex products into clear messaging",
    line: "Healthcare and B2B content that converts providers, partners, and patients.",
  },
  {
    icon: Users,
    title: "Enable sales teams",
    line: "Training, workflows, and materials that reduce friction and increase speed.",
  },
  {
    icon: Megaphone,
    title: "Launch DTC, B2B, and partner campaigns",
    line: "Multi-channel execution across paid media, email, and webinar programs.",
  },
  {
    icon: BookOpen,
    title: "Build community and thought leadership",
    line: "Content and events that create credibility and long-term audience.",
  },
];

export default function BusinessProblems() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">
            What I do
          </p>
          <h2 className="text-3xl font-bold text-navy mb-3">
            Business Problems I Solve
          </h2>
          <div className="w-10 h-[3px] bg-gold rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow duration-200 group"
              >
                <div className="w-8 h-8 rounded-lg bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-navy/10 transition-colors duration-200">
                  <Icon className="w-4 h-4 text-navy" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-semibold text-navy mb-1.5 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.line}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
