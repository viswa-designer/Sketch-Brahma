"use client";

import { motion } from "framer-motion";

const BASE = "https://sketchbrahma.com/homelogos/";

const logos = [
  { name: "Flipkart", file: "flipkart.svg" },
  { name: "Ather", file: "ather.svg" },
  { name: "Airtel", file: "airtel.svg" },
  { name: "Titan", file: "titan.svg" },
  { name: "Mahindra", file: "mahindra.svg" },
  { name: "Razorpay", file: "razorPay.svg" },
  { name: "Perfios", file: "perfios.svg" },
  { name: "Acko", file: "acko.svg" },
  { name: "Slice", file: "slice.svg" },
  { name: "MediBuddy", file: "mediBuddy.svg" },
  { name: "Eltropy", file: "eltropy.svg" },
];

export default function LogoStrip() {
  return (
    <section className="bg-[#F8F7F4] border-b border-[#E4E3DF] py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-[#999] tracking-widest uppercase text-center">
          Trusted by product teams at
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="flex shrink-0 items-center gap-14 pr-14"
        >
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={`${BASE}${logo.file}`}
              alt={logo.name}
              className="h-6 object-contain opacity-40 grayscale hover:opacity-70 hover:grayscale-0 transition-all duration-300 cursor-default"
              style={{ maxWidth: 100 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
