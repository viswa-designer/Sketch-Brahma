import FadeIn from "./FadeIn";

const steps = [
  {
    step: "Discover",
    detail: "We start with research and listening — understanding your users, business goals, and constraints before touching a single pixel.",
  },
  {
    step: "Define",
    detail: "Insights become a clear problem statement and design strategy. We map flows, prioritise, and align before execution.",
  },
  {
    step: "Design",
    detail: "From low-fidelity wireframes to high-fidelity prototypes — iterating rapidly with your team until it's exactly right.",
  },
  {
    step: "Deliver",
    detail: "Production-ready designs hand off to development (or our own devs build it). We stay involved until your product ships.",
  },
];

export default function Process() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <FadeIn>
        <div className="mb-16">
          <p
            style={{ fontFamily: "var(--font-dm-sans)" }}
            className="text-xs text-stone-400 tracking-widest uppercase mb-3"
          >
            How we work
          </p>
          <h2
            style={{ fontFamily: "var(--font-syne)" }}
            className="text-[1.75rem] sm:text-[2rem] font-bold text-stone-900 tracking-tight"
          >
            Intentional at every step.
          </h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((item, i) => (
          <FadeIn key={item.step} delay={i * 0.1}>
            <div className="relative pl-4 border-l border-stone-200">
              <span
                style={{ fontFamily: "var(--font-syne)" }}
                className="text-[10px] text-stone-300 font-semibold tracking-widest uppercase block mb-3"
              >
                0{i + 1}
              </span>
              <h3
                style={{ fontFamily: "var(--font-syne)" }}
                className="text-base font-bold text-stone-900 mb-3"
              >
                {item.step}
              </h3>
              <p
                style={{ fontFamily: "var(--font-dm-sans)" }}
                className="text-sm text-stone-500 leading-relaxed"
              >
                {item.detail}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
