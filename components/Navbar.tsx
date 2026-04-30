"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      {/* Desktop — floating pill */}
      <header className="fixed top-5 left-0 right-0 z-50 hidden md:flex justify-center pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center gap-8 px-6 py-3 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-[#0D0D0D]/95 backdrop-blur-md border-white/10 shadow-2xl"
              : "bg-[#0D0D0D]/80 backdrop-blur-sm border-white/8"
          }`}
        >
          {/* Left links */}
          <div className="flex items-center gap-6">
            {links.slice(0, 2).map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{ fontFamily: "var(--font-dm-sans)" }}
                className="text-[13px] text-white/60 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mx-4">
            <div className="w-6 h-6 bg-white rounded-[5px] flex items-center justify-center">
              <span style={{ fontFamily: "var(--font-syne)" }} className="text-[#0D0D0D] text-[10px] font-bold tracking-tight">SB</span>
            </div>
            <span style={{ fontFamily: "var(--font-syne)" }} className="text-white text-sm font-semibold tracking-tight">
              Sketch Brahma
            </span>
          </Link>

          {/* Right links */}
          <div className="flex items-center gap-6">
            {links.slice(2).map((l) => (
              <Link
                key={l.label}
                href={l.href}
                style={{ fontFamily: "var(--font-dm-sans)" }}
                className="text-[13px] text-white/60 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="text-[13px] px-4 py-1.5 bg-white text-[#0D0D0D] rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div
          className={`flex items-center justify-between px-5 py-4 transition-all duration-300 ${
            scrolled || menuOpen ? "bg-[#0D0D0D]" : "bg-transparent"
          }`}
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-[5px] flex items-center justify-center">
              <span style={{ fontFamily: "var(--font-syne)" }} className="text-[#0D0D0D] text-[10px] font-bold">SB</span>
            </div>
            <span style={{ fontFamily: "var(--font-syne)" }} className="text-white text-sm font-semibold">Sketch Brahma</span>
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
        {menuOpen && (
          <div className="bg-[#0D0D0D] px-5 pb-6 flex flex-col gap-5 border-t border-white/10">
            {links.map((l) => (
              <Link key={l.label} href={l.href} className="text-sm text-white/70 hover:text-white" onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="text-sm px-5 py-2.5 bg-white text-[#0D0D0D] rounded-full text-center font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Get in touch
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
