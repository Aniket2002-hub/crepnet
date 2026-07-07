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
import { useRouter } from "next/navigation";

// Developer Niches data
const DEVELOPMENT_NICHES = [
  {
    icon: Building2,
    title: "Commercial Office Parks",
    desc: "Grade-A IT parks, Special Economic Zones, and premium high-rise executive offices.",
    gradient: "from-blue-600 to-cyan-500",
    category: "OFFICE SECTOR",
    date: "UPDATED 2026"
  },
  {
    icon: HardHat,
    title: "Retail Shopping Centers",
    desc: "Modern shopping malls, experiential highstreets, and integrated lifestyle hubs.",
    gradient: "from-purple-600 to-pink-500",
    category: "RETAIL EDUCATION",
    date: "UPDATED 2026"
  },
  {
    icon: TrendingUp,
    title: "Industrial & Logistics Hubs",
    desc: "Multi-modal transport nodes, cold-chain warehouses, and modern assembly plants.",
    gradient: "from-orange-600 to-yellow-500",
    category: "INFRASTRUCTURE",
    date: "UPDATED 2026"
  },
  {
    icon: Globe2,
    title: "Mixed-Use Townships",
    desc: "Integrated smart cities combining workspaces, residential towers, and green parks.",
    gradient: "from-teal-600 to-emerald-500",
    category: "TOWNSHIPS",
    date: "UPDATED 2026"
  }
];

// Featured Developers
const DEVELOPERS = [
  {
    name: "Prestige Group Developers",
    location: "Bengaluru, Mumbai, Chennai",
    sqft: "120 Million Sq. Ft. Delivered",
    desc: "Famous for Prestige Tech Cloud and landmark Grade-A commercial properties in Southern India.",
    gradient: "from-blue-700 to-indigo-600",
    category: "COMMERCIAL ASSETS",
    date: "JULY 2, 2026"
  },
  {
    name: "DLF Limited Builders",
    location: "Delhi-NCR, Gurugram, Kolkata",
    sqft: "150 Million Sq. Ft. Delivered",
    desc: "India's pioneer developer behind DLF CyberCity and cyber-infrastructure corridors.",
    gradient: "from-purple-700 to-indigo-800",
    category: "CYBER INFRASTRUCTURE",
    date: "JULY 2, 2026"
  },
  {
    name: "Embassy Group",
    location: "Bengaluru, Pune, Hyderabad",
    sqft: "85 Million Sq. Ft. Delivered",
    desc: "Pioneered premium IT park solutions and spearheaded the first commercial REIT launch in India.",
    gradient: "from-orange-600 to-red-500",
    category: "REIT PORTFOLIO",
    date: "JULY 1, 2026"
  }
];

const HIGHLIGHT_PHOTOS = [
  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
];

const CAROUSEL_SLIDES = [
  {
    title: "Institutional Access",
    desc: "Connect directly with decision-makers from sovereign wealth funds, pension funds, family offices, and private equity firms.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&q=80"
  },
  {
    title: "Global Leadership Summits",
    desc: "Engage in highly anticipated panel discussions addressing key shifts in real estate dynamics and asset optimization.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80"
  },
  {
    title: "C-Suite Networking",
    desc: "Unlocking cross-border investment corridors and building high-trust partnerships within the CRE industry.",
    img: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?w=1600&q=80"
  },
  {
    title: "Innovation & Future Tech",
    desc: "Discover emerging PropTech paradigms and actionable sustainability strategies changing the built environment.",
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1600&q=80"
  }
];

