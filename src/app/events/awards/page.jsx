"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Building2,
  Home,
  Leaf,
  Award,
  Lightbulb,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Trophy,
  Star,
  Sparkles,
  ShieldAlert,
  ThumbsUp,
  X,
  User,
  FileText
} from "lucide-react";

// Categories data
const CATEGORIES = [
  {
    icon: Building2,
    title: "Commercial Project of the Year",
    desc: "Recognizing excellence in delivering outstanding commercial projects that redefine urban workspaces."
  },
  {
    icon: Home,
    title: "Residential Project of the Year",
    desc: "Honoring exceptional residential projects that enhance lifestyle, design, and occupant value."
  },
  {
    icon: Leaf,
    title: "Sustainability Excellence",
    desc: "Awarded to initiatives promoting green building, resource efficiency, and sustainable practices."
  },
  {
    icon: Award,
    title: "Real Estate Leader of the Year",
    desc: "Celebrating leaders who inspire, innovate, and drive growth across the Indian real estate landscape."
  },
  {
    icon: Lightbulb,
    title: "Innovation in Real Estate",
    desc: "Recognizing innovative tech solutions, design parameters, and methods that transform real estate."
  },
  {
    icon: Users,
    title: "Emerging Company of the Year",
    desc: "Honoring young companies and startups that show exceptional promise, scale, and potential."
  }
];

// Past Awardees
const AWARDEES = [
  {
    company: "DLF Limited",
    award: "Commercial Project of the Year 2024",
    year: "2024 WINNER",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    desc: "For DLF CyberPark, Gurugram — setting global benchmarks in premium workspace architecture."
  },
  {
    company: "Godrej Properties",
    award: "Residential Project of the Year 2024",
    year: "2024 WINNER",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    desc: "For Godrej Origins, Pune — recognizing outstanding design, lifestyle facilities, and fast delivery."
  },
  {
    company: "Lodha Group",
    award: "Sustainability Excellence Award 2024",
    year: "2024 WINNER",
    img: "https://images.unsplash.com/photo-1506970180-10ed36158f25?w=600&q=80",
    desc: "For Lodha Park, Mumbai — integrated eco-spaces, waste recycling, and net-zero energy design."
  },
  {
    company: "Brookfield India",
    award: "Innovation in Real Estate Award 2024",
    year: "2024 WINNER",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    desc: "For implementing AI-driven smart workplace systems across all IT parks."
  },
  {
    company: "Anuj Puri",
    award: "Real Estate Leader of the Year 2024",
    year: "2024 WINNER",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    desc: "Chairman, ANAROCK Group — for visionary leadership and transparent advisory in Indian CRE."
  },
  {
    company: "PropTech Solutions",
    award: "Emerging Company of the Year 2024",
    year: "2024 WINNER",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    desc: "For launching India's largest digitized commercial dealflow registry and analytics."
  }
];

// Highlight photos
const HIGHLIGHT_PHOTOS = [
  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&q=80",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&q=80"
];

