"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const tagColors = {
  OFFICE: "bg-orange-500",
  INVESTMENTS: "bg-purple-600",
  SUSTAINABILITY: "bg-green-600",
  RETAIL: "bg-blue-600",
  GCC: "bg-teal-600",
  POLICY: "bg-red-600",
};

// Added matching string slug values to sync perfectly with detail pages
const allArticles = [
  {
    id: 1, tag: "OFFICE",
    slug: "the-future-of-office-spaces-in-india-trends-shaping-2024",
    title: "The Future of Office Spaces in India: Trends Shaping 2024 and Beyond",
    author: "Anuj Puri", date: "May 20, 2024", readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
  },
  {
    id: 2, tag: "INVESTMENTS",
    slug: "real-estate-investment-outlook-2024-opportunities-risks",
    title: "Real Estate Investment Outlook 2024: Opportunities and Risk Factors",
    author: "Vimal Nadar", date: "May 18, 2024", readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
  },
  {
    id: 3, tag: "SUSTAINABILITY",
    slug: "sustainability-in-real-estate-building-a-greener-tomorrow",
    title: "Sustainability in Real Estate: Building a Greener Tomorrow",
    author: "Neha Iyer", date: "May 16, 2024", readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&q=80",
  },
  {
    id: 5, tag: "POLICY",
    slug: "new-industrial-corridor-policy-impact-on-real-estate",
    title: "New Industrial Corridor Policy: Impact on Real Estate Markets",
    author: "Ramesh Kumar", date: "May 12, 2024", readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
  },
  {
    id: 6, tag: "GCC",
    slug: "gcc-expansion-in-india-key-drivers-market-implications",
    title: "GCC Expansion in India: Key Drivers and Market Implications",
    author: "Priya Mehta", date: "May 10, 2024", readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=400&q=80",
  },
  {
    id: 7, tag: "OFFICE",
    slug: "bengaluru-office-market-sees-18-percent-yoy-growth-q1-2024",
    title: "Bengaluru Office Market Sees 18% YoY Growth in Q1 2024",
    author: "Sanjay Dutt", date: "May 8, 2024", readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80",
  },
  {
    id: 8, tag: "INVESTMENTS",
    slug: "blackstone-doubles-down-on-indian-logistics-assets-2024",
    title: "Blackstone Doubles Down on Indian Logistics Assets in 2024",
    author: "Priya Mehta", date: "May 6, 2024", readTime: "4 min read",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80",
  },
];

const filters = ["All", "Office", "Investments", "Sustainability", "Retail", "GCC", "Policy"];

