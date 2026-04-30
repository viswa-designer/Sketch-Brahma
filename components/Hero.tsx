"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const tags = [
  "UI/UX Design",
  "Front-end Dev",
  "Mobile Apps",
  "Backend",
  "QA",
  "Digital Marketing",
];

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span
              className="text-xs text-stone-500 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Design studio · Bengaluru
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "var(--font-syne)" }}
            className="text-[2.5rem] sm:text-[3rem] lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-stone-900 mb-6"
          >
            Design that
            <br />
            <em className="not-italic text-stone-400">moves people.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ fontFamily: "var(--font-dm-sans)" }}
            className="text-base text-stone-500 leading-relaxed max-w-md mb-10"
          >
            We craft human-centered digital experiences — from pixel-perfect
            interfaces to robust front-end systems. Trusted by 100+ teams
            across India and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="#work"
              className="px-5 py-2.5 bg-stone-900 text-[#f7f6f3] text-sm rounded-full hover:bg-stone-700 transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              View our work
            </Link>
            <Link
              href="#contact"
              className="px-5 py-2.5 border border-stone-300 text-stone-700 text-sm rounded-full hover:border-stone-500 hover:text-stone-900 transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Start a project
            </Link>
          </motion.div>
        </div>

        {/* Right — decorative grid of service tags */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Bento-style card grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* Tall card */}
              <div className="row-span-2 bg-stone-100 rounded-2xl p-6 flex flex-col justify-between min-h-[260px] border border-stone-200/60">
                <div>
                  <div className="w-8 h-8 bg-stone-900 rounded-lg mb-4 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M2 2h5v5H2zM9 2h5v5H9zM2 9h5v5H2zM9 9h5v5H9z" fill="#f7f6f3"/>
                    </svg>
                  </div>
                  <p style={{ fontFamily: "var(--font-syne)" }} className="text-lg font-semibold text-stone-900 leading-snug">
                    Experience Design
                  </p>
                  <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-stone-500 mt-2 leading-relaxed">
                    Intuitive interfaces crafted around real user behaviour
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                  <span style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-stone-400">UX · UI · Research</span>
                </div>
              </div>

              {/* Short card top-right */}
              <div className="bg-stone-900 rounded-2xl p-6 flex flex-col justify-between min-h-[120px] border border-stone-800">
                <p style={{ fontFamily: "var(--font-syne)" }} className="text-base font-semibold text-[#f7f6f3] leading-snug">
                  Front-end Development
                </p>
                <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-stone-400 mt-2">React · Next.js · Vue</p>
              </div>

              {/* Short card bottom-right */}
              <div className="bg-stone-100 rounded-2xl p-6 flex flex-col justify-between min-h-[120px] border border-stone-200/60">
                <p style={{ fontFamily: "var(--font-syne)" }} className="text-base font-semibold text-stone-900 leading-snug">
                  Mobile Development
                </p>
                <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-stone-500 mt-2">iOS · Android</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mt-3">
              {[
                { num: "100+", label: "Clients" },
                { num: "8+", label: "Years" },
                { num: "50+", label: "Projects" },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="bg-stone-100 rounded-2xl p-4 text-center border border-stone-200/60"
                >
                  <p style={{ fontFamily: "var(--font-syne)" }} className="text-xl font-bold text-stone-900">{num}</p>
                  <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-stone-500 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="mt-16 flex items-center gap-3"
      >
        <div className="h-px flex-1 bg-stone-200 max-w-[60px]" />
        <span
          style={{ fontFamily: "var(--font-dm-sans)" }}
          className="text-xs text-stone-400 tracking-widest uppercase"
        >
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
