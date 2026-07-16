"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Briefcase,
  Wrench,
  ShieldCheck,
  TrendingUp,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Award,
  Globe2,
  X,
  Plus,
  ArrowRight,
  Users,
  Sparkles
} from "lucide-react";

const SERVICE_SPECIALTIES = [
  {
    icon: Briefcase,
    title: "Valuation & Appraisals",
    desc: "Vetted asset evaluations, financial modelling, yield optimization audits, and asset ratings."
  },
  {
    icon: Wrench,
    title: "Facility Management",
    desc: "Mechanical maintenance, automated security grids, and utility optimization services."
  },
  {
    icon: ShieldCheck,
    title: "Legal & Corporate Tax",
    desc: "JV structures, title search validation audits, tax alignment, and registration assistance."
  },
  {
    icon: TrendingUp,
    title: "Brokerage & Deal Sourcing",
    desc: "Tenant acquisition representation, flex desk sublease networks, and project marketing."
  }
];

const PROVIDERS = [
  {
    slug: "jll-india-jones-lang-lasalle",
    name: "JLL India (Jones Lang LaSalle)",
    ambassador: "Sanjay Joshi (Senior Director, Advisory)",
    location: "National Presence (15 Metros)",
    sqft: "12,000+ Corporate Deals Moderated",
    category: "STRATEGIC ADVISORY",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    desc: "Leading international advisor offering commercial transaction consulting, facility setups, and market data."
  },
  {
    slug: "veritas-legal-advocates",
    name: "Veritas Legal Advocates",
    ambassador: "Shalini Gupta (Real Estate Partner)",
    location: "Mumbai, Delhi-NCR, Bengaluru",
    sqft: "180+ Joint Ventures Structured",
    category: "LEGAL & COMPLIANCE",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    desc: "Specialized law firm protecting builders and occupiers through title clearance and RERA disputes advice."
  },
  {
    slug: "colliers-operations-group",
    name: "Colliers Operations Group",
    ambassador: "Vikram Sen (Head of Asset Management)",
    location: "Bengaluru, Chennai, Hyderabad",
    sqft: "85 Million Sq. Ft. Managed",
    category: "ASSET MANAGEMENT",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    desc: "Offers premium smart office facility tracking, energy optimization, and on-site operation models."
  }
];

const HIGHLIGHT_PHOTOS = [
  // "https://images.unsplash.com/photo-1506970180-10ed36158f25?w=500&q=80",
  "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=80"
];

