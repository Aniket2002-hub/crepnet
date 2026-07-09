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
  X,
  Plus,
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
        tagColor: "bg-[#0B1F3A]",
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
        tagColor: "bg-emerald-600",
        status: "Ongoing",
        statusColor: "text-emerald-600",
        statusDot: "bg-emerald-600",
        img: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2126",
      },
      {
        title: "Prestige City",
        location: "Chennai",
        sqft: "3.4 Mn sq ft",
        tag: "Mixed-Use",
        tagColor: "bg-indigo-600",
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
        tagColor: "bg-[#0B1F3A]",
        status: "Operational",
        statusColor: "text-emerald-600",
        statusDot: "bg-emerald-600",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070",
      },
      {
        title: "DLF Mall of India",
        location: "Noida",
        sqft: "2 Mn sq ft",
        tag: "Retail",
        tagColor: "bg-emerald-600",
        status: "Operational",
        statusColor: "text-emerald-600",
        statusDot: "bg-emerald-600",
        img: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2126",
      },
      {
        title: "DLF Downtown",
        location: "Gurugram",
        sqft: "4.2 Mn sq ft",
        tag: "Mixed-Use",
        tagColor: "bg-indigo-600",
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
        tagColor: "bg-[#0B1F3A]",
        status: "Operational",
        statusColor: "text-emerald-600",
        statusDot: "bg-emerald-600",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070",
      },
      {
        title: "Embassy Pune Tech Park",
        location: "Pune",
        sqft: "3.1 Mn sq ft",
        tag: "Office",
        tagColor: "bg-[#0B1F3A]",
        status: "Ongoing",
        statusColor: "text-emerald-600",
        statusDot: "bg-emerald-600",
        img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070",
      },
      {
        title: "Embassy One",
        location: "Bengaluru",
        sqft: "1.8 Mn sq ft",
        tag: "Mixed-Use",
        tagColor: "bg-indigo-600",
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

const DEVELOPMENT_NICHES = [
  {
    icon: Building2,
    title: "Commercial Office Parks",
    desc: "Grade-A IT parks, Special Economic Zones, and premium high-rise executive offices.",
    category: "OFFICE SECTOR",
    date: "UPDATED 2026",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
    heroDesc: "Explore profiles of leading office park and IT campus developers building Grade-A commercial stock across India's key business corridors.",
  },
  {
    icon: HardHat,
    title: "Retail Shopping Centers",
    desc: "Modern shopping malls, experiential highstreets, and integrated lifestyle hubs.",
    category: "RETAIL SECTOR",
    date: "UPDATED 2026",
    img: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=1600&q=80",
    heroDesc: "Discover the developers behind India's next generation of malls, highstreets and experiential retail destinations.",
  },
  {
    icon: TrendingUp,
    title: "Industrial & Logistics Hubs",
    desc: "Multi-modal transport nodes, cold-chain warehouses, and modern assembly plants.",
    category: "INFRASTRUCTURE",
    date: "UPDATED 2026",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80",
    heroDesc: "Connect with warehousing, logistics-park and industrial-shed developers powering India's supply-chain backbone.",
  },
  {
    icon: Globe2,
    title: "Mixed-Use Townships",
    desc: "Integrated smart cities combining workspaces, residential towers, and green parks.",
    category: "TOWNSHIPS",
    date: "UPDATED 2026",
    img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1600&q=80",
    heroDesc: "Meet the master-planners of India's integrated townships — blending workspaces, homes and green public realm.",
  },
];

const HIGHLIGHT_PHOTOS = [
  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
];

export default function DevelopersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [rera, setRera] = useState("");
  const [niche, setNiche] = useState("Commercial Office Parks");
  const [selectedNiche, setSelectedNiche] = useState(null);

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
    alert(`Thank you, ${fullName}! Your developer directory listing request for "${companyName}" has been received.`);
    setFullName("");
    setEmail("");
    setCompanyName("");
    setRera("");
    setModalOpen(false);
  };

  const activeNiche = selectedNiche !== null ? DEVELOPMENT_NICHES[selectedNiche] : null;
  const heroImg = activeNiche ? activeNiche.img : "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80";
  const heroEyebrow = activeNiche ? activeNiche.category : "Verified Commercial Developers";
  const heroDesc = activeNiche ? activeNiche.heroDesc : "Explore profiles of leading national homebuilders, commercial builders, and logistics developers. Find joint venture and leasing partners.";

  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased text-slate-800">
      {/* Slim breadcrumb strip — sits above the hero so it doesn't add height to the banner itself */}
      {/* <div className="bg-white border-b border-slate-100">
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link href="/" className="hover:text-[#0B1F3A] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-400">Companies</span>
          <span>/</span>
          <span className="text-[#c9a84c]">Developers</span>
        </nav>
      </div> */}

      {/* ── HERO BANNER — identical content structure and size to the Surveys page hero ── */}
      <section className="relative overflow-hidden bg-[#0B1F3A]">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="REPC Developers"
            className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/85 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-14">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#E8A33D] uppercase">{heroEyebrow}</p>
          <h1 className="max-w-2xl font-serif text-[clamp(24px,3vw,42px)] font-normal leading-[1.25] text-white tracking-wide">
            REPC Developers
          </h1>
          <div className="mt-4 h-[2px] w-16 bg-[#E8A33D]" />
          <p className="mt-4 max-w-xl text-sm font-light leading-[1.7] text-slate-200">{heroDesc}</p>

          {activeNiche && (
            <button
              onClick={() => setSelectedNiche(null)}
              className="mt-4 text-xs font-semibold text-[#E8A33D] hover:text-white transition-colors underline underline-offset-4 cursor-pointer block"
            >
              ← Back to all sectors
            </button>
          )}
        </div>
      </section>

      {/* Stats strip — moved out of the hero so the banner itself matches the Surveys page exactly */}
      <div className="bg-[#0B1F3A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white">120+</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Developers Listed</p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-[#E8A33D]">4,500+</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Projects Delivered</p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white">180M+</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Total Sq. Ft. Built</p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-[#E8A33D]">28</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">States Reached</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-8">
        <div className="bg-white rounded-2xl border border-gray-150 p-5 sm:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 space-y-1 max-w-2xl text-left">
            <h4 className="font-serif font-semibold text-[#0B1F3A] text-lg tracking-wide">Add Your Developer Profile</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Ensure your projects, completed sq. ft. statistics, and RERA certifications are visible to international institutional investors and major corporate occupiers.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 md:flex-none py-3 px-5 rounded-xl font-extrabold text-sm text-white bg-[#c9a84c] hover:bg-[#b8963e] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center"
            >
              Get Listed
            </button>
            <button
              onClick={() => alert("Directory application files download starting...")}
              className="flex-1 md:flex-none flex items-center justify-center gap-1.5 py-3 px-5 rounded-xl border-2 border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm transition-all duration-200 cursor-pointer"
            >
              Directory Guidelines <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-6 flex-wrap gap-2">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-[#0B1F3A] tracking-wide">Development Sectors</h2>
          <span className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider">Builder Segments</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DEVELOPMENT_NICHES.map((item, idx) => {
            const isActive = selectedNiche === idx;
            return (
              <button
                key={idx}
                onClick={() => setSelectedNiche(isActive ? null : idx)}
                className={`relative h-56 rounded-xl overflow-hidden group text-left shadow-sm transition-all duration-200 cursor-pointer ${
                  isActive ? "ring-2 ring-[#c9a84c] shadow-lg" : "hover:shadow-md"
                }`}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

                {isActive && (
                  <span className="absolute top-3 right-3 bg-[#c9a84c] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                    Viewing
                  </span>
                )}

                <div className="absolute inset-0 p-4 flex flex-col justify-end text-left">
                  <item.icon className="h-5 w-5 text-[#E8A33D] mb-1.5" strokeWidth={1.5} />
                  <h3 className="font-serif text-white font-semibold text-base leading-tight drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-xs mt-1 leading-relaxed line-clamp-2">{item.desc}</p>
                  <div className="flex items-center justify-between border-t border-white/15 pt-1.5 mt-2 text-[10px] font-bold tracking-wider">
                    <span className="text-[#E8A33D] uppercase">{item.category}</span>
                    <span className="text-white/50 uppercase">{item.date}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="flex justify-between items-end mb-6">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-[#0B1F3A] tracking-wide">Featured Developers</h2>
          <span className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider">Top Vetted Members</span>
        </div>

        <div className="relative">
          <button
            onClick={() => handleScroll(developersRef, "left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 h-9 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleScroll(developersRef, "right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 h-9 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div ref={developersRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {DEVELOPERS.map((dev) => (
              <Link
                key={dev.slug}
                href={`/companies/developers/${dev.slug}`}
                className="min-w-[290px] sm:min-w-[330px] bg-white rounded-xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col snap-start cursor-pointer"
              >
                <div className="relative p-5 text-left min-h-[100px] flex flex-col justify-center overflow-hidden rounded-t-xl bg-slate-950">
                  <img 
                    src={dev.heroImg} 
                    alt={dev.name} 
                    className="absolute inset-0 w-full h-full object-cover opacity-30 object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-indigo-950/80 to-transparent" />
                  <h3 className="text-white font-bold text-base leading-tight relative z-10">{dev.name}</h3>
                  <p className="text-white/80 text-[11px] mt-0.5 font-medium z-10">{dev.category}</p>
                </div>

                <div className="p-4 flex flex-col flex-1 text-left justify-between">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 text-left">{dev.desc}</p>
                  <div className="border-t border-gray-100 pt-2 flex flex-col gap-0.5 text-[11px] text-gray-400 font-medium">
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1F3A] border border-slate-800 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Building2 className="h-40 w-48 text-[#c9a84c]" />
          </div>

          <div className="flex items-center gap-4 relative z-10">
            <div className="hidden md:flex h-12 w-12 rounded-xl bg-white/10 items-center justify-center text-[#c9a84c] shrink-0 border border-white/20">
              <Building2 className="h-6 w-6 text-[#c9a84c]" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-normal tracking-wide text-white">Have Land or Joint Venture Proposals?</h3>
              <p className="text-slate-350 text-xs mt-0.5 max-w-xl">
                We coordinate developer roundtables letting land alliances present proposals to verified homebuilders and commercial developers.
              </p>
            </div>
          </div>
          <button
            onClick={() => alert("JV proposal registration guidelines will be emailed.")}
            className="w-full sm:w-auto py-3 px-5 rounded-xl font-extrabold text-sm text-[#0B1F3A] bg-[#c9a84c] hover:bg-amber-400 transition-colors shadow-md cursor-pointer shrink-0 text-center relative z-10"
          >
            Submit JV Inquiry
          </button>
        </div>
      </section>

      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-6">
          <h3 className="font-serif text-lg font-normal text-[#0B1F3A] tracking-wide">Iconic Projects</h3>
          <span className="text-xs font-bold text-slate-400 uppercase">Redefining Urban Spaces</span>
        </div>

        <div className="relative">
          <button
            onClick={() => handleScroll(highlightsRef, "left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 h-9 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleScroll(highlightsRef, "right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 h-9 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div
            ref={highlightsRef}
            className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {HIGHLIGHT_PHOTOS.map((photo, i) => (
              <div key={i} className="min-w-[260px] sm:min-w-[290px] h-44 rounded-xl overflow-hidden shadow-sm snap-start shrink-0">
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

      <section className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-150 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4 text-left">
          <div className="shrink-0 max-w-xs">
            <h4 className="font-serif text-[#0B1F3A] font-normal text-lg tracking-wide">Developer Network Stats</h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 flex-1 w-full">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-[#c9a84c]">
                <Award className="h-4 w-4 fill-current" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">100%</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">RERA Vetted</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-[#0B1F3A]">
                <Building2 className="h-4 w-4" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">380+</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">Grade-A Assets</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-[#0B1F3A]">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">2,500+</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">Corporate Tenants</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-[#0B1F3A]">
                <Globe2 className="h-4 w-4" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">25+</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">Host Metros</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setModalOpen(false)} />

          <div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-serif text-lg font-semibold text-[#0B1F3A] flex items-center gap-2 tracking-wide">
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
                  {DEVELOPMENT_NICHES.map((n) => (
                    <option key={n.title} value={n.title}>{n.title}</option>
                  ))}
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