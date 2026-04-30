import FadeIn from "./FadeIn";

const BASE_IMG = "https://sketchbrahma.com/projects/";
const BASE_LOGO = "https://sketchbrahma.com/coloredimages/";

const projects = [
  {
    client: "Ather Energy",
    category: "Automotive",
    year: "2023",
    description: "We collaborated on the front-end development of their marketing website, customer portal, and Ather Space — creating a seamless, performant experience befitting a category-defining EV brand.",
    tags: ["UI/UX Design", "React", "Next.js"],
    img: `${BASE_IMG}ather.webp`,
    logo: `${BASE_LOGO}ather.svg`,
    dark: true,
  },
  {
    client: "Perfios",
    category: "Fintech",
    year: "2022",
    description: "Designed and developed a minimalistic product that empowered users to track, transfer, and share financial data — with powerful encryption built in.",
    tags: ["UI/UX", "React", "React Native"],
    img: `${BASE_IMG}perfios.webp`,
    logo: `${BASE_LOGO}perfios.svg`,
    dark: false,
  },
  {
    client: "Chaos Genius",
    category: "DeepTech · Analytics",
    year: "2022",
    description: "Introduced compelling real-time data visualisation to an open-source business observability platform for anomaly detection — making complex intelligence feel approachable.",
    tags: ["Product Design", "React JS"],
    img: `${BASE_IMG}chaos.webp`,
    logo: `${BASE_LOGO}chaos.svg`,
    dark: false,
  },
  {
    client: "Wisedrive",
    category: "Fintech · Consumer",
    year: "2023",
    description: "Designed a conversion-focused website for India's first used car extended warranty service — educating first-time buyers with clarity and confidence.",
    tags: ["UI/UX Design", "React JS"],
    img: `${BASE_IMG}wisedrive.webp`,
    logo: `${BASE_LOGO}wisedrive.svg`,
    dark: true,
  },
  {
    client: "Quizy",
    category: "Gaming",
    year: "2021",
    description: "Designed an interactive, fun, and engaging experience for an online quiz gaming app — complete with micro-animations and a full UI overhaul.",
    tags: ["UI/UX Design", "Motion"],
    img: `${BASE_IMG}quizy.webp`,
    logo: `${BASE_LOGO}quizy.svg`,
    dark: false,
  },
];

export default function Work() {
  return (
    <section id="work" className="py-28 bg-white border-t border-[#E4E3DF]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-[#999] tracking-widest uppercase mb-3">
                Selected work
              </p>
              <h2 style={{ fontFamily: "var(--font-syne)" }} className="text-[2rem] sm:text-[2.5rem] font-bold text-[#111] tracking-tight leading-tight">
                Built for real businesses,<br />shipped with care.
              </h2>
            </div>
            <a
              href="#contact"
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="text-sm text-[#111] border-b border-[#111] pb-0.5 hover:opacity-60 transition-opacity self-end"
            >
              Start a project →
            </a>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-5">
          {projects.map((p, i) => (
            <FadeIn key={p.client} delay={i * 0.08}>
              <div
                className={`group relative rounded-3xl overflow-hidden flex flex-col md:flex-row ${
                  p.dark ? "bg-[#111]" : "bg-[#F8F7F4] border border-[#E4E3DF]"
                } hover:scale-[1.005] transition-transform duration-500`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 aspect-[16/9] md:aspect-auto overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.client}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <img src={p.logo} alt={p.client} className="h-5 object-contain opacity-80" />
                      <span style={{ fontFamily: "var(--font-dm-sans)" }} className={`text-xs tracking-widest uppercase ${p.dark ? "text-white/30" : "text-[#999]"}`}>
                        {p.category}
                      </span>
                      <span style={{ fontFamily: "var(--font-dm-sans)" }} className={`text-xs ml-auto ${p.dark ? "text-white/20" : "text-[#C0BEBC]"}`}>
                        {p.year}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-syne)" }} className={`text-2xl font-bold tracking-tight mb-4 ${p.dark ? "text-white" : "text-[#111]"}`}>
                      {p.client}
                    </h3>
                    <p style={{ fontFamily: "var(--font-dm-sans)" }} className={`text-sm leading-relaxed ${p.dark ? "text-white/50" : "text-[#6B6B6B]"}`}>
                      {p.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-8">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                        className={`text-xs px-3 py-1 rounded-full border ${
                          p.dark
                            ? "border-white/15 text-white/40"
                            : "border-[#E4E3DF] text-[#6B6B6B]"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
