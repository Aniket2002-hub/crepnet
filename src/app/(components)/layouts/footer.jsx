import Link from "next/link";

const FOOTER_LINKS = {
  Company: ["About Us", "Our Team", "Careers", "Press & Media", "Contact Us"],
  Ecosystem: ["Office Spaces", "Retail", "Hospitality", "Logistics & Industrial", "Investments", "International Trade"],
  Solutions: ["For Developers", "For Occupiers & Brands", "For Investors", "For Consultants", "For Service Providers", "For Government Bodies"],
  Resources: ["Market Intelligence", "Reports & Research", "Blog & Insights", "Webinars", "Events", "Case Studies"],
};

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21.582 7.186a2.506 2.506 0 00-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.418A2.506 2.506 0 002.418 7.186C2 8.746 2 12 2 12s0 3.254.418 4.814a2.506 2.506 0 001.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.418a2.506 2.506 0 001.768-1.768C22 15.254 22 12 22 12s0-3.254-.418-4.814zM10 15V9l6 3-6 3z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f1a2e] text-white">

      {/* ── Newsletter Strip ── */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">Stay Ahead with RPEC</h3>
              <p className="text-gray-400 text-sm mt-1">
                Get the latest market insights, opportunities &amp; industry updates.
              </p>
            </div>
            <div className="flex gap-2 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-72 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
              />
              <button className="px-6 py-3 bg-[#c9a84c] text-white font-bold text-sm rounded-lg hover:bg-[#b8963e] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <span className="text-2xl font-black tracking-tight">
                <span className="text-white">RPEC</span>
                <span className="text-[#c9a84c]"></span>
              </span>
              <p className="text-[8px] tracking-[0.22em] text-gray-500 font-semibold uppercase mt-0.5">
                Connect · Collaborate · Grow
              </p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              India's premier network for commercial real estate — connecting office, retail, hospitality,
              logistics &amp; investments with global opportunities.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm font-medium">Follow Us</span>
              {SOCIAL_LINKS.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#c9a84c] flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-400 text-sm hover:text-[#c9a84c] transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <nav className="flex flex-wrap gap-x-5 gap-y-1">
              {["About Us", "Ecosystem", "Solutions", "Market Intelligence", "Resources", "Events", "Contact"].map((item) => (
                <Link key={item} href="#" className="text-gray-500 text-xs hover:text-gray-300 transition-colors">
                  {item}
                </Link>
              ))}
            </nav>
           <p className="text-gray-500 text-xs text-center sm:text-right">
  © 2025 RPEC. All Rights Reserved. (
  <Link
    href="https://ireedindia.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#c9a84c] hover:text-white font-medium transition-colors"
  >
    Powered by IREED MEDIA
  </Link>
  )
</p>
          </div>
        </div>
      </div>

    </footer>
  );
}