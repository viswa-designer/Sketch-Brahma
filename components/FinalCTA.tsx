import FadeIn from "./FadeIn";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-28 bg-white border-t border-[#E4E3DF]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="bg-[#0D0D0D] rounded-3xl px-10 md:px-16 py-16 md:py-20 relative overflow-hidden">
            {/* Subtle texture */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
              <div className="max-w-xl">
                <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-white/30 tracking-widest uppercase mb-5">
                  Let&apos;s work together
                </p>
                <h2 style={{ fontFamily: "var(--font-syne)" }} className="text-[2rem] sm:text-[2.75rem] font-bold text-white tracking-tight leading-tight mb-4">
                  Got a project in mind?<br />
                  <span className="text-white/30">Let&apos;s make it real.</span>
                </h2>
                <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-sm text-white/40 leading-relaxed">
                  BSR Complex, 3rd Floor · HBR Layout · Bengaluru 560043
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <a
                  href="https://wa.me/919535588062"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                  className="px-7 py-3.5 bg-white text-[#0D0D0D] text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-200 hover:scale-[1.02] text-center"
                >
                  WhatsApp us
                </a>
                <a
                  href="mailto:hello@sketchbrahma.com"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                  className="px-7 py-3.5 border border-white/20 text-white/70 text-sm rounded-full hover:border-white/40 hover:text-white transition-all duration-200 text-center"
                >
                  Send an email
                </a>
              </div>
            </div>

            {/* Social proof line */}
            <div className="relative z-10 flex items-center gap-6 mt-12 pt-10 border-t border-white/8">
              <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-white/30">
                Reviewed on
              </p>
              <span style={{ fontFamily: "var(--font-syne)" }} className="text-xs font-semibold text-white/50">Clutch</span>
              <span style={{ fontFamily: "var(--font-syne)" }} className="text-xs font-semibold text-white/50">LinkedIn</span>
              <span style={{ fontFamily: "var(--font-syne)" }} className="text-xs font-semibold text-white/50">Google</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
