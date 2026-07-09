"use client";

import { use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Share2,
  UserPlus,
  MapPin,
  Globe,
  Mail,
  Phone,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Store,
  Building2,
  Map,
  Leaf,
  Download,
  Users,
  Target,
  Award,
  Clock,
  TrendingUp,
  LineChart,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  Briefcase
} from "lucide-react";

// Mock database resolution matching the configuration options
const BRANDS_DATABASE = {
  "trent-hypermarkets-tata": {
    name: "Trent Hypermarkets (Tata)",
    tagline: "Redefining value retail paradigms. Expanding globally.",
    category: "FASHION & LIFESTYLE",
    location: "Mumbai, Maharashtra, India",
    website: "www.trentlimited.com",
    email: "leasing@trent.tata",
    phone: "+91 22 6600 1000",
    founded: "1998",
    type: "Public Listed Company",
    revenue: "₹8,200+ Cr",
    teamSize: "4,500+ Professionals",
    presence: "140+ Cities in India",
    globalFootprint: "3 Countries",
    memberSince: "July 2023",
    heroImg: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070",
    stats: { years: "25+", stores: "180+", liveMarkets: "12", spaces: "4.2M sq ft" },
    about: [
      "Trent Hypermarkets operates benchmark fast-fashion and consumer retail chains across prime high streets and corporate asset hubs in primary and secondary retail markets.",
      "With strategic models like Westside and Zudio, the brand consistently scales multi-tier occupancies generating premium long-term capitalization vectors for infrastructure developers."
    ],
    capabilities: ["Fast-Fashion Logistics", "Tier 2 Expansion Optimization", "Anchor Asset Allocation", "High-Volume Inventory Management", "Omnichannel Fulfillment Networks"],
    locations: [
      { title: "Phoenix Palladium", city: "Mumbai", size: "25,000 sq ft", status: "Operational", color: "text-emerald-500", dot: "bg-emerald-500", label: "Flagship layout" },
      { title: "Select Citywalk", city: "New Delhi", size: "12,500 sq ft", status: "Operational", color: "text-emerald-500", dot: "bg-emerald-500", label: "High Street store" },
      { title: "Forum Mall", city: "Bengaluru", size: "18,000 sq ft", status: "Under Construction", color: "text-[#c9a84c]", dot: "bg-[#c9a84c]", label: "Upcoming unit" }
    ]
  }
};

