import FadeIn from "./FadeIn";

const BASE = "https://sketchbrahma.com/home/";

const services = [
  {
    number: "01",
    title: "Experience Design",
    description: "Designing elevated experiences and intuitive interfaces — from research and wireframes to polished, pixel-perfect UI that your users actually enjoy.",
    tags: ["UX Research", "UI Design", "Prototyping", "Figma"],
    img: `${BASE}experienceDesignGif.gif`,
    size: "lg",
  },
  {
    number: "02",
    title: "Front-end Development",
    description: "Developing optimal user experiences with clean code, streamlined API integration, and rock-solid performance.",
    tags: ["React", "Next.js", "Angular"],
    img: `${BASE}frontEndGif.gif`,
    size: "sm",
  },
  {
    number: "03",
    title: "Mobile Development",
    description: "Building robust, scalable mobile applications for both iOS and Android that feel native to the platform.",
    tags: ["iOS", "Android", "React Native"],
    img: `${BASE}mobileGif.gif`,
    size: "sm",
  },
  {
    number: "04",
    title: "Backend Development",
    description: "Constructing resilient, adaptable backend architecture built to scale with your product.",
    tags: ["Node.js", "APIs", "Cloud"],
    img: `${BASE}backendGif.gif`,
    size: "sm",
  },
  {
    number: "05",
    title: "QA & Testing",
    description: "Assessing every layer of your software — so you ship with confidence and sleep easy.",
    tags: ["Automation", "Manual QA", "Performance"],
    img: `${BASE}qualityGif.gif`,
    size: "sm",
  },
  {
    number: "06",
    title: "Digital Marketing",
    description: "Promoting your brand through visually compelling content and campaigns that connect design to growth.",
    tags: ["Strategy", "Content", "Analytics"],
    img: `${BASE}marketingGif.gif`,
    size: "sm",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#F8F7F4]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-[#999] tracking-widest uppercase mb-3">
                What we do
              </p>
              <h2 style={{ fontFamily: "var(--font-syne)" }} className="text-[2rem] sm:text-[2.5rem] font-bold text-[#111] tracking-tight leading-tight">
                End-to-end digital craft,<br />under one roof.
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-sm text-[#6B6B6B] max-w-xs leading-relaxed">
              From concept to code — we cover every layer of the stack so your product ships complete.
            </p>
          </div>
        </FadeIn>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large card - Experience Design */}
          <FadeIn delay={0} className="md:col-span-2 md:row-span-2">
            <div className="group relative bg-[#111] rounded-3xl overflow-hidden h-full min-h-[380px] flex flex-col justify-between p-8 hover:shadow-2xl transition-all duration-500">
              <div className="relative z-10">
                <span style={{ fontFamily: "var(--font-syne)" }} className="text-xs text-white/30 font-semibold tracking-widest">01</span>
                <h3 style={{ fontFamily: "var(--font-syne)" }} className="text-2xl font-bold text-white mt-3 mb-3 tracking-tight">{services[0].title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-sm text-white/50 leading-relaxed max-w-sm">{services[0].description}</p>
              </div>
              <div className="relative z-10 flex flex-wrap gap-2 mt-6">
                {services[0].tags.map((t) => (
                  <span key={t} style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs px-3 py-1 bg-white/10 text-white/60 rounded-full border border-white/10">{t}</span>
                ))}
              </div>
              <div className="absolute right-0 bottom-0 w-48 h-48 opacity-20 group-hover:opacity-30 transition-opacity">
                <img src={services[0].img} alt="" className="w-full h-full object-contain" />
              </div>
            </div>
          </FadeIn>

          {/* Small cards */}
          {services.slice(1).map((s, i) => (
            <FadeIn key={s.number} delay={(i + 1) * 0.08}>
              <div className="group relative bg-white rounded-3xl overflow-hidden p-7 border border-[#E4E3DF] hover:border-[#C0BEBC] hover:shadow-lg transition-all duration-300 min-h-[170px] flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <span style={{ fontFamily: "var(--font-syne)" }} className="text-xs text-[#C0BEBC] font-semibold tracking-widest">{s.number}</span>
                    <img src={s.img} alt="" className="w-8 h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-syne)" }} className="text-base font-bold text-[#111] mb-2 tracking-tight">{s.title}</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-[#6B6B6B] leading-relaxed line-clamp-2">{s.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {s.tags.slice(0, 2).map((t) => (
                    <span key={t} style={{ fontFamily: "var(--font-dm-sans)" }} className="text-[11px] px-2 py-0.5 bg-[#F2F1EE] text-[#6B6B6B] rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
