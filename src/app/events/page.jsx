"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Users, Calendar, Mic2, Globe2, MapPin, ChevronRight,
  ChevronLeft, ArrowRight, Bell, Search, Filter,
  Building2, TrendingUp, Lightbulb, Star, Megaphone,
} from "lucide-react";



// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const HERO_STATS = [
  { value: "50+", label: "Events Hosted", icon: Calendar },
  { value: "15,000+", label: "Attendees", icon: Users },
  { value: "250+", label: "Industry Speakers", icon: Mic2 },
  { value: "25+", label: "Cities Covered", icon: Globe2 },
];

const TABS = ["All Events", "Conferences", "Summits", "Webinars", "Masterclasses", "Networking", "Past Events"];

const UPCOMING_EVENTS = [
  {
    type: "Summit",
    typeBg: "bg-purple-600",
    featured: true,
    date: "18",
    month: "JUN",
    title: "RPEC India Commercial Real Estate Summit 2024",
    venue: "Jio World Convention Centre, Mumbai",
    desc: "India's largest gathering of CRE leaders, developers & occupiers.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
  },
  {
    type: "Conference",
    typeBg: "bg-blue-500",
    featured: false,
    date: "24",
    month: "JUL",
    title: "Retail Real Estate Conference 2024",
    venue: "The Leela Ambience, Gurugram",
    desc: "Exploring the future of retail, consumer trends & experiential destinations.",
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=80",
  },
  {
    type: "Conference",
    typeBg: "bg-blue-500",
    featured: false,
    date: "07",
    month: "AUG",
    title: "Office & GCC Leadership Forum 2024",
    venue: "ITC Gardenia, Bengaluru",
    desc: "GCC expansion, office demand outlook & future-ready workspaces.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
  },
  {
    type: "Summit",
    typeBg: "bg-purple-600",
    featured: false,
    date: "21",
    month: "AUG",
    title: "Logistics & Industrial Real Estate Summit",
    venue: "Hyatt Regency, Pune",
    desc: "Supply chain resilience, industrial parks & warehousing opportunities.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80",
  },
];

const PAST_HIGHLIGHTS = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&q=80",
  "https://images.unsplash.com/photo-1560523160-754a9e25c68f?w=200&q=80",
  "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=200&q=80",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=200&q=80",
];

const TESTIMONIALS = [
  {
    quote: "RPEC events provide a unique platform to connect, collaborate and create impactful business opportunities that shape the future of commercial real estate.",
    author: "Anil Mehta, Managing Director, Prestige Group",
  },
  {
    quote: "The quality of networking and insights at RPEC summits is unmatched. Every edition delivers real value for our business.",
    author: "Priya Sharma, Head of Strategy, Embassy Group",
  },
  {
    quote: "RPEC conferences bring together the best minds in CRE. The connections made here have been invaluable to our growth.",
    author: "Rajiv Kumar, CEO, Blackstone India",
  },
];

const WHY_ATTEND = [
  { icon: Users, label: "High-Impact Networking" },
  { icon: Lightbulb, label: "Industry Insights & Market Intelligence" },
  { icon: TrendingUp, label: "Business Growth Opportunities" },
  { icon: Star, label: "Learn from Top Industry Leaders" },
  { icon: Megaphone, label: "Showcase & Brand Visibility" },
];

const PAST_EVENTS = [
  {
    title: "RPEC Annual Real Estate Summit 2024",
    date: "15 May 2024",
    city: "Mumbai",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&q=80",
  },
  {
    title: "GCC & Office Spaces Conference 2024",
    date: "21 March 2024",
    city: "Bengaluru",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80",
  },
  {
    title: "Retail & High Street Summit 2024",
    date: "10 Feb 2024",
    city: "Delhi",
    img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=300&q=80",
  },
  {
    title: "Industrial & Logistics Real Estate Forum 2023",
    date: "12 Dec 2023",
    city: "Hyderabad",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&q=80",
  },
];

