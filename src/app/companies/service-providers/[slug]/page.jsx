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
  Building2,
  Download,
  Users,
  Target,
  Award,
  FileText,
  Handshake,
  User,
  ShieldCheck,
  BarChart,
  ClipboardList,
  Search,
  ExternalLink,
  Sparkles,
  Briefcase
} from 'lucide-react';

const SERVICE_DATABASE = {
  "jll-india-jones-lang-lasalle": {
    name: "JLL India (Jones Lang LaSalle)",
    tagline: "Expert advice. Smarter real estate decisions.",
    category: "STRATEGIC ADVISORY",
    location: "Mumbai, Maharashtra, India",
    website: "www.jllindia.co.in",
    email: "advisory@jll.india",
    phone: "+91 22 6789 4321",
    founded: "2009",
    type: "Private Limited",
    revenue: "₹120+ Cr",
    teamSize: "180+ Professionals",
    presence: "20+ Cities in India",
    globalFootprint: "5 Countries",
    memberSince: "March 2022",
    heroImg: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069",
    stats: { experience: "15+", projects: "250+", experts: "50+", clients: "300+" },
    about: [
      "ProSpace Advisors is a leading real estate consulting and advisory firm providing end-to-end solutions across the commercial real estate lifecycle.",
      "We partner with commercial asset groups, highstreet developers, and retail conglomerates to structure optimal transaction configurations and maximize capitalization vectors."
    ],
    expertise: ["Strong Brand Equity", "Wide Product Range", "Omnichannel Presence", "Customer-Centric Approach", "Data-Driven Expansion", "Sustainable Asset Allocation"],
    services: [
      { title: "Strategic Advisory", desc: "Market entry, expansion strategy, and portfolio planning parameters.", img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=600", tag: "Advisory" },
      { title: "Transaction Advisory", desc: "End-to-end support for leasing procurement, transaction verification, and acquisitions.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600", tag: "Transaction Support" },
      { title: "Project Management", desc: "Planning execution, technical audits, and milestone deployment delivery across commercial frameworks.", img: "https://images.unsplash.com/photo-1541888086925-0c13bb1047d3?q=80&w=600", tag: "Project Management" }
    ]
  }
};

export default function ServiceProviderProfilePage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const dev = SERVICE_DATABASE[params.slug] || SERVICE_DATABASE["jll-india-jones-lang-lasalle"];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans antialiased text-slate-800">
      
      {/* ── HERO BANNER ── */}
      <section className="relative overflow-hidden bg-slate-950">
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
              href="/companies/service-providers"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E8A33D] hover:text-amber-300 transition-colors uppercase tracking-wider"
            >
              <ArrowLeft size={13} /> Back to Directory
            </Link>
          </div>
        </div>
      </section>

      {/* ── METRICS OVERLAY STRIP ── */}
      <div className="bg-slate-950 border-t border-white/10 relative z-20 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 max-w-2xl">
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white font-serif tracking-tight">{dev.stats.experience}</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Years Experience</p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-[#E8A33D] font-serif tracking-tight">{dev.stats.projects}</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Projects Advised</p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white font-serif tracking-tight">{dev.stats.experts}</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Active Experts</p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-[#E8A33D] font-serif tracking-tight">{dev.stats.clients}</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Clients Served</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SPLIT CORE CONTAINER ── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        
        {/* Left Column blocks */}
        <div className="lg:col-span-2 space-y-10 text-left">
          
          {/* Corporate Overview */}
          <div className="bg-white rounded-2xl border border-slate-200/60 p-6 sm:p-8 shadow-sm">
            <h2 className="font-serif text-lg sm:text-xl font-normal text-slate-900 tracking-wide pb-3 mb-5 border-b border-slate-100 flex items-center gap-2">
              Corporate Dossier
            </h2>
            <div className="space-y-4 text-slate-600 text-sm font-light leading-relaxed">
              {dev.about.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Core Expertise Lists */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 px-1">
              <Briefcase size={16} className="text-[#c9a84c]" />
              <h3 className="font-serif text-base sm:text-lg font-normal text-slate-900 tracking-wide">
                Core Expertise &amp; Focus
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {dev.expertise.map((exp, i) => (
                <div key={i} className="bg-white border border-slate-200/50 px-4 py-3.5 rounded-xl flex items-center justify-between shadow-sm group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-6 w-6 bg-slate-50 text-slate-500 rounded-lg flex items-center justify-center text-[10px] font-bold shrink-0 shadow-inner">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium text-slate-700 truncate">{exp}</span>
                  </div>
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 opacity-40 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Featured Service Units Layout */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 px-1">
              <Sparkles size={16} className="text-[#c9a84c]" />
              <h3 className="font-serif text-base sm:text-lg font-normal text-slate-900 tracking-wide">
                Featured Capabilities
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {dev.services.map((service, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm flex flex-col group">
                  <div className="h-28 relative overflow-hidden bg-slate-900 shrink-0">
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-2 left-2 bg-slate-950/80 text-white text-[9px] font-bold px-2 py-0.5 rounded tracking-wide uppercase">
                      {service.tag}
                    </span>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                    <h4 className="font-serif font-semibold text-slate-950 text-sm leading-tight">{service.title}</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed font-light flex-1">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sticky Sidebar panel */}
        <div className="space-y-6 text-left lg:sticky lg:top-6 self-start">
          
          {/* Snap Card Data */}
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
                <span className="text-slate-400">Human Capital</span>
                <span className="text-slate-800 font-bold">{dev.teamSize}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Registry Footprint</span>
                <span className="text-slate-800 font-bold">{dev.presence}</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                <span className="text-slate-400">Ecosystem Status</span>
                <span className="text-slate-500 font-light">Active since {dev.memberSince}</span>
              </div>
            </div>
          </div>

          {/* secure Action Card panels */}
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-slate-800 p-6 shadow-xl text-white relative overflow-hidden">
            <h3 className="font-serif text-base font-normal tracking-wide text-white flex items-center gap-2">
              Institutional Inquiry
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed font-light">
              Submit formal RFPs, corporate account handlers configurations, or technical project tenders directly.
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
                  onClick={() => alert(`Redirecting securely to secure portal at ${dev.website}`)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs text-slate-950 bg-gradient-to-r from-[#E8A33D] to-amber-300 hover:brightness-105 shadow-lg active:scale-[0.99] transition-all cursor-pointer text-center uppercase tracking-wider"
                >
                  Access Platform Portal <ExternalLink size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}