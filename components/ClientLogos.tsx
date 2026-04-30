"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const clients = [
  "Flipkart",
  "Ather Energy",
  "Airtel",
  "Titan",
  "Mahindra",
  "Razorpay",
  "Perfios",
  "Acko",
  "Slice",
  "MediBuddy",
  "Eltropy",
  "Chaos Genius",
];

export default function ClientLogos() {
  return (
    <section className="border-y border-stone-200 bg-[#f7f6f3] overflow-hidden py-10">
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <p
          style={{ fontFamily: "var(--font-dm-sans)" }}
          className="text-xs text-stone-400 tracking-widest uppercase text-center"
        >
          Trusted by teams at
        </p>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
          className="flex shrink-0 gap-12 items-center pr-12"
        >
          {[...clients, ...clients].map((name, i) => (
            <span
              key={i}
              style={{ fontFamily: "var(--font-syne)" }}
              className="text-sm font-semibold text-stone-400 whitespace-nowrap hover:text-stone-700 transition-colors cursor-default tracking-tight"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
