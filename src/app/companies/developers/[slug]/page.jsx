"use client";

import { use, useState } from "react";
import Link from "next/link";
import {
  Building2,
  MapPin,
  Calendar,
  Users,
  Globe2,
  ArrowLeft,
  Mail,
  Phone,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Briefcase,
  Layers,
  Sparkles,
} from "lucide-react";

const DEVELOPERS = [
  {
    slug: "prestige-group-developers",
    name: "Prestige Group Developers",
    tagline: "Building landmarks. Elevating skylines.",
    category: "COMMERCIAL ASSETS",
    location: "Bengaluru, Mumbai, Chennai",
    hq: "Bengaluru, Karnataka",
    sqft: "120 Million Sq. Ft. Delivered",
    desc: "Famous for Prestige Tech Cloud and landmark Grade-A commercial properties in Southern India.",
    about: [
      "With over 35 years of legacy, Prestige Group is one of India's leading real estate developers delivering world-class commercial, retail, residential and hospitality projects across Southern India.",
      "Known for landmark IT parks and mixed-use developments, Prestige has earned the trust of global occupiers, investors and institutional partners.",
    ],
    date: "JULY 2, 2026",
    heroImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    logoLabel: "PRESTIGE",
    website: "www.prestigeconstructions.com",
    email: "info@prestigeconstructions.com",
    phone: "+91 80 1234 5678",
    founded: "1986",
    teamSize: "500+ Professionals",
    presence: "15 Cities in India",
    reraRegistered: "Yes",
    stats: {
      years: "35+",
      totalDeveloped: "120 Mn sq ft",
      ongoing: "18+",
      projectValue: "₹ 15,000 Cr+",
    },
    projects: [
      {
        title: "Prestige Tech Cloud",
        location: "Bengaluru",
        sqft: "2.1 Mn sq ft",
        tag: "Office",
        tagColor: "bg-slate-900 text-amber-400 border border-amber-500/20",
        status: "Under Construction",
        statusColor: "text-[#c9a84c]",
        statusDot: "bg-[#c9a84c]",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
      },
      {
        title: "Prestige Forum Mall",
        location: "Bengaluru",
        sqft: "780,000 sq ft",
        tag: "Retail",
        tagColor: "bg-emerald-950 text-emerald-400 border border-emerald-500/20",
        status: "Ongoing",
        statusColor: "text-emerald-500",
        statusDot: "bg-emerald-500",
        img: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2126",
      },
      {
        title: "Prestige City",
        location: "Chennai",
        sqft: "3.4 Mn sq ft",
        tag: "Mixed-Use",
        tagColor: "bg-purple-950 text-purple-400 border border-purple-500/20",
        status: "Under Construction",
        statusColor: "text-[#c9a84c]",
        statusDot: "bg-[#c9a84c]",
        img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2187",
      },
    ],
    capabilities: [
      "Office Developments",
      "Retail & High Street",
      "Mixed-Use Developments",
      "IT Parks & SEZ",
      "Hospitality Developments",
    ],
    memberSince: "Jan 2023",
  },
  {
    slug: "dlf-limited-builders",
    name: "DLF Limited Builders",
    tagline: "India's pioneer in cyber-infrastructure.",
    category: "CYBER INFRASTRUCTURE",
    location: "Delhi-NCR, Gurugram, Kolkata",
    hq: "Gurugram, Haryana",
    sqft: "150 Million Sq. Ft. Delivered",
    desc: "India's pioneer developer behind DLF CyberCity and cyber-infrastructure corridors.",
    about: [
      "DLF Limited is India's largest publicly listed real estate developer, with over 75 years of experience delivering homes, offices, and retail destinations across the country.",
      "DLF CyberCity in Gurugram remains one of India's most iconic commercial micro-markets, anchoring global occupiers and institutional capital alike.",
    ],
    date: "JULY 2, 2026",
    heroImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
    logoLabel: "DLF",
    website: "www.dlf.in",
    email: "info@dlf.in",
    phone: "+91 124 456 7890",
    founded: "1946",
    teamSize: "1,200+ Professionals",
    presence: "24 Cities in India",
    reraRegistered: "Yes",
    stats: {
      years: "75+",
      totalDeveloped: "150 Mn sq ft",
      ongoing: "22+",
      projectValue: "₹ 28,000 Cr+",
    },
    projects: [
      {
        title: "DLF CyberCity",
        location: "Gurugram",
        sqft: "12.5 Mn sq ft",
        tag: "Office",
        tagColor: "bg-slate-900 text-amber-400 border border-amber-500/20",
        status: "Operational",
        statusColor: "text-emerald-500",
        statusDot: "bg-emerald-500",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070",
      },
      {
        title: "DLF Mall of India",
        location: "Noida",
        sqft: "2 Mn sq ft",
        tag: "Retail",
        tagColor: "bg-emerald-950 text-emerald-400 border border-emerald-500/20",
        status: "Operational",
        statusColor: "text-emerald-500",
        statusDot: "bg-emerald-500",
        img: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2126",
      },
      {
        title: "DLF Downtown",
        location: "Gurugram",
        sqft: "4.2 Mn sq ft",
        tag: "Mixed-Use",
        tagColor: "bg-purple-950 text-purple-400 border border-purple-500/20",
        status: "Under Construction",
        statusColor: "text-[#c9a84c]",
        statusDot: "bg-[#c9a84c]",
        img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2187",
      },
    ],
    capabilities: [
      "Office Developments",
      "Retail & High Street",
      "Mixed-Use Developments",
      "IT Parks & SEZ",
      "Residential Townships",
    ],
    memberSince: "Mar 2022",
  },
  {
    slug: "embassy-group",
    name: "Embassy Group",
    tagline: "Pioneering India's first commercial REIT.",
    category: "REIT PORTFOLIO",
    location: "Bengaluru, Pune, Hyderabad",
    hq: "Bengaluru, Karnataka",
    sqft: "85 Million Sq. Ft. Delivered",
    desc: "Pioneered premium IT park solutions and spearheaded the first commercial REIT launch in India.",
    about: [
      "Embassy Group has been shaping India's commercial real estate landscape for over 35 years, delivering Grade-A office parks, industrial and residential developments.",
      "As co-sponsor of India's first listed REIT, Embassy has set the benchmark for institutional-grade office assets and investor transparency.",
    ],
    date: "JULY 1, 2026",
    heroImg: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
    logoLabel: "EMBASSY",
    website: "www.embassygroup.com",
    email: "info@embassygroup.com",
    phone: "+91 80 9876 5432",
    founded: "1990",
    teamSize: "400+ Professionals",
    presence: "9 Cities in India",
    reraRegistered: "Yes",
    stats: {
      years: "35+",
      totalDeveloped: "85 Mn sq ft",
      ongoing: "14+",
      projectValue: "₹ 11,200 Cr+",
    },
    projects: [
      {
        title: "Embassy TechVillage",
        location: "Bengaluru",
        sqft: "9.5 Mn sq ft",
        tag: "Office",
        tagColor: "bg-slate-900 text-amber-400 border border-amber-500/20",
        status: "Operational",
        statusColor: "text-emerald-500",
        statusDot: "bg-emerald-500",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070",
      },
      {
        title: "Embassy Pune Tech Park",
        location: "Pune",
        sqft: "3.1 Mn sq ft",
        tag: "Office",
        tagColor: "bg-slate-900 text-amber-400 border border-amber-500/20",
        status: "Ongoing",
        statusColor: "text-emerald-500",
        statusDot: "bg-emerald-500",
        img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070",
      },
      {
        title: "Embassy One",
        location: "Bengaluru",
        sqft: "1.8 Mn sq ft",
        tag: "Mixed-Use",
        tagColor: "bg-purple-950 text-purple-400 border border-purple-500/20",
        status: "Under Construction",
        statusColor: "text-[#c9a84c]",
        statusDot: "bg-[#c9a84c]",
        img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2187",
      },
    ],
    capabilities: [
      "Office Developments",
      "IT Parks & SEZ",
      "Mixed-Use Developments",
      "Industrial & Logistics",
      "Sustainable & Green Buildings",
    ],
    memberSince: "May 2024",
  },
];

