import Link from "next/link";

const links = {
  Company: ["About", "Careers", "Blog", "Contact"],
  Services: [
    "Experience Design",
    "Front-end Dev",
    "Mobile Apps",
    "Backend",
    "QA Testing",
  ],
  Work: ["Case Studies", "Clients", "Projects"],
};

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#f7f6f3]">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-stone-900 rounded-sm flex items-center justify-center">
                <span className="text-[#f7f6f3] text-[10px] font-bold" style={{ fontFamily: "var(--font-syne)" }}>SB</span>
              </div>
              <span
                style={{ fontFamily: "var(--font-syne)" }}
                className="text-sm font-semibold text-stone-900 tracking-tight"
              >
                Sketch Brahma
              </span>
            </div>
            <p
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="text-xs text-stone-400 leading-relaxed max-w-[180px]"
            >
              Human-centered design and development from Bengaluru.
            </p>

            <div className="flex gap-4 mt-6">
              {["LinkedIn", "Instagram", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                  className="text-xs text-stone-400 hover:text-stone-700 transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <p
                style={{ fontFamily: "var(--font-syne)" }}
                className="text-xs font-semibold text-stone-900 tracking-widest uppercase mb-4"
              >
                {heading}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                      className="text-xs text-stone-400 hover:text-stone-700 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-stone-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{ fontFamily: "var(--font-dm-sans)" }}
            className="text-xs text-stone-400"
          >
            © {new Date().getFullYear()} Sketch Brahma Technologies. All rights reserved.
          </p>
          <p
            style={{ fontFamily: "var(--font-dm-sans)" }}
            className="text-xs text-stone-400"
          >
            Effective · Efficient · Enjoyable
          </p>
        </div>
      </div>
    </footer>
  );
}
