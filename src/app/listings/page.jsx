"use client";
import { useState } from "react";
import Link from "next/link";
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
  MapPin,
  BadgeCheck,
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
    image:
      "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Mumbai, Maharashtra",
    description:
      "Leading real estate developer with 25+ years of expertise in delivering world-class commercial, retail and mixed-use spaces.",
    experience: "25+",
    ongoingProject: "12+",
    areaDeveloped: "18.55 Mn sq ft",
    tags: ["Office", "Retail", "Mixed-Use", "Hospitality", "+1"],
    featured: true,
  },
  {
    name: "Acme Realty",
    image:
      "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Bengaluru, Karnataka",
    description:
      "Creating innovative workspaces and IT parks that empower businesses and communities.",
    experience: "20+",
    ongoingProject: "8+",
    areaDeveloped: "10.2 Mn sq ft",
    tags: ["Office", "IT Parks", "Industrial", "Flex Spaces"],
    featured: false,
  },
  {
    name: "Skyline Spaces",
    image:
      "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Delhi NCR",
    description:
      "Specialists in premium commercial, retail and mixed-use developments across North India.",
    experience: "15+",
    ongoingProject: "6+",
    areaDeveloped: "7.8 Mn sq ft",
    tags: ["Retail", "Office", "Mixed-Use", "High Street"],
    featured: false,
  },
  {
    name: "UrbanWorks",
    image:
      "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "Pune, Maharashtra",
    description:
      "Sustainable real estate solutions with a focus on design, innovation and long-term value.",
    experience: "12+",
    ongoingProject: "5+",
    areaDeveloped: "5.6 Mn sq ft",
    tags: ["Office", "Industrial", "Warehousing"],
    featured: false,
  },
];

const CITIES = [
  "All Cities",
  "Mumbai",
  "Bengaluru",
  "Delhi NCR",
  "Pune",
  "Hyderabad",
];
const ASSET_TYPES = [
  "All Asset Types",
  "Office",
  "Retail",
  "Mixed-Use",
  "Hospitality",
  "Industrial",
];
const SORT_OPTIONS = [
  "Featured",
  "Name A–Z",
  "Most Experience",
  "Largest Portfolio",
];

// ─────────────────────────────────────────────────────────────
// HERO BANNER
// ─────────────────────────────────────────────────────────────

function HeroBanner() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#f4f6f8be] max-w-7xl mx-auto "
      style={{ minHeight: "220px" }}
    >
      {/* Layer 1: skyline image anchored to the right */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
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
            "linear-gradient(to right, #f4f6f8 30%, rgba(244,246,248,0.92) 40%, rgba(244,246,248,0.25) 100%)",
        }}
      />

      {/* Layer 3: text content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <h1
          className="text-[#1a2744] font-bold leading-tight max-w-2xl"
          style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
        >
          Join India&apos;s Premier <br />
          Commercial Real Estate Network
        </h1>
        <p className="text-gray-500 mt-3 max-w-xl text-sm leading-relaxed">
          Showcase your projects. Connect with investors, occupiers &amp; global
          partners. Grow your business.
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
        <div className="flex overflow-x-auto md:scrollbar-hide">
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
                <span className="text-xs font-medium whitespace-nowrap">
                  {title}
                </span>
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

function SearchFilters({
  search,
  setSearch,
  city,
  setCity,
  assetType,
  setAssetType,
}) {
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
        <span className="font-semibold text-gray-700">{count}+</span> Developers
        Found
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
        <ChevronDown
          size={14}
          className="absolute right-0 text-gray-400 pointer-events-none"
        />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// DEVELOPER CARD
// ─────────────────────────────────────────────────────────────

function DeveloperCard({ developer }) {
  const stats = [
    { value: developer.experience, label: "Years Experience" },
    { value: developer.areaDeveloped, label: "Developed" },
    { value: developer.ongoingProject, label: "Ongoing Projects" },
  ];

  return (
    <article className="relative bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      {/* featured tag */}
      {developer.featured && (
        <span className="absolute top-0 left-0 z-10 bg-[#c9a84c] text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-br-lg">
          Featured
        </span>
      )}

      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {/* Logo + main info — stacks on mobile, row on lg */}
        <div className="flex flex-col sm:flex-row gap-5 p-5 sm:p-6 flex-1 min-w-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-gray-200 rounded-lg overflow-hidden bg-gray-50 flex items-center justify-center self-start">
            <img
              src={developer.image}
              alt={`${developer.name} logo`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 min-w-0 pt-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h2 className="text-lg sm:text-xl font-bold text-[#1a2744]">
                {developer.name}
              </h2>
              <BadgeCheck size={18} className="text-blue-500 shrink-0" />
            </div>

            <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-2">
              <MapPin size={14} className="shrink-0" />
              <span>{developer.location}</span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3 sm:line-clamp-2">
              {developer.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {developer.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-[#1a2744]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats + CTA — full width on mobile, sidebar on lg */}
        <div className="flex flex-col justify-between gap-4 p-5 sm:p-6 lg:w-52 xl:w-56 border-t lg:border-t-0 lg:border-l border-gray-100 bg-gray-50/50 lg:bg-transparent">
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-5">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-[#c9a84c] font-bold text-base sm:text-lg leading-tight">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-[11px] sm:text-xs mt-0.5 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="#"
            className="block w-full text-center text-sm font-semibold text-white bg-[#0f1a2e] hover:bg-[#1a2744] py-2.5 px-4 rounded-lg transition-colors"
          >
            View Profile
          </Link>
        </div>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────
// RESULT SECTION
// ─────────────────────────────────────────────────────────────

function ResultSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-12">
      <div className="flex flex-col gap-4">
        {DEVELOPER_DATA.map((developer) => (
          <DeveloperCard key={developer.name} developer={developer} />
        ))}
      </div>
    </section>
  );
}

//
// BOTTOM CTA (ARE U A DEVELOPER?)
//

function BottomCTA() {
  const onClickHandler = () => {};

  return (
    <div className="max-w-7xl mx-auto  px-6 lg:px-10 pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-6 bg-[#011d42] p-5 sm:p-6 rounded-2xl shadow-lg">
        <div className="flex gap-4 sm:gap-6 items-center min-w-0">
          <div className="flex items-center justify-center rounded-full border border-[#c9a84c] p-2 sm:p-3 shrink-0">
            <BsBuildingsFill className="text-[#c9a84c] w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <div className="text-white min-w-0">
            <h1 className="text-white text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
              Are you a Developer?
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-snug">
              Join CREPNET and unlock endless oppurtunities
            </p>
          </div>
        </div>

        <Link
          href="/login"
          className="w-full sm:w-auto shrink-0 bg-[#c9a84c] px-4 py-2.5 sm:py-3 text-base sm:text-lg lg:text-xl rounded-lg text-white font-semibold text-center"
        >
          Join as Developer
        </Link>
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
      <ResultSection></ResultSection>
      <BottomCTA />
    </main>
  );
}
