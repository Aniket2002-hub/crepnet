"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Store,
  UtensilsCrossed,
  Tv,
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

// Comprehensive Classification List matching image_eba0a8.png layout perfectly
const CLASSIFICATION_COLUMNS = [
  [
    "Luxury Retail",
    "High Street Retail",
    "Shopping Centres & Malls",
    "Mixed-Use Developments",
    "Food & Beverage Retail",
    "Grocery & Daily Needs Retail",
    "Fashion & Lifestyle Retail"
  ],
  [
    "Home & Living Retail",
    "Consumer Electronics Retail",
    "Healthcare Retail",
    "Beauty & Personal Care",
    "Entertainment Retail",
    "Sports & Fitness Retail"
  ],
  [
    "Education & Learning Retail",
    "Financial Services Retail",
    "Professional Services",
    "Automotive Retail",
    "Specialty Retail",
    "Religious & Cultural Retail"
  ],
  [
    "Tourism & Hospitality Retail",
    "Cash-and-Carry Retail",
    "E-Commerce Support Retail",
    "Temporary Retail Formats",
    "Institutional & Public Retail",
    "Emerging Retail Concepts"
  ]
];

// Featured Retail Brands
const BRANDS = [
  {
    name: "Trent Hypermarkets (Tata)",
    ambassador: "Raman Joshi (Head of Leasing)",
    location: "Westside, Zudio, Star Bazaar",
    sqft: "180+ Stores Operational",
    img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=300&q=80",
    desc: " tata trent is rapidly expanding its fast-fashion flagship layouts across Tier 2 and Tier 3 highstreets."
  },
  {
    name: "Reliance Retail Alliances",
    ambassador: "Sameer Sen (VP of Real Estate)",
    location: "Trends, Smart Bazaar, JioMart",
    sqft: "1,200+ Corporate Stores",
    img: "https://images.unsplash.com/photo-1560523160-754a9e25c68f?w=200&q=80",
    desc: "India's largest retail conglomerate targeting mix-use retail centers and smart community developments."
  },
  {
    name: "PVR INOX Cinemas",
    ambassador: "Vikram Anand (Director of Properties)",
    location: "All Major Metros & Malls",
    sqft: "350+ Screens Integrated",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80",
    desc: "Anchor entertainment group seeking developer alliances for multi-screen premium layouts."
  }
];

// Highlight Photos
const HIGHLIGHT_PHOTOS = [
  "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=300&q=80",
  "https://images.unsplash.com/photo-1560523160-754a9e25c68f?w=200&q=80",
  "https://images.unsplash.com/photo-1506970180-10ed36158f25?w=500&q=80"
];

