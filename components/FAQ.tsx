"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What types of companies do you work with?",
    a: "We work with early-stage startups, scale-ups, and enterprise teams across fintech, automotive, gaming, SaaS, healthcare, and more. If you're building a digital product and care about quality, we'll be a good fit.",
  },
  {
    q: "Do you handle design and development, or just design?",
    a: "Both. We offer UI/UX design, front-end development (React, Next.js, Angular), mobile development (iOS, Android, React Native), backend development, and QA — all under one roof. You choose what you need.",
  },
  {
    q: "How long does a typical project take?",
    a: "A Discovery Sprint takes 1–2 weeks. A full product design and build typically runs 6–12 weeks depending on scope. We'll give you an honest timeline after understanding your requirements.",
  },
  {
    q: "Can you work with our existing in-house team?",
    a: "Absolutely. We frequently embed alongside in-house engineers and PMs. We adapt to your tools, processes, and communication rhythm.",
  },
  {
    q: "What does your design handoff look like?",
    a: "We deliver production-ready Figma files with component libraries, design tokens, spacing systems, and annotated specs. Everything a developer needs to build without guessing.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, always. Confidentiality is standard practice for us — we've worked with major brands and handle sensitive product data regularly.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E4E3DF] last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-6 group"
      >
        <span style={{ fontFamily: "var(--font-syne)" }} className="text-base font-semibold text-[#111] group-hover:text-[#333] transition-colors">
          {q}
        </span>
        <span className={`shrink-0 w-7 h-7 rounded-full border border-[#E4E3DF] flex items-center justify-center text-[#111] text-sm transition-all duration-200 ${open ? "bg-[#111] border-[#111] text-white rotate-45" : ""}`}>
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-sm text-[#6B6B6B] leading-relaxed pb-5">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-28 bg-[#F8F7F4] border-t border-[#E4E3DF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div className="lg:sticky lg:top-32">
              <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-[#999] tracking-widest uppercase mb-3">
                FAQ
              </p>
              <h2 style={{ fontFamily: "var(--font-syne)" }} className="text-[2rem] sm:text-[2.5rem] font-bold text-[#111] tracking-tight leading-tight mb-6">
                Questions<br />answered.
              </h2>
              <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-sm text-[#6B6B6B] leading-relaxed mb-8">
                Still have something on your mind? We&apos;re happy to chat before you commit to anything.
              </p>
              <a
                href="#contact"
                style={{ fontFamily: "var(--font-dm-sans)" }}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#111] border border-[#111] px-5 py-2.5 rounded-full hover:bg-[#111] hover:text-white transition-all duration-200"
              >
                Ask us directly →
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              {faqs.map((faq) => (
                <Item key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
