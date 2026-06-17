"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Building2,
  HardHat,
  TrendingUp,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Award,
  Globe2,
  Lock,
  X,
  User,
  Plus
} from "lucide-react";

// Developer Niches data
const DEVELOPMENT_NICHES = [
  {
    icon: Building2,
    title: "Commercial Office Parks",
    desc: "Grade-A IT parks, Special Economic Zones, and premium high-rise executive offices."
  },
  {
    icon: HardHat,
    title: "Retail Shopping Centers",
    desc: "Modern shopping malls, experiential highstreets, and integrated lifestyle hubs."
  },
  {
    icon: TrendingUp,
    title: "Industrial & Logistics Hubs",
    desc: "Multi-modal transport nodes, cold-chain warehouses, and modern assembly plants."
  },
  {
    icon: Globe2,
    title: "Mixed-Use Townships",
    desc: "Integrated smart cities combining workspaces, residential towers, and green parks."
  }
];

// Featured Developers
const DEVELOPERS = [
  {
    name: "Prestige Group Developers",
    ambassador: "Anil Malhotra (President)",
    location: "Bengaluru, Mumbai, Chennai",
    sqft: "120 Million Sq. Ft. Delivered",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    desc: "Famous for Prestige Tech Cloud and landmark Grade-A commercial properties in Southern India."
  },
  {
    name: "DLF Limited Builders",
    ambassador: "Rohan Singhal (Managing Director)",
    location: "Delhi-NCR, Gurugram, Kolkata",
    sqft: "150 Million Sq. Ft. Delivered",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    desc: "India's pioneer developer behind DLF CyberCity and cyber-infrastructure corridors."
  },
  {
    name: "Embassy Group",
    ambassador: "Priya Sharma (Head of Strategy)",
    location: "Bengaluru, Pune, Hyderabad",
    sqft: "85 Million Sq. Ft. Delivered",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    desc: "Pioneered premium IT park solutions and spearheaded the first commercial REIT launch in India."
  }
];

// Highlight Photos
const HIGHLIGHT_PHOTOS = [
  "https://images.unsplash.com/photo-1506970180-10ed36158f25?w=500&q=80",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80"
];