export default function DeveloperSlugPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const dev = DEVELOPERS.find((d) => d.slug === params.slug);

  if (!dev) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center font-sans">
        <div className="h-12 w-12 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-4 shadow-sm animate-bounce">
          <Layers className="h-6 w-6" />
        </div>
        <h2 className="font-serif text-2xl font-normal text-slate-900 mb-2">Developer Profile Missing</h2>
        <p className="text-slate-500 text-sm max-w-xs mb-6">The profile requested does not exist or has been modified within our active directory infrastructure.</p>
        <Link href="/companies/developers" className="inline-flex items-center gap-2 py-3 px-6 rounded-xl text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 transition-all uppercase tracking-wider shadow-md">
          <ArrowLeft size={14} /> Back to Directory
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans antialiased text-slate-800 selection:bg-amber-100 selection:text-amber-900">
      
      {/* ── HERO BANNER ── */}
      <section className="relative overflow-hidden bg-slate-950 border-b border-slate-900">
        <div className="absolute inset-0">
          <img
            src={dev.heroImg}
            alt={dev.name}
            className="absolute inset-0 h-full w-full object-cover opacity-40 object-center mix-blend-luminosity scale-100 transform transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-14 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md mb-4 shadow-inner">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E8A33D] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.18em] text-slate-300 uppercase">
              {dev.category}
            </span>
          </div>

          <h1 className="max-w-3xl font-serif text-[clamp(24px,3vw,42px)] font-normal leading-[1.25] text-white tracking-wide drop-shadow-sm">
            {dev.name}
          </h1>
          
          <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-[#E8A33D] to-amber-500" />
          
          <p className="mt-4 max-w-xl text-sm font-light leading-[1.7] text-slate-200 antialiased">
            {dev.tagline || dev.desc}
          </p>

          <div className="mt-5">
            <Link
              href="/companies/developers"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E8A33D] hover:text-amber-300 transition-colors uppercase tracking-wider group cursor-pointer"
            >
              <ArrowLeft size={13} className="transform group-hover:-translate-x-1 transition-transform duration-200" />
              Return to Developer Hub
            </Link>
          </div>
        </div>
      </section>

      {/* ── ASSET STRIP GRID ── */}
      <div className="bg-slate-950 border-t border-white/10 relative z-20 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 max-w-4xl md:max-w-full">
            <div className="pl-4 border-l border-white/10 hover:border-[#E8A33D] transition-colors">
              <h4 className="text-2xl sm:text-3xl font-bold text-white font-serif tracking-tight">{dev.stats.years}</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Ecosystem Tenure</p>
            </div>
            <div className="pl-4 border-l border-white/10 hover:border-[#E8A33D] transition-colors">
              <h4 className="text-2xl sm:text-3xl font-bold text-[#E8A33D] font-serif tracking-tight">{dev.stats.totalDeveloped}</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Portfolio Delivered</p>
            </div>
            <div className="pl-4 border-l border-white/10 hover:border-[#E8A33D] transition-colors">
              <h4 className="text-2xl sm:text-3xl font-bold text-white font-serif tracking-tight">{dev.stats.ongoing}</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Live Pipeline Developments</p>
            </div>
            <div className="pl-4 border-l border-white/10 hover:border-[#E8A33D] transition-colors">
              <h4 className="text-2xl sm:text-3xl font-bold text-[#E8A33D] font-serif tracking-tight">{dev.stats.projectValue}</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Institutional Valuation</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── RESPONSIVE BODY ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        
        <div className="lg:col-span-2 space-y-10 text-left">
          
          {/* Corporate Overview Container - Overlapping Icon Removed Completely */}
          <div className="bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
            <h2 className="font-serif text-lg sm:text-xl font-normal text-slate-900 tracking-wide pb-3 mb-5 border-b border-slate-100 flex items-center gap-2">
              Corporate Dossier
            </h2>
            <div className="space-y-4 text-slate-600 text-sm font-light leading-relaxed">
              {dev.about.map((paragraph, idx) => (
                <p key={idx}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Operational Capabilities */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 px-1">
              <Briefcase size={16} className="text-[#c9a84c]" />
              <h3 className="font-serif text-base sm:text-lg font-normal text-slate-900 tracking-wide">
                Core Competencies &amp; Scope
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {dev.capabilities.map((capability, i) => (
                <div key={i} className="bg-white border border-slate-200/50 hover:border-slate-300/80 px-4 py-3.5 rounded-xl flex items-center justify-between transition-all duration-200 shadow-sm group hover:-translate-y-0.5">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-6 w-6 bg-slate-50 border border-slate-100 text-slate-500 rounded-lg flex items-center justify-center text-[10px] font-bold shrink-0 shadow-inner group-hover:bg-amber-50 group-hover:text-[#c9a84c] group-hover:border-amber-100 transition-colors">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium text-slate-700 truncate">{capability}</span>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 opacity-30 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Showcased Architecture Pipeline Grid */}
          <div className="space-y-5">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-[#c9a84c]" />
                <h3 className="font-serif text-base sm:text-lg font-normal text-slate-900 tracking-wide">
                  Flagship Properties Portfolio
                </h3>
              </div>
              <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md uppercase tracking-wider hidden sm:inline">Vetted Pipeline</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {dev.projects.map((project, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col group">
                  <div className="h-48 relative overflow-hidden bg-slate-900">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-normal" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                    <span className={`absolute top-4 left-4 text-[10px] font-bold px-2.5 py-1 rounded-md tracking-wider uppercase backdrop-blur-md shadow-sm ${project.tagColor}`}>
                      {project.tag}
                    </span>
                  </div>
                  
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h4 className="font-serif font-normal text-slate-900 text-base leading-snug group-hover:text-[#c9a84c] transition-colors">
                        {project.title}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mt-1.5">
                        <MapPin size={12} className="text-slate-300 shrink-0" />
                        <span className="truncate">{project.location}, India</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-slate-100 pt-3.5 text-xs">
                      <div className="text-slate-500 font-light">
                        Built Area: <span className="text-slate-800 font-medium">{project.sqft}</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] shrink-0">
                        <span className={`h-1.5 w-1.5 rounded-full ${project.statusDot}`} />
                        <span className={project.statusColor}>{project.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sticky Column Sidebar Panel */}
        <div className="space-y-6 text-left lg:sticky lg:top-6 self-start">
          
          {/* Metadata Snapshot card */}
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
                <span className="text-slate-400">Inception Year</span>
                <span className="text-slate-800 font-bold">{dev.founded}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">HQ Core</span>
                <span className="text-slate-800 font-bold">{dev.hq}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Geographic Footprint</span>
                <span className="text-slate-800 font-bold">{dev.presence}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Human Capital</span>
                <span className="text-slate-800 font-bold">{dev.teamSize}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">RERA Vetting Core</span>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 font-bold px-2.5 py-0.5 rounded text-[10px] tracking-wider">
                  VERIFIED ({dev.reraRegistered})
                </span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                <span className="text-slate-400">Ecosystem Status</span>
                <span className="text-slate-500 font-light">Active since {dev.memberSince}</span>
              </div>
            </div>
          </div>

          {/* Secure Institutional Inquiry card */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-6 shadow-xl text-white relative overflow-hidden group">
            <h3 className="font-serif text-base font-normal tracking-wide text-white flex items-center gap-2">
              Institutional Connection
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed font-light">
              Initiate space acquisitions, retail alliance proposals, or corporate leasing assignments with accredited account handlers directly.
            </p>
            
            <div className="space-y-2 pt-4 relative z-10">
              <a
                href={`mailto:${dev.email}`}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl border border-white/10 text-slate-200 bg-white/5 hover:bg-white/10 font-medium text-xs transition-all cursor-pointer group/link"
              >
                <span className="flex items-center gap-2 min-w-0">
                  <Mail size={13} className="text-[#E8A33D] shrink-0" /> 
                  <span className="truncate">{dev.email}</span>
                </span>
                <ExternalLink size={11} className="opacity-0 group-hover/link:opacity-100 transition-opacity shrink-0 text-slate-400" />
              </a>
              
              <a
                href={`tel:${dev.phone}`}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl border border-white/10 text-slate-200 bg-white/5 hover:bg-white/10 font-medium text-xs transition-all cursor-pointer group/link"
              >
                <span className="flex items-center gap-2 min-w-0">
                  <Phone size={13} className="text-[#E8A33D] shrink-0" /> 
                  <span className="truncate">{dev.phone}</span>
                </span>
                <ExternalLink size={11} className="opacity-0 group-hover/link:opacity-100 transition-opacity shrink-0 text-slate-400" />
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