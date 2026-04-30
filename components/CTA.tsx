import FadeIn from "./FadeIn";

export default function CTA() {
  return (
    <section id="contact" className="py-24 border-t border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="bg-stone-900 rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div>
              <p
                style={{ fontFamily: "var(--font-dm-sans)" }}
                className="text-xs text-stone-500 tracking-widest uppercase mb-4"
              >
                Let&apos;s work together
              </p>
              <h2
                style={{ fontFamily: "var(--font-syne)" }}
                className="text-[1.75rem] sm:text-[2.25rem] font-bold text-[#f7f6f3] tracking-tight leading-tight"
              >
                Got a project in mind?
                <br />
                <span className="text-stone-500">Let&apos;s talk about it.</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="https://wa.me/919535588062"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-dm-sans)" }}
                className="px-6 py-3 bg-[#f7f6f3] text-stone-900 text-sm rounded-full hover:bg-stone-200 transition-colors duration-200 text-center"
              >
                WhatsApp us
              </a>
              <a
                href="mailto:hello@sketchbrahma.com"
                style={{ fontFamily: "var(--font-dm-sans)" }}
                className="px-6 py-3 border border-stone-700 text-stone-300 text-sm rounded-full hover:border-stone-400 hover:text-[#f7f6f3] transition-colors duration-200 text-center"
              >
                Send an email
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Location */}
        <FadeIn delay={0.15}>
          <div className="mt-8 flex items-center gap-3">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
              <path d="M7 1C4.79 1 3 2.79 3 5c0 3.5 4 8 4 8s4-4.5 4-8c0-2.21-1.79-4-4-4z" stroke="#a8a29e" strokeWidth="1.2" fill="none"/>
              <circle cx="7" cy="5" r="1.5" stroke="#a8a29e" strokeWidth="1.2" fill="none"/>
            </svg>
            <p
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="text-xs text-stone-400"
            >
              BSR Complex, 3rd Floor · Bengaluru 560043 · India
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
