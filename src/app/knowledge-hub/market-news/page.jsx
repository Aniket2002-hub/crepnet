"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const marketNewsData = [
  {
    id: 1, tag: "RESIDENTIAL", tagColor: "text-pink-600", tagBg: "bg-pink-50",
    title: "Mumbai Residential Sales Cross ₹1 Lakh Cr Mark for the First Time in 2024",
    desc: "Premium and luxury segment drives unprecedented volumes across South and Central Mumbai micro-markets.",
    date: "June 10, 2024", readTime: "5 min read",
    author: "Priya Mehta", authorRole: "Senior Real Estate Analyst",
    authorImg: "https://i.pravatar.cc/48?img=47",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80",
    body: [
      { type: "lead", text: "Mumbai's residential real estate market has achieved a historic milestone in 2024, with total sales crossing the ₹1 lakh crore mark for the first time ever—a testament to the city's enduring appeal and the growing appetite for premium living spaces." },
      { type: "heading", text: "Luxury Segment Leads the Charge" },
      { type: "paragraph", text: "Properties priced above ₹5 crore accounted for nearly 38% of total transaction value, a sharp jump from 24% in 2022. South Mumbai neighbourhoods like Worli, Lower Parel, and Prabhadevi witnessed the bulk of these high-value closures, with several projects recording sell-outs within days of launch." },
      { type: "quote", text: "We have never seen buyer confidence at this level. Ultra-HNIs who once parked capital in London or Dubai are now actively consolidating their real estate portfolio in Mumbai.", attribution: "CEO, Top-5 Mumbai Developer" },
      { type: "heading", text: "Micro-Markets to Watch" },
      { type: "paragraph", text: "Central Mumbai corridors including Bhandup, Mulund, and Vikhroli are emerging as the next frontier. Infrastructure improvements—especially the Eastern Freeway extension and the proposed Metro Line 4 interchange—have materially improved connectivity, attracting mid-income buyers priced out of the island city." },
      { type: "stats", items: [{ label: "Total Sales Value", value: "₹1.04 L Cr" }, { label: "Units Transacted", value: "1,42,000+" }, { label: "YoY Growth", value: "+31%" }, { label: "Avg Ticket Size", value: "₹73.2 L" }] },
      { type: "paragraph", text: "Analysts caution that sustaining this momentum depends on interest-rate stability and timely project delivery. With the RBI maintaining a measured stance and RERA enforcement tightening, most stakeholders remain cautiously optimistic heading into H2 2024." },
    ],
    relatedIds: [7, 9, 3],
  },
  {
    id: 2, tag: "COWORKING", tagColor: "text-indigo-600", tagBg: "bg-indigo-50",
    title: "WeWork India Expands to 5 New Cities Targeting Tier 2 Markets",
    desc: "Flexible workspace operator eyes Jaipur, Kochi, Ahmedabad, Chandigarh and Nagpur in major expansion push.",
    date: "June 9, 2024", readTime: "4 min read",
    author: "Rohan Kapoor", authorRole: "Commercial Real Estate Reporter",
    authorImg: "https://i.pravatar.cc/48?img=12",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
    body: [
      { type: "lead", text: "WeWork India is doubling down on Tier 2 cities, announcing a five-city expansion that signals a structural shift in where India's knowledge workforce wants to be located." },
      { type: "heading", text: "Why Tier 2 Now?" },
      { type: "paragraph", text: "Hybrid work has permanently altered enterprise real estate strategy. Companies are increasingly willing to sign satellite-office leases in employees' home cities rather than mandate relocation to metros. This has created a deep, untapped demand pool across Jaipur, Kochi, Ahmedabad, Chandigarh, and Nagpur." },
      { type: "quote", text: "Tier 2 occupancy across our pilot centres in Pune and Indore hit 91% within eight months. That data gave us the conviction to accelerate.", attribution: "MD, WeWork India" },
      { type: "stats", items: [{ label: "New Cities", value: "5" }, { label: "Planned Seats", value: "12,000+" }, { label: "Capex Committed", value: "₹480 Cr" }, { label: "Target Occupancy", value: "85%" }] },
      { type: "paragraph", text: "Each new centre will be between 40,000–80,000 sq ft and designed to serve a mix of enterprise clients, SMEs, and freelancers. WeWork India expects to be EBITDA-positive at a portfolio level by Q3 2025." },
    ],
    relatedIds: [8, 4, 5],
  },
  {
    id: 3, tag: "INFRASTRUCTURE", tagColor: "text-yellow-700", tagBg: "bg-yellow-50",
    title: "PM Gati Shakti Plan Unlocks ₹12,000 Cr Worth of Real Estate Opportunities",
    desc: "Infrastructure push along key freight corridors expected to catalyze warehousing and logistics development.",
    date: "June 8, 2024", readTime: "6 min read",
    author: "Ananya Singh", authorRole: "Infrastructure & Logistics Correspondent",
    authorImg: "https://i.pravatar.cc/48?img=32",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    body: [
      { type: "lead", text: "The PM Gati Shakti National Master Plan is doing more than moving freight—it's rewriting the map of investable real estate across India's industrial heartland." },
      { type: "heading", text: "Corridors Creating Value" },
      { type: "paragraph", text: "The Eastern and Western Dedicated Freight Corridors, now largely operational, have catalysed land acquisition activity across Rajasthan, Haryana, UP, and Bihar. Industrial parks, cold-chain facilities, and Grade-A warehouses are being developed at scale by both domestic and foreign PE-backed platforms." },
      { type: "stats", items: [{ label: "RE Opportunity Unlocked", value: "₹12,000 Cr" }, { label: "Warehousing Pipeline", value: "48 mn sq ft" }, { label: "Key Corridors", value: "6" }, { label: "States Impacted", value: "14" }] },
      { type: "paragraph", text: "Institutional investors including GIC, Blackstone, and ESR have already committed capital to logistics parks within 10 km of DFC nodes. Land prices in these pockets have appreciated 40–60% since 2022, compressing yields but validating the long-term thesis." },
    ],
    relatedIds: [9, 1, 5],
  },
  {
    id: 4, tag: "PROPTECH", tagColor: "text-cyan-600", tagBg: "bg-cyan-50",
    title: "NoBroker Raises $100 Mn Series F to Accelerate AI-Powered Property Search",
    desc: "Bengaluru-based proptech unicorn plans to expand AI capabilities and enter new rental markets across India.",
    date: "June 7, 2024", readTime: "4 min read",
    author: "Vikram Nair", authorRole: "Tech & PropTech Reporter",
    authorImg: "https://i.pravatar.cc/48?img=53",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    body: [
      { type: "lead", text: "NoBroker has closed a $100 million Series F round, doubling down on its AI-first approach to property discovery at a time when the Indian rental market is undergoing rapid digitisation." },
      { type: "heading", text: "What the Capital Will Fund" },
      { type: "paragraph", text: "A significant portion of the raise will go towards building out a large language model trained specifically on Indian property data—lease clauses, locality nuances, vastu compliance, and regional price signals. The company also plans to launch NoBroker Pay, an integrated rent-payment and deposit-management product." },
      { type: "stats", items: [{ label: "Round Size", value: "$100 Mn" }, { label: "Valuation", value: "$1.4 Bn" }, { label: "Monthly Listings", value: "4.2 Mn" }, { label: "Cities Active", value: "12" }] },
    ],
    relatedIds: [2, 8, 5],
  },
  {
    id: 5, tag: "DATA CENTRES", tagColor: "text-violet-600", tagBg: "bg-violet-50",
    title: "India's Data Centre Capacity to Triple by 2027: CBRE Report",
    desc: "Hyperscalers and domestic operators fuel land acquisition across Mumbai, Chennai, Hyderabad and Pune.",
    date: "June 6, 2024", readTime: "5 min read",
    author: "Siddharth Rao", authorRole: "Data Centre & Tech Infrastructure Analyst",
    authorImg: "https://i.pravatar.cc/48?img=68",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    body: [
      { type: "lead", text: "India is on the cusp of a data centre supercycle. A new CBRE report projects that the country's installed capacity will grow from roughly 900 MW today to over 2,700 MW by 2027—a tripling that would make it one of the fastest-growing markets globally." },
      { type: "heading", text: "Hyperscalers Drive Demand" },
      { type: "paragraph", text: "Microsoft, Google, and Amazon have each announced multi-billion-dollar India investments, anchored by data centre campuses in Hyderabad and Pune. Domestic operators like CtrlS, Nxtra, and Yotta are aggressively pre-leasing to fill the gap between hyperscaler build-outs." },
      { type: "stats", items: [{ label: "Current Capacity", value: "900 MW" }, { label: "2027 Projection", value: "2,700 MW" }, { label: "Active Clusters", value: "4 Cities" }, { label: "Investment Pipeline", value: "$10 Bn+" }] },
    ],
    relatedIds: [4, 3, 2],
  },
  {
    id: 6, tag: "HOSPITALITY", tagColor: "text-rose-600", tagBg: "bg-rose-50",
    title: "Hotel Room Supply in India Set to Double Over Next 5 Years",
    desc: "Branded budget and mid-scale segments lead pipeline additions as domestic travel touches record highs.",
    date: "June 5, 2024", readTime: "4 min read",
    author: "Kavya Iyer", authorRole: "Hospitality Real Estate Correspondent",
    authorImg: "https://i.pravatar.cc/48?img=23",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    body: [
      { type: "lead", text: "India's hotel industry is entering its biggest supply cycle in a decade, with branded room count expected to double from 170,000 keys today to over 340,000 by 2029." },
      { type: "heading", text: "Budget and Mid-Scale Lead" },
      { type: "paragraph", text: "Chains like OYO Townhouse, Lemon Tree, and Marriott's Fairfield brand are aggressively franchising to capture the aspirational domestic traveller. Tier 2 and religious tourism corridors—Varanasi, Tirupati, Ayodhya, Shirdi—account for nearly 40% of the pipeline." },
      { type: "stats", items: [{ label: "Current Supply", value: "1.7 L Keys" }, { label: "2029 Target", value: "3.4 L Keys" }, { label: "Pipeline Growth", value: "+100%" }, { label: "Tier 2 Share", value: "40%" }] },
    ],
    relatedIds: [1, 7, 3],
  },
  {
    id: 7, tag: "RESIDENTIAL", tagColor: "text-pink-600", tagBg: "bg-pink-50",
    title: "NCR Luxury Housing Sales Up 65% YoY in Q1 2024",
    desc: "Golf Course Road and Aerocity corridors emerge as hotspots for ₹5 Cr+ unit launches.",
    date: "June 4, 2024", readTime: "5 min read",
    author: "Priya Mehta", authorRole: "Senior Real Estate Analyst",
    authorImg: "https://i.pravatar.cc/48?img=47",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    body: [
      { type: "lead", text: "Delhi-NCR's luxury residential segment has posted its strongest quarter on record, with transactions above ₹5 crore surging 65% year-on-year in Q1 2024." },
      { type: "heading", text: "Where Buyers Are Looking" },
      { type: "paragraph", text: "Golf Course Road in Gurugram and the Aerocity–Dwarka Expressway corridor are the two clear hotspots. Several developers launched projects in the ₹8–15 crore range and reported full subscription within the first week of opening bookings." },
      { type: "stats", items: [{ label: "YoY Growth", value: "+65%" }, { label: "Units Above ₹5 Cr", value: "3,800+" }, { label: "Top Micro-Market", value: "Golf Course Rd" }, { label: "Avg Unit Size", value: "3,200 sq ft" }] },
    ],
    relatedIds: [1, 9, 6],
  },
  {
    id: 8, tag: "COWORKING", tagColor: "text-indigo-600", tagBg: "bg-indigo-50",
    title: "Flexible Office Demand Hits All-Time High in Pune and Hyderabad",
    desc: "Managed offices account for nearly 22% of total office leasing in Q1 2024 across the two cities.",
    date: "June 3, 2024", readTime: "4 min read",
    author: "Rohan Kapoor", authorRole: "Commercial Real Estate Reporter",
    authorImg: "https://i.pravatar.cc/48?img=12",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
    body: [
      { type: "lead", text: "Managed and flexible office space has crossed a critical inflection point in Pune and Hyderabad, now representing 22% of total office leasing—a figure once considered the exclusive domain of traditional Grade-A landlords." },
      { type: "heading", text: "Enterprise Demand Drives Growth" },
      { type: "paragraph", text: "Large enterprises are now the primary demand driver for flex spaces, overtaking startups for the first time. IT/ITeS companies in particular are using managed offices as a buffer against uncertain headcount projections, preferring short 12–24 month commitments over traditional 5-year leases." },
      { type: "stats", items: [{ label: "Flex Share of Leasing", value: "22%" }, { label: "Net Absorption Q1", value: "4.1 mn sq ft" }, { label: "Operators Active", value: "18+" }, { label: "Avg Seat Cost", value: "₹8,200/mo" }] },
    ],
    relatedIds: [2, 4, 5],
  },
  {
    id: 9, tag: "INFRASTRUCTURE", tagColor: "text-yellow-700", tagBg: "bg-yellow-50",
    title: "Mumbai Trans Harbour Link Boosts Navi Mumbai Property Values by 18%",
    desc: "New connectivity corridor triggers fresh launches and investor interest in Ulwe, Dronagiri and Kharghar.",
    date: "June 2, 2024", readTime: "5 min read",
    author: "Ananya Singh", authorRole: "Infrastructure & Logistics Correspondent",
    authorImg: "https://i.pravatar.cc/48?img=32",
    img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
    body: [
      { type: "lead", text: "The Mumbai Trans Harbour Link—India's longest sea bridge—has done more than cut commute times. In just six months since opening, it has lifted residential property values in select Navi Mumbai pockets by up to 18%." },
      { type: "heading", text: "Ulwe and Dronagiri in the Spotlight" },
      { type: "paragraph", text: "Ulwe, positioned as the residential gateway to the upcoming Navi Mumbai International Airport, has seen launch prices jump from ₹8,500 to ₹10,200 per sq ft since the bridge opened. Dronagiri, slated for a major port-adjacent industrial zone, is attracting institutional land buyers for the first time." },
      { type: "stats", items: [{ label: "Value Appreciation", value: "+18%" }, { label: "Top Micro-Market", value: "Ulwe" }, { label: "New Launches", value: "23 Projects" }, { label: "Bridge Length", value: "21.8 km" }] },
    ],
    relatedIds: [1, 3, 7],
  },
];