function InvestmentHighlights() {
  const [year, setYear] = useState(0);
  const [simulating, setSimulating] = useState(false);

  const phases = [
    { value: 1.0, label: "Acquisition Phase", desc: "Premium land purchased at baseline valuation." },
    { value: 1.28, label: "Zoning & Strategy", desc: "Zoning layout and infrastructure design underway." },
    { value: 1.62, label: "Infrastructure Phase", desc: "Roads, utilities and approvals unlock the site." },
    { value: 2.02, label: "Development Phase", desc: "Structural development options come online." },
    { value: 2.48, label: "Pre-Launch Phase", desc: "Market demand builds ahead of exit." },
    { value: 3.0, label: "Exit Phase", desc: "Maximum exit valuation achieved." },
  ];

  const current = phases[year];
  const returnPct = Math.round(((current.value - 1) / 1) * 100);

  const runSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    setYear(0);
    let y = 0;
    const interval = setInterval(() => {
      y += 1;
      setYear(y);
      if (y >= 5) {
        clearInterval(interval);
        setSimulating(false);
      }
    }, 700);
  };

  const resetSimulation = () => {
    setSimulating(false);
    setYear(0);
  };

  const yields = [
    { label: "Savings Account", value: 3.5, color: "bg-gray-300" },
    { label: "Fixed Deposit", value: 6.5, color: "bg-gray-400" },
    { label: "Gold", value: 9.0, color: "bg-amber-300" },
    { label: "Real Estate", value: 14.2, color: "bg-[#c9a84c]", highlight: true },
  ];
  const maxYield = 15;

  return (
    <>
      {/* Land Development Plan */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 text-[#c9a84c] text-xs font-bold uppercase tracking-wide mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m-1 4h1m4-4h1m-1 4h1M9 21v-4h6v4" />
                </svg>
                Zoning &amp; Strategy
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Land Development Plan.
                <br />
                <span className="text-[#c9a84c]">After 5 Years.</span>
              </h2>
              <p className="text-gray-500 text-sm mb-6 max-w-md leading-relaxed">
                Watch raw land acquire intrinsic value over time, followed by structural
                development options to trigger maximum exit valuation.
              </p>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-6">
                <span className="inline-block bg-[#c9a84c]/10 text-[#c9a84c] text-[11px] font-bold px-3 py-1 rounded-full mb-3 tracking-wide">
                  YEAR {year} HOLDING
                </span>
                <p className="text-[11px] text-gray-400 uppercase tracking-wide mb-1">Estimated Value</p>
                <p className="text-3xl font-bold text-gray-900 mb-2">
                  ₹{current.value.toFixed(2)} Cr{" "}
                  <span className="text-sm font-medium text-green-600">({returnPct}% return)</span>
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-700">{current.label}:</span> {current.desc}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  <span>Holding Phase</span>
                  <span>Year {year} of 5</span>
                </div>
                <div className="relative flex items-center justify-between px-1">
                  <div className="absolute left-1 right-1 h-0.5 bg-gray-200 top-1/2 -translate-y-1/2" />
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className={`relative w-3 h-3 rounded-full border-2 transition-colors ${
                        i <= year ? "bg-[#c9a84c] border-[#c9a84c]" : "bg-white border-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={runSimulation}
                  disabled={simulating}
                  className="bg-[#c9a84c] hover:bg-[#b8973d] disabled:opacity-60 disabled:cursor-not-allowed text-white cursor-pointer px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                  {simulating ? "Simulating..." : "Simulate 5-Yr Hold"}
                </button>
                <button
                  onClick={resetSimulation}
                  className="text-gray-500 hover:text-[#c9a84c] cursor-pointer text-sm font-medium flex items-center gap-1.5 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 9a8 8 0 0114-5.3M20 15a8 8 0 01-14 5.3" />
                  </svg>
                  Reset
                </button>
              </div>
            </div>

            <div
              className="bg-gray-900 rounded-2xl p-8 flex flex-col items-center justify-center text-center overflow-hidden relative"
              style={{ minHeight: 320 }}
            >
              <svg width="140" height="90" viewBox="0 0 140 90" className="mb-2">
                <polygon points="70,10 130,45 70,80 10,45" fill="none" stroke="#3a4a63" strokeWidth="1.5" />
                <polygon points="70,45 130,45 70,80 10,45" fill="#111d30" />
                <line
                  x1="70"
                  y1="10"
                  x2="130"
                  y2="45"
                  stroke="#c9a84c"
                  strokeWidth="2"
                  strokeDasharray="90"
                  strokeDashoffset={90 - (year / 5) * 90}
                  style={{ transition: "stroke-dashoffset 0.6s ease" }}
                />
              </svg>
              <p className="text-white text-sm font-medium mt-4">{current.label}</p>
              <p className="text-gray-400 text-xs mt-1">
                Appreciating base value: ₹1.00 Cr → ₹{current.value.toFixed(2)} Cr
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Yield Comparison */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 text-[#c9a84c] text-xs font-bold uppercase tracking-wide mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8M21 7v6h-6" />
                </svg>
                Superior Yield
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                <span className="text-gray-900">Beat Inflation.</span>
                <br />
                <span className="text-gray-400">Build Wealth.</span>
              </h2>
              <p className="text-gray-500 text-sm mb-6 max-w-md leading-relaxed">
                Earn passive income through rental payouts and benefit from long-term capital
                appreciation. Fractional real estate investing gives you portfolio
                diversification with institution-grade assets.
              </p>
              <div className="flex gap-8">
                <div className="border-l-2 border-[#c9a84c] pl-4">
                  <p className="text-2xl font-bold text-gray-900">6-8%</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Rental Yield</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-4">
                  <p className="text-2xl font-bold text-gray-900">8-10%</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Capital Growth</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-5">
                5-Year Yield Comparison
              </p>
              <div className="space-y-4">
                {yields.map((y) => (
                  <div key={y.label}>
                    <div
                      className={`flex items-center justify-between text-xs mb-1.5 ${
                        y.highlight ? "text-[#c9a84c] font-bold" : "text-gray-600 font-medium"
                      }`}
                    >
                      <span className="uppercase tracking-wide">{y.label}</span>
                      <span>{y.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${y.color} rounded-full transition-all duration-700`}
                        style={{ width: `${(y.value / maxYield) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ArticlesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const router = useRouter();

  const filtered =
    activeFilter === "All"
      ? allArticles
      : allArticles.filter((a) => a.tag === activeFilter.toUpperCase());

  // Updated handler to push string slug instead of the numeric ID
  const handleArticleClick = (slugString) => {
    router.push(`/knowledge-hub/articles/${slugString}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero */}
      <div className="relative bg-gray-900 text-white overflow-hidden" style={{ minHeight: 320 }}>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
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
              <input className="flex-1 py-2.5 text-gray-900 text-sm outline-none bg-transparent" placeholder="Search articles..." />
            </div>
            <select className="bg-white text-gray-700 cursor-pointer text-sm px-3 py-2.5 rounded-lg outline-none">
              <option>All Categories</option>
              {["Office", "Investments", "Sustainability", "Retail", "GCC", "Policy"].map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>
            <button className="bg-[#c9a84c] hover:bg-[#b8973d] text-white cursor-pointer px-5 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-900">All Articles</h2>
            <p className="text-gray-500 text-sm mt-0.5">Showing {filtered.length} articles</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 text-sm rounded-full cursor-pointer border transition-colors font-medium ${activeFilter === f
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
              onClick={() => handleArticleClick(a.slug)}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-[0_4px_20px_rgba(201,168,76,0.2)] transition-all duration-200 cursor-pointer group"
            >
              <div className="relative h-44 overflow-hidden">
                <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <span className={`absolute top-3 left-3 ${tagColors[a.tag] || 'bg-gray-500'} text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-wide`}>
                  {a.tag}
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900 text-sm leading-snug mb-3 group-hover:text-[#c9a84c] transition-colors line-clamp-3">
                  {a.title}
                </h3>
                <div className="flex items-center text-[11px] text-gray-400 gap-1.5 flex-wrap">
                  <span>By {a.author}</span>
                  <span>·</span>
                  <span>{a.date}</span>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <span className="text-xs text-[#c9a84c] font-medium flex items-center gap-1">
                    Read Article
                    <svg className="w-3.5 h-3.5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Investment Highlights - Land Development Plan + Yield Comparison */}
      <InvestmentHighlights />

      {/* Knowledge That Empowers - Video Section */}
      <section className="relative overflow-hidden" style={{ background: "#0d1e35", minHeight: 600 }}>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(0.5) brightness(0.75) contrast(1.05)" }}
          autoPlay
          loop
          muted
          playsInline
          poster="https://assets.mixkit.co/videos/21246/21246-thumb-360-0.jpg"
        >
          <source
            src="https://assets.mixkit.co/videos/21246/21246-720.mp4"
            type="video/mp4"
          />
        </video>
        <div
          className="absolute inset-0"
          style={{ background: "rgba(26,39,68,0.25)", mixBlendMode: "multiply" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(13,30,53,0.35) 0%, rgba(13,30,53,0.5) 45%, rgba(13,30,53,0.75) 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center flex flex-col justify-center" style={{ minHeight: 600 }}>
          <h2
            className="text-white font-bold mb-6"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "clamp(28px, 4.5vw, 48px)",
              lineHeight: 1.25,
            }}
          >
            Knowledge That Empowers
          </h2>
          <p className="text-gray-200 text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Our Committees advance industry knowledge through research papers, articles, and
            strategic analysis to illuminate solutions for the challenges facing today's built
            environment.
          </p>
        </div>
      </section >
    </div >
  );
}