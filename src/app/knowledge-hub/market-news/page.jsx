"use client";
import { useState } from "react";

const marketNewsData = [
  {
    id: 1, tag: "RESIDENTIAL", tagColor: "text-pink-600", tagBg: "bg-pink-50",
    title: "Mumbai Residential Sales Cross ₹1 Lakh Cr Mark for the First Time in 2024",
    desc: "Premium and luxury segment drives unprecedented volumes across South and Central Mumbai micro-markets.",
    date: "June 10, 2024",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&q=80",
  },
  {
    id: 2, tag: "COWORKING", tagColor: "text-indigo-600", tagBg: "bg-indigo-50",
    title: "WeWork India Expands to 5 New Cities Targeting Tier 2 Markets",
    desc: "Flexible workspace operator eyes Jaipur, Kochi, Ahmedabad, Chandigarh and Nagpur in major expansion push.",
    date: "June 9, 2024",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&q=80",
  },
  {
    id: 3, tag: "INFRASTRUCTURE", tagColor: "text-yellow-700", tagBg: "bg-yellow-50",
    title: "PM Gati Shakti Plan Unlocks ₹12,000 Cr Worth of Real Estate Opportunities",
    desc: "Infrastructure push along key freight corridors expected to catalyze warehousing and logistics development.",
    date: "June 8, 2024",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&q=80",
  },
  {
    id: 4, tag: "PROPTECH", tagColor: "text-cyan-600", tagBg: "bg-cyan-50",
    title: "NoBroker Raises $100 Mn Series F to Accelerate AI-Powered Property Search",
    desc: "Bengaluru-based proptech unicorn plans to expand AI capabilities and enter new rental markets across India.",
    date: "June 7, 2024",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&q=80",
  },
  {
    id: 5, tag: "DATA CENTRES", tagColor: "text-violet-600", tagBg: "bg-violet-50",
    title: "India's Data Centre Capacity to Triple by 2027: CBRE Report",
    desc: "Hyperscalers and domestic operators fuel land acquisition across Mumbai, Chennai, Hyderabad and Pune.",
    date: "June 6, 2024",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&q=80",
  },
  {
    id: 6, tag: "HOSPITALITY", tagColor: "text-rose-600", tagBg: "bg-rose-50",
    title: "Hotel Room Supply in India Set to Double Over Next 5 Years",
    desc: "Branded budget and mid-scale segments lead pipeline additions as domestic travel touches record highs.",
    date: "June 5, 2024",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&q=80",
  },
  {
    id: 7, tag: "RESIDENTIAL", tagColor: "text-pink-600", tagBg: "bg-pink-50",
    title: "NCR Luxury Housing Sales Up 65% YoY in Q1 2024",
    desc: "Golf Course Road and Aerocity corridors emerge as hotspots for ₹5 Cr+ unit launches.",
    date: "June 4, 2024",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&q=80",
  },
  {
    id: 8, tag: "COWORKING", tagColor: "text-indigo-600", tagBg: "bg-indigo-50",
    title: "Flexible Office Demand Hits All-Time High in Pune and Hyderabad",
    desc: "Managed offices account for nearly 22% of total office leasing in Q1 2024 across the two cities.",
    date: "June 3, 2024",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=200&q=80",
  },
  {
    id: 9, tag: "INFRASTRUCTURE", tagColor: "text-yellow-700", tagBg: "bg-yellow-50",
    title: "Mumbai Trans Harbour Link Boosts Navi Mumbai Property Values by 18%",
    desc: "New connectivity corridor triggers fresh launches and investor interest in Ulwe, Dronagiri and Kharghar.",
    date: "June 2, 2024",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=200&q=80",
  },
];

const newsFilters = ["All", "Residential", "Coworking", "Infrastructure", "PropTech", "Data Centres", "Hospitality"];

export default function MarketNewsPage() {
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered =
    active === "All"
      ? marketNewsData
      : marketNewsData.filter((n) =>
          n.tag.toLowerCase().includes(active.toLowerCase())
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
          <h1 className="text-4xl font-bold mb-2">Market News</h1>
          <p className="text-gray-300 mb-6 max-w-lg text-sm">
            Stay ahead with the latest updates, deals and developments shaping India's diverse real estate landscape.
          </p>
          <div className="flex gap-2 max-w-xl">
            <div className="flex-1 flex items-center bg-white rounded-lg px-3 gap-2">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input className="flex-1 py-2.5 text-gray-900 text-sm outline-none bg-transparent" placeholder="Search market news..." />
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
            <h2 className="text-xl font-bold text-gray-900">All Market News</h2>
            <p className="text-gray-500 text-sm mt-0.5">Showing {filtered.length} result{filtered.length !== 1 ? "s" : ""}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {newsFilters.map((f) => (
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

        {/* News List */}
        <div className="space-y-4">
          {visible.map((n) => (
            <div
              key={n.id}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-[0_4px_20px_rgba(201,168,76,0.18)] transition-all duration-200 cursor-pointer group p-4 flex gap-4 items-start"
            >
              <div className="relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden">
                <img
                  src={n.img}
                  alt={n.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full ${n.tagColor} ${n.tagBg}`}>
                    {n.tag}
                  </span>
                  <span className="text-xs text-gray-400">{n.date}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-[#c9a84c] transition-colors mb-1">
                  {n.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2">{n.desc}</p>
              </div>

              <div className="flex-shrink-0 self-center">
                <div className="w-8 h-8 rounded-full border border-gray-200 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c] flex items-center justify-center transition-all">
                  <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
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
            <p className="text-gray-500 text-sm">No news found for this category.</p>
          </div>
        )}

        {/* Load More */}
        {visibleCount < filtered.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((v) => v + 6)}
              className="px-8 py-2.5 border border-[#c9a84c] cursor-pointer text-[#c9a84c] hover:bg-[#c9a84c] hover:text-white rounded-full text-sm font-medium transition-colors"
            >
              Load More News
            </button>
          </div>
        )}
      </div>
    </div>
  );
}