export default function DevelopersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [rera, setRera] = useState("");
  const [niche, setNiche] = useState("Commercial Office Parks");

  const nichesRef = useRef(null);
  const developersRef = useRef(null);
  const highlightsRef = useRef(null);

  const handleScroll = (ref, direction) => {
    if (ref.current) {
      const { scrollLeft } = ref.current;
      const offset = direction === "left" ? -350 : 350;
      ref.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  const handleDeveloperSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !companyName.trim()) {
      alert("Please fill in required fields.");
      return;
    }
    alert(`Thank you, ${fullName}! Your developer directory listing request for "${companyName}" has been received. Our team will review the RERA licensing details.`);
    setFullName("");
    setEmail("");
    setCompanyName("");
    setRera("");
    setModalOpen(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased text-slate-800">
      
      {/* ── HERO BANNER SECTION ── */}
      <section className="relative bg-gradient-to-r from-[#06101c] via-[#0B1F3A] to-[#142c4b] text-white pt-10 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:25px_25px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-450">Companies</span>
            <span>/</span>
            <span className="text-[#c9a84c]">Developers</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c9a84c]/10 rounded-full border border-[#c9a84c]/20 text-[#c9a84c] text-xs font-extrabold tracking-wide uppercase">
                <Building2 className="h-3.5 w-3.5 fill-current text-[#c9a84c]" />
                Verified Commercial Developers
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                CREPNET Developers
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#c9a84c] tracking-tight">
                Building Infrastructure. Redefining Skyline.
              </p>
              <p className="text-slate-350 text-sm sm:text-base max-w-xl leading-relaxed text-slate-300">
                Explore profiles of leading national homebuilders, commercial builders, and logistics developers. Find joint venture and leasing partners.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">120+</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Developers Listed</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-[#c9a84c]">4,500+</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Projects Delivered</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">180M+</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Total Sq. Ft. Built</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-[#c9a84c]">28</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">States Reached</p>
                </div>
              </div>
            </div>

            {/* Right Banner Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative group max-w-xs sm:max-w-sm rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
                  alt="CREPNET Real Estate Construction"
                  className="w-full h-auto object-cover opacity-90 transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLOATING CALL TO ACTION CARD ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10">
        <div className="bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 space-y-2 max-w-2xl text-left">
            <h4 className="font-extrabold text-[#0B1F3A] text-lg sm:text-xl">Add Your Developer Profile</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Ensure your projects, completed sq. ft. statistics, and RERA certifications are visible to international institutional investors and major corporate occupiers.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0 w-full md:w-auto">
            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 md:flex-none py-3.5 px-6 rounded-xl font-extrabold text-sm text-white bg-[#c9a84c] hover:bg-[#b8963e] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center"
            >
              Get Listed
            </button>
            <button
              onClick={() => alert("Directory application files download starting...")}
              className="flex-1 md:flex-none flex items-center justify-center gap-1.5 py-3.5 px-6 rounded-xl border-2 border-slate-200 text-slate-700 hover:bg-slate-55 font-bold text-sm transition-all duration-200 cursor-pointer"
            >
              Directory Guidelines <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── NICHES SECTION ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">Development Sectors</h2>
          </div>
          <span className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider">Builder Segments</span>
        </div>

        {/* Carousel container */}
        <div className="relative">
          <button
            onClick={() => handleScroll(nichesRef, "left")}
            className="absolute -left-5 top-1/2 -translate-y-1/2 h-10 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleScroll(nichesRef, "right")}
            className="absolute -right-5 top-1/2 -translate-y-1/2 h-10 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-55 text-slate-600 hover:text-slate-900 transition-colors shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="bg-white border border-gray-150 rounded-2xl shadow-sm overflow-hidden">
            <div
              ref={nichesRef}
              className="flex divide-x divide-gray-150 overflow-x-auto scrollbar-hide scroll-smooth snap-x"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {DEVELOPMENT_NICHES.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="min-w-[240px] sm:min-w-[280px] lg:min-w-0 lg:flex-1 px-6 py-10 flex flex-col items-center text-center snap-start justify-start group"
                  >
                    <div className="h-16 w-16 rounded-full border border-slate-200 bg-[#faf6f0] flex items-center justify-center text-[#0B1F3A] group-hover:bg-[#c9a84c]/15 group-hover:text-[#c9a84c] transition-all">
                      <Icon className="h-6 w-6 stroke-[1.5]" />
                    </div>
                    <h3 className="font-extrabold text-[#0B1F3A] text-sm tracking-tight leading-snug mt-6 min-h-[40px] flex items-center justify-center">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-xs mt-3 leading-relaxed max-w-[200px]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── DEVELOPERS SHOWCASE ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="flex justify-between items-end mb-10">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">Featured Developers</h2>
          </div>
          <span className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider">Top Vetted Members</span>
        </div>

        <div className="relative">
          <button
            onClick={() => handleScroll(developersRef, "left")}
            className="absolute -left-5 top-1/2 -translate-y-1/2 h-10 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-55 text-slate-600 hover:text-slate-900 transition-colors shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleScroll(developersRef, "right")}
            className="absolute -right-5 top-1/2 -translate-y-1/2 h-10 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-55 text-slate-600 hover:text-slate-900 transition-colors shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={developersRef}
            className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide scroll-smooth snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {DEVELOPERS.map((sp, idx) => (
              <div
                key={idx}
                className="min-w-[240px] sm:min-w-[280px] lg:min-w-0 lg:flex-1 bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 snap-start flex flex-col justify-start group"
              >
                <div className="h-44 relative overflow-hidden">
                  <img
                    src={sp.img}
                    alt={sp.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/5" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <span className="inline-block px-2 py-0.5 text-[9px] font-black tracking-wider bg-[#c9a84c] text-white rounded uppercase">
                      Developer
                    </span>
                    <h4 className="font-extrabold text-slate-900 text-sm mt-2.5 group-hover:text-[#0B1F3A] transition-colors leading-tight">
                      {sp.name}
                    </h4>
                    <p className="text-slate-500 text-[10px] font-semibold mt-0.5">{sp.location}</p>
                  </div>
                  <p className="text-[#be7a15] text-[11px] font-bold mt-2.5 leading-snug">
                    {sp.sqft}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANNER SUBMIT JOINT VENTURES ── */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1F3A] border border-slate-800 rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Building2 className="h-48 w-48 text-[#c9a84c]" />
          </div>
          
          <div className="flex items-center gap-5 relative z-10">
            <div className="hidden md:flex h-14 w-14 rounded-2xl bg-white/10 items-center justify-center text-[#c9a84c] shrink-0 border border-white/20">
              <Building2 className="h-8 w-8 text-[#c9a84c]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">Have Land or Joint Venture Proposals?</h3>
              <p className="text-slate-350 text-xs sm:text-sm mt-1 max-w-xl">
                We coordinate developer roundtables letting land alliances present proposals to verified homebuilders and commercial developers.
              </p>
            </div>
          </div>
          <button
            onClick={() => alert("JV proposal registration guidelines will be emailed.")}
            className="w-full sm:w-auto py-3.5 px-6 rounded-xl font-extrabold text-sm text-[#0B1F3A] bg-[#c9a84c] hover:bg-amber-400 transition-colors shadow-md cursor-pointer shrink-0 text-center relative z-10"
          >
            Submit JV Inquiry
          </button>
        </div>
      </section>

      {/* ── HIGHLIGHTS GALLERY ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div className="text-left">
            <h3 className="text-xl font-extrabold text-[#0B1F3A] tracking-tight">Iconic Projects</h3>
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase">Redefining Urban Spaces</span>
        </div>

        <div className="relative">
          <button
            onClick={() => handleScroll(highlightsRef, "left")}
            className="absolute -left-5 top-1/2 -translate-y-1/2 h-10 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-55 text-slate-600 hover:text-slate-900 transition-colors shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleScroll(highlightsRef, "right")}
            className="absolute -right-5 top-1/2 -translate-y-1/2 h-10 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-55 text-slate-600 hover:text-slate-900 transition-colors shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={highlightsRef}
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {HIGHLIGHT_PHOTOS.map((photo, i) => (
              <div key={i} className="min-w-[260px] sm:min-w-[300px] h-48 rounded-xl overflow-hidden shadow-sm snap-start shrink-0">
                <img
                  src={photo}
                  alt={`Developers Highlight ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STAT STRIP ── */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 text-left">
          <div className="shrink-0 max-w-xs">
            <h4 className="text-[#0B1F3A] font-extrabold text-lg tracking-tight">Developer Network Stats</h4>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 flex-1 w-full">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-[#c9a84c]">
                <Award className="h-5 w-5 fill-current" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">100%</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">RERA Vetted</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-[#0B1F3A]">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">380+</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">Grade-A Assets</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-[#0B1F3A]">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">2,500+</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">Corporate Tenants</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-[#0B1F3A]">
                <Globe2 className="h-5 w-5" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">25+</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">Host Metros</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LISTING MODAL ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
          
          <div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-black text-[#0B1F3A] flex items-center gap-2">
                <Plus className="h-5 w-5 text-[#c9a84c]" /> Add Directory Listing
              </h3>
              <button className="text-slate-400 hover:text-slate-700 p-1 rounded-lg cursor-pointer" onClick={() => setModalOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleDeveloperSubmit} className="p-6 space-y-4 text-left">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">Full Name &amp; Designation</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Anil Malhotra (President)"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-400 text-slate-800 placeholder-slate-400"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">Business Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. anil@prestige.in"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-400 text-slate-800 placeholder-slate-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">Developer Company Name</label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Prestige Group"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-400 text-slate-800 placeholder-slate-400"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">RERA Corporate License</label>
                  <input
                    type="text"
                    required
                    value={rera}
                    onChange={(e) => setRera(e.target.value)}
                    placeholder="e.g. RERA-MUM-45678"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-400 text-slate-800 placeholder-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">Primary Sector</label>
                <select
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-400 text-slate-700"
                >
                  <option value="Commercial Office Parks">Commercial Office Parks</option>
                  <option value="Retail Shopping Centers">Retail Shopping Centers</option>
                  <option value="Industrial &amp; Logistics Hubs">Industrial &amp; Logistics Hubs</option>
                  <option value="Mixed-Use Townships">Mixed-Use Townships</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 rounded-xl bg-slate-50 border border-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-bold bg-[#c9a84c] hover:bg-[#b8963e] text-white rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Submit Listing
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