export default function ServiceProvidersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [accreditation, setAccreditation] = useState("");
  const [specialty, setSpecialty] = useState("Valuation & Appraisals");

  const router = useRouter();
  const specialtiesRef = useRef(null);
  const providersRef = useRef(null);
  const highlightsRef = useRef(null);

  const handleScroll = (ref, direction) => {
    if (ref.current) {
      const { scrollLeft } = ref.current;
      const offset = direction === "left" ? -350 : 350;
      ref.current.scrollTo({ left: scrollLeft + offset, behavior: "smooth" });
    }
  };

  const handleProviderSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !companyName.trim()) {
      alert("Please fill in required fields.");
      return;
    }
    alert(`Thank you, ${fullName}! Your provider registry request for "${companyName}" has been received.`);
    setFullName("");
    setEmail("");
    setCompanyName("");
    setAccreditation("");
    setModalOpen(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased text-slate-800">
      
      {/* ── HERO BANNER ── */}
      <section className="relative overflow-hidden bg-[#0B1F3A] min-h-[370px] flex flex-col justify-center">
        <div className="absolute inset-0 ">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt="Service Providers Backdrop"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/85 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-14">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#E8A33D] uppercase">Verified Advisory Partners</p>
          <h1 className="max-w-2xl font-serif text-[clamp(24px,3vw,42px)] font-normal leading-[1.25] text-white tracking-wide">
            REPC Service Providers
          </h1>
          <div className="mt-4 h-[2px] w-16 bg-[#E8A33D]" />
          <p className="mt-4 max-w-xl text-sm font-light leading-[1.7] text-slate-200">
            Explore profiles of validated property law firms, certified appraisers, facility maintenance partners, and corporate tenant brokerage offices.
          </p>
        </div>
      </section>

      {/* ── METRICS STRIP ── */}
      <div className="bg-slate-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white">200+</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Providers Registered</p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-[#E8A33D]">12,000+</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Deals Moderated</p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white">15</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Specialty Sectors</p>
            </div>
            <div>
              <h4 className="text-2xl sm:text-3xl font-bold text-[#E8A33D]">98%</h4>
              <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── FLOATING CALL TO ACTION CARD ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-8">
        <div className="bg-white rounded-2xl border border-gray-150 p-5 sm:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 space-y-1 max-w-2xl text-left">
            <h4 className="font-serif font-semibold text-slate-950 text-lg tracking-wide">Apply to List Your Service Firm</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Become a verified partner to receive client leads, project advisory RFP invitations, and connect with commercial builders requiring technical support.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => setModalOpen(true)}
              className="flex-1 md:flex-none py-3 px-5 rounded-xl font-extrabold text-sm text-white bg-[#c9a84c] hover:bg-[#b8963e] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer text-center"
            >
              Apply to List
            </button>
            <button
              onClick={() => alert("Acquisition documentation files starting...")}
              className="flex-1 md:flex-none flex items-center justify-center gap-1.5 py-3 px-5 rounded-xl border-2 border-slate-200 text-slate-700 hover:bg-slate-55 font-bold text-sm transition-all duration-200 cursor-pointer"
            >
              Advisory Formats <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── SPECIALTIES SECTION ── */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-6 flex-wrap gap-2">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-slate-950 tracking-wide">Service Specialties</h2>
          <span className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider">Provider Divisions</span>
        </div>

        <div className="relative">
          <button
            onClick={() => handleScroll(specialtiesRef, "left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 h-9 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-50 text-slate-600 shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleScroll(specialtiesRef, "right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 h-9 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-50 text-slate-600 shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div
              ref={specialtiesRef}
              className="flex divide-x divide-slate-100 overflow-x-auto scrollbar-hide scroll-smooth snap-x"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {SERVICE_SPECIALTIES.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="min-w-[260px] sm:min-w-[280px] lg:min-w-0 lg:flex-1 p-6 flex flex-col items-start text-left snap-start justify-between group"
                  >
                    <div>
                      <div className="h-10 w-10 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-center text-slate-950 group-hover:bg-amber-50 group-hover:text-[#c9a84c] transition-all">
                        <Icon className="h-5 w-5 stroke-[1.5]" />
                      </div>
                      <h3 className="font-serif font-semibold text-slate-950 text-base tracking-tight leading-snug mt-4">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-xs mt-2 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROVIDERS DIRECTORY SHOWCASE ── */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="flex justify-between items-end mb-6">
          <h2 className="font-serif text-xl md:text-2xl font-normal text-slate-950 tracking-wide">Active Service Providers</h2>
          <span className="text-xs font-bold text-[#c9a84c] uppercase tracking-wider">Accredited Members</span>
        </div>

        <div className="relative">
          <button
            onClick={() => handleScroll(providersRef, "left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 h-9 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-50 text-slate-600 shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => handleScroll(providersRef, "right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 h-9 w-10 border border-slate-200 rounded-full bg-white hover:bg-slate-50 text-slate-600 shadow-lg z-10 flex items-center justify-center cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          <div ref={providersRef} className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth snap-x" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {PROVIDERS.map((sp) => (
              <Link
                key={sp.slug}
                href={`/companies/service-providers/${sp.slug}`}
                className="min-w-[290px] sm:min-w-[330px] bg-white rounded-xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col snap-start cursor-pointer"
              >
                <div className="relative p-5 text-left min-h-[100px] flex flex-col justify-center overflow-hidden rounded-t-xl bg-slate-950">
                  <img src={sp.img} alt={sp.name} className="absolute inset-0 w-full h-full object-cover opacity-30 object-center" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-slate-950/80 to-transparent" />
                  <h3 className="text-white font-bold text-base leading-tight relative z-10">{sp.name}</h3>
                  <p className="text-white/80 text-[11px] mt-0.5 font-medium z-10">{sp.category}</p>
                </div>

                <div className="p-4 flex flex-col flex-1 text-left justify-between">
                  <p className="text-gray-600 text-sm font-light leading-relaxed mb-4">{sp.desc}</p>
                  <div className="border-t border-gray-100 pt-2 flex flex-col gap-0.5 text-[11px] text-gray-400 font-medium">
                    <div className="flex items-center gap-1">
                      <MapPin size={11} className="text-slate-400 shrink-0" />
                      <span className="truncate">{sp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award size={11} className="text-slate-400 shrink-0" />
                      <span className="text-[#be7a15] font-bold">{sp.sqft}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TENDER PROJECT RFP BANNER ── */}
      <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 border border-slate-900 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-4 relative z-10">
            <div className="hidden md:flex h-12 w-12 rounded-xl bg-white/10 items-center justify-center text-[#c9a84c] shrink-0 border border-white/20">
              <Wrench className="h-6 w-6 text-[#c9a84c]" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-normal tracking-wide text-white">Need RFP Bids for a Project Facility?</h3>
              <p className="text-slate-300 text-xs mt-0.5 max-w-xl font-light">
                We coordinate advisory roundtables letting developers post project maintenance tenders to RICS-approved facility management service providers.
              </p>
            </div>
          </div>
          <button
            onClick={() => alert("RFP parameters template configurations will be emailed.")}
            className="w-full sm:w-auto py-3 px-5 rounded-xl font-extrabold text-sm text-slate-950 bg-[#c9a84c] hover:bg-amber-400 transition-colors shadow-md cursor-pointer shrink-0 text-center relative z-10"
          >
            Post RFP Tender
          </button>
        </div>
      </section>

      {/* ── HIGHLIGHT GALLERIES ── */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-6">
          <h3 className="font-serif text-lg font-normal text-slate-950 tracking-wide">Advisory Forums</h3>
          <span className="text-xs font-bold text-slate-400 uppercase">Consulting Success Highlights</span>
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

          <div ref={highlightsRef} className="flex gap-4 overflow-x-auto pb-2 scroll-smooth snap-x scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {HIGHLIGHT_PHOTOS.map((photo, i) => (
              <div key={i} className="min-w-[260px] sm:min-w-[290px] h-44 rounded-xl overflow-hidden shadow-sm snap-start shrink-0">
                <img src={photo} alt={`Highlight ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRIP DATA ACCESSIBILITIES ── */}
      <section className="pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-150 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4 text-left">
          <div className="shrink-0 max-w-xs">
            <h4 className="font-serif text-slate-950 font-normal text-lg tracking-wide">Advisory Stats</h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 flex-1 w-full">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-[#c9a84c]">
                <Award className="h-4 w-4 fill-current" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">RICS</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">Accredited Advisors</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-950">
                <Briefcase size={14} />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">12k+</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">Managed Assets</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-950">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">200+</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">Consultancies Listed</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-slate-50 flex items-center justify-center text-slate-950">
                <Globe2 className="h-4 w-4" />
              </div>
              <div>
                <h5 className="text-slate-900 font-extrabold text-sm leading-none">100%</h5>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUBMISSION REGISTRY MODAL ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setModalOpen(false)} />

          <div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-serif text-lg font-semibold text-slate-950 flex items-center gap-2 tracking-wide">
                <Plus className="h-5 w-5 text-[#c9a84c]" /> Add Service Firm
              </h3>
              <button className="text-slate-400 hover:text-slate-700 p-1 rounded-lg cursor-pointer" onClick={() => setModalOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleProviderSubmit} className="p-6 space-y-4 text-left">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">Your Name &amp; Designation</label>
                <input
                  type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Shalini Gupta (Senior Partner)"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-400 text-slate-800"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">Business Email Address</label>
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. shalini@veritas.in"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-400 text-slate-800"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">Service Company Name</label>
                  <input
                    type="text" required value={companyName} onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Veritas Legal"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-400 text-slate-800"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">RICS / BAR Accreditation Number</label>
                  <input
                    type="text" required value={accreditation} onChange={(e) => setAccreditation(e.target.value)}
                    placeholder="e.g. RICS-IND-890"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-400 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1.5">Service Specialty Track</label>
                <select
                  value={specialty} onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-slate-400 text-slate-700"
                >
                  <option value="Valuation &amp; Appraisals">Valuation &amp; Appraisals</option>
                  <option value="Facility Management">Facility Management</option>
                  <option value="Legal &amp; Corporate Tax">Legal &amp; Corporate Tax</option>
                  <option value="Brokerage &amp; Deal Sourcing">Brokerage &amp; Deal Sourcing</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button" onClick={() => setModalOpen(false)}
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