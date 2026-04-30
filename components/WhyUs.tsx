import FadeIn from "./FadeIn";

const pillars = [
  {
    icon: "◈",
    title: "Human-centered by default",
    description: "Every decision starts with your users — not trends, not templates. We research, test, and iterate until the experience is genuinely right.",
  },
  {
    icon: "◎",
    title: "Design + Dev under one roof",
    description: "No hand-off chaos. The same team that designs your product builds it — so the vision never gets lost between disciplines.",
  },
  {
    icon: "◉",
    title: "Enterprise-grade reliability",
    description: "We've shipped for Flipkart, Ather, Razorpay and more. We understand what it means to build at scale with real deadlines.",
  },
  {
    icon: "◐",
    title: "Premium without the pretence",
    description: "You get senior-level craft without the agency inflated pricing or the disappearing-act freelancer. Transparent, committed, and worth it.",
  },
];

const metrics = [
  { num: "100+", detail: "Clients across 12+ industries" },
  { num: "4.9★", detail: "Average client satisfaction score" },
  { num: "8+", detail: "Years of focused digital craft" },
  { num: "Zero", detail: "Missed launch deadlines" },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-28 bg-[#F8F7F4] border-t border-[#E4E3DF]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-[#999] tracking-widest uppercase mb-3">
              Why Sketch Brahma
            </p>
            <h2 style={{ fontFamily: "var(--font-syne)" }} className="text-[2rem] sm:text-[2.5rem] font-bold text-[#111] tracking-tight leading-tight max-w-xl">
              The studio that takes your product personally.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — pillars */}
          <div className="flex flex-col gap-8">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="flex gap-5 group">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E4E3DF] flex items-center justify-center shrink-0 text-[#111] text-base group-hover:bg-[#111] group-hover:text-white group-hover:border-[#111] transition-all duration-300">
                    {p.icon}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-syne)" }} className="text-base font-bold text-[#111] mb-2 tracking-tight">{p.title}</h3>
                    <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-sm text-[#6B6B6B] leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Right — metrics card */}
          <FadeIn delay={0.2} direction="right">
            <div className="bg-[#111] rounded-3xl p-8 grid grid-cols-2 gap-6">
              {metrics.map((m, i) => (
                <div key={m.num} className={`${i > 1 ? "border-t border-white/8 pt-6" : ""}`}>
                  <p style={{ fontFamily: "var(--font-syne)" }} className="text-3xl font-bold text-white mb-1">{m.num}</p>
                  <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-white/40 leading-relaxed">{m.detail}</p>
                </div>
              ))}
              <div className="col-span-2 border-t border-white/8 pt-6">
                <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-sm text-white/50 italic leading-relaxed">
                  &ldquo;Sketch Brahma has been instrumental in providing a design overhaul to our sites. They demonstrate proficiency in designing high quality products using Figma.&rdquo;
                </p>
                <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-white/30 mt-3">— Pushpak Dagade, Founder & CEO</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