const headingFontClass = { fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' };

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
  const router = useRouter();

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
    alert(`Thank you, ${fullName}! Your developer directory listing request for "${companyName}" has been received.`);
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
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c9a84c]/10 rounded-full border border-[#c9a84c]/20 text-[#c9a84c] text-xs font-extrabold tracking-wide uppercase">
                <Building2 className="h-3.5 w-3.5 fill-current text-[#c9a84c]" />
                Verified Commercial Developers
              </div>
              <h1 style={headingFontClass} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                REPC Developers
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
                  <h4 style={headingFontClass} className="text-2xl sm:text-3xl font-bold text-white">120+</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Developers Listed</p>
                </div>
                <div>
                  <h4 style={headingFontClass} className="text-2xl sm:text-3xl font-bold text-[#c9a84c]">4,500+</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Projects Delivered</p>
                </div>
                <div>
                  <h4 style={headingFontClass} className="text-2xl sm:text-3xl font-bold text-white">180M+</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Total Sq. Ft. Built</p>
                </div>
                <div>
                  <h4 style={headingFontClass} className="text-2xl sm:text-3xl font-bold text-[#c9a84c]">28</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">States Reached</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative group max-w-xs sm:max-w-sm rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
                  alt="REPC Real Estate Construction"
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
            <h4 style={headingFontClass} className="font-bold text-[#0B1F3A] text-lg sm:text-xl">Add Your Developer Profile</h4>
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
            <h2 style={headingFontClass} className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] tracking-tight">Development Sectors</h2>
          </div>
          <span className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider">Builder Segments</span>
        </div>

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

          <div ref={nichesRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {DEVELOPMENT_NICHES.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[300px] sm:min-w-[340px] lg:flex-1 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all snap-start flex flex-col justify-between"
              >
                <div className={`bg-gradient-to-r ${item.gradient} p-6 h-32 flex flex-col justify-center relative text-left`}>
                  <h3 style={headingFontClass} className="text-white font-bold text-lg leading-tight drop-shadow-sm">
                    {item.title}
                  </h3>
                  <div className="absolute right-4 bottom-4 opacity-15 text-white">
                    <item.icon className="h-12 w-12 stroke-[1.5]" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between bg-slate-50/50 text-left">
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-[11px] font-bold tracking-wider">
                    <span className="text-blue-600 uppercase">{item.category}</span>
                    <span className="text-gray-400 uppercase">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVELOPERS SHOWCASE ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="flex justify-between items-end mb-10">
          <div className="text-left">
            <h2 style={headingFontClass} className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] tracking-tight">Featured Developers</h2>
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

          <div ref={developersRef} className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide scroll-smooth snap-x" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {DEVELOPERS.map((dev, i) => (
              <div 
                key={i} 
                onClick={() => router.push("#")}
                className="min-w-[300px] sm:min-w-[340px] bg-white rounded-xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col snap-start cursor-pointer"
              >
                <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-6 text-left relative min-h-[110px] flex flex-col justify-center">
                  <div className="absolute inset-0 bg-black/10" />
                  <h3 style={headingFontClass} className="text-white font-bold text-base leading-tight relative z-10">
                    {dev.name}
                  </h3>
                  <p className="text-white/80 text-[11px] mt-1 font-medium z-10">{dev.category}</p>
                </div>

                <div className="p-5 flex flex-col flex-1 text-left justify-between">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{dev.desc}</p>
                  
                  <div className="border-t border-gray-100 pt-3 flex flex-col gap-1 text-[11px] text-gray-400 font-medium">
                    <div className="flex items-center gap-1">
                      <Calendar size={11} className="text-gray-400" />
                      <span>{dev.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={11} className="text-gray-400" />
                      <span>{dev.location}</span>
                    </div>
                  </div>
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
              <h3 style={headingFontClass} className="text-xl sm:text-2xl font-bold tracking-tight text-white">Have Land or Joint Venture Proposals?</h3>
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
            <h3 style={headingFontClass} className="text-xl font-bold text-[#0B1F3A] tracking-tight">Iconic Projects</h3>
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
            <h4 style={headingFontClass} className="text-[#0B1F3A] font-bold text-lg tracking-tight">Developer Network Stats</h4>
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

      {/* ── FEATURED CAROUSEL ── */}
      <section className="w-full pt-6 pb-0">
        <div className="relative w-full h-[550px] md:h-[750px] lg:h-screen overflow-hidden bg-[#0B1F3A]">
          {CAROUSEL_SLIDES.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: i === 0 ? 1 : 0, // Simplified display condition for initial state tracking
                zIndex: i === 0 ? 10 : 0
              }}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 lg:p-24 pb-16 md:pb-24 lg:pb-32 text-left z-20 max-w-7xl mx-auto w-full px-6 lg:px-10">
                <h2 style={headingFontClass} className="text-3xl md:text-5xl lg:text-6xl text-white tracking-wide mb-4 drop-shadow-md font-semibold">
                  {slide.title}
                </h2>
                <p className="text-gray-200 text-sm md:text-lg lg:text-xl leading-relaxed tracking-wide opacity-90 max-w-3xl drop-shadow-sm font-light">
                  {slide.desc}
                </p>
              </div>
            </div>
          ))}

          <div className="absolute bottom-10 left-0 right-0 z-20 mx-auto max-w-7xl w-full px-6 lg:px-10 flex justify-end gap-3">
            {CAROUSEL_SLIDES.map((_, i) => (
              <button
                key={i}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === 0 ? "w-10 bg-[#E8A33D]" : "w-2.5 bg-white/45"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── LISTING MODAL ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
          
          <div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 style={headingFontClass} className="text-lg font-bold text-[#0B1F3A] flex items-center gap-2">
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