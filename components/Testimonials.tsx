import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote:
      "Sketch Brahma brought a level of thoughtfulness to our product that we hadn't seen before. They didn't just design screens — they understood our users.",
    name: "Vikram Anand",
    role: "Product Lead",
    company: "Perfios",
  },
  {
    quote:
      "The team's attention to detail is remarkable. Every micro-interaction, every spacing decision — it all came together into something we're genuinely proud of.",
    name: "Priya Nair",
    role: "Co-founder",
    company: "Chaos Genius",
  },
  {
    quote:
      "Fast, communicative, and deeply skilled. They delivered on time and the result exceeded what we imagined. We'd work with them again without hesitation.",
    name: "Rahul Sharma",
    role: "CTO",
    company: "Wisedrive",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 border-t border-stone-200 bg-[#f7f6f3]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16">
            <p
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="text-xs text-stone-400 tracking-widest uppercase mb-3"
            >
              Client stories
            </p>
            <h2
              style={{ fontFamily: "var(--font-syne)" }}
              className="text-[1.75rem] sm:text-[2rem] font-bold text-stone-900 tracking-tight"
            >
              Hear it from the teams
              <br />
              we've built with.
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.12}>
              <div className="bg-stone-100 rounded-2xl p-7 border border-stone-200/60 flex flex-col justify-between min-h-[220px]">
                <p
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                  className="text-sm text-stone-600 leading-relaxed mb-6"
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-stone-300 flex items-center justify-center shrink-0">
                    <span
                      style={{ fontFamily: "var(--font-syne)" }}
                      className="text-[10px] font-bold text-stone-600"
                    >
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p
                      style={{ fontFamily: "var(--font-syne)" }}
                      className="text-xs font-semibold text-stone-900"
                    >
                      {t.name}
                    </p>
                    <p
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                      className="text-xs text-stone-400"
                    >
                      {t.role} · {t.company}
                    </p>
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
