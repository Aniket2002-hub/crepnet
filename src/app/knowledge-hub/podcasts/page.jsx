"use client";
import { useState, useEffect, useRef } from "react";

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

// ── Shared Investment Highlights Component ─────────────────────────────────────
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
                  className="bg-[#e2c77d] hover:bg-[#d1b56c] disabled:opacity-40 disabled:cursor-not-allowed text-gray-955 font-semibold px-6 py-3 rounded text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-2 shadow-lg shadow-amber-955/20"
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

      {/* Investment Highlights Section */}
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
          <source src="https://assets.mixkit.co/videos/21246/21246-720.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(26,39,68,0.25)", mixBlendMode: "multiply" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(13,30,53,0.35) 0%, rgba(13,30,53,0.5) 45%, rgba(13,30,53,0.75) 100%)" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center flex flex-col justify-center" style={{ minHeight: 600 }}>
          <h2 className="text-white font-bold mb-6" style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "clamp(28px, 4.5vw, 48px)", lineHeight: 1.25 }}>
            Knowledge That Empowers
          </h2>
          <p className="text-gray-200 text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Our Committees advance industry knowledge through research papers, articles, and strategic analysis to illuminate solutions for the challenges facing today's built environment.
          </p>
        </div>
      </section>
    </div>
  );
}