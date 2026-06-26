"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "About Us", href: "/about-us" },

  {
    label: "Community",
    dropdown: [
      { label: "Member Directory", href: "/community/member-directory" },
      { label: "Survey", href: "/community/survey" },
    ],
  },

  {
    label: "Events",
    dropdown: [
      { label: "Awards", href: "/events/awards" },
      { label: "Summits", href: "/events/summits" },
      { label: "Conferences", href: "/events/conferences" },
      { label: "Networking", href: "/events/networking" },
      { label: "Webinars", href: "/events/webinars" },
    ],
  },

  {
    label: "Knowledge Hub",
    dropdown: [
      { label: "Articles", href: "/knowledge-hub/articles" },
      { label: "Reports", href: "/knowledge-hub/reports" },
      { label: "Podcasts", href: "/knowledge-hub/podcasts" },
      { label: "Market News", href: "/knowledge-hub/market-news" },
    ],
  },

  {
    label: "Companies",
    dropdown: [
      { label: "Developers", href: "/companies/developers" },
      { label: "Retail Brands", href: "/companies/retail-brands" },
      { label: "Service Providers", href: "/companies/service-providers" },
    ],
  },

  { label: "Contact Us", href: "/contact" },
];

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (label) => {
    setOpenSubmenu((prev) => (prev === label ? null : label));
  };

  const closeAll = () => {
    setOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <>
      <button
        className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 lg:hidden border-t border-gray-100 bg-white py-3 px-4 space-y-0.5 shadow-md z-50 max-h-[calc(100vh-4rem)] overflow-y-auto">
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="border-b border-gray-50 last:border-0">
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-[#1a2744] transition-colors"
                  onClick={() => toggleSubmenu(item.label)}
                  aria-expanded={openSubmenu === item.label}
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      openSubmenu === item.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSubmenu === item.label && (
                  <div className="pl-4 pb-2 space-y-0.5">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-3 py-2 text-sm text-gray-600 rounded-lg hover:bg-gray-50 hover:text-[#1a2744] transition-colors"
                        onClick={closeAll}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50 hover:text-[#1a2744] transition-colors"
                onClick={closeAll}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="pt-3 mt-2 flex flex-col gap-2 border-t border-gray-100">
            <Link
              href="/login"
              className="text-center py-2.5 text-sm font-bold text-[#1a2744] border-2 border-[#1a2744] rounded-lg hover:bg-[#1a2744] hover:text-white transition-all"
              onClick={closeAll}
            >
              Login
            </Link>
            <Link
              href="/join"
              className="text-center py-2.5 text-sm font-bold text-white bg-[#c9a84c] rounded-lg hover:bg-[#b8963e] transition-all"
              onClick={closeAll}
            >
              Join REPC
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default function Header() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">

          {/* Logo Container - Expanded further to optimize readability */}
          <Link href="/" className="flex items-center justify-start shrink-0 select-none py-1 h-full">
            <Image
              src="/Real_Estate_Professionals_Community_Logo-removebg-preview.png"
              alt="REPC"
              width={500} // High base buffer prevents blurriness during optimization
              height={180} 
              priority
              className="h-24 sm:h-28 w-auto object-contain object-left scale-110 transition-all duration-200"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <button
                    type="button"
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#1a2744] rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                    <svg
                      className="w-3.5 h-3.5 text-gray-400 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#1a2744] rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {item.dropdown && (
                  <div className="absolute top-full left-0 pt-2 w-52 z-50 hidden group-hover:block">
                    <div className="bg-white border border-gray-100 rounded-xl shadow-2xl py-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#1a2744] hover:bg-amber-50 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
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
              Join REPC
            </Link>
          </div>

          {/* Mobile Toggle */}
          <MobileMenu />

        </div>
      </div>
    </header>
  );
}