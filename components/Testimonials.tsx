"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";

const testimonials = [
  {
    quote: "Superb team. Highly skilled and dedicated. Helped us bring our marketing website and customer portal to life exactly how we wanted — and more.",
    name: "Unnikrishnan Manikoth",
    role: "Product Design Lead - Digital",
    company: "Ather Energy",
    logo: "https://sketchbrahma.com/home/reviews/ather.svg",
  },
  {
    quote: "Their commitment to user-centric design principles was evident throughout. I am thrilled to express my utmost satisfaction and gratitude for the outstanding services provided.",
    name: "Mallari Harapanahalli",
    role: "Lead - HR Technology",
    company: "Enterprise Client",
    logo: "https://sketchbrahma.com/home/reviews/satsure.svg",
  },
  {
    quote: "Sketch Brahma Technologies executed the project well and in a timely manner. The team held daily calls that were effective in ensuring adherence to deadlines.",
    name: "Prateep Basu",
    role: "CEO",
    company: "Client",
    logo: "https://sketchbrahma.com/home/reviews/revise.svg",
  },
  {
    quote: "Featuring a dedicated team with a knack for creativity and innovation, they delivered a front-end product that stakeholders highly appreciated.",
    name: "Raunaq Vaisoha",
    role: "CEO",
    company: "Client",
    logo: "https://sketchbrahma.com/home/reviews/algobulls.svg",
  },
  {
    quote: "Sketch Brahma has been instrumental in providing a design overhaul to our sites. They demonstrate proficiency in designing high quality products using Figma.",
    name: "Pushpak Dagade",
    role: "Founder & CEO",
    company: "Client",
    logo: null,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-28 bg-[#F8F7F4] border-t border-[#E4E3DF]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-[#999] tracking-widest uppercase mb-3">
                Client stories
              </p>
              <h2 style={{ fontFamily: "var(--font-syne)" }} className="text-[2rem] sm:text-[2.5rem] font-bold text-[#111] tracking-tight leading-tight">
                Hear it from the teams<br />we&apos;ve built with.
              </h2>
            </div>
            {/* Nav buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#E4E3DF] flex items-center justify-center hover:bg-[#111] hover:border-[#111] hover:text-white transition-all duration-200 text-[#111]"
                aria-label="Previous"
              >
                ←
              </button>
              <span style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-[#999]">
                {current + 1} / {testimonials.length}
              </span>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#E4E3DF] flex items-center justify-center hover:bg-[#111] hover:border-[#111] hover:text-white transition-all duration-200 text-[#111]"
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>
        </FadeIn>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl border border-[#E4E3DF] p-10 md:p-14"
            >
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-1">
                  <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-[1.1rem] text-[#333] leading-relaxed mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#E4E3DF] flex items-center justify-center shrink-0">
                      <span style={{ fontFamily: "var(--font-syne)" }} className="text-sm font-bold text-[#111]">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-syne)" }} className="text-sm font-semibold text-[#111]">{t.name}</p>
                      <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-[#999]">{t.role} · {t.company}</p>
                    </div>
                  </div>
                </div>
                {t.logo && (
                  <div className="shrink-0 flex items-center justify-center w-24 h-16">
                    <img src={t.logo} alt={t.company} className="max-h-10 max-w-full object-contain opacity-60" />
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex items-center gap-2 mt-6 justify-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-1.5 bg-[#111]" : "w-1.5 h-1.5 bg-[#C0BEBC]"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