const newsFilters = ["All", "Residential", "Coworking", "Infrastructure", "PropTech", "Data Centres", "Hospitality"];

const headingFontClass = { fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' };

// ── Article body renderer ──────────────────────────────────────────────────────
function ArticleBody({ body }) {
  return (
    <div className="space-y-5">
      {body.map((block, i) => {
        if (block.type === "lead")
          return (
            <p key={i} className="text-base text-gray-700 font-medium leading-relaxed border-l-4 border-[#c9a84c] pl-4">
              {block.text}
            </p>
          );
        if (block.type === "heading")
          return <h2 key={i} style={headingFontClass} className="text-lg font-bold text-gray-900 pt-3">{block.text}</h2>;
        if (block.type === "paragraph")
          return <p key={i} className="text-sm text-gray-600 leading-relaxed font-light">{block.text}</p>;
        if (block.type === "quote")
          return (
            <blockquote key={i} className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-2">
              <p className="text-gray-800 italic text-sm leading-relaxed mb-2">"{block.text}"</p>
              <p className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide">— {block.attribution}</p>
            </blockquote>
          );
        if (block.type === "stats")
          return (
            <div key={i} className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-2">
              {block.items.map((s, j) => (
                <div key={j} className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center">
                  <div className="text-lg font-bold text-[#c9a84c]">{s.value}</div>
                  <div className="text-[11px] text-gray-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          );
        return null;
      })}
    </div>
  );
}

// ── Detail view ────────────────────────────────────────────────────────────────
function DetailView({ article, onBack, onNavigate }) {
  const related = (article.relatedIds || [])
    .map((id) => marketNewsData.find((n) => n.id === id))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Banner Size updated dynamically via padding metrics to align with reference parameters */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        <img src={article.img} alt={article.title} className="absolute inset-0 w-full h-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 py-10 lg:px-12 lg:py-14">
          {/* Back */}
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-gray-300 hover:text-[#c9a84c] text-xs font-medium tracking-wider uppercase mb-6 transition-colors bg-transparent border-0 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Market News
          </button>
          {/* Tag + meta */}
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${article.tagColor} ${article.tagBg}`}>
              {article.tag}
            </span>
            <span className="text-slate-300 text-xs font-light">{article.date}</span>
            <span className="text-slate-300 text-xs font-light">· {article.readTime}</span>
          </div>
          <h1 style={headingFontClass} className="text-[clamp(24px,3vw,42px)] font-serif font-normal leading-[1.25] tracking-wide mb-3 max-w-3xl">{article.title}</h1>
          <div className="mt-4 h-[2px] w-16 bg-[#c9a84c] mb-4" />
          <p className="text-slate-200 font-light leading-[1.7] max-w-xl text-sm">{article.desc}</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main article */}
          <article className="flex-1 min-w-0 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            {/* Author bar */}
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-100">
              <img src={article.authorImg} alt={article.author} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-gray-900">{article.author}</p>
                <p className="text-xs text-gray-400 font-light">{article.authorRole}</p>
              </div>
            </div>

            <ArticleBody body={article.body} />

            {/* Tags footer */}
            <div className="mt-8 pt-5 border-t border-gray-100">
              <p className="text-[11px] text-gray-400 mb-2 uppercase tracking-wide font-semibold">Tags</p>
              <div className="flex flex-wrap gap-2">
                {[article.tag, "India Real Estate", "2024", "Market Trends"].map((t) => (
                  <span key={t} className="px-3 py-1 bg-gray-100 hover:bg-amber-50 hover:text-[#c9a84c] rounded-full text-xs text-gray-600 cursor-pointer transition-colors font-light">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0 space-y-5">
            {/* Related */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-3">Related Articles</p>
              <div className="space-y-3">
                {related.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => onNavigate(r.id)}
                    className="w-full text-left group flex gap-3 items-start hover:bg-gray-50 rounded-xl p-2 -mx-2 transition-colors border-0 bg-transparent cursor-pointer"
                  >
                    <img src={r.img} alt={r.title} className="w-14 h-14 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-200" />
                    <div className="min-w-0">
                      <span className={`text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${r.tagColor} ${r.tagBg}`}>{r.tag}</span>
                      <p style={headingFontClass} className="text-xs font-serif font-normal text-gray-800 group-hover:text-[#c9a84c] transition-colors mt-1 line-clamp-2 leading-snug">{r.title}</p>
                      <p className="text-[11px] text-gray-400 font-light mt-0.5">{r.date}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

// ── Investment Highlights Sub-Section ─────────────────────────────────────────
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

  const borderStyle = { borderColor: "rgba(255,255,255,0.03)" };
  const graphStyle = { borderColor: "rgba(0,0,0,0.03)" };

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
      <section style={{ background: "#0c1524" }} className="relative overflow-hidden select-none text-white antialiased">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h2 style={headingFontClass} className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-6 leading-tight">
                Land Development Plan.<br /><span className="text-[#e2c77d]">After 5 Years.</span>
              </h2>
              <p className="text-gray-400 text-sm mb-8 max-w-xl leading-relaxed font-light opacity-70">
                Watch raw land acquire intrinsic value over time, followed by structural development options to trigger maximum exit valuation.
              </p>

              <div className="rounded-xl p-6 mb-8 transition-all duration-300" style={{ background: "rgba(18, 30, 49, 0.6)", border: "1px solid rgba(255, 255, 255, 0.05)", boxShadow: "inset 0 1px 2px rgba(255,255,255,0.05)" }}>
                <span className="inline-block bg-white/5 border border-white/10 text-gray-300 text-[10px] font-bold px-3 py-1 rounded mb-4 tracking-wider uppercase">{current.stageTag}</span>
                <p className="text-[11px] text-gray-400 uppercase tracking-widest font-medium mb-1">Estimated Value</p>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-4xl font-extrabold text-[#e2c77d] tracking-tight">₹{current.value.toFixed(2)} Cr</span>
                  <span className="text-xs font-semibold text-gray-400">({current.returnPct}% {current.isExit ? "overall return" : "return"})</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light opacity-90">{current.desc}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                  <span>Holding Phase</span><span>Year {year} of 5</span>
                </div>
                <div className="relative flex items-center justify-between px-1">
                  <div className="absolute left-1 right-1 h-[3px] rounded bg-gray-800 top-1/2 -translate-y-1/2" />
                  <div className="absolute left-1 h-[3px] rounded bg-[#e2c77d] top-1/2 -translate-y-1/2 transition-all duration-500 ease-out" style={{ width: `${(year / 5) * 98}%` }} />
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <button key={i} onClick={() => !simulating && setYear(i)} disabled={simulating} className="relative z-10 w-4 h-4 rounded-full border-2 transition-all focus:outline-none disabled:cursor-not-allowed" style={i <= year ? { background: "#e2c77d", borderColor: "#e2c77d", boxShadow: i === year ? "0 0 0 6px rgba(226, 199, 125, 0.2)" : "none" } : { background: "#0c1524", borderColor: "#1e293b" }} />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6">
                <button onClick={runSimulation} disabled={simulating} className="bg-[#e2c77d] hover:bg-[#d1b56c] disabled:opacity-40 disabled:cursor-not-allowed text-gray-955 font-semibold px-6 py-3 rounded text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-2 shadow-lg shadow-amber-955/20">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20" /></svg>
                  {simulating ? "Simulating..." : "Simulate 5-Yr Hold"}
                </button>
                <button onClick={resetSimulation} className="text-gray-400 hover:text-white text-xs font-semibold tracking-wider uppercase flex items-center gap-2 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4 9a8 8 0 0114-5.3M20 15a8 8 0 01-14 5.3" /></svg>
                  Reset
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="w-full rounded-xl p-8 flex flex-col items-center justify-center text-center overflow-hidden relative border min-h-[440px]" style={{ background: "#090e17", borderColor: borderStyle.borderColor, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1.2px, transparent 1.2px)", backgroundSize: "24px 24px" }}>
                <div className="relative w-[320px] h-[220px] flex items-center justify-center scale-110">
                  <svg width="100%" height="100%" viewBox="0 0 240 180" className="overflow-visible">
                    <polygon points="120,40 210,85 120,130 30,85" fill="#111827" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />
                    <line x1="75" y1="62.5" x2="165" y2="107.5" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
                    <line x1="120" y1="40" x2="120" y2="130" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
                    <line x1="165" y1="62.5" x2="75" y2="107.5" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
                    <polygon points="120,40 210,85 120,130 30,85" fill="none" stroke="#e2c77d" strokeWidth="2" strokeLinecap="round" className="transition-all duration-700 ease-in-out" style={{ strokeDasharray: "500", strokeDashoffset: 500 - (year / 5) * 500, opacity: year > 0 ? 0.85 : 0.1 }} />
                    {year <= 4 && (
                      <g className="transition-opacity duration-500 ease-in-out">
                        <polygon points="120,42 205,85 120,128 35,85" fill="rgba(226, 199, 125, 0.02)" stroke="rgba(226, 199, 125, 0.15)" strokeWidth="1" />
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
                  <p className="text-gray-400 text-xs mt-1 tracking-wide font-medium font-light opacity-75">{current.visualSubtext}</p>
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
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-4">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                Superior Yield
              </div>
              <h2 style={headingFontClass} className="text-2xl sm:text-3xl font-extrabold mb-6 tracking-tight text-gray-900 leading-tight">
                Beat Inflation.<br /><span className="text-[#e2c77d]">Build Wealth.</span>
              </h2>
              <p className="text-gray-500 text-sm mb-10 max-w-xl leading-relaxed font-light opacity-90">
                Earn passive income through rental payouts and benefit from long-term capital appreciation. Fractional real estate investing gives you portfolio diversification with institution-grade assets.
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

            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.04)] p-8 border" style={{ borderColor: graphStyle.borderColor }}>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#8693a6] mb-8">5-Year Yield Comparison</p>
                <div className="space-y-6">
                  {yields.map((y) => (
                    <div key={y.label} className="group">
                      <div className={`flex items-center justify-between text-xs mb-2 ${y.highlight ? "text-[#c49a3c] font-bold" : "text-[#4b5565] font-semibold"}`}>
                        <span className="tracking-widest font-bold text-[11px]">{y.label}</span>
                        <span className="font-extrabold">{y.value}%</span>
                      </div>
                      <div className="h-[7px] bg-[#f3f4f6] rounded-full overflow-hidden relative">
                        <div className="h-full ${y.color} rounded-full transition-all ease-out" style={{ width: animateYields ? `${(y.value / maxYield) * 100}%` : "0%", transitionDuration: "1400ms" }} />
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

// ── Main page ──────────────────────────────────────────────────────────────────
export default function MarketNewsPage() {
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedId, setSelectedId] = useState(null);

  const selectedArticle = marketNewsData.find((n) => n.id === selectedId);

  if (selectedArticle) {
    return (
      <DetailView
        article={selectedArticle}
        onBack={() => setSelectedId(null)}
        onNavigate={(id) => setSelectedId(id)}
      />
    );
  }

  const filtered =
    active === "All"
      ? marketNewsData
      : marketNewsData.filter((n) => n.tag.toLowerCase().includes(active.toLowerCase()));

  const visible = filtered.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* 1st Section Hero Banner — Sized and padding-managed exactly to reflect reference parameters */}
      <section className="relative overflow-hidden bg-[#0B1F3A] min-h-[370px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80"
            alt="hero background"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/85 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-14">
          {/* <p className="text-sm font-semibold tracking-[0.2em] text-[#E8A33D] uppercase">
            Surveys
          </p> */}
          <h1 className="max-w-2xl font-serif text-[clamp(24px,3vw,42px)] font-normal leading-[1.25] text-white tracking-wide mt-1">
            Market News &amp; Trends.
            <br />
            Data-Driven Insights.
            <br />
            Shaping Strategic Decisions.
          </h1>
          <div className="mt-4 h-[2px] w-16 bg-[#E8A33D]" />
          <p className="mt-4 max-w-xl text-sm font-light leading-[1.7] text-slate-200">
            Stay ahead with the latest updates, deals and developments shaping India's diverse real estate landscape.
          </p>
        </div>
      </section>

      {/* Content Grid Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
            <h2 style={headingFontClass} className="text-xl font-bold text-gray-900">All Market News</h2>
            <p className="text-gray-500 text-sm mt-0.5">Showing {filtered.length} result{filtered.length !== 1 ? "s" : ""}</p>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
            {newsFilters.map((f) => (
              <button
                key={f}
                onClick={() => { setActive(f); setVisibleCount(6); }}
                className={`px-4 py-1.5 text-sm rounded-full cursor-pointer border transition-colors font-medium whitespace-nowrap shrink-0 ${
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
              onClick={() => setSelectedId(n.id)}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-[0_4px_20px_rgba(201,168,76,0.18)] transition-all duration-200 cursor-pointer group p-4 flex gap-4 items-start"
            >
              <div className="relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden">
                <img src={n.img} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full ${n.tagColor} ${n.tagBg}`}>
                    {n.tag}
                  </span>
                  <span className="text-xs text-gray-400 font-light">{n.date}</span>
                </div>
                <h3 style={headingFontClass} className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-[#c9a84c] transition-colors mb-1">
                  {n.title}
                </h3>
                <p className="text-xs text-gray-500 line-clamp-2 font-light">{n.desc}</p>
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

        {/* Empty State view */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="w-14 h-14 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </div>
            <p className="text-gray-500 text-sm font-light">No news found for this category.</p>
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

      {/* Investment Highlights Section inclusion */}
      <InvestmentHighlights />

      {/* Cinematic Content Section */}
      <section className="relative overflow-hidden flex items-center justify-start" style={{ background: "#0d1e35", minHeight: 600 }}>
        <video
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: "saturate(0.4) brightness(0.45) contrast(1.05)" }}
          autoPlay loop muted playsInline
          poster="https://assets.mixkit.co/videos/21246/21246-thumb-360-0.jpg"
        >
          <source src="https://assets.mixkit.co/videos/21246/21246-720.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(13,30,53,0.5)", mixBlendMode: "multiply" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(13,30,53,0.85) 0%, rgba(13,30,53,0.65) 45%, rgba(13,30,53,0.1) 100%)" }} />
        
        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-32 flex flex-col justify-center items-start text-left" style={{ minHeight: 600 }}>
          <div className="max-w-3xl">
            <h2
              style={{ ...headingFontClass, fontSize: "clamp(24px, 3vw, 42px)", lineHeight: 1.25 }}
              className="text-white font-normal mb-6 text-left"
            >
              Knowledge That Empowers
            </h2>
            <p className="text-slate-200 text-sm font-light leading-[1.7] text-left max-w-2xl opacity-90">
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