export default function AwardsPage() {
  const [nominateModalOpen, setNominateModalOpen] = useState(false);
  const [nominationName, setNominationName] = useState("");
  const [nominationCategory, setNominationCategory] = useState("Commercial Project of the Year");
  const [nominationDesc, setNominationDesc] = useState("");
  
  // Slider refs for horizontal scrolling
  const categoriesRef = useRef(null);
  const awardeesRef = useRef(null);
  const highlightsRef = useRef(null);

  const handleScroll = (ref, direction) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const offset = direction === "left" ? -350 : 350;
      ref.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  const handleNominationSubmit = (e) => {
    e.preventDefault();
    if (!nominationName.trim() || !nominationDesc.trim()) {
      alert("Please fill in all the details.");
      return;
    }
    alert(`Thank you for nominating "${nominationName}" for ${nominationCategory}. Our jury will review it!`);
    setNominationName("");
    setNominationDesc("");
    setNominateModalOpen(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased text-slate-800">
      
      {/* ── HERO BANNER SECTION ── */}
      <section className="relative bg-gradient-to-r from-[#071324] via-[#0B1F3A] to-[#122b4f] text-white pt-10 pb-20 overflow-hidden">
        {/* Subtle grid layer */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/events" className="hover:text-white transition-colors">Events</Link>
            <span>/</span>
            <span className="text-[#c9a84c]">Awards</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c9a84c]/10 rounded-full border border-[#c9a84c]/20 text-[#c9a84c] text-xs font-extrabold tracking-wide uppercase">
                <Star className="h-3.5 w-3.5 fill-current" />
                Annual Recognition 2024
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                CREPNET Awards
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#c9a84c] tracking-tight">
                Recognizing Excellence. Inspiring Impact.
              </p>
              <p className="text-slate-350 text-sm sm:text-base max-w-xl text-slate-350 leading-relaxed">
                Celebrating the achievements of commercial real estate developers, visionary leaders, brokerage groups, and outstanding organizations who are actively shaping the future of Indian infrastructure.
              </p>

              {/* Stats Nodes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">12+</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Award Categories</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-[#c9a84c]">500+</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Awardees</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white">2500+</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Nominations</p>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-[#c9a84c]">10+</h4>
                  <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Years of Excellence</p>
                </div>
              </div>
            </div>

            {/* Right Column Glass Trophy Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative group max-w-xs sm:max-w-sm">
                {/* Glow ring */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#c9a84c]/20 to-transparent blur-3xl opacity-60 rounded-full group-hover:scale-105 transition-all" />
                <img
                  src="/awards_trophy.png"
                  alt="CREPNET Award Trophy"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(19,39,71,0.5)] transform hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERLAPPING NOMINATION HERO CARD ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10">
        <div className="bg-white rounded-2xl border border-gray-150 p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 space-y-2 max-w-2xl text-left">
            <h4 className="font-extrabold text-[#0B1F3A] text-lg sm:text-xl">Nominate Visionaries &amp; Projects</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              The CREPNET Awards honor visionary leaders, innovative green projects, and outstanding real estate companies that demonstrate exceptional performance, sustainability, and positive community impact.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0 w-full md:w-auto">
            <button
              onClick={() => setNominateModalOpen(true)}
              className="flex-1 md:flex-none py-3.5 px-6 rounded-xl font-extrabold text-sm text-white bg-[#c9a84c] hover:bg-[#b8963e] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center"
            >
              Nominate Now
            </button>
            <button
              onClick={() => alert("Nomination process documents will be downloaded soon.")}
              className="flex-1 md:flex-none flex items-center justify-center gap-1.5 py-3.5 px-6 rounded-xl border-2 border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm transition-all duration-200 cursor-pointer"
            >
              View Nomination Process <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── AWARD CATEGORIES SECTION ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">Award Categories</h2>
          </div>
          
          <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-[#c9a84c] hover:underline uppercase tracking-wider">
            View All Categories <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Categories Carousel Outer Container */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll(categoriesRef, "left")}
            className="absolute -left-5 top-1/2 -translate-y-1/2 h-10 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-55 text-slate-600 hover:text-slate-900 transition-colors shadow-lg z-10 flex items-center justify-center cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll(categoriesRef, "right")}
            className="absolute -right-5 top-1/2 -translate-y-1/2 h-10 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-55 text-slate-600 hover:text-slate-900 transition-colors shadow-lg z-10 flex items-center justify-center cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Single Combined Categories Card Container */}
          <div className="bg-white border border-gray-150 rounded-2xl shadow-sm overflow-hidden">
            <div
              ref={categoriesRef}
              className="flex divide-x divide-gray-150 overflow-x-auto scrollbar-hide scroll-smooth snap-x"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {CATEGORIES.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={idx}
                    className="min-w-[200px] lg:min-w-0 lg:flex-1 px-4 sm:px-6 py-10 flex flex-col items-center text-center snap-start justify-start group"
                  >
                    {/* Circle Icon */}
                    <div className="h-16 w-16 rounded-full border border-slate-200 bg-[#faf6f0] flex items-center justify-center text-[#0B1F3A] group-hover:bg-[#c9a84c]/15 group-hover:text-[#c9a84c] transition-all">
                      <Icon className="h-6 w-6 stroke-[1.5]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-extrabold text-[#0B1F3A] text-sm tracking-tight leading-snug mt-6 min-h-[40px] flex items-center justify-center max-w-[170px]">
                      {cat.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-xs mt-3 leading-relaxed max-w-[175px]">
                      {cat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── PAST AWARDEES SHOWCASE ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="flex justify-between items-end mb-10">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">Past Awardees</h2>
          </div>
          
          <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-[#c9a84c] hover:underline uppercase tracking-wider">
            View All Awardees <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Awardees Carousel Outer Container */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll(awardeesRef, "left")}
            className="absolute -left-5 top-1/2 -translate-y-1/2 h-10 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-55 text-slate-600 hover:text-slate-900 transition-colors shadow-lg z-10 flex items-center justify-center cursor-pointer"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll(awardeesRef, "right")}
            className="absolute -right-5 top-1/2 -translate-y-1/2 h-10 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-55 text-slate-600 hover:text-slate-900 transition-colors shadow-lg z-10 flex items-center justify-center cursor-pointer"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Awardees Horizontal Container */}
          <div
            ref={awardeesRef}
            className="flex gap-4 overflow-x-auto pb-6 scrollbar-hide scroll-smooth snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {AWARDEES.map((aw, idx) => (
              <div
                key={idx}
                className="min-w-[200px] lg:min-w-0 lg:flex-1 bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 snap-start flex flex-col justify-start group"
              >
                {/* Winner Card Photo */}
                <div className="h-36 relative overflow-hidden">
                  <img
                    src={aw.img}
                    alt={aw.company}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/5" />
                </div>

                {/* Winner Details */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Winner Badge (Solid orange/gold) */}
                    <span className="inline-block px-2 py-0.5 text-[9px] font-black tracking-wider bg-[#c9a84c] text-white rounded uppercase">
                      {aw.year}
                    </span>
                    {/* Winner Name */}
                    <h4 className="font-extrabold text-slate-900 text-sm mt-2.5 group-hover:text-[#0B1F3A] transition-colors leading-tight">
                      {aw.company}
                    </h4>
                  </div>
                  {/* Category description */}
                  <p className="text-slate-500 text-[11px] mt-1.5 leading-snug">
                    {aw.award}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANNER SUBMIT A NOMINATION ── */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1F3A] rounded-2xl border border-slate-800 p-8 sm:p-10 text-white relative overflow-hidden shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Trophy className="h-48 w-48 text-[#c9a84c]" />
          </div>
          
          <div className="flex items-center gap-5 relative z-10 text-left">
            <div className="hidden md:flex h-14 w-14 rounded-2xl bg-white/10 items-center justify-center text-[#c9a84c] shrink-0 border border-white/20">
              <Trophy className="h-8 w-8 fill-current" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">Know a deserving individual or organization?</h3>
              <p className="text-slate-350 text-xs sm:text-sm mt-1 max-w-xl">
                Nominate now and help us recognize exceptional contributions, sustainable designs, and exemplary leaders in the CRE space.
              </p>
            </div>
          </div>
          <button
            onClick={() => setNominateModalOpen(true)}
            className="w-full sm:w-auto py-3.5 px-6 rounded-xl font-extrabold text-sm text-[#0B1F3A] bg-[#c9a84c] hover:bg-amber-400 transition-colors shadow-md cursor-pointer shrink-0 text-center relative z-10"
          >
            Submit a Nomination
          </button>
        </div>
      </section>

      {/* ── HIGHLIGHTS & WHY MATTERS ── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Highlights carousel */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="flex justify-between items-end">
              <div className="text-left">
                <h3 className="text-xl font-extrabold text-[#0B1F3A] tracking-tight">Awards Highlights 2024</h3>
              </div>
              <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-[#c9a84c] hover:underline uppercase tracking-wider">
                View Event Highlights <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Highlights Carousel Wrapper */}
            <div className="relative flex-1">
              {/* Left Arrow Button */}
              <button
                onClick={() => handleScroll(highlightsRef, "left")}
                className="absolute -left-5 top-1/2 -translate-y-1/2 h-10 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-55 text-slate-600 hover:text-slate-900 transition-colors shadow-lg z-10 flex items-center justify-center cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={() => handleScroll(highlightsRef, "right")}
                className="absolute -right-5 top-1/2 -translate-y-1/2 h-10 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-55 text-slate-600 hover:text-slate-900 transition-colors shadow-lg z-10 flex items-center justify-center cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              <div
                ref={highlightsRef}
                className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {HIGHLIGHT_PHOTOS.map((photo, i) => (
                  <div key={i} className="min-w-[260px] sm:min-w-[280px] h-48 rounded-xl overflow-hidden shadow-sm snap-start shrink-0">
                    <img
                      src={photo}
                      alt={`Highlight ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why These Awards Matter (Beautiful Card) */}
          <div className="lg:col-span-5 bg-white border border-gray-150 rounded-2xl p-6 shadow-sm text-left flex flex-col justify-between">
            <h3 className="text-lg font-extrabold text-[#0B1F3A] tracking-tight mb-6">Why These Awards Matter</h3>
            
            <div className="space-y-5 flex-1 flex flex-col justify-around">
              {/* Point 1 */}
              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 rounded-full border border-slate-200 bg-[#faf6f0] flex items-center justify-center text-[#0B1F3A] shrink-0">
                  <Trophy className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#0B1F3A] text-sm">Celebrate Excellence</h4>
                  <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                    Recognizing outstanding achievements and contributions.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 rounded-full border border-slate-200 bg-[#faf6f0] flex items-center justify-center text-[#0B1F3A] shrink-0">
                  <Lightbulb className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#0B1F3A] text-sm">Inspire Innovation</h4>
                  <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                    Encouraging new ideas and setting industry benchmarks.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4 items-center">
                <div className="h-10 w-10 rounded-full border border-slate-200 bg-[#faf6f0] flex items-center justify-center text-[#0B1F3A] shrink-0">
                  <Users className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#0B1F3A] text-sm">Build a Stronger Community</h4>
                  <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">
                    Fostering connections and collaboration across the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── BOTTOM DECADE STAT STRIP ── */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 text-left">
          <div className="shrink-0 max-w-xs">
            <h4 className="text-[#0B1F3A] font-extrabold text-lg tracking-tight">A Decade of Recognizing Excellence</h4>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-4 flex-1 w-full">
            {/* Stat 1 */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-[#c9a84c]">
                <Trophy className="h-5 w-5 fill-current" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">10+</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">Years of Excellence</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-[#0B1F3A]">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">12+</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">Award Categories</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-[#0B1F3A]">
                <User className="h-5 w-5" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">500+</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">Awardees</span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-[#0B1F3A]">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">2500+</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">Nominations</span>
              </div>
            </div>

            {/* Stat 5 */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-[#0B1F3A]">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">100+</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">Industry Partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOMINATION SUBMISSION MODAL ── */}
      {nominateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setNominateModalOpen(false)} />
          
          <div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-lg font-black text-[#0B1F3A] flex items-center gap-2">
                <Trophy className="h-5 w-5 text-[#c9a84c]" /> Submit a Nomination
              </h3>
              <button className="text-slate-400 hover:text-slate-700 p-1 rounded-lg" onClick={() => setNominateModalOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleNominationSubmit} className="p-6 space-y-4 text-left">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">Candidate / Project / Company Name</label>
                <input
                  type="text"
                  value={nominationName}
                  onChange={(e) => setNominationName(e.target.value)}
                  placeholder="e.g. Lodha Altus / Arvind Mehta"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-400 text-slate-800 placeholder-slate-400"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">Award Category</label>
                <select
                  value={nominationCategory}
                  onChange={(e) => setNominationCategory(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-400 text-slate-700"
                >
                  <option value="Commercial Project of the Year">Commercial Project of the Year</option>
                  <option value="Residential Project of the Year">Residential Project of the Year</option>
                  <option value="Sustainability Excellence">Sustainability Excellence</option>
                  <option value="Real Estate Leader of the Year">Real Estate Leader of the Year</option>
                  <option value="Innovation in Real Estate">Innovation in Real Estate</option>
                  <option value="Emerging Company of the Year">Emerging Company of the Year</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">Why should they win? (Nomination Pitch)</label>
                <textarea
                  value={nominationDesc}
                  onChange={(e) => setNominationDesc(e.target.value)}
                  rows={4}
                  placeholder="Describe their exceptional performance, green elements, design, or leadership traits..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-400 text-slate-800 placeholder-slate-400 resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setNominateModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 rounded-xl bg-slate-50 border border-slate-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-bold bg-[#c9a84c] hover:bg-[#b8963e] text-white rounded-xl transition-all shadow-md cursor-pointer"
                >
                  Submit Nomination
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
