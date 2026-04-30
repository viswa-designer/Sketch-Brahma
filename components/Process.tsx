import FadeIn from "./FadeIn";

const steps = [
  {
    num: "01",
    title: "Discover",
    body: "We start with deep listening — user research, stakeholder interviews, and competitive analysis before a single pixel is placed.",
    duration: "1–2 weeks",
  },
  {
    num: "02",
    title: "Define",
    body: "Insights crystallise into a clear design strategy. We map flows, set priorities, and align your team before execution begins.",
    duration: "1 week",
  },
  {
    num: "03",
    title: "Design",
    body: "From low-fi wireframes to high-fidelity prototypes, we iterate rapidly with you until every screen is exactly right.",
    duration: "2–4 weeks",
  },
  {
    num: "04",
    title: "Deliver",
    body: "Production-ready designs or a fully built product — we stay involved through QA and launch so nothing falls between the cracks.",
    duration: "Ongoing",
  },
];

export default function Process() {
  return (
    <section className="py-28 bg-white border-t border-[#E4E3DF]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-[#999] tracking-widest uppercase mb-3">
                How we work
              </p>
              <h2 style={{ fontFamily: "var(--font-syne)" }} className="text-[2rem] sm:text-[2.5rem] font-bold text-[#111] tracking-tight leading-tight">
                Intentional at every step.
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-sm text-[#6B6B6B] max-w-xs leading-relaxed">
              Our process is designed to keep you informed, involved, and confident — from day one to launch day.
            </p>
          </div>
        </FadeIn>

        {/* Steps — horizontal on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {steps.map((s, i) => (
            <FadeIn key={s.num} delay={i * 0.1}>
              <div className={`relative p-8 ${i < 3 ? "md:border-r border-b md:border-b-0 border-[#E4E3DF]" : "border-b md:border-b-0"}`}>
                {/* Connector dot */}
                <div className="hidden md:block absolute top-8 right-0 w-px h-4 bg-[#E4E3DF] translate-x-0" />

                <span style={{ fontFamily: "var(--font-syne)" }} className="text-[11px] text-[#C0BEBC] font-semibold tracking-widest block mb-5">{s.num}</span>
                <h3 style={{ fontFamily: "var(--font-syne)" }} className="text-xl font-bold text-[#111] mb-3 tracking-tight">{s.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-sm text-[#6B6B6B] leading-relaxed mb-5">{s.body}</p>
                <div className="inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111]" />
                  <span style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-[#999]">{s.duration}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
