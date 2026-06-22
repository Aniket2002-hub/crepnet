"use client";
import { useState } from "react";

const podcastsData = [
  {
    id: 1, duration: "34:20", episode: "EP 07",
    title: "The Rise of Luxury Residential in India's Top Cities",
    guest: "Dhruv Agarwala", role: "Group CEO, Housing.com & PropTiger",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
  },
  {
    id: 2, duration: "41:05", episode: "EP 08",
    title: "Data Centres: The New Asset Class Reshaping CRE",
    guest: "Vivek Dahiya", role: "CEO, DataVault India",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  },
  {
    id: 3, duration: "28:50", episode: "EP 09",
    title: "Coworking 2.0: Beyond the Pandemic Bounce",
    guest: "Harsh Lambah", role: "Country Head, IWG India",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
  },
  {
    id: 4, duration: "37:15", episode: "EP 10",
    title: "Hotel Investment Cycles: What Investors Must Know",
    guest: "Achin Khanna", role: "MD, HVS Anarock",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
  },
  {
    id: 5, duration: "22:40", episode: "EP 11",
    title: "PropTech Revolution: AI, Blockchain and Real Estate",
    guest: "Akhil Gupta", role: "CTO, NoBroker",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
  },
  {
    id: 6, duration: "45:00", episode: "EP 12",
    title: "Infrastructure Mega-Projects and Their Property Impact",
    guest: "Ramesh Nair", role: "CEO, Mindspace Business Parks REIT",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
];

const podcastFilters = ["All", "Residential", "Data Centres", "Coworking", "Hospitality", "PropTech", "Infrastructure"];

export default function PodcastsPage() {
  const [playing, setPlaying] = useState(null);
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered =
    active === "All"
      ? podcastsData
      : podcastsData.filter((p) =>
          p.title.toLowerCase().includes(active.toLowerCase()) ||
          p.role.toLowerCase().includes(active.toLowerCase())
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
          <h1 className="text-4xl font-bold mb-2">Podcasts</h1>
          <p className="text-gray-300 mb-6 max-w-lg text-sm">
            In-depth conversations with India's top real estate leaders, investors and innovators across all asset classes.
          </p>
          <div className="flex gap-2 max-w-xl">
            <div className="flex-1 flex items-center bg-white rounded-lg px-3 gap-2">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input className="flex-1 py-2.5 text-gray-900 text-sm outline-none bg-transparent" placeholder="Search podcasts or guests..." />
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
            <h2 className="text-xl font-bold text-gray-900">All Podcast Episodes</h2>
            <p className="text-gray-500 text-sm mt-0.5">Showing {filtered.length} result{filtered.length !== 1 ? "s" : ""}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {podcastFilters.map((f) => (
              <button
                key={f}
                onClick={() => { setActive(f); setVisibleCount(6); setPlaying(null); }}
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

        {/* Podcasts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-[0_4px_20px_rgba(201,168,76,0.18)] transition-all duration-200 group"
            >
              {/* Thumbnail */}
              <div
                className="relative h-48 overflow-hidden cursor-pointer"
                onClick={() => setPlaying(playing === p.id ? null : p.id)}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Episode badge */}
                <span className="absolute top-3 left-3 bg-[#c9a84c] text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                  {p.episode}
                </span>

                {/* Duration */}
                <span className="absolute top-3 right-3 bg-black/70 text-white text-[10px] px-2.5 py-0.5 rounded-full">
                  {p.duration}
                </span>

                {/* Play / Pause */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-lg ${
                      playing === p.id
                        ? "bg-[#c9a84c] scale-110"
                        : "bg-white/90 group-hover:bg-[#c9a84c] group-hover:scale-110"
                    }`}
                  >
                    {playing === p.id ? (
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-800 group-hover:text-white ml-0.5 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-3 group-hover:text-[#c9a84c] transition-colors">
                  {p.title}
                </h3>

                {/* Guest */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[#c9a84c]/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#c9a84c]">{p.guest}</p>
                    <p className="text-[10px] text-gray-400">{p.role}</p>
                  </div>
                </div>

                {/* Progress bar when playing */}
                {playing === p.id && (
                  <div className="mb-3">
                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#c9a84c] rounded-full w-1/3 animate-pulse" />
                    </div>
                    <p className="text-[10px] text-[#c9a84c] mt-1 font-medium">Now Playing...</p>
                  </div>
                )}

                {/* Footer */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => setPlaying(playing === p.id ? null : p.id)}
                    className={`text-xs font-medium flex items-center gap-1.5 transition-colors ${
                      playing === p.id
                        ? "text-[#c9a84c]"
                        : "text-gray-500 hover:text-[#c9a84c]"
                    }`}
                  >
                    {playing === p.id ? (
                      <>
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                        Pause Episode
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                        Play Episode
                      </>
                    )}
                  </button>
                  <button className="w-7 h-7 rounded-full border border-gray-200 hover:border-[#c9a84c] hover:bg-[#c9a84c]/10 flex items-center justify-center transition-all group/dl">
                    <svg className="w-3.5 h-3.5 text-gray-400 group-hover/dl:text-[#c9a84c] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                    </svg>
                  </button>
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
            <p className="text-gray-500 text-sm">No podcast episodes found for this category.</p>
          </div>
        )}

        {/* Load More */}
        {visibleCount < filtered.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount((v) => v + 6)}
              className="px-8 py-2.5 border border-[#c9a84c] cursor-pointer text-[#c9a84c] hover:bg-[#c9a84c] hover:text-white rounded-full text-sm font-medium transition-colors"
            >
              Load More Episodes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}