export default function RetailBrandsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [brandName, setBrandName] = useState("");
  const [targetCity, setTargetCity] = useState("");
  const [niche, setNiche] = useState("Food & Beverage (F&B)");

  const router = useRouter()
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
    alert(`Thank you, ${fullName}! Your retail expansion registration request for "${brandName}" has been received. Our mall advisory team will get in touch.`);
    setFullName("");
    setEmail("");
    setBrandName("");
    setTargetCity("");
    setModalOpen(false);
  };

  return (
    <div className="bg-white min-h-screen font-sans antialiased text-slate-800">
      
      {/* ── HERO BANNER SECTION (Matched layout & text sizes of About Us page) ── */}
      <section className="relative overflow-hidden bg-[#0B1F3A]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=1600&q=80"
            alt="City skyline at dusk"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/85 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-12 lg:py-10 text-left">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#E8A33D] uppercase">
            COMPANIES / RETAIL BRANDS
          </p>
          <h1 className="max-w-2xl text-[clamp(24px,3vw,40px)] font-bold leading-[1.3] text-white mt-2">
            REPC Retail Brands.
            <br />
            Expanding Outlets.
            <br />
            Elevating Yields.
          </h1>
          <div className="mt-3 h-[3px] w-14 rounded-sm bg-[#E8A33D]" />
          <p className="mt-2 max-w-xl text-sm font-semibold leading-[1.7] text-slate-200">
            Explore verified lists of international fashion labels, multiplex cinema chains, and restaurant groups seeking retail commercial leases and spaces.
          </p>

          {/* Stats strip matching header alignment */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 mt-6 border-t border-white/10 max-w-3xl">
            <div>
              <h4 className="text-2xl font-extrabold text-white">150+</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Brands Listed</p>
            </div>
            <div>
              <h4 className="text-2xl font-extrabold text-[#E8A33D]">8,000+</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Active Outlets</p>
            </div>
            <div>
              <h4 className="text-2xl font-extrabold text-white">350+</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Partner Malls</p>
            </div>
            <div>
              <h4 className="text-2xl font-extrabold text-[#E8A33D]">50M+</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">Monthly Footfall</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FLOATING CALL TO ACTION CARD ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-6">
        <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 space-y-1 max-w-2xl text-left">
            <h4 className="font-extrabold text-[#0B1F3A] text-lg">Register Brand Expansion Request</h4>
            <p className="text-slate-500 text-xs leading-relaxed">
              Submit your target retail demographics, required carpet area parameters, and preferred cities to receive matching commercial property listings.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0 w-full md:w-auto">
            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 md:flex-none py-2.5 px-5 rounded-xl font-extrabold text-xs text-white bg-[#E8A33D] hover:bg-[#d6922e] shadow-md transition-all duration-200 cursor-pointer text-center uppercase tracking-wide"
            >
              Register Expansion
            </button>
            <button
              onClick={() => alert("Expansion parameters requirements sheet download starting...")}
              className="flex-1 md:flex-none flex items-center justify-center gap-1.5 py-2.5 px-5 rounded-xl border-2 border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs transition-all duration-200 cursor-pointer"
            >
              Expansion Formats <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── COMPREHENSIVE SUB-CLASSIFICATION GRID SECTION (Perfect match with image_eba0a8.png Layout) ── */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-6">
          <div className="text-left">
            <h2 className="text-3xl font-bold tracking-wide uppercase text-[#0B1F3A]">
              Retail Sectors
            </h2>
            <div className="mt-1.5 h-0.5 w-16 bg-[#E8A33D]" />
          </div>
          <span className="text-xs font-bold text-[#E8A33D] uppercase tracking-wider">Brand Segments</span>
        </div>

        {/* Replicated container style from image_eba0a8.png */}
        <div className="bg-white border border-slate-400 rounded-2xl p-8 sm:p-10 shadow-sm text-left relative overflow-hidden">
          <p className="text-xs md:text-[13px] text-slate-500 font-medium leading-relaxed max-w-5xl mb-10">
            The retail sector in real estate encompasses a broad range of commercial formats designed to serve different consumer needs, catchment areas, and business models. Below is a comprehensive classification of retail real estate components.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6">
            {CLASSIFICATION_COLUMNS.map((colItems, colIdx) => (
              <ul key={colIdx} className="space-y-4">
                {colItems.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-xs sm:text-[13px] text-[#2c3e50] font-bold flex items-start gap-3 transition-transform duration-200 hover:translate-x-1">
                    <span className="text-slate-350 font-extrabold min-w-[20px] text-right">{itemIdx + 1}.</span>
                    <span className="hover:text-[#E8A33D] cursor-pointer">{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANDS SHOWCASE ── */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="flex justify-between items-end mb-4">
          <div className="text-left">
            <h2 className="text-3xl font-bold tracking-wide uppercase text-[#0B1F3A]">
              Active Retail Brands
            </h2>
            <div className="mt-1.5 h-0.5 w-16 bg-[#E8A33D]" />
          </div>
          <span className="text-xs font-bold text-[#E8A33D] uppercase tracking-wider">Verified Directory Members</span>
        </div>

        <div className="relative">
          <button
            onClick={() => handleScroll(brandsRef, "left")}
            className="absolute -left-5 top-1/2 -translate-y-1/2 h-10 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-50 text-slate-600 shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleScroll(brandsRef, "right")}
            className="absolute -right-5 top-1/2 -translate-y-1/2 h-10 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-50 text-slate-600 shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={brandsRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {BRANDS.map((sp, idx) => (
              <div
                key={idx}
                className="min-w-[240px] sm:min-w-[280px] cursor-pointer lg:min-w-0 lg:flex-1 bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 snap-start flex flex-col justify-start group"
                onClick={() => router.push(`/companies/retail-brands/${encodeURIComponent(sp.name.toLowerCase().replace(/\s+/g, '-'))}`)}
              >
                <div className="h-40 relative overflow-hidden">
                  <img
                    src={sp.img}
                    alt={sp.name}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/5" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <span className="inline-block px-2 py-0.5 text-[9px] font-black tracking-wider bg-[#E8A33D] text-white rounded uppercase">
                      Retailer
                    </span>
                    <h4 className="font-extrabold text-slate-900 text-sm mt-2 group-hover:text-[#0B1F3A] transition-colors leading-tight">
                      {sp.name}
                    </h4>
                    <p className="text-slate-500 text-[10px] font-semibold mt-0.5">{sp.ambassador}</p>
                  </div>
                  <p className="text-[#be7a15] text-[11px] font-bold mt-2 leading-snug">
                    {sp.sqft}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANNER MULTIPLEX ALLIANCES ── */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-[#0B1F3A] border border-slate-800 p-6 sm:p-8 text-white relative shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <Store className="h-40 w-40 text-[#E8A33D]" />
          </div>
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="hidden md:flex h-12 w-12 rounded-xl bg-white/10 items-center justify-center text-[#E8A33D] shrink-0 border border-white/20">
              <Store className="h-6 w-6 text-[#E8A33D]" />
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white uppercase">Have Premium Shopping Center Spaces?</h3>
              <p className="text-slate-300 text-xs mt-1 max-w-xl">
                We coordinate retailer matchmaking roundtables letting shopping mall builders present site layouts to verified fashion, dining, and multiplex expansion heads.
              </p>
            </div>
          </div>
          <button
            onClick={() => alert("Retail lease matchmaker forms will be sent to your email.")}
            className="w-full sm:w-auto py-2.5 px-5 rounded-xl font-extrabold text-xs text-[#0B1F3A] bg-[#E8A33D] hover:bg-amber-400 transition-colors shadow-md cursor-pointer shrink-0 text-center relative z-10 uppercase tracking-wider"
          >
            Submit Leasing Pitch
          </button>
        </div>
      </section>

      {/* ── HIGHLIGHTS GALLERY ── */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-4">
          <div className="text-left">
            <h2 className="text-3xl font-bold tracking-wide uppercase text-[#0B1F3A]">
              Store Openings
            </h2>
            <div className="mt-1.5 h-0.5 w-16 bg-[#E8A33D]" />
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase">Leasing Success Highlights</span>
        </div>

        <div className="relative">
          <button
            onClick={() => handleScroll(highlightsRef, "left")}
            className="absolute -left-5 top-1/2 -translate-y-1/2 h-10 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-50 text-slate-600 shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => handleScroll(highlightsRef, "right")}
            className="absolute -right-5 top-1/2 -translate-y-1/2 h-10 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-50 text-slate-600 shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={highlightsRef}
            className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {HIGHLIGHT_PHOTOS.map((photo, i) => (
              <div key={i} className="min-w-[260px] sm:min-w-[300px] h-44 rounded-xl overflow-hidden shadow-sm snap-start shrink-0">
                <img
                  src={photo}
                  alt={`Retail Brands Highlight ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STAT STRIP ── */}
      <section className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 text-left">
          <div className="shrink-0 max-w-xs">
            <h4 className="text-[#0B1F3A] font-extrabold text-base tracking-tight">Retail Network Stats</h4>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-4 flex-1 w-full">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-[#E8A33D]">
                <Award className="h-4 w-4 fill-current" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">100%</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">Vetted Brands</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-[#0B1F3A]">
                <Store className="h-4 w-4" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">8,000+</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">Flagship Assets</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-[#0B1F3A]">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">40M+</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">Consumer Footfall</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-[#0B1F3A]">
                <Globe2 className="h-4 w-4" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">45</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-1">Expansion Metros</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REGISTRATION MODAL ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
          
          <div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-md font-black text-[#0B1F3A] flex items-center gap-2 uppercase tracking-wide">
                <Plus className="h-4 w-4 text-[#E8A33D]" /> Add Retail Brand
              </h3>
              <button className="text-slate-400 hover:text-slate-700 p-1 rounded-lg cursor-pointer" onClick={() => setModalOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleBrandSubmit} className="p-6 space-y-4 text-left">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Your Name &amp; Designation</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Raman Joshi (Head of Leasing)"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-slate-400 text-slate-800"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Business Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. raman@trent.tata"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-slate-400 text-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Brand Name</label>
                  <input
                    type="text"
                    required
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g. Westside"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-slate-400 text-slate-800"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Target City</label>
                  <input
                    type="text"
                    required
                    value={targetCity}
                    onChange={(e) => setTargetCity(e.target.value)}
                    placeholder="e.g. Jaipur"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-slate-400 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Retail Niche Track</label>
                <select
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-slate-400 text-slate-700"
                >
                  <option value="Food &amp; Beverage (F&amp;B)">Food &amp; Beverage (F&amp;B)</option>
                  <option value="Fashion &amp; Lifestyle">Fashion &amp; Lifestyle</option>
                  <option value="Multiplexes &amp; Play Zones">Multiplexes &amp; Play Zones</option>
                  <option value="Hypermarkets &amp; Appliances">Hypermarkets &amp; Appliances</option>
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
                  className="px-5 py-2 text-xs font-bold bg-[#E8A33D] hover:bg-[#b8963e] text-white rounded-xl transition-all shadow-md cursor-pointer uppercase tracking-wider"
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