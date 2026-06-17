"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Handshake,
  Users,
  ArrowRight,
  Clock,
} from "lucide-react";

const GOLD = "#d6a44a";

// const FOOTER_LINKS = {
//   Company: ["About Us", "Our Team", "Careers", "Press & Media", "Contact Us"],
//   Ecosystem: ["Office Spaces", "Retail", "Hospitality", "Logistics & Industrial", "Investments", "International Trade"],
//   Solutions: ["For Developers", "For Occupiers & Brands", "For Investors", "For Consultants", "For Service Providers", "For Government Bodies"],
//   Resources: ["Market Intelligence", "Reports & Research", "Blog & Insights", "Webinars", "Events", "Case Studies"],
// };

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2H21.5l-7.51 8.59L22 22h-6.828l-5.36-7.018L4.347 22H1.09l8.034-9.192L2 2h6.828l4.836 6.392L18.244 2Zm-2.39 18h1.833L8.084 4H6.117l9.737 16Z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.987h-2.54V12.3h2.54V9.797c0-2.508 1.493-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562V12.3h2.773l-.443 2.592h-2.33v6.987C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21.582 7.186a2.506 2.506 0 00-1.768-1.768C18.254 5 12 5 12 5s-6.254 0-7.814.418A2.506 2.506 0 002.418 7.186C2 8.746 2 12 2 12s0 3.254.418 4.814a2.506 2.506 0 001.768 1.768C5.746 19 12 19 12 19s6.254 0 7.814-.418a2.506 2.506 0 001.768-1.768C22 15.254 22 12 22 12s0-3.254-.418-4.814zM10 15V9l6 3-6 3z" />
      </svg>
    ),
  },
];

const LINK_COLUMNS = [
  {
    heading: "Quick Links",
    links: ["About REPC", "Membership", "Events", "Knowledge Hub", "Community Guidelines"],
  },
  {
    heading: "Resources",
    links: ["Articles", "Market News", "Research Reports", "Podcasts", "Career Center"],
  },
  {
    heading: "Support",
    links: ["Contact Us", "FAQs", "Privacy Policy", "Terms of Use"],
  },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="bg-[#041530] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

          {/* Brand + link columns */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:flex-1">

            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-extrabold tracking-tight">
                  REP<span style={{ color: GOLD }}>C</span>
                </span>
                {/* <span className="h-8 w-px bg-white/15" aria-hidden="true" />
                <p className="text-xs leading-tight text-slate-300">
                  Real Estate
                  <br />
                  Professional Community
                </p> */}
              </div>

              <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
                India&apos;s largest community of real estate professionals connecting, collaborating
                and creating opportunities.
              </p>

              <div className="mt-6 flex items-center gap-3">
                {SOCIAL_LINKS.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-slate-200 transition-colors hover:bg-[#d6a44a] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d6a44a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#041530]"
                  >
                    {s.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {LINK_COLUMNS.map((col) => (
              <div key={col.heading}>
                <h4 className="text-sm font-bold text-white">{col.heading}</h4>
                <span className="mt-2 block h-0.5 w-5" style={{ backgroundColor: GOLD }} />
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-slate-400 transition-colors hover:text-[#d6a44a] focus:outline-none focus-visible:underline"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:w-[440px] lg:flex-shrink-0">
            {/* Partner With Us */}
            <div className="rounded-xl border border-white/15 bg-white/[0.03] p-6">
              <Handshake className="h-7 w-7" style={{ color: GOLD }} strokeWidth={1.5} />
              <h3 className="mt-4 flex items-center gap-2 text-base font-bold text-white">
                Partner With Us
                <span className="h-px w-6" style={{ backgroundColor: GOLD }} />
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Collaborate with industry leaders, sponsor events, and showcase your brand to a
                targeted audience.
              </p>
              <button className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                Explore Partnerships
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Join Our Network */}
            <div className="rounded-xl bg-gradient-to-br from-[#7a4f1c] to-[#a06b29] p-6">
              <Users className="h-7 w-7 text-white" strokeWidth={1.5} />
              <h3 className="mt-4 flex items-center gap-2 text-base font-bold text-white">
                Join Our Network
                <span className="h-px w-6 bg-white/70" />
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                Become a part of a trusted community of real estate professionals and unlock
                endless opportunities.
              </p>
              <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#5c3a14] transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Join REPC Now
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © 2025 REPC. All Rights Reserved. (
            <Link
              href="https://ireedindia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#d6a44a] transition-colors hover:text-white"
            >
              Powered by IREED MEDIA
            </Link>
            )
          </p>
          <p className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            Made with <span aria-hidden="true">❤️</span> for Real Estate Professionals
          </p>
        </div>
      </div>
    </footer>
  );
}