export default function RetailBrandProfilePage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  // Default to the trent profile if data match falls short
  const dev = BRANDS_DATABASE[params.slug] || BRANDS_DATABASE["trent-hypermarkets-tata"];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans antialiased text-slate-800">
      
      {/* ── HERO BANNER — Replicated padding, size clamps and background filters ── */}
      <section className="relative overflow-hidden bg-slate-950 border-b border-slate-900">
        <div className="absolute inset-0">
          <img
            src={dev.heroImg}
            alt={dev.name}
            className="absolute inset-0 h-full w-full object-cover opacity-40 object-center mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-14 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E8A33D] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.18em] text-slate-300 uppercase">
              {dev.category}
            </span>
          </div>

          <h1 className="max-w-3xl font-serif text-[clamp(24px,3vw,42px)] font-normal leading-[1.25] text-white tracking-wide">
            {dev.name}
          </h1>
          
          <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-[#E8A33D] to-amber-500" />
          
          <p className="mt-4 max-w-xl text-sm font-light leading-[1.7] text-slate-200 antialiased">
            {dev.tagline}
          </p>

          <div className="mt-5">
            <Link
              href="/companies/retail-brands"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E8A33D] hover:text-amber-300 transition-colors uppercase tracking-wider"
            >
              <ArrowLeft size={13} /> Return to Retail Ecosystem
            </Link>
          </div>
        </div>
      </section>

      {/* ── METRIC SNAPSHOT STRIP ── */}
      <div className="bg-slate-950 border-t border-white/10 relative z-20 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 max-w-2xl">
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white font-serif tracking-tight">{dev.stats.years}</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Market Legacy</p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-[#E8A33D] font-serif tracking-tight">{dev.stats.stores}</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Active Assets</p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white font-serif tracking-tight">{dev.stats.liveMarkets}</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Global Hubs</p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-[#E8A33D] font-serif tracking-tight">{dev.stats.spaces}</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Area Operated</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── CENTRAL SPLIT CORE DASHBOARD ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        
        {/* Left Column blocks */}
        <div className="lg:col-span-2 space-y-10 text-left">
          
          {/* Brand Narratives */}
          <div className="bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 shadow-sm">
            <h2 className="font-serif text-lg sm:text-xl font-normal text-slate-900 tracking-wide pb-3 mb-5 border-b border-slate-100 flex items-center gap-2">
              Corporate Overview
            </h2>
            <div className="space-y-4 text-slate-600 text-sm font-light leading-relaxed">
              {dev.about.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Core Competencies */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 px-1">
              <Briefcase size={16} className="text-[#c9a84c]" />
              <h3 className="font-serif text-base sm:text-lg font-normal text-slate-900 tracking-wide">
                Expansion Capabilities
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {dev.capabilities.map((capability, i) => (
                <div key={i} className="bg-white border border-slate-200/50 px-4 py-3.5 rounded-xl flex items-center justify-between shadow-sm group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-6 w-6 bg-slate-50 text-slate-500 rounded-lg flex items-center justify-center text-[10px] font-bold shrink-0 shadow-inner">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium text-slate-700 truncate">{capability}</span>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 opacity-40 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Vetted Store Layout Units */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 px-1">
              <Sparkles size={16} className="text-[#c9a84c]" />
              <h3 className="font-serif text-base sm:text-lg font-normal text-slate-900 tracking-wide">
                Featured Layout Snapshots
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {dev.locations.map((loc, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200/60 overflow-hidden shadow-sm flex flex-col justify-between p-4 space-y-4">
                  <div>
                    <span className="text-[9px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded uppercase tracking-wide">
                      {loc.label}
                    </span>
                    <h4 className="font-serif font-semibold text-slate-950 text-sm mt-2 truncate">{loc.title}</h4>
                    <p className="text-slate-400 text-xs mt-0.5">{loc.city}</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-50 pt-3 text-xs">
                    <span className="text-slate-500 font-medium">{loc.size}</span>
                    <div className="flex items-center gap-1 font-bold text-[10px] uppercase tracking-wider">
                      <span className={`h-1.5 w-1.5 rounded-full ${loc.dot}`} />
                      <span className={loc.color}>{loc.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sticky Sidebar panel */}
        <div className="space-y-6 text-left lg:sticky lg:top-6 self-start">
          
          {/* Identity Snapshot */}
          <div className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c9a84c] to-amber-200" />
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <h3 className="font-serif text-base font-normal text-slate-900 tracking-wide">
                Identity Profile
              </h3>
              <ShieldCheck className="text-emerald-600 h-5 w-5 shrink-0" />
            </div>
            
            <div className="space-y-3.5 text-xs font-medium">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Structure</span>
                <span className="text-slate-800 font-bold">{dev.type}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Inception Year</span>
                <span className="text-slate-800 font-bold">{dev.founded}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">HQ Nexus</span>
                <span className="text-slate-800 font-bold">{dev.location}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Revenue Track</span>
                <span className="text-slate-800 font-bold">{dev.revenue}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Network Presence</span>
                <span className="text-slate-800 font-bold">{dev.presence}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                <span className="text-slate-400">Ecosystem Status</span>
                <span className="text-slate-500 font-light">Active since {dev.memberSince}</span>
              </div>
            </div>
          </div>

          {/* Secure Institutional Inquiry card */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-6 shadow-xl text-white relative overflow-hidden">
            <h3 className="font-serif text-base font-normal tracking-wide text-white flex items-center gap-2">
              Institutional Connection
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed font-light">
              Initiate space acquisitions, retail alliance proposals, or corporate leasing assignments with accredited account handlers directly.
            </p>
            
            <div className="space-y-2 pt-4 relative z-10">
              <a
                href={`mailto:${dev.email}`}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl border border-white/10 text-slate-200 bg-white/5 hover:bg-white/10 font-medium text-xs transition-all cursor-pointer group"
              >
                <span className="flex items-center gap-2 min-w-0">
                  <Mail size={13} className="text-[#E8A33D] shrink-0" /> 
                  <span className="truncate">{dev.email}</span>
                </span>
                <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 text-slate-400" />
              </a>
              
              <a
                href={`tel:${dev.phone}`}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl border border-white/10 text-slate-200 bg-white/5 hover:bg-white/10 font-medium text-xs transition-all cursor-pointer group"
              >
                <span className="flex items-center gap-2 min-w-0">
                  <Phone size={13} className="text-[#E8A33D] shrink-0" /> 
                  <span className="truncate">{dev.phone}</span>
                </span>
                <ExternalLink size={11} className="opacity-0 group-hover:opacity-100 text-slate-400" />
              </a>
              
              <div className="pt-2">
                <button
                  onClick={() => alert(`Redirecting securely to verified external registry portal at ${dev.website}`)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-[#E8A33D] to-amber-300 hover:brightness-105 shadow-lg active:scale-[0.99] transition-all cursor-pointer text-center uppercase tracking-wider"
                >
                  Launch Official Site <ExternalLink size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}