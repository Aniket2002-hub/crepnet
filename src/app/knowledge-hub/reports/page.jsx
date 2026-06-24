"use client";
import { useState } from "react";
import Link from "next/link"; // 1. Import Link component

const reportsData = [
  {
    id: 1,
    slug: "india-residential-market-outlook-h1-2024", // 2. Added unique slugs
    title: "India Residential Market Outlook H1 2024",
    subtitle: "Deep dive into luxury, mid and affordable segments across 8 cities",
    date: "June 2024", type: "Market Report", pages: "56 pages",
    gradient: "from-rose-800 to-rose-950",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    tag: "RESIDENTIAL",
  },
  {
    id: 2,
    slug: "india-coworking-flex-space-report-2024",
    title: "India Coworking & Flex Space Report 2024",
    subtitle: "Operators, occupiers and the evolving demand landscape",
    date: "June 2024", type: "Research Report", pages: "44 pages",
    gradient: "from-indigo-800 to-indigo-950",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
    tag: "COWORKING",
  },
  {
    id: 3,
    slug: "data-centre-real-estate-india-2024",
    title: "Data Centre Real Estate in India 2024",
    subtitle: "Land, power and policy shaping hyperscale growth",
    date: "May 2024", type: "Sector Report", pages: "38 pages",
    gradient: "from-violet-800 to-violet-950",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    tag: "DATA CENTRES",
  },
  {
    id: 4,
    slug: "india-hospitality-sector-investment-report-2024",
    title: "India Hospitality Sector Investment Report 2024",
    subtitle: "Cap rates, RevPAR trends and PE activity in hotels",
    date: "May 2024", type: "Investment Report", pages: "48 pages",
    gradient: "from-amber-800 to-amber-950",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    tag: "HOSPITALITY",
  },
  {
    id: 5,
    slug: "proptech-india-investment-landscape-2024",
    title: "PropTech India Investment Landscape 2024",
    subtitle: "VC flows, startup ecosystem and emerging verticals",
    date: "April 2024", type: "Research Report", pages: "34 pages",
    gradient: "from-cyan-800 to-cyan-950",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    tag: "PROPTECH",
  },
  {
    id: 6,
    slug: "infrastructure-real-estate-convergence-2024",
    title: "Infrastructure & Real Estate Convergence 2024",
    subtitle: "How Gati Shakti and corridor projects reshape property markets",
    date: "April 2024", type: "Policy Report", pages: "52 pages",
    gradient: "from-yellow-800 to-yellow-950",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    tag: "INFRASTRUCTURE",
  },
];

const reportFilters = ["All", "Residential", "Coworking", "Data Centres", "Hospitality", "PropTech", "Infrastructure"];

export default function ReportsPage() {
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered =
    active === "All"
      ? reportsData
      : reportsData.filter((r) =>
          r.tag.toLowerCase().includes(active.toLowerCase())
        );

  const visible = filtered.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero */}
      <div className="relative bg-gray-900 text-white overflow-hidden" style={{ minHeight: 320 }}>
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80"
          alt="hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-2"> Reports</h1>
          <p className="text-gray-300 mb-6 max-w-lg text-sm">
            Authoritative market intelligence across residential, hospitality, data centres and emerging asset classes.
          </p>
          <div className="flex gap-2 max-w-xl">
            <div className="flex-1 flex items-center bg-white rounded-lg px-3 gap-2">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input className="flex-1 py-2.5 text-gray-900 text-sm outline-none bg-transparent" placeholder="Search research reports..." />
            </div>
            <button className="bg-[#c9a84c] hover:bg-[#b8973d] text-white cursor-pointer px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              Search
            </button>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-gray-400 text-sm">Popular:</span>
            {["Residential", "Coworking", "Data Centres", "PropTech", "Hospitality", "Infrastructure"].map((t) => (
              <button
                key={t}
                className="px-3 py-1 bg-white/10 hover:bg-[#c9a84c]/30 border border-white/20 hover:border-[#c9a84c] rounded-full text-xs text-white transition-colors"
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-900">All Research Reports</h2>
            <p className="text-gray-500 text-sm mt-0.5">Showing {filtered.length} result{filtered.length !== 1 ? "s" : ""}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {reportFilters.map((f) => (
              <button
                key={f}
                onClick={() => { setActive(f); setVisibleCount(6); }}
                className={`px-4 py-1.5 text-sm rounded-full cursor-pointer border transition-colors font-medium ${
                  active === f
                    ? "bg-[#c9a84c] border-[#c9a84c] text-white"
                    : "border-gray-200 text-gray-600 hover:border-[#c9a84c] hover:text-[#c9a84c] hover:bg-amber-50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((r) => (
            /* 3. Changed standard div to Link pointing to dynamic slug folder path */
            <Link
              key={r.id}
              href={`/knowledge-hub/reports/${r.slug}`}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgba(201,168,76,0.25)] transition-all duration-300 cursor-pointer h-72 block"
            >
              <img
                src={r.img}
                alt={r.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${r.gradient} opacity-88 group-hover:opacity-78 transition-opacity duration-300`} />

              {/* Gold top border slide-in */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#c9a84c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                {/* Top */}
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1.5">
                    <span className="bg-white/15 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/20 w-fit">
                      {r.type}
                    </span>
                    <span className="bg-[#c9a84c]/80 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full w-fit">
                      {r.tag}
                    </span>
                  </div>
                  <button className="w-9 h-9 bg-white/15 hover:bg-[#c9a84c] border border-white/20 hover:border-[#c9a84c] rounded-full flex items-center justify-center transition-all flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                    </svg>
                  </button>
                </div>

                {/* Bottom */}
                <div>
                  <h3 className="text-white font-semibold text-sm leading-snug mb-1 group-hover:text-[#c9a84c] transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-white/60 text-[11px] mb-3 leading-snug">{r.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/70 text-xs">{r.date}</p>
                      <p className="text-white/50 text-[10px] mt-0.5">{r.pages}</p>
                    </div>
                    <span className="text-[#c9a84c] text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      View Report
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="w-14 h-14 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm">No reports found for this category.</p>
          </div>
        )}

        {/* Load More */}
        {visibleCount < filtered.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((v) => v + 6)}
              className="px-8 py-2.5 border border-[#c9a84c] cursor-pointer text-[#c9a84c] hover:bg-[#c9a84c] hover:text-white rounded-full text-sm font-medium transition-colors"
            >
              Load More Reports
            </button>
          </div>
        )}
      </div>
    </div>
  );
}