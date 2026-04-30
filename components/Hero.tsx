"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { value: "100+", label: "Clients served" },
  { value: "50+", label: "Projects shipped" },
  { value: "8+", label: "Years of craft" },
  { value: "6", label: "Disciplines" },
];

const projects = [
  { name: "Ather Energy", cat: "Automotive", img: "https://sketchbrahma.com/projects/ather.webp" },
  { name: "Perfios", cat: "Fintech", img: "https://sketchbrahma.com/projects/perfios.webp" },
  { name: "Chaos Genius", cat: "DeepTech", img: "https://sketchbrahma.com/projects/chaos.webp" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0D0D0D] flex flex-col overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="relative flex-1 flex items-center max-w-7xl mx-auto w-full px-6 pt-32 pb-28 gap-16">
        {/* Left — copy */}
        <div className="flex-1 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-white/40 tracking-widest uppercase">
              Design Studio · Bengaluru, India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "var(--font-syne)" }}
            className="text-[3rem] sm:text-[3.75rem] lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight text-white mb-6"
          >
            We design<br />
            experiences<br />
            <span className="text-white/30">people love.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ fontFamily: "var(--font-dm-sans)" }}
            className="text-base text-white/50 leading-relaxed max-w-md mb-10"
          >
            UI/UX design, front-end development, and mobile apps — crafted with intention.
            Trusted by teams at Flipkart, Ather, Razorpay, and 100+ others.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="#work"
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="px-6 py-3 bg-white text-[#0D0D0D] text-sm font-medium rounded-full hover:bg-white/90 transition-all duration-200 hover:scale-[1.02]"
            >
              View our work
            </Link>
            <Link
              href="#contact"
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="px-6 py-3 border border-white/20 text-white/70 text-sm rounded-full hover:border-white/40 hover:text-white transition-all duration-200"
            >
              Start a project
            </Link>
          </motion.div>
        </div>

        {/* Right — stacked project cards */}
        <div className="hidden lg:block flex-1 relative h-[520px]">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30, rotate: i === 0 ? -3 : i === 1 ? 1 : 4 }}
              animate={{ opacity: 1, y: 0, rotate: i === 0 ? -3 : i === 1 ? 1 : 4 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, rotate: 0, zIndex: 10 }}
              className="absolute rounded-2xl overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
              style={{
                width: 300,
                height: 200,
                top: i * 80 + (i === 0 ? 60 : i === 1 ? 20 : 0),
                left: i === 0 ? "10%" : i === 1 ? "25%" : "5%",
                zIndex: 3 - i,
              }}
            >
              <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-3 left-3">
                <p style={{ fontFamily: "var(--font-syne)" }} className="text-white text-xs font-semibold">{p.name}</p>
                <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-white/50 text-[10px]">{p.cat}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative border-t border-white/8 max-w-7xl mx-auto w-full px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {stats.map((s, i) => (
          <div key={s.label} className={`flex flex-col gap-1 ${i > 0 ? "md:border-l md:border-white/8 md:pl-6" : ""}`}>
            <span style={{ fontFamily: "var(--font-syne)" }} className="text-2xl font-bold text-white">{s.value}</span>
            <span style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-white/40">{s.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
