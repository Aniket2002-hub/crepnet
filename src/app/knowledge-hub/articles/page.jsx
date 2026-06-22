"use client";
import { useState } from "react";

const tagColors = {
  OFFICE: "bg-orange-500",
  INVESTMENTS: "bg-purple-600",
  SUSTAINABILITY: "bg-green-600",
  RETAIL: "bg-blue-600",
  GCC: "bg-teal-600",
  POLICY: "bg-red-600",
};

const allArticles = [
  {
    id: 1, tag: "OFFICE",
    title: "The Future of Office Spaces in India: Trends Shaping 2024 and Beyond",
    author: "Anuj Puri", date: "May 20, 2024", readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
  },
  {
    id: 2, tag: "INVESTMENTS",
    title: "Real Estate Investment Outlook 2024: Opportunities and Risk Factors",
    author: "Vimal Nadar", date: "May 18, 2024", readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
  },
  {
    id: 3, tag: "SUSTAINABILITY",
    title: "Sustainability in Real Estate: Building a Greener Tomorrow",
    author: "Neha Iyer", date: "May 16, 2024", readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&q=80",
  },
  // {
  //   id: 4, tag: "RETAIL",
  //   title: "Retail Real Estate: Evolving Consumer Behavior and Market Dynamics",
  //   author: "Arvind Nandan", date: "May 14, 2024", readTime: "6 min read",
  //   img: "https://images.unsplash.com/photo-1567449303183-ae0d6ed1498c?w=400&q=80",
  // },
  {
    id: 5, tag: "POLICY",
    title: "New Industrial Corridor Policy: Impact on Real Estate Markets",
    author: "Ramesh Kumar", date: "May 12, 2024", readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
  },
  {
    id: 6, tag: "GCC",
    title: "GCC Expansion in India: Key Drivers and Market Implications",
    author: "Priya Mehta", date: "May 10, 2024", readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=400&q=80",
  },
  {
    id: 7, tag: "OFFICE",
    title: "Bengaluru Office Market Sees 18% YoY Growth in Q1 2024",
    author: "Sanjay Dutt", date: "May 8, 2024", readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80",
  },
  {
    id: 8, tag: "INVESTMENTS",
    title: "Blackstone Doubles Down on Indian Logistics Assets in 2024",
    author: "Priya Mehta", date: "May 6, 2024", readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80",
  },
];

const filters = ["All", "Office", "Investments", "Sustainability", "Retail", "GCC", "Policy"];

export default function ArticlesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? allArticles
      : allArticles.filter(
          (a) => a.tag === activeFilter.toUpperCase()
        );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* Hero */}
      <div className="relative bg-gray-900 text-white overflow-hidden" style={{ minHeight: 320 }}>
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80"
          alt="Real estate"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-2">Articles</h1>
          <p className="text-gray-300 mb-6 max-w-lg text-sm">
            Curated insights, expert perspectives and in-depth research to keep you informed and ahead in real estate.
          </p>

          {/* Search Bar */}
          <div className="flex gap-2 max-w-xl">
            <div className="flex-1 flex items-center bg-white rounded-lg px-3 gap-2">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              <input
                className="flex-1 py-2.5 text-gray-900 text-sm outline-none bg-transparent"
                placeholder="Search articles..."
              />
            </div>
            <select className="bg-white text-gray-700 text-sm px-3 py-2.5 rounded-lg outline-none">
              <option>All Categories</option>
              <option>Office</option>
              <option>Investments</option>
              <option>Sustainability</option>
              <option>Retail</option>
              <option>GCC</option>
              <option>Policy</option>
            </select>
            <button className="bg-[#c9a84c] hover:bg-[#b8973d] text-white cursor-pointer px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              Search
            </button>
          </div>

          {/* Popular Topics */}
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-gray-400 text-sm">Popular Topics:</span>
            {["Office Market", "Retail Trends", "Investments", "GCC", "Sustainability", "PropTech", "Policy & Regulation"].map((t) => (
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-900">All Articles</h2>
            <p className="text-gray-500 text-sm mt-0.5">
              Showing {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 text-sm rounded-full cursor-pointer border transition-colors font-medium ${
                  activeFilter === f
                    ? "bg-[#c9a84c] border-[#c9a84c] text-white"
                    : "border-gray-200 text-gray-600 hover:border-[#c9a84c] hover:text-[#c9a84c] hover:bg-amber-50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((a) => (
            <article
              key={a.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-[0_4px_20px_rgba(201,168,76,0.2)] transition-all duration-200 cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span
                  className={`absolute top-3 left-3 ${tagColors[a.tag]} text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wide`}
                >
                  {a.tag}
                </span>
              </div>

              {/* Body */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-3 group-hover:text-[#c9a84c] transition-colors line-clamp-3">
                  {a.title}
                </h3>
                <div className="flex items-center text-[11px] text-gray-400 gap-1.5 flex-wrap">
                  <span>By {a.author}</span>
                  <span>·</span>
                  <span>{a.date}</span>
                  <span>·</span>
                  <span>{a.readTime}</span>
                </div>

                {/* Read More */}
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <button className="text-xs text-[#c9a84c] hover:text-[#b8973d] font-medium flex items-center gap-1 transition-colors">
                    Read Article
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-sm">No articles found for this category.</p>
          </div>
        )}

        {/* Load More */}
        {filtered.length > 0 && (
          <div className="flex justify-center mt-10">
            <button className="px-8 py-2.5 border border-[#c9a84c] cursor-pointer text-[#c9a84c] hover:bg-[#c9a84c] hover:text-white rounded-full text-sm font-medium transition-colors">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </div>
  );
}