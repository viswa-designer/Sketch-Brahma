import FadeIn from "./FadeIn";

const plans = [
  {
    name: "Discovery Sprint",
    tagline: "Validate before you build",
    price: "Starting at ₹80K",
    duration: "1–2 weeks",
    features: [
      "User research & interviews",
      "UX audit of existing product",
      "Information architecture",
      "Wireframes & user flows",
      "Clickable prototype",
      "Handoff-ready design system",
    ],
    cta: "Book a sprint",
    dark: false,
  },
  {
    name: "Full Project",
    tagline: "End-to-end product delivery",
    price: "Custom scope",
    duration: "4–12 weeks",
    features: [
      "Everything in Discovery",
      "High-fidelity UI design",
      "Front-end development",
      "Mobile app development",
      "QA & testing coverage",
      "Post-launch support",
    ],
    cta: "Get a proposal",
    dark: true,
    badge: "Most popular",
  },
  {
    name: "Retainer",
    tagline: "Your embedded design team",
    price: "Monthly engagement",
    duration: "Ongoing",
    features: [
      "Dedicated designer(s)",
      "Unlimited design requests",
      "Weekly syncs & reviews",
      "Priority turnaround",
      "Access to full-stack team",
      "Quarterly strategy reviews",
    ],
    cta: "Let's talk",
    dark: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-28 bg-white border-t border-[#E4E3DF]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-[#999] tracking-widest uppercase mb-3">
              Engagement models
            </p>
            <h2 style={{ fontFamily: "var(--font-syne)" }} className="text-[2rem] sm:text-[2.5rem] font-bold text-[#111] tracking-tight leading-tight">
              Find the right fit<br />for your project.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.1}>
              <div
                className={`relative rounded-3xl p-8 flex flex-col h-full border transition-all duration-300 hover:scale-[1.01] ${
                  plan.dark
                    ? "bg-[#111] border-transparent"
                    : "bg-[#F8F7F4] border-[#E4E3DF] hover:border-[#C0BEBC]"
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-6 right-6">
                    <span style={{ fontFamily: "var(--font-dm-sans)" }} className="text-[11px] px-2.5 py-1 bg-white/15 text-white rounded-full border border-white/20">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <p style={{ fontFamily: "var(--font-dm-sans)" }} className={`text-xs tracking-widest uppercase mb-2 ${plan.dark ? "text-white/40" : "text-[#999]"}`}>
                    {plan.tagline}
                  </p>
                  <h3 style={{ fontFamily: "var(--font-syne)" }} className={`text-xl font-bold mb-4 ${plan.dark ? "text-white" : "text-[#111]"}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span style={{ fontFamily: "var(--font-syne)" }} className={`text-2xl font-bold ${plan.dark ? "text-white" : "text-[#111]"}`}>
                      {plan.price}
                    </span>
                  </div>
                  <p style={{ fontFamily: "var(--font-dm-sans)" }} className={`text-xs mt-1 ${plan.dark ? "text-white/30" : "text-[#999]"}`}>
                    {plan.duration}
                  </p>
                </div>

                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className={`text-xs ${plan.dark ? "text-white/40" : "text-[#C0BEBC]"}`}>✓</span>
                      <span style={{ fontFamily: "var(--font-dm-sans)" }} className={`text-sm ${plan.dark ? "text-white/60" : "text-[#6B6B6B]"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                  className={`block text-center text-sm py-3 rounded-full font-medium transition-all duration-200 hover:scale-[1.02] ${
                    plan.dark
                      ? "bg-white text-[#111] hover:bg-white/90"
                      : "bg-[#111] text-white hover:bg-[#333]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-center text-xs text-[#999] mt-8">
            Not sure which fits? <a href="#contact" className="text-[#111] underline underline-offset-2">Book a free 30-min call</a> and we&apos;ll guide you.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