// ─────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────
function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "280px", background: "#0d1e35" }}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1800&q=90')" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to right, #0a1628 40%, rgba(10,22,40,0.75) 65%, rgba(10,22,40,0.2) 100%)" }}
      />

      {/* Watermark logo area on right */}
      <div className="absolute right-[18%] top-1/2 -translate-y-1/2 text-center opacity-80 hidden lg:block">
        <div className="border-2 border-white/30 px-6 py-3 inline-block mb-2">
          <span className="text-white font-bold text-2xl tracking-widest">RPEC</span>
        </div>
        <p className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase">Connected Communities.</p>
        <p className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase">Limitless Opportunities.</p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <h1 className="text-white font-bold leading-tight mb-3" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
          Events. &nbsp;Connections. &nbsp;Opportunities.
        </h1>
        <div style={{ width: "56px", height: "3px", background: "#be9438", borderRadius: "2px", marginBottom: "16px" }} />
        <p className="text-gray-300 mb-10 max-w-md" style={{ fontSize: "14px", lineHeight: "1.7", fontWeight: 300 }}>
          RPEC brings together industry leaders, innovators and decision makers through high-impact events, conferences and summits across India and beyond.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap gap-8">
          {HERO_STATS.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <s.icon size={32} strokeWidth={1.2} className="text-[#be9438]" />
              <div>
                <p className="text-white font-bold text-xl leading-tight">{s.value}</p>
                <p className="text-gray-400 text-xs">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// FILTER BAR
// ─────────────────────────────────────────────────────────────
function FilterBar({ activeTab, setActiveTab }) {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between gap-4 py-3 flex-wrap">
        {/* Tabs */}
        <div className="flex items-center gap-1 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#1a2744] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3">
          <select className="border border-gray-200 rounded-md text-sm px-3 py-2 text-gray-600 bg-white">
            <option>All Locations</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Bengaluru</option>
          </select>
          <select className="border border-gray-200 rounded-md text-sm px-3 py-2 text-gray-600 bg-white">
            <option>All Categories</option>
            <option>Summit</option>
            <option>Conference</option>
            <option>Webinar</option>
          </select>
          <div className="flex items-center border border-gray-200 rounded-md overflow-hidden text-sm">
            <button className="px-4 py-2 bg-[#1a2744] text-white font-medium">Upcoming</button>
            <button className="px-4 py-2 text-gray-600 hover:bg-gray-50">Past</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MAIN CONTENT
// ─────────────────────────────────────────────────────────────
function MainContent() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [email, setEmail] = useState("");

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
      <div className="grid lg:grid-cols-[1fr_360px] gap-8">

        {/* LEFT COLUMN */}
        <div className="border shadow-md p-4 rounded border-[#fdfdfd]">
          {/* Upcoming Events */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#1a2744]">Upcoming Events</h2>
            <Link href="#" className="text-[#326695] text-sm font-semibold flex items-center gap-1 hover:underline">
              View All Events <ArrowRight size={14} />
            </Link>
          </div>

          {/* Event Cards */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-2">
              {UPCOMING_EVENTS.map((ev, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="relative h-36 overflow-hidden">
                    <img src={ev.img} alt={ev.title} className="w-full h-full object-cover" />
                    <span className={`absolute top-2 left-2 ${ev.typeBg} text-white text-[10px] font-bold px-2 py-0.5 rounded`}>
                      {ev.type}
                    </span>
                    {ev.featured && (
                      <span className="absolute top-2 right-2 bg-[#be9438] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="text-center min-w-[36px]">
                        <p className="text-xl font-bold text-[#1a2744] leading-none">{ev.date}</p>
                        <p className="text-[10px] font-bold text-[#be9438] uppercase tracking-wider">{ev.month}</p>
                      </div>
                      <h3 className="text-sm font-bold text-[#1a2744] leading-tight">{ev.title}</h3>
                    </div>
                    <div className="flex items-start gap-1 mb-2">
                      <MapPin size={11} className="text-gray-400 mt-0.5 shrink-0" />
                      <p className="text-gray-500 text-[11px]">{ev.venue}</p>
                    </div>
                    <p className="text-gray-500 text-[11px] leading-relaxed mb-4 flex-1">{ev.desc}</p>
                    <button className="w-full bg-[#1a2744] hover:bg-black text-white text-xs font-semibold py-2 rounded-lg transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Nav arrows */}
            <button className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 hidden xl:flex">
              <ChevronLeft size={16} className="text-gray-600" />
            </button>
            <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 hidden xl:flex">
              <ChevronRight size={16} className="text-gray-600" />
            </button>
          </div>

          {/* Why Attend */}
          <div className="mt-8 bg-[#f7f3f0] rounded-2xl border border-gray-100 p-6">
            <h3 className="text-base font-bold text-[#1a2744] mb-5">Why Attend RPEC Events?</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {WHY_ATTEND.map((w, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                    <w.icon size={18} strokeWidth={1.5} className="text-[#1a2744]" />
                  </div>
                  <p className="text-[11px] font-semibold text-gray-600 leading-tight">{w.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="flex flex-col gap-6">

          {/* Past Event Highlights */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-[#1a2744]">Past Event Highlights</h2>
              <Link href="#" className="text-[#326695] text-xs font-semibold flex items-center gap-1 hover:underline">
                View Gallery <ArrowRight size={12} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {PAST_HIGHLIGHTS.map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden h-24 bg-gray-100">
                  <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-[#0A1628] rounded-2xl p-6 relative">
            <span className="text-[#be9438] text-5xl font-serif absolute top-4 left-5 leading-none opacity-80">"</span>
            <p className="text-gray-300 text-[13px] leading-relaxed pt-5 mb-4">
              {TESTIMONIALS[testimonialIdx].quote}
            </p>
            <p className="text-[#be9438] text-xs font-semibold">— {TESTIMONIALS[testimonialIdx].author}</p>
            <div className="flex gap-2 mt-4">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === testimonialIdx ? "bg-[#be9438]" : "bg-white/20"}`}
                />
              ))}
            </div>
          </div>

          {/* Stay Updated */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-base font-bold text-[#1a2744] mb-1">Stay Updated</h3>
                <p className="text-gray-500 text-[12px] mb-4 leading-relaxed">
                  Subscribe to get the latest updates on upcoming events, conference highlights and industry sessions.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-700 outline-none focus:border-[#be9438]"
                  />
                  <button className="bg-[#be9438] hover:bg-[#a8812f] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
              <Bell size={40} strokeWidth={1} className="text-[#be9438] shrink-0 opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// PAST EVENTS SECTION
// ─────────────────────────────────────────────────────────────
function PastEventsSection() {
  return (
    <section className="border-t border-gray-100 bg-[#1a2744] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Past Events &amp; Conferences</h2>
          <Link href="#" className="text-white text-sm font-semibold flex items-center gap-1 hover:underline">
            Explore All Past Events <ArrowRight size={14} />
          </Link>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PAST_EVENTS.map((ev, i) => (
              <div key={i} className="flex gap-3 border border-gray-50 rounded-xl overflow-hidden bg-[#1a2744] hover:shadow-md transition-all">
                <div className="w-24 shrink-0 overflow-hidden">
                  <img src={ev.img} alt={ev.title} className="w-full h-full object-cover" />
                </div>
                <div className="py-3 pr-3 flex flex-col justify-center">
                  <p className="text-[10px] font-bold text-[#be9438] uppercase tracking-wider mb-1">RPEC</p>
                  <h4 className="text-white font-bold text-xs leading-snug mb-2">{ev.title}</h4>
                  <div className="flex items-center gap-1 text-gray-400 text-[10px] mb-1">
                    <Calendar size={10} />
                    <span>{ev.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-[10px]">
                    <MapPin size={10} />
                    <span>{ev.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
            <ChevronLeft size={16} className="text-gray-600" />
          </button>
          <button className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50">
            <ChevronRight size={16} className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// HOST EVENT BANNER
// ─────────────────────────────────────────────────────────────
function HostEventBanner() {
  return (
    <section className="bg-white border-t border-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between gap-6 flex-wrap">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#be9438]/30 flex items-center justify-center">
            <Building2 size={22} strokeWidth={1.5} className="text-[#be9438]" />
          </div>
          <div>
            <h3 className="text-[#1a2744] font-bold text-base">Host Your Event with RPEC</h3>
            <p className="text-gray-500 text-xs">
              Partner with us to organize impactful events that connect, engage and create lasting value.
            </p>
          </div>
        </div>
        <button className="border-2 border-[#be9438] text-[#be9438] hover:bg-[#be9438] hover:text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-all whitespace-nowrap">
          Partner With Us
        </button>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────
export default function EventsPage() {
  const [activeTab, setActiveTab] = useState("All Events");

  return (
    <main className="antialiased bg-[#F8FAFC] min-h-screen">
      <HeroBanner />
      <FilterBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <MainContent />
      <PastEventsSection />
      <HostEventBanner />
    </main>
  );
}