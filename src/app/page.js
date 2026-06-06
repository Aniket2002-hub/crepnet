"use client";
import { useState } from "react";
import Link from "next/link";
import { 
  Users, Building2, BarChart3, Globe2, 
  ShoppingBag, Hotel, Truck, BadgeDollarSign, 
  Globe, Construction, Store, TrendingUp, 
  Handshake, Settings2, Landmark, ArrowRight, PlayCircle
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const HERO_STATS = [
  { title: "One Platform", subtitle: "All Stakeholders", icon: Users },
  { title: "More Opportunities", subtitle: "Business & Growth", icon: Handshake },
  { title: "Real Intelligence", subtitle: "Data · Insights · Trends", icon: BarChart3 },
  { title: "Global Connections", subtitle: "Local Expertise", icon: Globe2 },
];

const ECOSYSTEM_ITEMS = [
  {
    title: "Office",
    subtitle: "Offices, GCCs, Flex & Coworking Spaces",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
    icon: Building2,
  },
  {
    title: "Retail",
    subtitle: "Malls, High Streets, Luxury & Brands",
    img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&q=80",
    icon: ShoppingBag,
  },
  {
    title: "Hospitality",
    subtitle: "Hotels, Resorts, Serviced Apartments",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
    icon: Hotel,
  },
  {
    title: "Logistics & Industrial",
    subtitle: "Warehousing, Parks, Supply Chain Hubs",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80",
    icon: Truck,
  },
  {
    title: "Investments",
    subtitle: "REITs, Funds, IPCs & Private Equity",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
    icon: BadgeDollarSign,
  },
  {
    title: "International Trade",
    subtitle: "Trade Bodies, Missions, Global Expansion",
    img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=400&q=80",
    icon: Globe,
  },
];

const STAKEHOLDERS = [
  { title: "Developers", subtitle: "Create & Showcase Your Projects", icon: Construction },
  { title: "Occupiers & Brands", subtitle: "Find the Right Spaces to Grow", icon: Store },
  { title: "Investors", subtitle: "Discover High-Quality Investment Opportunities", icon: TrendingUp },
  { title: "Consultants & Advisors", subtitle: "Expand Your Network & Influence", icon: Users },
  { title: "Service Providers", subtitle: "Offer Solutions & Build Partnerships", icon: Settings2 },
  { title: "Government & Trade Bodies", subtitle: "Promote Trade & Economic Growth", icon: Landmark },
];

const OPPORTUNITIES = [
  {
    cat: "OFFICE SPACE",
    catCls: "text-blue-600 bg-blue-50",
    title: "Grade A Office Building",
    loc: "BKC, Mumbai",
    size: "250,000 sq ft",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&q=80",
    tab: "Office",
  },
  {
    cat: "RETAIL SPACE",
    catCls: "text-emerald-600 bg-emerald-50",
    title: "Premium High Street Space",
    loc: "Connaught Place, New Delhi",
    size: "4,500 sq ft",
    img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=200&q=80",
    tab: "Retail",
  },
  {
    cat: "WAREHOUSE",
    catCls: "text-orange-600 bg-orange-50",
    title: "Logistics Park",
    loc: "NH-48, Bengaluru",
    size: "500,000 sq ft",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&q=80",
    tab: "Logistics",
  },
];

const STATS = [
  { value: "10,000+", label: "Professionals", icon: Users },
  { value: "2,500+", label: "Companies", icon: Building2 },
  { value: "30+", label: "Countries Connected", icon: Globe2 },
  { value: "5,000+", label: "Opportunities", icon: Handshake },
  { value: "100+", label: "Cities Covered", icon: TrendingUp },
];

// ─────────────────────────────────────────────────────────────
// HERO SECTION — matches screenshot exactly
// ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "85vh", background: "#0d1e35" }}>
      {/* Background cityscape image — right-aligned, fading left */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=90')",
          backgroundPosition: "60% center",
        }}
      />
      {/* Dark overlay — stronger on left, transparent on right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #0d1e35 38%, rgba(13,30,53,0.82) 58%, rgba(13,30,53,0.3) 80%, rgba(13,30,53,0.05) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 flex flex-col justify-center" style={{ minHeight: "90vh", paddingTop: "60px", paddingBottom: "100px" }}>

        {/* Left column: text + CTAs */}
        <div className="max-w-xl">
          <h1
            className="text-white font-bold leading-tight mb-3"
            style={{ fontSize: "clamp(26px, 3.5vw, 42px)", letterSpacing: "-0.01em" }}
          >
            India's Premier Network for<br />Commercial Real Estate
          </h1>

          {/* Gold accent line under heading */}
          <div style={{ width: "64px", height: "3px", background: "#be9438", borderRadius: "2px", marginBottom: "20px" }} />

          <p className="text-gray-300 mb-8" style={{ fontSize: "15px", lineHeight: "1.65", fontWeight: 300 }}>
            Connecting Office, Retail, Hospitality, Logistics &amp; Investments with Global Opportunities.
            <br />
            <span className="text-white font-medium">One Network. Endless Possibilities.</span>
          </p>

          {/* CTA Buttons — matching screenshot */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/join"
              className="flex items-center gap-2 font-semibold text-white transition-all"
              style={{
                background: "#be9438",
                padding: "11px 26px",
                borderRadius: "6px",
                fontSize: "14px",
                letterSpacing: "0.01em",
              }}
            >
              Join the Network <ArrowRight size={16} />
            </Link>
            <Link
              href="/ecosystem"
              className="flex items-center gap-2 font-semibold text-white transition-all"
              style={{
                border: "1.5px solid rgba(255,255,255,0.55)",
                padding: "11px 26px",
                borderRadius: "6px",
                fontSize: "14px",
                letterSpacing: "0.01em",
                background: "transparent",
              }}
            >
              Explore the Ecosystem <PlayCircle size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom-right stat boxes — positioned absolutely to lower-right of section */}
        <div
          className="absolute bottom-0 right-0 flex"
          style={{
            background: "rgba(10,22,40,0.72)",
            backdropFilter: "blur(4px)",
          }}
        >
          {HERO_STATS.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center text-white"
              style={{
                padding: "20px 28px",
                borderLeft: idx > 0 ? "1px solid rgba(255,255,255,0.08)" : "none",
                minWidth: "130px",
              }}
            >
              <item.icon
                className="mb-3"
                style={{ width: "28px", height: "28px", color: "rgba(255,255,255,0.7)", strokeWidth: 1.5 }}
              />
              <h4 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.02em", lineHeight: 1.2 }}>
                {item.title}
              </h4>
              <p style={{ fontSize: "11px", color: "#9ca3af", marginTop: "3px" }}>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// ECOSYSTEM SECTION
// ─────────────────────────────────────────────────────────────
function EcosystemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-4">A Connected Ecosystem</p>
          <h2 className="text-4xl font-bold text-[#1a2744]">
            All of Commercial Real Estate. <span className="text-[#c9a84c]">One Platform.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {ECOSYSTEM_ITEMS.map((item) => (
            <div key={item.title} className="group flex flex-col bg-[#F8FAFC] rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-[#1a2744]" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-[#1a2744] text-base mb-1">{item.title}</h3>
                <p className="text-gray-500 text-[11px] leading-tight">{item.subtitle}</p>
              </div>
              <div className="mt-auto h-32 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// STAKEHOLDERS & MARKETPLACE
// ─────────────────────────────────────────────────────────────
function StakeholdersSection() {
  const [activeTab, setActiveTab] = useState("All");
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20">
        
        <div>
          <p className="text-[#c9a84c] text-xs font-bold tracking-widest uppercase mb-4">Who We Connect</p>
          <h2 className="text-4xl font-bold text-[#1a2744] leading-tight mb-12">
            Bringing Together the Right People & Opportunities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STAKEHOLDERS.map((s) => (
              <div key={s.title} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 hover:border-[#c9a84c]/50 transition-all group cursor-pointer">
                <div className="p-3 rounded-lg bg-gray-50 group-hover:bg-[#c9a84c]/10 text-[#1a2744] transition-colors">
                  <s.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1a2744] text-sm">{s.title}</h4>
                  <p className="text-gray-500 text-[11px]">{s.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-10 bg-[#1a2744] text-white px-8 py-3 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-black transition-colors">
            View All Stakeholders <ArrowRight size={16} />
          </button>
        </div>

        <div className="bg-[#0A1628] rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
            <span className="text-[#c9a84c] text-[10px] font-bold tracking-widest uppercase">Live Marketplace</span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-8">Explore Opportunities</h3>
          
          <div className="flex gap-4 border-b border-white/10 mb-8 overflow-x-auto pb-2">
            {["All", "Office", "Retail", "Hospitality", "Logistics"].map(tab => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-medium pb-2 transition-all ${activeTab === tab ? "text-[#c9a84c] border-b-2 border-[#c9a84c]" : "text-gray-500"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {OPPORTUNITIES.map((opp, i) => (
              <div key={i} className="flex gap-4 bg-white/5 hover:bg-white/10 p-4 rounded-2xl transition-all cursor-pointer items-center border border-white/5">
                <img src={opp.img} className="w-20 h-16 object-cover rounded-xl" />
                <div className="flex-1">
                  <span className="text-[9px] font-bold text-[#c9a84c] uppercase tracking-tighter">{opp.cat}</span>
                  <h4 className="text-white font-bold text-sm">{opp.title}</h4>
                  <p className="text-gray-500 text-xs">{opp.loc}</p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold text-sm">{opp.size}</p>
                  <p className="text-emerald-400 text-[10px] font-bold">Available</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="mt-8 text-[#c9a84c] font-bold text-sm flex items-center gap-2 hover:underline">
            View All Opportunities <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// STATS SECTION
// ─────────────────────────────────────────────────────────────
function StatsSection() {
  return (
    <section className="bg-[#0A1628] py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-10">
        {STATS.map((s, i) => (
          <div key={i} className="text-center group">
            <div className="flex justify-center mb-4">
              <s.icon size={32} className="text-[#c9a84c]/80 group-hover:text-[#c9a84c] transition-colors" strokeWidth={1} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{s.value}</h3>
            <p className="text-gray-500 text-xs uppercase tracking-widest">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="antialiased">
      <HeroSection />
      <EcosystemSection />
      <StakeholdersSection />
      <StatsSection />
    </main>
  );
}