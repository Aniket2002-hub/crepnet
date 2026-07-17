"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Store,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Award,
  Globe2,
  X,
  Plus,
  ArrowRight,
  Users,
  Briefcase,
  Sparkles,
  ShieldCheck,
  Mail,
  Phone,
} from "lucide-react";

const CLASSIFICATION_COLUMNS = [
  [
    "Luxury Retail",
    "High Street Retail",
    "Shopping Centres & Malls",
    "Mixed-Use Developments",
    "Food & Beverage Retail",
    "Fashion & Lifestyle Retail",
  ],
  [
    "Home & Living Retail",
    "Consumer Electronics Retail",
    "Healthcare Retail",
    "Beauty & Personal Care",
    "Entertainment Retail",
    "Sports & Fitness Retail",
  ],
  [
    "Education & Learning Retail",
    "Financial Services Retail",
    "Professional Services",
    "Automotive Retail",
    "Specialty Retail",
    "Religious & Cultural Retail",
  ],
  [
    "Tourism & Hospitality Retail",
    "Cash-and-Carry Retail",
    "E-Commerce Support Retail",
    "Temporary Retail Formats",
    "Institutional & Public Retail",
    "Emerging Retail Concepts",
  ],
];

const BRANDS = [
  {
    slug: "trent-hypermarkets-tata",
    name: "Trent Hypermarkets (Tata)",
    ambassador: "Raman Joshi (Head of Leasing)",
    location: "Westside, Zudio, Star Bazaar",
    sqft: "180+ Stores Operational",
    category: "FASHION & LIFESTYLE",
    img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80",
    desc: "Trent Hypermarkets is rapidly expanding its fast-fashion flagship layouts across Tier 2 and Tier 3 highstreets.",
  },
  {
    slug: "reliance-retail-alliances",
    name: "Reliance Retail Alliances",
    ambassador: "Sameer Sen (VP of Real Estate)",
    location: "Trends, Smart Bazaar, JioMart",
    sqft: "1,200+ Corporate Stores",
    category: "GROCERY & DAILY NEEDS",
    img: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?w=600&q=80",
    desc: "India's largest retail conglomerate targeting mix-use retail centers and smart community developments.",
  },
  {
    slug: "pvr-inox-cinemas",
    name: "PVR INOX Cinemas",
    ambassador: "Vikram Anand (Director of Properties)",
    location: "All Major Metros & Malls",
    sqft: "350+ Screens Integrated",
    category: "ENTERTAINMENT RETAIL",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    desc: "Anchor entertainment group seeking developer alliances for multi-screen premium layouts.",
  },
];

const HIGHLIGHT_PHOTOS = [
  "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=500&q=80",
  "https://images.unsplash.com/photo-1560523160-754a9e25c68f?w=500&q=80",
  "https://images.unsplash.com/photo-1506970180-10ed36158f25?w=500&q=80",
];

