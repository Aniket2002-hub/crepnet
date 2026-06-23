"use client";
import { useState } from "react";

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
          return <h2 key={i} className="text-lg font-bold text-gray-900 pt-3">{block.text}</h2>;
        if (block.type === "paragraph")
          return <p key={i} className="text-sm text-gray-600 leading-relaxed">{block.text}</p>;
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
      {/* Hero */}
      <div className="relative bg-gray-900 text-white overflow-hidden" style={{ minHeight: 380 }}>
        <img src={article.img} alt={article.title} className="absolute inset-0 w-full h-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          {/* Back */}
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-gray-300 hover:text-[#c9a84c] text-sm mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Market News
          </button>
          {/* Tag + meta */}
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full ${article.tagColor} ${article.tagBg}`}>
              {article.tag}
            </span>
            <span className="text-gray-400 text-sm">{article.date}</span>
            <span className="text-gray-400 text-sm">· {article.readTime}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold leading-snug mb-3 max-w-3xl">{article.title}</h1>
          <p className="text-gray-300 text-sm max-w-2xl">{article.desc}</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main article */}
          <article className="flex-1 min-w-0 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            {/* Author bar */}
            <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-100">
              <img src={article.authorImg} alt={article.author} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-gray-900">{article.author}</p>
                <p className="text-xs text-gray-400">{article.authorRole}</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                {/* Share */}
                <button className="w-8 h-8 rounded-full border border-gray-200 hover:border-[#c9a84c] hover:bg-amber-50 flex items-center justify-center transition-colors group">
                  <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#c9a84c]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z" />
                  </svg>
                </button>
                {/* Bookmark */}
                <button className="w-8 h-8 rounded-full border border-gray-200 hover:border-[#c9a84c] hover:bg-amber-50 flex items-center justify-center transition-colors group">
                  <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>
            </div>

            <ArticleBody body={article.body} />

            {/* Tags footer */}
            <div className="mt-8 pt-5 border-t border-gray-100">
              <p className="text-[11px] text-gray-400 mb-2 uppercase tracking-wide font-semibold">Tags</p>
              <div className="flex flex-wrap gap-2">
                {[article.tag, "India Real Estate", "2024", "Market Trends"].map((t) => (
                  <span key={t} className="px-3 py-1 bg-gray-100 hover:bg-amber-50 hover:text-[#c9a84c] rounded-full text-xs text-gray-600 cursor-pointer transition-colors">
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
                    className="w-full text-left group flex gap-3 items-start hover:bg-gray-50 rounded-xl p-2 -mx-2 transition-colors"
                  >
                    <img src={r.img} alt={r.title} className="w-14 h-14 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-200" />
                    <div className="min-w-0">
                      <span className={`text-[9px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${r.tagColor} ${r.tagBg}`}>{r.tag}</span>
                      <p className="text-xs font-semibold text-gray-800 group-hover:text-[#c9a84c] transition-colors mt-1 line-clamp-2 leading-snug">{r.title}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">{r.date}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Subscribe CTA */}
            <div className="bg-gradient-to-br from-[#c9a84c] to-[#a8872e] rounded-2xl p-4 text-white">
              <p className="font-bold text-sm mb-1">Get Market Alerts</p>
              <p className="text-xs text-amber-100 mb-3">Curated real estate news in your inbox.</p>
              <input className="w-full rounded-lg px-3 py-2 text-sm text-gray-900 outline-none mb-2 bg-white" placeholder="Your email address" />
              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg py-2 text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────────
export default function MarketNewsPage() {
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedId, setSelectedId] = useState(null);

  const selectedArticle = marketNewsData.find((n) => n.id === selectedId);

  // ── Detail view ──
  if (selectedArticle) {
    return (
      <DetailView
        article={selectedArticle}
        onBack={() => setSelectedId(null)}
        onNavigate={(id) => setSelectedId(id)}
      />
    );
  }

  // ── List view ──
  const filtered =
    active === "All"
      ? marketNewsData
      : marketNewsData.filter((n) => n.tag.toLowerCase().includes(active.toLowerCase()));

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
              <button key={t} className="px-3 py-1 bg-white/10 hover:bg-[#c9a84c]/30 border border-white/20 hover:border-[#c9a84c] rounded-full text-xs text-white transition-colors">
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