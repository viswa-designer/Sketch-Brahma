import Link from "next/link";

const cols = {
  Services: ["Experience Design", "Front-end Dev", "Mobile Development", "Backend Dev", "QA Testing", "Digital Marketing"],
  Company: ["About Us", "Careers", "Blog", "Clients"],
  Work: ["Case Studies", "Projects", "Testimonials"],
  Connect: ["LinkedIn", "Instagram", "Facebook", "WhatsApp"],
};

const socials: Record<string, string> = {
  LinkedIn: "https://linkedin.com/company/sketchbrahma",
  Instagram: "https://instagram.com/sketch_brahma_technologies",
  Facebook: "https://facebook.com/sketchbrahma",
  WhatsApp: "https://wa.me/919535588062",
};

export default function Footer() {
  return (
    <footer className="bg-[#F8F7F4] border-t border-[#E4E3DF]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 bg-[#111] rounded-[5px] flex items-center justify-center">
                <span style={{ fontFamily: "var(--font-syne)" }} className="text-white text-[10px] font-bold">SB</span>
              </div>
              <span style={{ fontFamily: "var(--font-syne)" }} className="text-sm font-semibold text-[#111] tracking-tight">Sketch Brahma</span>
            </div>
            <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-[#6B6B6B] leading-relaxed max-w-[200px] mb-6">
              Human-centered design and development from Bengaluru, India.
            </p>
            <a
              href="mailto:hello@sketchbrahma.com"
              style={{ fontFamily: "var(--font-dm-sans)" }}
              className="text-xs text-[#111] underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              hello@sketchbrahma.com
            </a>
          </div>

          {/* Link cols */}
          {Object.entries(cols).map(([heading, items]) => (
            <div key={heading}>
              <p style={{ fontFamily: "var(--font-syne)" }} className="text-[11px] font-semibold text-[#111] tracking-widest uppercase mb-4">
                {heading}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href={socials[item] ?? "#"}
                      target={socials[item] ? "_blank" : undefined}
                      rel={socials[item] ? "noopener noreferrer" : undefined}
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                      className="text-xs text-[#6B6B6B] hover:text-[#111] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-[#E4E3DF] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-[#999]">
            © {new Date().getFullYear()} Sketch Brahma Technologies Pvt Ltd · All rights reserved.
          </p>
          <p style={{ fontFamily: "var(--font-dm-sans)" }} className="text-xs text-[#C0BEBC] tracking-wide">
            Effective · Efficient · Enjoyable
          </p>
        </div>
      </div>
    </footer>
  );
}
