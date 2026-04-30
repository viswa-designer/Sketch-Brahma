"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f7f6f3]/90 backdrop-blur-md border-b border-stone-200"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-6 h-6 bg-stone-900 rounded-sm flex items-center justify-center shrink-0">
            <span className="text-[#f7f6f3] text-[10px] font-bold font-syne tracking-tight">SB</span>
          </div>
          <span
            style={{ fontFamily: "var(--font-syne)" }}
            className="text-sm font-semibold tracking-tight text-stone-900"
          >
            Sketch Brahma
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {["Services", "Work", "About", "Careers"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-stone-500 hover:text-stone-900 transition-colors duration-200"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className="text-sm px-4 py-2 bg-stone-900 text-[#f7f6f3] rounded-full hover:bg-stone-700 transition-colors duration-200"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-stone-900 transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-stone-900 transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-stone-900 transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f7f6f3] border-t border-stone-200 px-6 py-6 flex flex-col gap-5">
          {["Services", "Work", "About", "Careers"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-base text-stone-700 hover:text-stone-900 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            className="text-sm px-4 py-2.5 bg-stone-900 text-[#f7f6f3] rounded-full text-center hover:bg-stone-700 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get in touch
          </Link>
        </div>
      )}
    </header>
  );
}
