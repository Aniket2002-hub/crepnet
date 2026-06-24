"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as Icons from "lucide-react";
import { CATEGORIES_CONFIG, ALL_EVENTS } from "./eventsData";

const TABS_CONFIG = [
  { name: "All Events", category: "all", href: "/events" },
  { name: "Conferences", category: "conferences", href: "/events/conferences" },
  { name: "Summits", category: "summits", href: "/events/summits" },
  { name: "Webinars", category: "webinars", href: "/events/webinars" },
  { name: "Networking", category: "networking", href: "/events/networking" },
  { name: "Awards", category: "awards", href: "/events/awards" },
];

const PAST_HIGHLIGHTS = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=200&q=80",
  "https://images.unsplash.com/photo-1560523160-754a9e25c68f?w=200&q=80",
  "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=200&q=80",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=200&q=80",
];

const TESTIMONIALS = [
  {
    quote: "REPC events provide a unique platform to connect, collaborate and create impactful business opportunities that shape the future of commercial real estate.",
    author: "Anil Mehta, Managing Director, Prestige Group",
  },
  {
    quote: "The quality of networking and insights at REPC summits is unmatched. Every edition delivers real value for our business.",
    author: "Priya Sharma, Head of Strategy, Embassy Group",
  },
  {
    quote: "REPC conferences bring together the best minds in CRE. The connections made here have been invaluable to our growth.",
    author: "Rajiv Kumar, CEO, Blackstone India",
  },
];

const WHY_ATTEND = [
  { iconName: "Users", label: "High-Impact Networking" },
  { iconName: "Lightbulb", label: "Industry Insights & Market Intelligence" },
  { iconName: "TrendingUp", label: "Business Growth Opportunities" },
  { iconName: "Star", label: "Learn from Top Industry Leaders" },
  { iconName: "Megaphone", label: "Showcase & Brand Visibility" },
];