export default function RetailBrandsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [brandName, setBrandName] = useState("");
  const [targetCity, setTargetCity] = useState("");
  const [niche, setNiche] = useState("Food & Beverage (F&B)");

  const router = useRouter();
  const brandsRef = useRef(null);
  const highlightsRef = useRef(null);

  const handleScroll = (ref, direction) => {
    if (ref.current) {
      const { scrollLeft } = ref.current;
      const offset = direction === "left" ? -350 : 350;
      ref.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  const handleBrandSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !brandName.trim()) {
      alert("Please fill in required fields.");
      return;
    }
    alert(
      `Thank you, ${fullName}! Your registration request for "${brandName}" has been received.`,
    );
    setFullName("");
    setEmail("");
    setBrandName("");
    setTargetCity("");
    setModalOpen(false);
  };

  // Helper variable to trace cumulative item distributions smoothly
  let runningItemCounter = 0;

  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased text-slate-800">
      {/* ── HERO BANNER ── */}
      <section className="relative overflow-hidden bg-[#0B1F3A] min-h-[260px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=1600&q=80"
            alt="Retail Assets"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/85 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-14">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#E8A33D] uppercase">
            Verified Retail Portfolio
          </p>
          <h1 className="max-w-2xl font-serif text-[clamp(24px,3vw,42px)] font-normal leading-[1.25] text-white tracking-wide">
            RPEC Retail Brands
          </h1>
          <div className="mt-4 h-[2px] w-16 bg-[#E8A33D]" />
          <p className="mt-4 max-w-xl text-sm font-light leading-[1.7] text-slate-200">
            Explore verified lists of international fashion labels, multiplex
            cinema chains, and restaurant groups seeking retail commercial
            leases and spaces.
          </p>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <div className="bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white">
                150+
              </h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">
                Brands Listed
              </p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-[#E8A33D]">
                8,000+
              </h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">
                Active Outlets
              </p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white">
                350+
              </h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">
                Partner Malls
              </p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-[#E8A33D]">
                50M+
              </h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">
                Monthly Footfall
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── FLOATING CTA CARD ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-8">
        <div className="bg-white rounded-2xl border border-gray-150 p-5 sm:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 space-y-1 max-w-2xl text-left">
            <h4 className="font-serif font-semibold text-slate-950 text-lg tracking-wide">
              Register Brand Expansion Request
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Submit your target retail demographics, required carpet area
              parameters, and preferred cities to receive matching commercial
              property listings.
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
              onClick={() => alert("Expansion data template starting...")}
              className="flex-1 md:flex-none flex items-center justify-center gap-1.5 py-3 px-5 rounded-xl border-2 border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-sm transition-all duration-200 cursor-pointer"
            >
              Expansion Formats <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── SECTORS COMPREHENSIVE CLASSIFICATION GRID ── */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-6 flex-wrap gap-2">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-slate-950 tracking-wide">
            Retail Sectors
          </h2>
          <span className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider">
            Brand Segments
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm text-left relative overflow-hidden">
          <p className="text-slate-500 text-sm leading-relaxed max-w-4xl mb-8 font-light">
            The retail sector in real estate encompasses a broad range of
            commercial formats designed to serve different consumer needs,
            catchment areas, and business models. Below is a comprehensive
            classification of retail real estate components.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
            {CLASSIFICATION_COLUMNS.map((colItems, colIdx) => (
              <ul key={colIdx} className="space-y-3">
                {colItems.map((item, itemIdx) => {
                  runningItemCounter++;
                  return (
                    <li
                      key={itemIdx}
                      className="text-xs sm:text-sm text-slate-700 font-medium flex items-start gap-2.5 transition-transform duration-200 hover:translate-x-0.5"
                    >
                      <span className="text-slate-300 font-bold min-w-[20px] text-right">
                        {runningItemCounter}.
                      </span>
                      <span className="hover:text-[#c9a84c] cursor-pointer">
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS DIRECTORY SHOWCASE ── */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="flex justify-between items-end mb-6">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-slate-950 tracking-wide">
            Active Retail Brands
          </h2>
          <span className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider">
            Verified Members
          </span>
        </div>

        <div className="relative">
          <button
            onClick={() => handleScroll(brandsRef, "left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 h-9 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-50 text-slate-600 shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleScroll(brandsRef, "right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 h-9 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-50 text-slate-600 shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div
            ref={brandsRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {BRANDS.map((sp) => (
              <Link
                key={sp.slug}
                href={`/companies/retail-brands/${sp.slug}`}
                className="min-w-[290px] sm:min-w-[330px] bg-white rounded-xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col snap-start cursor-pointer"
              >
                <div className="relative p-5 text-left min-h-[100px] flex flex-col justify-center overflow-hidden rounded-t-xl bg-slate-950">
                  <img
                    src={sp.img}
                    alt={sp.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-slate-950/80 to-transparent" />
                  <h3 className="text-white font-bold text-base leading-tight relative z-10">
                    {sp.name}
                  </h3>
                  <p className="text-white/80 text-[11px] mt-0.5 font-medium z-10">
                    {sp.category}
                  </p>
                </div>

                <div className="p-4 flex flex-col flex-1 text-left justify-between">
                  <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">
                    {sp.desc}
                  </p>
                  <div className="border-t border-gray-100 pt-2 flex flex-col gap-0.5 text-[11px] text-gray-400 font-medium">
                    <div className="flex items-center gap-1">
                      <Store size={11} className="text-slate-400 shrink-0" />
                      <span className="truncate">{sp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={11} className="text-slate-400 shrink-0" />
                      <span className="text-[#be7a15] font-bold">
                        {sp.sqft}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROUNDTABLE BANNER ── */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-4 relative z-10">
            <div className="hidden md:flex h-12 w-12 rounded-xl bg-white/10 items-center justify-center text-[#c9a84c] shrink-0 border border-white/20">
              <Store className="h-6 w-6 text-[#c9a84c]" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-normal tracking-wide text-white">
                Have Premium Shopping Center Spaces?
              </h3>
              <p className="text-slate-300 text-xs mt-0.5 max-w-xl font-light">
                We coordinate retailer matchmaking roundtables letting shopping
                mall builders present site layouts to verified fashion, dining,
                and multiplex expansion heads.
              </p>
            </div>
          </div>
          <button
            onClick={() => alert("Matchmaker parameters will be emailed.")}
            className="w-full sm:w-auto py-3 px-5 rounded-xl font-extrabold text-sm text-slate-950 bg-[#c9a84c] hover:bg-amber-400 transition-colors shadow-md cursor-pointer shrink-0 text-center relative z-10"
          >
            Submit Leasing Pitch
          </button>
        </div>
      </section>

      {/* ── HIGHLIGHT GALLERIES ── */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-6">
          <h3 className="font-serif text-lg font-normal text-slate-950 tracking-wide">
            Store Openings
          </h3>
          <span className="text-xs font-bold text-slate-400 uppercase">
            Leasing Success Highlights
          </span>
        </div>

        <div className="relative">
          <button
            onClick={() => handleScroll(highlightsRef, "left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 h-9 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-50 text-slate-600 shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleScroll(highlightsRef, "right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 h-9 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-50 text-slate-600 shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div
            ref={highlightsRef}
            className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {HIGHLIGHT_PHOTOS.map((photo, i) => (
              <div
                key={i}
                className="min-w-[260px] sm:min-w-[290px] h-44 rounded-xl overflow-hidden shadow-sm snap-start shrink-0"
              >
                <img
                  src={photo}
                  alt={`Highlight ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRIP OVERVIEW ACCESS ── */}
      <section className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-150 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4 text-left">
          <div className="shrink-0 max-w-xs">
            <h4 className="font-serif text-slate-950 font-normal text-lg tracking-wide">
              Retail Network Stats
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 flex-1 w-full">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-[#c9a84c]">
                <Award className="h-4 w-4 fill-current" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">
                  100%
                </h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">
                  Vetted Brands
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-950">
                <Store className="h-4 w-4" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">
                  8,000+
                </h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">
                  Flagship Assets
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-950">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">
                  40M+
                </h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">
                  Consumer Footfall
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-950">
                <Globe2 className="h-4 w-4" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">
                  45
                </h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">
                  Expansion Metros
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REGISTRATION MODAL ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />

          <div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-serif text-lg font-semibold text-slate-950 flex items-center gap-2 tracking-wide">
                <Plus className="h-5 w-5 text-[#c9a84c]" /> Add Retail Brand
              </h3>
              <button
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg cursor-pointer"
                onClick={() => setModalOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form
              onSubmit={handleBrandSubmit}
              className="p-6 space-y-4 text-left"
            >
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">
                  Your Name &amp; Designation
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Raman Joshi (Head of Leasing)"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-400 text-slate-800"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">
                  Business Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. raman@trent.tata"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-400 text-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    required
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g. Westside"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-400 text-slate-800"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">
                    Target City
                  </label>
                  <input
                    type="text"
                    required
                    value={targetCity}
                    onChange={(e) => setTargetCity(e.target.value)}
                    placeholder="e.g. Jaipur"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-400 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">
                  Primary Segment
                </label>
                <select
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-400 text-slate-700"
                >
                  <option value="Food &amp; Beverage (F&amp;B)">
                    Food &amp; Beverage (F&amp;B)
                  </option>
                  <option value="Fashion &amp; Lifestyle">
                    Fashion &amp; Lifestyle
                  </option>
                  <option value="Multiplexes &amp; Play Zones">
                    Multiplexes &amp; Play Zones
                  </option>
                  <option value="Hypermarkets &amp; Appliances">
                    Hypermarkets &amp; Appliances
                  </option>
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
                  Register Brand
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
