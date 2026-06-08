"use client";
import { useState } from "react";
import { HiUserGroup } from "react-icons/hi";
import { BsBuildingsFill } from "react-icons/bs";
import { TbPresentationAnalytics } from "react-icons/tb";
import {
  Ellipsis,
  DollarSign,
  FileSpreadsheet,
  Headset,
  Search,
  ChevronDown,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const LISTINGS_CATEGORIES = [
  { title: "All Stakeholders", icon: HiUserGroup },
  { title: "Developers", icon: BsBuildingsFill },
  { title: "Investors", icon: DollarSign },
  { title: "Occupiers", icon: FileSpreadsheet },
  { title: "Consultants", icon: TbPresentationAnalytics },
  { title: "Service Providers", icon: Headset },
  { title: "More", icon: Ellipsis },
];

// 
// DATA OF THE DEVELOPER CARDS
// 



const DEVELOPER_DATA = [
  {
    name: "Sumeru Developers",
    image: "https://via.placeholder.com/150",
    location: "Mumbai, Maharashtra",
    description:
      "Leading real estate developer with 25+ years of expertise in delivering world-class commercial, retail and mixed-use spaces.",
    experience: "25+ Years",
    ongoingProject: "12+ Ongoing Projects",
    areaDeveloped: "18.5 Mn sq ft",
    tags: ["Office", "Retail", "Mixed-Use", "Hospitality", "+1"],
    featured: true,
  },
  {
    name: "Acme Realty",
    image: "https://via.placeholder.com/150",
    location: "Bengaluru, Karnataka",
    description:
      "Creating innovative workspaces and IT parks that empower businesses and communities.",
    experience: "20+ Years",
    ongoingProject: "8+ Ongoing Projects",
    areaDeveloped: "10.2 Mn sq ft",
    tags: ["Office", "IT Parks", "Industrial", "Flex Spaces"],
    featured: false,
  },
  {
    name: "Skyline Spaces",
    image: "https://via.placeholder.com/150",
    location: "Delhi NCR",
    description:
      "Specialists in premium commercial, retail and mixed-use developments across North India.",
    experience: "15+ Years",
    ongoingProject: "6+ Ongoing Projects",
    areaDeveloped: "7.8 Mn sq ft",
    tags: ["Retail", "Office", "Mixed-Use", "High Street"],
    featured: false,
  },
  {
    name: "UrbanWorks",
    image: "https://via.placeholder.com/150",
    location: "Pune, Maharashtra",
    description:
      "Sustainable real estate solutions with a focus on design, innovation and long-term value.",
    experience: "12+ Years",
    ongoingProject: "5+ Ongoing Projects",
    areaDeveloped: "5.6 Mn sq ft",
    tags: ["Office", "Industrial", "Warehousing"],
    featured: false,
  },
];

const CITIES = ["All Cities", "Mumbai", "Bengaluru", "Delhi NCR", "Pune", "Hyderabad"];
const ASSET_TYPES = ["All Asset Types", "Office", "Retail", "Mixed-Use", "Hospitality", "Industrial"];
const SORT_OPTIONS = ["Featured", "Name A–Z", "Most Experience", "Largest Portfolio"];

// ─────────────────────────────────────────────────────────────
// HERO BANNER
// ─────────────────────────────────────────────────────────────

function HeroBanner() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#f4f6f8]"
      style={{ minHeight: "220px" }}
    >
      {/* Layer 1: skyline image anchored to the right */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right opacity-50"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1750073472835-9c1065cb6253?q=80&w=1800&auto=format&fit=crop')",
          backgroundSize: "auto 100%",
        }}
      />

      {/* Layer 2: fade image out on the left so text stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, #f4f6f8 30%, rgba(244,246,248,0.92) 50%, rgba(244,246,248,0.25) 100%)",
        }}
      />

      {/* Layer 3: text content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <h1
          className="text-[#1a2744] font-bold leading-tight max-w-2xl"
          style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
        >
          Join India&apos;s Premier <br />Commercial Real Estate Network
        </h1>
        <p className="text-gray-500 mt-3 max-w-xl text-sm leading-relaxed">
          Showcase your projects. Connect with investors, occupiers &amp; global partners. Grow your business.
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CATEGORY TABS
// ─────────────────────────────────────────────────────────────



function CategoryTabs({ activeCategory, setActiveCategory }) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-center">
        <div className="flex overflow-x-auto scrollbar-hide">
          {LISTINGS_CATEGORIES.map(({ title, icon: Icon }) => {
            const isActive = activeCategory === title;

            return (
              <button
                key={title}
                type="button"
                onClick={() => setActiveCategory(title)}
                className={`flex flex-col items-center gap-1.5 px-5 py-4 border-b-[3px] shrink-0 transition-colors ${
                  isActive
                    ? "text-[#c9a84c] border-[#c9a84c]"
                    : "text-gray-400 border-transparent hover:text-[#1a2744]"
                }`}
              >
                <Icon size={22} />
                <span className="text-xs font-medium whitespace-nowrap">{title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// SEARCH & FILTER BAR
// ─────────────────────────────────────────────────────────────

function SearchFilters({ search, setSearch, city, setCity, assetType, setAssetType }) {
  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search input */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Search developers, projects, cities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm text-gray-700 border border-gray-200 rounded-lg outline-none focus:border-[#c9a84c] transition-colors"
            />
          </div>

          {/* City dropdown */}
          <div className="relative shrink-0">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="appearance-none w-full sm:w-auto pl-4 pr-9 py-2.5 text-sm text-gray-600 border border-gray-200 rounded-lg bg-white outline-none focus:border-[#c9a84c] cursor-pointer"
            >
              {CITIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>

          {/* Asset type dropdown */}
          <div className="relative shrink-0">
            <select
              value={assetType}
              onChange={(e) => setAssetType(e.target.value)}
              className="appearance-none w-full sm:w-auto pl-4 pr-9 py-2.5 text-sm text-gray-600 border border-gray-200 rounded-lg bg-white outline-none focus:border-[#c9a84c] cursor-pointer"
            >
              {ASSET_TYPES.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </div>

          {/* Filter button */}
          <button
            type="button"
            className="shrink-0 px-6 py-2.5 text-sm font-semibold text-white bg-[#1a2744] rounded-lg hover:bg-black transition-colors"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// RESULTS BAR
// ─────────────────────────────────────────────────────────────

function ResultsBar({ count, sortBy, setSortBy }) {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-4 ">

      <p className="text-sm text-gray-500">
        <span className="font-semibold text-gray-700">{count}+</span> Developers Found
      </p>

      

      <div className="relative flex items-center gap-2 shrink-0">
        <span className="text-sm text-gray-500">Sort by:</span>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="appearance-none text-sm font-medium text-gray-700 bg-transparent pr-6 outline-none cursor-pointer"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown size={14} className="absolute right-0 text-gray-400 pointer-events-none" />
      </div>

    </div>
  );
}





// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────

export default function Listings() {
  const [activeCategory, setActiveCategory] = useState("Developers");
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("All Cities");
  const [assetType, setAssetType] = useState("All Asset Types");
  const [sortBy, setSortBy] = useState("Featured");

 

  return (
    <main className="antialiased bg-[#f8fafc] min-h-screen">
      <HeroBanner />
      <CategoryTabs
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <SearchFilters
        search={search}
        setSearch={setSearch}
        city={city}
        setCity={setCity}
        assetType={assetType}
        setAssetType={setAssetType}
      />
      <ResultsBar count={4} sortBy={sortBy} setSortBy={setSortBy} />
    </main>
  );
}
