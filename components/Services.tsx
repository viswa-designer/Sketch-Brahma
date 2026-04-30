import FadeIn from "./FadeIn";

const services = [
  {
    number: "01",
    title: "Experience Design",
    description:
      "User research, wireframing, prototyping, and polished UI that turns complexity into clarity.",
    tags: ["UX Research", "UI Design", "Prototyping"],
  },
  {
    number: "02",
    title: "Front-end Development",
    description:
      "Pixel-perfect implementation with clean code, optimal performance, and seamless API integration.",
    tags: ["React", "Next.js", "Vue"],
  },
  {
    number: "03",
    title: "Mobile Development",
    description:
      "Native and cross-platform apps for iOS and Android that feel right in your hand.",
    tags: ["iOS", "Android", "React Native"],
  },
  {
    number: "04",
    title: "Backend Development",
    description:
      "Resilient, scalable server architecture built for the demands of modern products.",
    tags: ["Node.js", "APIs", "Cloud"],
  },
  {
    number: "05",
    title: "QA & Testing",
    description:
      "End-to-end quality assurance so your product ships solid and stays solid.",
    tags: ["Automation", "Manual QA", "Performance"],
  },
  {
    number: "06",
    title: "Digital Marketing",
    description:
      "Brand storytelling, visual content, and campaigns that connect design to growth.",
    tags: ["Strategy", "Content", "Analytics"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 max-w-6xl mx-auto px-6">
      <FadeIn>
        <div className="flex items-end justify-between mb-16 border-b border-stone-200 pb-8">
          <div>
            <p
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="text-xs text-stone-400 tracking-widest uppercase mb-3"
            >
              What we do
            </p>
            <h2
              style={{ fontFamily: "var(--font-syne)" }}
              className="text-[1.75rem] sm:text-[2rem] font-bold text-stone-900 tracking-tight"
            >
              End-to-end digital
              <br />
              craft, under one roof.
            </h2>
          </div>
          <p
            style={{ fontFamily: "var(--font-dm-sans)" }}
            className="hidden md:block text-sm text-stone-400 max-w-xs text-right leading-relaxed"
          >
            From early-stage concept to shipped product, we cover every layer
            of the digital stack.
          </p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.07}>
            <div className="bg-[#f7f6f3] p-8 hover:bg-stone-100 transition-colors duration-300 group h-full">
              <span
                style={{ fontFamily: "var(--font-syne)" }}
                className="text-xs text-stone-300 font-semibold tracking-widest"
              >
                {service.number}
              </span>
              <h3
                style={{ fontFamily: "var(--font-syne)" }}
                className="text-base font-semibold text-stone-900 mt-3 mb-3 tracking-tight group-hover:text-stone-700 transition-colors"
              >
                {service.title}
              </h3>
              <p
                style={{ fontFamily: "var(--font-dm-sans)" }}
                className="text-sm text-stone-500 leading-relaxed mb-5"
              >
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                    className="text-xs px-2 py-1 bg-stone-200 text-stone-500 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
