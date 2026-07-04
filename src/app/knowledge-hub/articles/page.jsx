"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

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
  const [animateYields, setAnimateYields] = useState(false);
  const yieldSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateYields(true);
        }
      },
      { threshold: 0.2 }
    );

    if (yieldSectionRef.current) {
      observer.observe(yieldSectionRef.current);
    }

    return () => {
      if (yieldSectionRef.current) {
        observer.unobserve(yieldSectionRef.current);
      }
    };
  }, []);

  const phases = [
    { 
      value: 1.00, 
      label: "ACQUISITION PHASE", 
      stageTag: "ACQUISITION STAGE",
      returnPct: 0,
      desc: "Raw land acquired at baseline institutional valuation.",
      visualSubtext: "Appreciating base value: ₹1.00 Cr → ₹1.25 Cr",
      visualTitle: "Initial Plot Baseline"
    },
    { 
      value: 1.25, 
      label: "ZONING CLEARANCE", 
      stageTag: "PLANNING STAGE",
      returnPct: 25,
      desc: "Zoning conversion and initial master planning approved.",
      visualSubtext: "Appreciating base value: ₹1.00 Cr → ₹1.50 Cr",
      visualTitle: "Master Plan Approval"
    },
    { 
      value: 1.50, 
      label: "INFRASTRUCTURE LAYOUT", 
      stageTag: "DEVELOPMENT STAGE",
      returnPct: 50,
      desc: "Road networks, power grids, and basic utilities connected.",
      visualSubtext: "Appreciating base value: ₹1.00 Cr → ₹1.80 Cr",
      visualTitle: "Infrastructure Integration"
    },
    { 
      value: 1.80, 
      label: "Zoning & Strategy", 
      stageTag: "YEAR 4 HOLDING",
      returnPct: 80,
      desc: "Holding Phase: Year 4 appreciation driven by zoning clearance & regional growth.",
      visualSubtext: "Appreciating base value: ₹1.00 Cr → ₹2.00 Cr",
      visualTitle: "Zoning layout and infrastructure design"
    },
    { 
      value: 2.50, 
      label: "STRUCTURAL FRAMEWORK", 
      stageTag: "CONSTRUCTION STAGE",
      returnPct: 150,
      desc: "Core build options initialized, locking in commercial viability.",
      visualSubtext: "Appreciating base value: ₹1.00 Cr → ₹3.00 Cr",
      visualTitle: "Core Structure Erected"
    },
    { 
      value: 4.00, 
      label: "Commercial Path Selected", 
      stageTag: "DEVELOPMENT STAGE",
      returnPct: 300,
      desc: "Commercial Path Selected: Grade-A high-yield corporate spaces engineered for institutional rental income.",
      visualSubtext: "Grade-A commercial workspace asset",
      visualTitle: "Projected Commercial Valuation: ₹4.00 Cr",
      isExit: true
    },
  ];

  const current = phases[year];

  const runSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    setYear(0);
    let currentYear = 0;
    const interval = setInterval(() => {
      currentYear += 1;
      setYear(currentYear);
      if (currentYear >= 5) {
        clearInterval(interval);
        setSimulating(false);
      }
    }, 900);
  };

  const resetSimulation = () => {
    setSimulating(false);
    setYear(0);
  };

  const yields = [
    { label: "SAVINGS ACCOUNT", value: 3.5, color: "bg-[#b2becd]" },
    { label: "FIXED DEPOSIT", value: 6.5, color: "bg-[#8693a6]" },
    { label: "GOLD", value: 9, color: "bg-[#ffcd1a]" },
    { label: "REAL ESTATE", value: 14.2, color: "bg-[#c49a3c]", highlight: true },
  ];
  const maxYield = 15;

  return (
    <>
      {/* Land Development Plan */}
      <section style={{ background: "#0c1524" }} className="relative overflow-hidden select-none text-white antialiased">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Operational UI Dashboard */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Land Development Plan.
                <br />
                <span className="text-[#e2c77d]">After 5 Years.</span>
              </h2>
              <p className="text-gray-400 text-sm mb-8 max-w-xl leading-relaxed font-normal opacity-70">
                Watch raw land acquire intrinsic value over time, followed by structural
                development options to trigger maximum exit valuation.
              </p>

              {/* Dynamic Status Box */}
              <div
                className="rounded-xl p-6 mb-8 transition-all duration-300"
                style={{ 
                  background: "rgba(18, 30, 49, 0.6)", 
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  boxShadow: "inset 0 1px 2px rgba(255,255,255,0.05)"
                }}
              >
                <span className="inline-block bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold px-3 py-1 rounded mb-4 tracking-wider uppercase">
                  {current.stageTag}
                </span>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest font-medium mb-1">Estimated Value</p>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-extrabold text-[#e2c77d] tracking-tight">
                    ₹{current.value.toFixed(2)} Cr
                  </span>
                  <span className="text-xs font-semibold text-gray-400">
                    ({current.returnPct}% {current.isExit ? "overall return" : "return"})
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed opacity-90">
                  {current.desc}
                </p>
              </div>

              {/* Timeline Tracker */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                  <span>Holding Phase</span>
                  <span>Year {year} of 5</span>
                </div>
                
                <div className="relative flex items-center justify-between px-1">
                  <div className="absolute left-1 right-1 h-[3px] rounded bg-gray-800 top-1/2 -translate-y-1/2" />
                  <div 
                    className="absolute left-1 h-[3px] rounded bg-[#e2c77d] top-1/2 -translate-y-1/2 transition-all duration-500 ease-out" 
                    style={{ width: `${(year / 5) * 98}%` }}
                  />

                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <button
                      key={i}
                      onClick={() => !simulating && setYear(i)}
                      disabled={simulating}
                      className="relative z-10 w-4 h-4 rounded-full border-2 transition-all focus:outline-none disabled:cursor-not-allowed"
                      style={
                        i <= year
                          ? {
                              background: "#e2c77d",
                              borderColor: "#e2c77d",
                              boxShadow: i === year ? "0 0 0 6px rgba(226, 199, 125, 0.2)" : "none",
                            }
                          : {
                              background: "#0c1524",
                              borderColor: "#1e293b",
                            }
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-6">
                <button
                  onClick={runSimulation}
                  disabled={simulating}
                  className="bg-[#e2c77d] hover:bg-[#d1b56c] disabled:opacity-40 disabled:cursor-not-allowed text-gray-950 font-semibold px-6 py-3 rounded text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-2 shadow-lg shadow-amber-950/20"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <polygon points="6,4 20,12 6,20" />
                  </svg>
                  {simulating ? "Simulating..." : "Simulate 5-Yr Hold"}
                </button>
                <button
                  onClick={resetSimulation}
                  className="text-gray-400 hover:text-white text-xs font-semibold tracking-wider uppercase flex items-center gap-2 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 9a8 8 0 0114-5.3M20 15a8 8 0 01-14 5.3" />
                  </svg>
                  Reset
                </button>
              </div>
            </div>

            {/* Right Isometric Graphical Render Container */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div
                className="w-full rounded-xl p-8 flex flex-col items-center justify-center text-center overflow-hidden relative border min-h-[440px]"
                style={{
                  background: "#090e17",
                  borderColor: "rgba(255,255,255,0.03)",
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1.2px, transparent 1.2px)",
                  backgroundSize: "24px 24px",
                }}
              >
                <div className="relative w-[320px] h-[220px] flex items-center justify-center scale-110">
                  <svg width="100%" height="100%" viewBox="0 0 240 180" className="overflow-visible">
                    <polygon
                      points="120,40 210,85 120,130 30,85"
                      fill="#111827"
                      stroke="rgba(255, 255, 255, 0.08)"
                      strokeWidth="1.5"
                    />
                    <line x1="75" y1="62.5" x2="165" y2="107.5" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
                    <line x1="120" y1="40" x2="120" y2="130" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
                    <line x1="165" y1="62.5" x2="75" y2="107.5" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />

                    <polygon
                      points="120,40 210,85 120,130 30,85"
                      fill="none"
                      stroke="#e2c77d"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="transition-all duration-700 ease-in-out"
                      style={{
                        strokeDasharray: "500",
                        strokeDashoffset: 500 - (year / 5) * 500,
                        opacity: year > 0 ? 0.85 : 0.1
                      }}
                    />

                    {year <= 4 && (
                      <g className="transition-opacity duration-500 ease-in-out">
                        <polygon
                          points="120,42 205,85 120,128 35,85"
                          fill="rgba(226, 199, 125, 0.02)"
                          stroke="rgba(226, 199, 125, 0.15)"
                          strokeWidth="1"
                        />
                        <circle cx="120" cy="85" r="3" fill="#e2c77d" className="animate-pulse" />
                        <circle cx="75" cy="62.5" r="2.5" fill="#e2c77d" opacity="0.7" />
                        <circle cx="165" cy="62.5" r="2.5" fill="#e2c77d" opacity="0.7" />
                        
                        <line x1="75" y1="62.5" x2="75" y2={62.5 - year * 4} stroke="#e2c77d" strokeWidth="1" strokeDasharray="2" />
                        <line x1="165" y1="62.5" x2="165" y2={62.5 - year * 4} stroke="#e2c77d" strokeWidth="1" strokeDasharray="2" />
                        <circle cx="75" cy={62.5 - year * 4} r="2" fill="#e2c77d" />
                        <circle cx="165" cy={62.5 - year * 4} r="2" fill="#e2c77d" />
                      </g>
                    )}

                    {year === 5 && (
                      <g className="transition-all duration-700 transform translate-y-0 opacity-100">
                        <g opacity="0.85">
                          <polygon points="90,75 110,85 110,40 90,30" fill="#0d1624" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                          <polygon points="110,85 130,75 130,30 110,40" fill="#172338" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                          <polygon points="90,30 110,40 130,30 110,20" fill="#24344f" stroke="rgba(226, 199, 125, 0.3)" strokeWidth="0.5" />
                          
                          <line x1="97" y1="45" x2="97" y2="65" stroke="#e2c77d" strokeWidth="1" opacity="0.4" strokeDasharray="1 3" />
                          <line x1="103" y1="48" x2="103" y2="68" stroke="#e2c77d" strokeWidth="1" opacity="0.4" strokeDasharray="1 3" />
                          <line x1="117" y1="48" x2="117" y2="68" stroke="#e2c77d" strokeWidth="1" opacity="0.4" strokeDasharray="1 3" />
                          <line x1="123" y1="45" x2="123" y2="65" stroke="#e2c77d" strokeWidth="1" opacity="0.4" strokeDasharray="1 3" />
                        </g>

                        <g>
                          <polygon points="110,110 145,127 145,47 110,30" fill="#0b1321" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
                          <polygon points="145,127 180,110 180,30 145,47" fill="#142035" stroke="rgba(255,255,255,0.08)" strokeWidth="0.75" />
                          <polygon points="110,30 145,47 180,30 145,13" fill="#20304a" stroke="#e2c77d" strokeWidth="1" />

                          {[0, 1, 2, 3, 4, 5].map((step) => {
                            const offset = step * 12;
                            return (
                              <g key={step} opacity="0.75">
                                <line x1="110" y1={42 + offset} x2="145" y2={59 + offset} stroke="#e2c77d" strokeWidth="1" />
                                <line x1="145" y1={59 + offset} x2="180" y2={42 + offset} stroke="#e2c77d" strokeWidth="1" />
                              </g>
                            );
                          })}
                          
                          <line x1="145" y1="13" x2="145" y2="-2" stroke="#e2c77d" strokeWidth="1" />
                          <circle cx="145" cy="-2" r="1.5" fill="#e2c77d" className="animate-ping" />
                        </g>
                      </g>
                    )}
                  </svg>
                </div>

                <div className="mt-4 max-w-sm transition-all duration-300">
                  <div className="flex items-center justify-center gap-1.5 text-white text-sm font-semibold tracking-wide">
                    {current.isExit && (
                      <svg className="w-4 h-4 text-[#e2c77d] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    )}
                    <p>{current.visualTitle}</p>
                  </div>
                  <p className="text-gray-400 text-xs mt-1 tracking-wide font-medium opacity-75">
                    {current.visualSubtext}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Yield Comparison */}
      <section ref={yieldSectionRef} className="bg-white border-t border-gray-100 font-sans select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Superior Yield
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 tracking-tight text-gray-900 leading-tight">
                Beat Inflation.
                <br />
                <span className="text-[#e2c77d]">Build Wealth.</span>
              </h2>
              
              <p className="text-gray-500 text-sm mb-10 max-w-xl leading-relaxed font-normal opacity-90">
                Earn passive income through rental payouts and benefit from long-term capital
                appreciation. Fractional real estate investing gives you portfolio
                diversification with institution-grade assets.
              </p>
              
              <div className="flex gap-12">
                <div className="border-l-[3px] border-[#c9a84c] pl-5">
                  <p className="text-3xl font-extrabold tracking-tight text-gray-955">6-8%</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Rental Yield</p>
                </div>
                <div className="border-l-[3px] border-gray-200 pl-5">
                  <p className="text-3xl font-extrabold tracking-tight text-gray-955">8-10%</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Capital Growth</p>
                </div>
              </div>
            </div>

            {/* Right Column Progress Blocks */}
            <div className="lg:col-span-6">
              <div 
                className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.04)] p-8 border"
                style={{ borderColor: "rgba(0,0,0,0.03)" }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#8693a6] mb-8">
                  5-Year Yield Comparison
                </p>
                <div className="space-y-6">
                  {yields.map((y) => (
                    <div key={y.label} className="group">
                      <div
                        className={`flex items-center justify-between text-xs mb-2 ${
                          y.highlight ? "text-[#c49a3c] font-bold" : "text-[#4b5565] font-semibold"
                        }`}
                      >
                        <span className="tracking-widest font-bold text-[11px]">{y.label}</span>
                        <span className="font-extrabold">{y.value}%</span>
                      </div>
                      
                      <div className="h-[7px] bg-[#f3f4f6] rounded-full overflow-hidden relative">
                        <div
                          className={`h-full ${y.color} rounded-full transition-all ease-out`}
                          style={{ 
                            width: animateYields ? `${(y.value / maxYield) * 100}%` : "0%",
                            transitionDuration: "1400ms"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
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

  const handleArticleClick = (slugString) => {
    router.push(`/knowledge-hub/articles/${slugString}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* Hero */}
      <div className="relative bg-gray-900 text-white overflow-hidden" style={{ minHeight: 320 }}>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80"
          alt="Real estate"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-2">Articles</h1>
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
            <h2 className="text-lg font-bold text-gray-900">All Articles</h2>
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

      {/* Knowledge That Empowers - Centered Layout Video Section */}
      <section className="relative overflow-hidden w-full min-h-[600px] lg:min-h-[660px]" style={{ background: "#0c1524" }}>
        <video
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "saturate(0.4) brightness(0.65) contrast(1.05)" }}
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
          className="absolute inset-0 z-[1]"
          style={{ background: "rgba(12,21,36,0.3)", mixBlendMode: "multiply" }}
        />
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(180deg, rgba(12,21,36,0.4) 0%, rgba(12,21,36,0.2) 40%, rgba(12,21,36,0.3) 70%, rgba(12,21,36,0.8) 100%)",
          }}
        />
        
        {/* Centered Typography Structure Content Box with Extended Top Spacing */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[600px] lg:min-h-[660px] pb-24 pt-40 lg:pt-48 flex flex-col justify-center items-center text-center">
          <div className="max-w-2xl px-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-5 leading-tight">
              Knowledge That Empowers
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-normal opacity-85">
              Our Committees advance industry knowledge through research papers, articles, and
              strategic analysis to illuminate solutions for the challenges facing today's built
              environment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}