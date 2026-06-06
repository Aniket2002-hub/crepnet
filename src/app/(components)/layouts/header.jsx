"use client";
import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "About Us", href: "/about" },
  {
    label: "Ecosystem",
    href: "/ecosystem",
    dropdown: ["Office", "Retail", "Hospitality", "Logistics & Industrial", "Investments"],
  },
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: ["For Developers", "For Occupiers", "For Investors", "For Consultants"],
  },
  { label: "Market Intelligence", href: "/market-intelligence" },
  {
    label: "Resources",
    href: "/resources",
    dropdown: ["Blog", "Reports", "Webinars", "Case Studies"],
  },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link href="/" className="flex flex-col leading-none select-none">
            <span className="text-2xl font-black tracking-tight">
              <span className="text-[#1a2744]">CREP</span>
              <span className="text-[#c9a84c]">NET</span>
            </span>
            <span className="text-[8px] tracking-[0.22em] text-gray-400 font-semibold uppercase mt-0.5">
              Connect · Collaborate · Grow
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1a2744] rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                  {item.dropdown && (
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-100 rounded-xl shadow-2xl py-2 z-50">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub}
                        href="#"
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#1a2744] hover:bg-amber-50 transition-colors"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* ── Desktop CTAs ── */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-bold text-[#1a2744] border-2 border-[#1a2744] rounded-lg hover:bg-[#1a2744] hover:text-white transition-all duration-200"
            >
              Login
            </Link>
            <Link
              href="/join"
              className="px-4 py-2 text-sm font-bold text-white bg-[#c9a84c] rounded-lg hover:bg-[#b8963e] transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Join CREPNET
            </Link>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white py-3 px-4 space-y-0.5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-[#1a2744] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 mt-2 flex flex-col gap-2 border-t border-gray-100">
            <Link
              href="/login"
              className="text-center py-2.5 text-sm font-bold text-[#1a2744] border-2 border-[#1a2744] rounded-lg hover:bg-[#1a2744] hover:text-white transition-all"
            >
              Login
            </Link>
            <Link
              href="/join"
              className="text-center py-2.5 text-sm font-bold text-white bg-[#c9a84c] rounded-lg hover:bg-[#b8963e] transition-all"
            >
              Join CREPNET
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
