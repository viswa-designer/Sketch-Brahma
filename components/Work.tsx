import FadeIn from "./FadeIn";

const projects = [
  {
    client: "Ather Energy",
    category: "Automotive · Web",
    description:
      "A redesigned marketing website and owner portal for India's leading electric scooter brand — clean, performance-focused, and on-brand.",
    tags: ["UI Design", "Front-end"],
    accent: "bg-stone-900",
    textColor: "text-[#f7f6f3]",
    secondaryText: "text-stone-400",
  },
  {
    client: "Perfios",
    category: "Fintech · SaaS",
    description:
      "Minimalist design system and dashboard UI for a financial data platform, balancing data density with clarity.",
    tags: ["UX Research", "Design System"],
    accent: "bg-stone-100",
    textColor: "text-stone-900",
    secondaryText: "text-stone-500",
  },
  {
    client: "Chaos Genius",
    category: "DeepTech · Analytics",
    description:
      "Intuitive observability platform for business intelligence — making complex anomaly detection feel approachable.",
    tags: ["Product Design", "React"],
    accent: "bg-stone-100",
    textColor: "text-stone-900",
    secondaryText: "text-stone-500",
  },
  {
    client: "Wisedrive",
    category: "Fintech · Consumer",
    description:
      "An education-first design for a vehicle warranty service, guiding first-time buyers through complex policies with ease.",
    tags: ["UI Design", "Mobile"],
    accent: "bg-stone-900",
    textColor: "text-[#f7f6f3]",
    secondaryText: "text-stone-400",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 bg-stone-100 border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <p
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="text-xs text-stone-400 tracking-widest uppercase mb-3"
            >
              Selected work
            </p>
            <h2
              style={{ fontFamily: "var(--font-syne)" }}
              className="text-[1.75rem] sm:text-[2rem] font-bold text-stone-900 tracking-tight"
            >
              Built for real businesses.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <FadeIn key={project.client} delay={i * 0.1}>
              <div
                className={`${project.accent} rounded-2xl p-8 flex flex-col justify-between min-h-[280px] border border-stone-200/20 hover:scale-[1.01] transition-transform duration-300 cursor-pointer`}
              >
                <div>
                  <p
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                    className={`text-xs ${project.secondaryText} tracking-widest uppercase mb-4`}
                  >
                    {project.category}
                  </p>
                  <h3
                    style={{ fontFamily: "var(--font-syne)" }}
                    className={`text-xl font-bold ${project.textColor} mb-3 tracking-tight`}
                  >
                    {project.client}
                  </h3>
                  <p
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                    className={`text-sm ${project.secondaryText} leading-relaxed`}
                  >
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                      className={`text-xs px-2.5 py-1 rounded-full border ${
                        project.accent === "bg-stone-900"
                          ? "border-stone-700 text-stone-400"
                          : "border-stone-300 text-stone-500"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex justify-center">
            <button
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors border-b border-stone-300 hover:border-stone-700 pb-0.5"
            >
              View all projects →
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