function HeroBanner({ config }) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0B1F3A]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1800&q=90')" }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/85 to-transparent"
      />

      {/* Watermark logo area on right */}
      <div className="absolute right-[18%] top-1/2 -translate-y-1/2 text-center opacity-80 hidden lg:block">
        <div className="border-2 border-white/30 px-6 py-3 inline-block mb-2">
          <span className="text-white font-bold text-2xl tracking-widest">REPC</span>
        </div>
        <p className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase">Connected Communities.</p>
        <p className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase">Limitless Opportunities.</p>
      </div>

      {/* Synced layout scale padding - matching py-10 lg:py-16 values */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-16 text-left">
        <h1 className="text-white font-bold leading-[1.3] mb-3 text-[clamp(20px,2.5vw,36px)]">
          {config.title}
        </h1>
        <div className="mt-3.5 h-[3px] w-14 rounded-sm bg-[#E8A33D]" />
        <p className="mt-2 max-w-xl text-sm font-semibold leading-[1.7] text-slate-200 mb-6">
          {config.desc}
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap gap-6">
          {config.stats.map((s, i) => {
            const IconComponent = Icons[s.iconName] || Icons.Calendar;
            return (
              <div key={i} className="flex items-center gap-2.5">
                <IconComponent size={28} className="text-[#E8A33D] shrink-0" />
                <div>
                  <p className="text-white font-bold text-base leading-tight">{s.value}</p>
                  <p className="text-slate-300 text-[11px] mt-0.5">{s.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FilterBar({
  activeCategory,
  locationFilter,
  setLocationFilter,
  categoryFilter,
  setCategoryFilter,
  timeFilter,
  setTimeFilter
}) {
  const router = useRouter();

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategoryFilter(value);
    const matchedTab = TABS_CONFIG.find(t => t.category === value || (value === "All Categories" && t.category === "all"));
    if (matchedTab) {
      router.push(matchedTab.href);
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between gap-4 py-3 flex-wrap">
        {/* Tabs */}
        <div className="flex items-center gap-1 flex-wrap">
          {TABS_CONFIG.map((tab) => (
            <Link
              key={tab.category}
              href={tab.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeCategory === tab.category
                  ? "bg-[#0B1F3A] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3">
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="border border-gray-200 rounded-md text-sm px-3 py-2 text-gray-600 bg-white outline-none focus:border-[#E8A33D]"
          >
            <option>All Locations</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Bengaluru</option>
            <option>Pune</option>
            <option>Hyderabad</option>
          </select>
          
          <select
            value={categoryFilter}
            onChange={handleCategoryChange}
            className="border border-gray-200 rounded-md text-sm px-3 py-2 text-gray-600 bg-white outline-none focus:border-[#E8A33D]"
          >
            <option value="all">All Categories</option>
            <option value="summits">Summit</option>
            <option value="conferences">Conference</option>
            <option value="webinars">Webinar</option>
            <option value="networking">Networking</option>
            <option value="awards">Awards</option>
          </select>

          <div className="flex items-center border border-gray-200 rounded-md overflow-hidden text-sm">
            <button
              onClick={() => setTimeFilter("upcoming")}
              className={`px-4 py-2 font-medium transition-colors ${
                timeFilter === "upcoming"
                  ? "bg-[#0B1F3A] text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setTimeFilter("past")}
              className={`px-4 py-2 font-medium transition-colors ${
                timeFilter === "past"
                  ? "bg-[#0B1F3A] text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Past
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MainContent({ activeCategory, locationFilter, timeFilter }) {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [email, setEmail] = useState("");

  const filteredEvents = ALL_EVENTS.filter((ev) => {
    const matchesCategory = activeCategory === "all" || ev.category === activeCategory;
    const matchesLocation = locationFilter === "All Locations" || ev.location === locationFilter;
    const matchesTime = ev.isUpcoming === (timeFilter === "upcoming");

    return matchesCategory && matchesLocation && matchesTime;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
      <div className="grid lg:grid-cols-[1fr_360px] gap-8">

        {/* LEFT COLUMN */}
        <div className="border shadow-md p-4 rounded border-[#fdfdfd] text-left">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              {timeFilter === "upcoming" ? "Upcoming Events" : "Past Events"}
            </h2>
            <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-semibold">
              Showing {filteredEvents.length} events
            </span>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 mb-2">
                {filteredEvents.map((ev, i) => (
                  <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                    <div className="relative h-44 overflow-hidden">
                      <img src={ev.img} alt={ev.title} className="w-full h-full object-cover" />
                      <span className={`absolute top-2 left-2 ${ev.typeBg || 'bg-amber-600'} text-white text-[10px] font-bold px-2 py-0.5 rounded`}>
                        {ev.type}
                      </span>
                      {ev.featured && (
                        <span className="absolute top-2 right-2 bg-[#E8A33D] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="text-center min-w-[36px]">
                          <p className="text-xl font-bold text-[#0B1F3A] leading-none">{ev.date.split(" ")[0]}</p>
                          <p className="text-[10px] font-bold text-[#E8A33D] uppercase tracking-wider mt-1">
                            {ev.month || ev.date.split(" ")[1] || "EVENT"}
                          </p>
                        </div>
                        <h3 className="text-sm font-bold text-[#0B1F3A] leading-tight">{ev.title}</h3>
                      </div>
                      <div className="flex items-start gap-1 mb-2">
                        <Icons.MapPin size={11} className="text-gray-400 mt-0.5 shrink-0" />
                        <p className="text-gray-500 text-[11px]">{ev.venue || `${ev.location} Chapter`}</p>
                      </div>
                      <p className="text-gray-500 text-[11px] leading-relaxed mb-4 flex-1">{ev.desc || "Learn and grow with community experts."}</p>
                      <button className="w-full bg-[#0B1F3A] hover:bg-black text-white text-xs font-semibold py-2 rounded-lg transition-colors">
                        {ev.isUpcoming ? "Register Now" : "View Details"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-16 border border-dashed border-gray-200 rounded-xl bg-gray-50">
              <Icons.CalendarOff size={40} className="mx-auto text-gray-400 mb-3" />
              <p className="text-gray-600 font-semibold text-sm">No events found</p>
              <p className="text-gray-400 text-xs mt-1">Try changing the location or filters.</p>
            </div>
          )}

          {/* Why Attend */}
          <div className="mt-8 bg-[#f7f3f0] rounded-2xl border border-gray-150 p-6">
            <h3 className="text-base font-bold text-[#0B1F3A] mb-5">Why Attend REPC Events?</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
              {WHY_ATTEND.map((w, i) => {
                const IconComponent = Icons[w.iconName] || Icons.Star;
                return (
                  <div key={i} className="flex flex-col items-center text-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                      <IconComponent size={18} strokeWidth={1.5} className="text-[#0B1F3A]" />
                    </div>
                    <p className="text-[11px] font-semibold text-gray-600 leading-tight">{w.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="flex flex-col gap-6 text-left">
          {/* Past Event Highlights */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-[#0B1F3A]">Past Event Highlights</h2>
              <Link href="#" className="text-[#326695] text-xs font-semibold flex items-center gap-1 hover:underline">
                View Gallery <Icons.ArrowRight size={12} />
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
          <div className="bg-[#0B1F3A] rounded-2xl p-6 relative">
            <span className="text-[#E8A33D] text-5xl font-serif absolute top-4 left-5 leading-none opacity-80">"</span>
            <p className="text-gray-300 text-[13px] leading-relaxed pt-5 mb-4">
              {TESTIMONIALS[testimonialIdx].quote}
            </p>
            <p className="text-[#E8A33D] text-xs font-semibold">— {TESTIMONIALS[testimonialIdx].author}</p>
            <div className="flex gap-2 mt-4">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === testimonialIdx ? "bg-[#E8A33D]" : "bg-white/20"}`}
                />
              ))}
            </div>
          </div>

          {/* Stay Updated */}
          <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-base font-bold text-[#0B1F3A] mb-1">Stay Updated</h3>
                <p className="text-gray-500 text-[12px] mb-4 leading-relaxed">
                  Subscribe to get the latest updates on upcoming events, conference highlights and industry sessions.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-700 outline-none focus:border-[#E8A33D]"
                  />
                  <button className="bg-[#E8A33D] hover:bg-[#a8812f] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
              <Icons.Bell size={40} strokeWidth={1} className="text-[#E8A33D] shrink-0 opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PastEventsSection({ activeCategory, locationFilter }) {
  const pastEvents = ALL_EVENTS.filter((ev) => {
    const matchesCategory = activeCategory === "all" || ev.category === activeCategory;
    const matchesLocation = locationFilter === "All Locations" || ev.location === locationFilter;
    return matchesCategory && matchesLocation && !ev.isUpcoming;
  });

  if (pastEvents.length === 0) return null;

  return (
    <section className="border-t border-gray-100 bg-[#0B1F3A] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 text-left">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Past Events &amp; Conferences</h2>
          <Link href="#" className="text-white text-sm font-semibold flex items-center gap-1 hover:underline">
            Explore All Past Events <Icons.ArrowRight size={14} />
          </Link>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pastEvents.map((ev, i) => (
              <div key={i} className="flex gap-3 border border-gray-700/30 rounded-xl overflow-hidden bg-[#0B1F3A] hover:shadow-md transition-all">
                <div className="w-24 h-24 shrink-0 overflow-hidden">
                  <img src={ev.img} alt={ev.title} className="w-full h-full object-cover" />
                </div>
                <div className="py-2 pr-3 flex flex-col justify-center">
                  <p className="text-[10px] font-bold text-[#E8A33D] uppercase tracking-wider mb-0.5">REPC</p>
                  <h4 className="text-white font-bold text-xs leading-snug mb-1.5 line-clamp-2">{ev.title}</h4>
                  <div className="flex items-center gap-1 text-gray-400 text-[10px] mb-0.5">
                    <Icons.Calendar size={10} />
                    <span>{ev.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-[10px]">
                    <Icons.MapPin size={10} />
                    <span>{ev.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HostEventBanner() {
  return (
    <section className="bg-white border-t border-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between gap-6 flex-wrap text-left">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-[#E8A33D]/30 flex items-center justify-center">
            <Icons.Building2 size={22} strokeWidth={1.5} className="text-[#E8A33D]" />
          </div>
          <div>
            <h3 className="text-[#0B1F3A] font-bold text-base">Host Your Event with REPC</h3>
            <p className="text-gray-500 text-xs">
              Partner with us to organize impactful events that connect, engage and create lasting value.
            </p>
          </div>
        </div>
        <button className="border-2 border-[#E8A33D] text-[#E8A33D] hover:bg-[#E8A33D] hover:text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-all whitespace-nowrap">
          Partner With Us
        </button>
      </div>
    </section>
  );
}

export default function EventsTemplate({ category }) {
  const config = CATEGORIES_CONFIG[category] || CATEGORIES_CONFIG.all;
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [categoryFilter, setCategoryFilter] = useState(category);
  const [timeFilter, setTimeFilter] = useState("upcoming");

  return (
    <main className="antialiased bg-[#F8FAFC] min-h-screen">
      <HeroBanner config={config} />
      <FilterBar
        activeCategory={category}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        timeFilter={timeFilter}
        setTimeFilter={setTimeFilter}
      />
      <MainContent
        activeCategory={category}
        locationFilter={locationFilter}
        timeFilter={timeFilter}
      />
      <PastEventsSection
        activeCategory={category}
        locationFilter={locationFilter}
      />
      <HostEventBanner />
    </main>
  );
}