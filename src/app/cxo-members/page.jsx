"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Users, Building2, TrendingUp, Handshake, Award, BookOpen, MapPin,
  Network, Calendar, UserCheck, Target, Layers, Briefcase, Cpu,
  Gift, Newspaper, Megaphone, Sparkles, Search, SlidersHorizontal,
  CheckCircle2, ArrowRight, MessageSquare, ChevronRight, ChevronLeft,
  BarChart3, ShieldCheck, X, UserPlus, MessageCircle, Heart, CalendarClock,
  Quote, Star
} from "lucide-react";

/* ============================================================
   TINY EVENT BUS — lets any section trigger a toast or a modal
   without prop-drilling, so each section stays independently
   exportable (per the original architecture) while the buttons
   in the assembled page all actually do something.
   ============================================================ */

function emit(name, detail) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(name, { detail }));
  }
}
function notifyToast(message) {
  emit("cxo:toast", { message });
}
function openProfile(member) {
  emit("cxo:modal", { type: "profile", data: member });
}
function openApplication(context) {
  emit("cxo:modal", { type: "application", data: { context } });
}
function openArticle(article) {
  emit("cxo:modal", { type: "article", data: article });
}

/* ============================================================
   CONTENT DATA — Forbes Council style CXO Ecosystem for RPEC
   ============================================================ */

const LEADERSHIP_STATS = [
  { value: "350+", label: "Verified CXOs" },
  { value: "120+", label: "Top Corporate Entities" },
  { value: "22", label: "Metropolitan Cities" },
  { value: "\u20B94.5 Lakh Cr", label: "Combined Project Portfolio Value" }
];

const FEATURED_CXOS = [
  {
    name: "Rajesh Gupta",
    role: "Chief Executive Officer",
    company: "DLF Limited",
    sector: "Residential | Luxury",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&fit=crop&q=80",
    bio: "Rajesh leads DLF's luxury residential portfolio, closing landmark townships across Delhi NCR and championing branded-residence formats for India's top-tier buyers.",
    stats: { dealsClosed: 142, yearsExperience: 24, articlesPublished: 18, connections: 1240 }
  },
  {
    name: "Ashish Kapoor",
    role: "Managing Director",
    company: "Whiteland Corporation",
    sector: "Residential & Commercial",
    experience: "25+ Years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&fit=crop&q=80",
    bio: "Ashish has scaled Whiteland's Gurugram footprint into one of the region's most closely watched mixed-use portfolios, with a focus on infrastructure-linked growth corridors.",
    stats: { dealsClosed: 98, yearsExperience: 25, articlesPublished: 12, connections: 890 }
  },
  {
    name: "Amit Jain",
    role: "Managing Director",
    company: "ABC Developers",
    sector: "Luxury Housing & Infrastructure",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&fit=crop&q=80",
    bio: "Amit oversees ABC Developers' luxury housing and infrastructure pipeline, with a reputation for structuring complex joint ventures between institutional capital and land-owning families.",
    stats: { dealsClosed: 76, yearsExperience: 19, articlesPublished: 9, connections: 640 }
  },
  {
    name: "Preeti Chawla",
    role: "President & Founder",
    company: "Aura Spaces",
    sector: "Hospitality & Retail",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&fit=crop&q=80",
    bio: "Preeti founded Aura Spaces to bring experience-led design to hospitality and retail assets, and now advises several REITs on tenant-mix strategy.",
    stats: { dealsClosed: 54, yearsExperience: 16, articlesPublished: 21, connections: 980 }
  },
  {
    name: "Vikram Singh Rathore",
    role: "Chairman",
    company: "Godrej Properties",
    sector: "Commercial & Retail",
    image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=400&fit=crop&q=80",
    bio: "Vikram chairs Godrej Properties' commercial and retail vertical, steering sustainability-first design standards across its national portfolio.",
    stats: { dealsClosed: 121, yearsExperience: 28, articlesPublished: 14, connections: 1510 }
  },
  {
    name: "Kavita Nair",
    role: "Executive Director",
    company: "Apex Institutional Capital",
    sector: "Investment & Finance",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&fit=crop&q=80",
    bio: "Kavita structures institutional real estate debt and equity for Apex, with deep relationships across sovereign wealth and pension fund allocators.",
    stats: { dealsClosed: 67, yearsExperience: 20, articlesPublished: 11, connections: 1120 }
  },
  {
    name: "Rohan Bhatia",
    role: "President",
    company: "Global REIT Partners",
    sector: "Warehousing & Logistics",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&fit=crop&q=80",
    bio: "Rohan leads warehousing and logistics acquisitions for Global REIT Partners, a category he helped professionalise in India over the last decade.",
    stats: { dealsClosed: 88, yearsExperience: 17, articlesPublished: 7, connections: 705 }
  },
  {
    name: "Meera Iyer",
    role: "Founder",
    company: "BuildTech Labs",
    sector: "PropTech & Innovation",
    image: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?w=400&fit=crop&q=80",
    bio: "Meera founded BuildTech Labs to bring AI-driven site selection and construction analytics to Indian developers, working with 30+ enterprise clients.",
    stats: { dealsClosed: 41, yearsExperience: 13, articlesPublished: 26, connections: 1330 }
  }
];

const CATEGORY_LEADERS = [
  {
    category: "Developers & Builders",
    icon: Building2,
    leaders: [
      { name: "Rajesh Gupta", role: "Chief Executive Officer", company: "DLF Limited", sector: "Residential", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&fit=crop&q=80" },
      { name: "Ashish Kapoor", role: "Managing Director", company: "Whiteland Corporation", sector: "Residential & Commercial", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&fit=crop&q=80" },
      { name: "Vikram Singh Rathore", role: "Chairman", company: "Godrej Properties", sector: "Commercial & Retail", image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=400&fit=crop&q=80" },
      { name: "Neha Malhotra", role: "Managing Director", company: "M3M India", sector: "Residential", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&fit=crop&q=80" },
      { name: "Karan Oberoi", role: "Chief Executive Officer", company: "Prestige Group", sector: "Commercial", image: "https://images.unsplash.com/photo-1594951591365-98b8c1a56e02?w=400&fit=crop&q=80" },
      { name: "Sunita Reddy", role: "Executive Director", company: "Brigade Group", sector: "Residential & Retail", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&fit=crop&q=80" }
    ]
  },
  {
    category: "Investment & Capital Markets",
    icon: TrendingUp,
    leaders: [
      { name: "Sanjay Dewan", role: "Senior Managing Partner", company: "Dewan Capital", sector: "Investment", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&fit=crop&q=80" },
      { name: "Kavita Nair", role: "Executive Director", company: "Apex Institutional Capital", sector: "Investment & Finance", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&fit=crop&q=80" },
      { name: "Arjun Mehta", role: "Managing Director", company: "Sovereign Realty Fund", sector: "Investment", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&fit=crop&q=80" },
      { name: "Rohan Bhatia", role: "President", company: "Global REIT Partners", sector: "Warehousing & Logistics", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&fit=crop&q=80" },
      { name: "Ritu Sharma", role: "Chief Investment Officer", company: "Meridian Asset Partners", sector: "Finance", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&fit=crop&q=80" },
      { name: "Deepak Chandra", role: "Managing Partner", company: "Northbridge Capital", sector: "Investment", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&fit=crop&q=80" }
    ]
  },
  {
    category: "PropTech & Innovation",
    icon: Cpu,
    leaders: [
      { name: "Meera Iyer", role: "Founder", company: "BuildTech Labs", sector: "PropTech", image: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?w=400&fit=crop&q=80" },
      { name: "Anand Verma", role: "Founder", company: "PropNexus", sector: "PropTech", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&fit=crop&q=80" },
      { name: "Divya Krishnan", role: "Chief Executive Officer", company: "SpaceSense AI", sector: "PropTech", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&fit=crop&q=80" },
      { name: "Farhan Ali", role: "Co-Founder", company: "UrbanStack", sector: "PropTech", image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=400&fit=crop&q=80" },
      { name: "Priya Nambiar", role: "Chief Technology Officer", company: "GridSpace Analytics", sector: "PropTech", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&fit=crop&q=80" },
      { name: "Aditya Rao", role: "Founder", company: "SiteIQ", sector: "PropTech & Construction", image: "https://images.unsplash.com/photo-1594951591365-98b8c1a56e02?w=400&fit=crop&q=80" }
    ]
  },
  {
    category: "Consultants, Legal & Advisory",
    icon: Briefcase,
    leaders: [
      { name: "Dr. Harshavardhan Realties", role: "Chairman, Advisory Council", company: "RPEC", sector: "Policy & Urban Development", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&fit=crop&q=80" },
      { name: "Rakesh Chandra", role: "Managing Partner", company: "Chandra & Associates Law", sector: "Legal", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&fit=crop&q=80" },
      { name: "Anjali Desai", role: "Founder", company: "RERA Compliance Partners", sector: "Legal & Regulatory", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&fit=crop&q=80" },
      { name: "Vivek Saxena", role: "Managing Director", company: "Saxena Tax & Real Estate Advisory", sector: "Finance & Legal", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&fit=crop&q=80" },
      { name: "Ila Bose", role: "Principal Architect", company: "Bose Design Studio", sector: "Architecture", image: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?w=400&fit=crop&q=80" },
      { name: "Manish Kulkarni", role: "Senior Partner", company: "Kulkarni Construction Consultants", sector: "Construction", image: "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=400&fit=crop&q=80" }
    ]
  }
];

// Deduplicated pool used by the searchable directory grid
const ALL_MEMBERS = (() => {
  const seen = new Map();
  [...FEATURED_CXOS, ...CATEGORY_LEADERS.flatMap(c => c.leaders)].forEach(m => {
    if (!seen.has(m.name)) seen.set(m.name, m);
  });
  return Array.from(seen.values());
})();

function statsFor(member) {
  if (member.stats) return member.stats;
  const seed = member.name.length;
  return {
    dealsClosed: 40 + seed * 3,
    yearsExperience: 14 + (seed % 10),
    articlesPublished: 4 + (seed % 8),
    connections: 350 + seed * 22
  };
}
function bioFor(member) {
  if (member.bio) return member.bio;
  return `${member.name} is ${member.role} at ${member.company}, driving ${member.sector} initiatives across India's real estate ecosystem and mentoring the next generation of industry leaders.`;
}

const FILTER_DEVELOPERS = ["All Developers", "DLF", "Godrej", "M3M", "Prestige", "Brigade", "Sobha", "Whiteland", "ABC"];
const FILTER_SECTORS = [
  "All Sectors", "Residential", "Commercial", "Retail", "Hospitality",
  "Warehousing", "PropTech", "Investment", "Architecture", "Construction", "Legal", "Finance"
];

const ADVISORY_COUNCIL = [
  { title: "Chairman", name: "Dr. Harshavardhan Realties", desc: "Ex-Urban Development Advisor" },
  { title: "Vice Chairman", name: "Sanjay Dewan", desc: "Senior Managing Partner, Dewan Capital" },
  { title: "Founding Members", name: "6 Core Industry Pioneers", desc: "Leading India's Asset Paradigm" },
  { title: "National Advisors", name: "Pan-India Apex Specialists", desc: "Policy, RERA & Infrastructure Experts" },
  { title: "State Advisors", name: "Regional Market Authorities", desc: "Connecting 15+ Active State Hubs" },
  { title: "International Advisors", name: "Global Sovereign Fund Heads", desc: "Cross-Border FDI & Institutional Flows" }
];

const EXCLUSIVE_BENEFITS = [
  "CXO Roundtables & Closed-Door Dinners", "Priority Access to Micro-Market Industry Reports",
  "Private Peer-to-Peer Investment Networking", "Keynote & Global Speaking Opportunities",
  "Dedicated Thought Leadership Columns & Media Features", "Strategic Venture Capital & Media Introductions",
  "High-Value Asset Deal Collaborations & JVs", "Exclusive Analytical Research White-Papers",
  "Apex Industry Awards Eligibility & Jury Panels", "National Leadership Recognition Profiles"
];

const UPCOMING_EVENTS = [
  { title: "Leadership Breakfast Briefing", city: "Delhi NCR", date: "25 August 2026", type: "By Invitation" },
  { title: "Closed-Door CEO Roundtable", city: "Mumbai", date: "12 September 2026", type: "Verified Core CXO" },
  { title: "Sovereign Investor Meet", city: "Bengaluru", date: "05 October 2026", type: "Asset Allocators Only" }
];

const CXO_INSIGHTS = [
  {
    title: "Future of Branded Residences in Indian Metros",
    author: "Rajesh Gupta", designation: "CEO, DLF", readTime: "5 min read",
    excerpt: "Branded residences are moving from a niche luxury play to a mainstream growth category across Delhi NCR and Mumbai, backed by hospitality-grade service standards and stronger resale premiums."
  },
  {
    title: "Why Delhi NCR Infrastructure Matrix is Changing Rapidly",
    author: "Ashish Kapoor", designation: "MD, Whiteland", readTime: "7 min read",
    excerpt: "New expressway and metro corridors are reshaping which micro-markets outperform over the next decade, with a handful of overlooked pockets set to re-rate fastest."
  },
  {
    title: "PropTech, AI and Automation Disruption Frameworks for 2027",
    author: "Anand Verma", designation: "Founder, PropNexus", readTime: "6 min read",
    excerpt: "AI-native site selection, dynamic pricing and construction analytics are compressing decision cycles that used to take developers months into days."
  }
];

const DIFFERENTIATORS = [
  "Verified CXO Platinum Badge Alignment", "Ecosystem Influence Score Tracking Matrix",
  "'Ask a CXO' Member Engagement Curated Q&A", "15-Minute Leadership Connect Calendars",
  "Private CXO Lounge Digital Entry Framework", "Deal Collaboration Pipeline Board Hub",
  "Top 100 Real Estate Leaders Showcase Spotlights", "Women Leaders In Real Estate Dedicated Panels",
  "'40 Under 40' Rising Leaders Recognition Panel"
];

/* ============================================================
   STYLES — Luxury Light Theme System Adaptations with Animations
   ============================================================ */

const styles = `
  .cxo-wrapper * { box-sizing: border-box; margin: 0; padding: 0; }
  .cxo-wrapper { overflow-x: hidden; background-color: #FAFAFA; color: #1E293B; }

  .cxo-hero-title, .cxo-section-title, .cxo-closing-title, .cxo-modal-name {
    font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif !important;
  }

  /* ===== KEYFRAME ANIMATIONS ===== */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes toastIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes modalIn {
    from { opacity: 0; transform: scale(0.96) translateY(8px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }

  /* ===== Hero Banner (1st Section) — Balanced Light Luxury ===== */
  .cxo-hero-section {
    position: relative;
    overflow: hidden;
    background: #0B1F3A;
  }
  .cxo-hero-bg {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.45;
    transition: transform 8s ease;
  }
  .cxo-hero-section:hover .cxo-hero-bg {
    transform: scale(1.04);
  }
  .cxo-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, #0F2A4A 0%, rgba(15, 42, 74, 0.92) 50%, transparent 100%);
  }
  .cxo-hero-content {
    position: relative;
    z-index: 2;
    margin-left: auto;
    margin-right: auto;
    max-width: 80rem;
    padding: 3.5rem 1.5rem;
    animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) both;
  }
  @media (min-width: 1024px) {
    .cxo-hero-content { padding: 4.5rem 3rem; }
  }
  .cxo-hero-eyebrow {
    font-size: 0.875rem;
    font-weight: 700;
    color: #E8A33D;
    letter-spacing: 0.25em;
    text-transform: uppercase;
  }
  .cxo-hero-title {
    max-width: 46rem;
    font-size: clamp(28px, 3.4vw, 48px);
    font-weight: 400;
    color: #fff;
    line-height: 1.25;
    letter-spacing: 0.025em;
    margin-top: 6px;
  }
  .cxo-hero-divider {
    height: 3px;
    width: 4.5rem;
    background: #E8A33D;
    margin-top: 1.25rem;
  }
  .cxo-hero-desc {
    max-width: 38rem;
    color: #E2E8F0;
    font-size: 0.95rem;
    font-weight: 300;
    line-height: 1.75;
    margin-top: 1.25rem;
  }
  .cxo-hero-actions {
    display: flex;
    gap: 14px;
    margin-top: 1.75rem;
    flex-wrap: wrap;
  }
  .cxo-btn-primary {
    background: #C9A84C;
    color: #fff;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 13.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(201, 168, 76, 0.25);
  }
  .cxo-btn-primary:hover {
    background: #B0913B;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(201, 168, 76, 0.4);
  }
  .cxo-btn-primary:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
  .cxo-btn-secondary {
    background: rgba(255, 255, 255, 0.06);
    color: #fff;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 13.5px;
    font-weight: 600;
    border: 1px solid rgba(255, 255, 255, 0.25);
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .cxo-btn-secondary:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: #fff;
  }
  .cxo-btn-ghost {
    background: transparent;
    color: #0B1F3A;
    padding: 10px 18px;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 700;
    border: 1px solid #E2E8F0;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .cxo-btn-ghost:hover { border-color: #c9a84c; color: #B0913B; }

  /* ===== Compact Section Structure — Fluid Light Luxury ===== */
  .cxo-section { position: relative; padding: 24px 0; overflow: hidden; }
  .cxo-section.bg-light-cream { background: #FCFCFA; }
  .cxo-section.bg-light-pure { background: #FFFFFF; }
  .cxo-inner { position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; padding: 0 20px; }

  .cxo-bg-image-accent {
    position: absolute;
    inset: 0;
    width: 100%; height: 100%;
    object-fit: cover;
    opacity: 0.025;
    pointer-events: none;
    mix-blend-mode: multiply;
  }

  .cxo-section-head { max-width: 750px; margin-bottom: 18px; display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
  .cxo-section-head-text { max-width: 750px; }
  .cxo-head-row { display: flex; align-items: center; gap: 12px; margin-bottom: 4px; }
  .cxo-head-icon {
    width: 34px; height: 34px;
    border-radius: 50%;
    background: rgba(201,168,76,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid rgba(201,168,76,0.18);
  }
  .cxo-eyebrow {
    font-size: 11px;
    font-weight: 700;
    color: #B0913B;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .cxo-section-title {
    font-size: 26px;
    font-weight: 800;
    color: #0B1F3A;
    line-height: 1.25;
    margin-top: 4px;
  }
  .cxo-divider {
    width: 52px; height: 3px;
    background: #c9a84c;
    border-radius: 2px;
    margin: 8px 0 10px;
  }
  .cxo-section-desc {
    font-size: 14.5px;
    color: #475569;
    line-height: 1.55;
  }

  /* ===== Stats Minimal Grid ===== */
  .cxo-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }
  .cxo-stat-card {
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.02);
    border-radius: 8px;
    padding: 18px 14px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .cxo-stat-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(15, 23, 42, 0.05);
  }
  .cxo-stat-number {
    font-size: 26px;
    font-weight: 800;
    color: #0B1F3A;
  }
  .cxo-stat-label {
    font-size: 12px;
    color: #64748B;
    margin-top: 3px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* ===== Carousel (Featured CXOs) ===== */
  .cxo-carousel-wrap { position: relative; }
  .cxo-carousel-track {
    display: flex;
    gap: 14px;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding-bottom: 6px;
    scrollbar-width: none;
  }
  .cxo-carousel-track::-webkit-scrollbar { display: none; }
  .cxo-carousel-track .cxo-profile-card { min-width: 240px; flex: 0 0 240px; }
  .cxo-carousel-arrow {
    width: 36px; height: 36px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    transition: all 0.2s ease;
    color: #0B1F3A;
    flex-shrink: 0;
  }
  .cxo-carousel-arrow:hover { border-color: #c9a84c; color: #B0913B; transform: translateY(-1px); }
  .cxo-carousel-controls { display: flex; gap: 8px; }

  /* ===== Luxury Profile Cards Grid ===== */
  .cxo-profile-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 14px;
  }
  .cxo-profile-card {
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 4px 15px rgba(0,0,0,0.02);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;
  }
  .cxo-profile-card:hover {
    transform: translateY(-4px);
    border-color: #c9a84c;
    box-shadow: 0 12px 30px rgba(201, 168, 76, 0.12);
  }
  .cxo-img-container {
    width: 100%;
    height: 200px;
    background: #F1F5F9;
    position: relative;
    overflow: hidden;
  }
  .cxo-profile-img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform 0.5s ease;
  }
  .cxo-profile-card:hover .cxo-profile-img {
    transform: scale(1.05);
  }
  .cxo-badge-floating {
    position: absolute;
    top: 12px; right: 12px;
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(4px);
    border: 1px solid #c9a84c;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 10px;
    color: #B0913B;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
  .cxo-card-body {
    padding: 14px;
  }
  .cxo-member-name {
    font-size: 16px;
    font-weight: 700;
    color: #0B1F3A;
  }
  .cxo-member-title {
    font-size: 13px;
    color: #B0913B;
    font-weight: 600;
    margin-top: 1px;
  }
  .cxo-member-company {
    font-size: 13px;
    color: #475569;
    font-weight: 500;
  }
  .cxo-member-meta {
    font-size: 11.5px;
    color: #64748B;
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #F1F5F9;
  }
  .cxo-card-hover-overlay {
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.98);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 18px;
    opacity: 0;
    transform: scale(1.02);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: none;
  }
  .cxo-profile-card:hover .cxo-card-hover-overlay {
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }
  .cxo-overlay-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    width: 100%;
  }
  .cxo-icon-btn {
    display: flex; align-items: center; justify-content: center; gap: 6px;
    padding: 8px 6px;
    border-radius: 4px;
    font-size: 11.5px;
    font-weight: 700;
    border: 1px solid #E2E8F0;
    background: #F8FAFC;
    color: #334155;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .cxo-icon-btn:hover { border-color: #c9a84c; color: #B0913B; background: #FFF8EC; }
  .cxo-icon-btn.active { background: #C9A84C; border-color: #C9A84C; color: #fff; }
  .cxo-view-profile-link {
    font-size: 12px;
    font-weight: 700;
    color: #B0913B;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: none;
    border: none;
    cursor: pointer;
  }

  /* ===== Functional Filter Systems ===== */
  .cxo-filter-bar {
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.02);
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }
  .cxo-search-input-wrapper {
    position: relative;
    flex: 1;
    min-width: 240px;
  }
  .cxo-search-input {
    width: 100%;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    color: #1E293B;
    padding: 10px 12px 10px 36px;
    border-radius: 4px;
    font-size: 13.5px;
    transition: border-color 0.2s;
  }
  .cxo-search-input:focus {
    border-color: #c9a84c;
    outline: none;
    background: #FFF;
  }
  .cxo-search-icon {
    position: absolute;
    left: 12px; top: 13px;
    color: #94A3B8;
  }
  .cxo-select-filter {
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    color: #1E293B;
    padding: 10px 14px;
    border-radius: 4px;
    font-size: 13.5px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;
  }
  .cxo-select-filter:focus, .cxo-select-filter:hover {
    border-color: #c9a84c;
    background: #FFF;
  }
  .cxo-empty-state {
    text-align: center;
    padding: 40px 20px;
    color: #64748B;
    font-size: 13.5px;
    border: 1px dashed #E2E8F0;
    border-radius: 8px;
    grid-column: 1 / -1;
  }

  /* ===== Premium Functional Modular Grids ===== */
  .cxo-functional-grid {
    display: grid;
    grid-template-columns: repeat(var(--cols, 3), 1fr);
    gap: 12px;
  }
  .cxo-standard-card {
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    padding: 14px 16px;
    display: flex;
    align-items: flex-start;
    gap: 12px;
    transition: all 0.25s ease;
  }
  .cxo-standard-card:hover {
    border-color: rgba(201,168,76,0.5);
    box-shadow: 0 6px 16px rgba(0,0,0,0.02);
    transform: translateY(-1px);
  }
  .cxo-card-dot-marker {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #c9a84c;
    margin-top: 7px;
    flex-shrink: 0;
  }
  .cxo-card-content-wrap {
    display: flex;
    flex-direction: column;
  }
  .cxo-card-heading-title {
    font-size: 14px;
    font-weight: 700;
    color: #0B1F3A;
    line-height: 1.4;
  }
  .cxo-card-subtext {
    font-size: 13px;
    color: #64748B;
    margin-top: 2px;
  }

  /* ===== Industry Leaders by Category ===== */
  .cxo-category-block { margin-bottom: 22px; }
  .cxo-category-block:last-child { margin-bottom: 0; }
  .cxo-category-head {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 8px;
    border-bottom: 1px solid #E2E8F0;
  }
  .cxo-category-title { display: flex; align-items: center; gap: 8px; font-size: 15px; font-weight: 800; color: #0B1F3A; }
  .cxo-mini-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
  .cxo-mini-card {
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 8px;
    padding: 10px;
    display: flex; align-items: center; gap: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .cxo-mini-card:hover { border-color: #c9a84c; box-shadow: 0 6px 16px rgba(201,168,76,0.1); transform: translateY(-1px); }
  .cxo-mini-avatar { width: 42px; height: 42px; border-radius: 50%; object-fit: cover; flex-shrink: 0; border: 1px solid #E2E8F0; }
  .cxo-mini-name { font-size: 12.5px; font-weight: 700; color: #0B1F3A; line-height: 1.3; }
  .cxo-mini-role { font-size: 11px; color: #B0913B; font-weight: 600; }
  .cxo-mini-company { font-size: 10.5px; color: #64748B; }
  .cxo-view-all-btn {
    font-size: 12px; font-weight: 700; color: #B0913B;
    background: none; border: none; cursor: pointer;
    display: inline-flex; align-items: center; gap: 3px;
  }

  /* ===== Insights System Section List Layout ===== */
  .cxo-insights-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .cxo-insight-item {
    background: #FFFFFF;
    border-left: 4px solid #c9a84c;
    border-top: 1px solid #E2E8F0;
    border-right: 1px solid #E2E8F0;
    border-bottom: 1px solid #E2E8F0;
    padding: 14px 20px;
    border-radius: 0 8px 8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.25s ease;
    cursor: pointer;
  }
  .cxo-insight-item:hover {
    background: #FCFCFA;
    transform: translateX(3px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.02);
  }
  .cxo-insight-left-title { font-size: 15px; font-weight: 700; color: #0B1F3A; }
  .cxo-insight-author { font-size: 13px; color: #64748B; margin-top: 2px; }
  .cxo-read-link {
    font-size: 13.5px;
    color: #B0913B;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;
    transition: gap 0.2s ease;
    background: none;
    border: none;
    cursor: pointer;
  }
  .cxo-insight-item:hover .cxo-read-link {
    gap: 8px;
  }

  /* ===== Invitation Closing CTA Banner ===== */
  .cxo-closing-section {
    position: relative;
    background: #0B1F3A;
    overflow: hidden;
    padding: 140px 0;
  }
  .cxo-closing-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.25;
    filter: saturate(0.5);
  }
  .cxo-closing-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(11, 31, 58, 0.95) 0%, rgba(15, 42, 74, 0.9) 60%, rgba(11, 31, 58, 0.98) 100%);
  }
  .cxo-closing-inner {
    position: relative;
    z-index: 2;
    max-width: 860px;
    margin: 0 auto;
    padding: 0 24px;
    text-align: center;
  }
  .cxo-closing-eyebrow {
    font-size: 12px;
    font-weight: 700;
    color: #E8A33D;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-bottom: 14px;
  }
  .cxo-closing-title {
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 700;
    color: #fff;
    line-height: 1.35;
    margin-bottom: 24px;
  }
  .cxo-closing-divider {
    width: 64px; height: 3px;
    background: #E8A33D;
    border-radius: 2px;
    margin: 0 auto 28px;
  }
  .cxo-closing-para {
    font-size: 15.5px;
    color: #E2E8F0;
    line-height: 1.8;
    margin-bottom: 26px;
  }

  /* ===== Toasts ===== */
  .cxo-toast-stack {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 200;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    pointer-events: none;
  }
  .cxo-toast {
    background: #0B1F3A;
    color: #fff;
    padding: 12px 20px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    box-shadow: 0 10px 30px rgba(0,0,0,0.25);
    animation: toastIn 0.25s ease both;
    display: flex; align-items: center; gap: 8px;
    border: 1px solid rgba(201,168,76,0.4);
  }

  /* ===== Modals ===== */
  .cxo-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(11, 31, 58, 0.65);
    backdrop-filter: blur(3px);
    z-index: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .cxo-modal-card {
    background: #fff;
    border-radius: 12px;
    max-width: 560px;
    width: 100%;
    max-height: 88vh;
    overflow-y: auto;
    position: relative;
    animation: modalIn 0.25s cubic-bezier(0.16,1,0.3,1) both;
    box-shadow: 0 30px 80px rgba(0,0,0,0.3);
  }
  .cxo-modal-close {
    position: absolute;
    top: 14px; right: 14px;
    width: 32px; height: 32px;
    border-radius: 50%;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    z-index: 2;
    color: #334155;
  }
  .cxo-modal-close:hover { background: #F1F5F9; }
  .cxo-modal-header-img {
    width: 100%; height: 150px; object-fit: cover;
    background: #0B1F3A;
  }
  .cxo-modal-body { padding: 22px 26px 26px; }
  .cxo-modal-avatar-row { display: flex; align-items: flex-end; gap: 14px; margin-top: -46px; padding: 0 26px; position: relative; z-index: 1; }
  .cxo-modal-avatar { width: 84px; height: 84px; border-radius: 50%; object-fit: cover; border: 4px solid #fff; box-shadow: 0 6px 16px rgba(0,0,0,0.15); }
  .cxo-modal-name { font-size: 22px; font-weight: 700; color: #0B1F3A; margin-top: 8px; }
  .cxo-modal-role { font-size: 13.5px; color: #B0913B; font-weight: 700; }
  .cxo-modal-company { font-size: 13px; color: #475569; }
  .cxo-modal-bio { font-size: 13.5px; color: #475569; line-height: 1.65; margin: 16px 0; }
  .cxo-modal-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin: 16px 0; }
  .cxo-modal-stat { text-align: center; background: #FAFAFA; border: 1px solid #E2E8F0; border-radius: 6px; padding: 10px 6px; }
  .cxo-modal-stat-num { font-size: 17px; font-weight: 800; color: #0B1F3A; }
  .cxo-modal-stat-label { font-size: 10px; color: #64748B; text-transform: uppercase; font-weight: 600; letter-spacing: 0.4px; }
  .cxo-modal-actions { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 18px; }
  .cxo-modal-actions .cxo-icon-btn { padding: 11px 6px; font-size: 12.5px; }

  .cxo-form-field { margin-bottom: 14px; }
  .cxo-form-label { font-size: 12.5px; font-weight: 700; color: #334155; margin-bottom: 5px; display: block; }
  .cxo-form-input, .cxo-form-textarea {
    width: 100%;
    border: 1px solid #E2E8F0;
    background: #F8FAFC;
    padding: 10px 12px;
    border-radius: 6px;
    font-size: 13.5px;
    font-family: inherit;
    color: #1E293B;
  }
  .cxo-form-input:focus, .cxo-form-textarea:focus { outline: none; border-color: #c9a84c; background: #fff; }
  .cxo-form-success { text-align: center; padding: 20px 0; }
  .cxo-form-success-icon { color: #16A34A; margin-bottom: 10px; }

  /* ===== Breakpoint Adapters ===== */
  @media (max-width: 1024px) {
    .cxo-profile-grid { grid-template-columns: repeat(2, 1fr); }
    .cxo-stats-grid { grid-template-columns: repeat(2, 1fr); }
    .cxo-functional-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .cxo-mini-grid { grid-template-columns: repeat(2, 1fr); }
    .cxo-closing-section { padding: 110px 0; }
    .cxo-modal-stats-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .cxo-profile-grid { grid-template-columns: 1fr; }
    .cxo-stats-grid { grid-template-columns: 1fr; }
    .cxo-functional-grid { grid-template-columns: 1fr !important; }
    .cxo-mini-grid { grid-template-columns: 1fr; }
    .cxo-section { padding: 16px 0; }
    .cxo-closing-section { padding: 90px 0; }
    .cxo-hero-content { padding: 3rem 1.5rem; }
    .cxo-insight-item { flex-direction: column; align-items: flex-start; gap: 10px; }
    .cxo-modal-actions { grid-template-columns: 1fr; }
    .cxo-section-head { flex-direction: column; align-items: flex-start; }
  }
`;

/* ============================================================
   REUSABLE UI COMPONENTS
   ============================================================ */

function SectionHead({ eyebrow, title, desc, icon: Icon, action }) {
  return (
    <div className="cxo-section-head">
      <div className="cxo-section-head-text">
        <div className="cxo-head-row">
          <div className="cxo-head-icon">
            <Icon size={14} color="#B0913B" strokeWidth={2.5} />
          </div>
          <span className="cxo-eyebrow">{eyebrow}</span>
        </div>
        <h2 className="cxo-section-title">{title}</h2>
        <div className="cxo-divider" />
        {desc && <p className="cxo-section-desc">{desc}</p>}
      </div>
      {action}
    </div>
  );
}

function GridBoxSection({ id, eyebrow, title, desc, icon, items, cols = 3, bg = "light-pure" }) {
  return (
    <section id={id} className={`cxo-section bg-${bg}`}>
      <img
        className="cxo-bg-image-accent"
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=10"
        alt=""
      />
      <div className="cxo-inner">
        <SectionHead eyebrow={eyebrow} title={title} desc={desc} icon={icon} />
        <div className="cxo-functional-grid" style={{ "--cols": cols }}>
          {items.map((item, i) => (
            <div key={i} className="cxo-standard-card">
              <div className="cxo-card-dot-marker" />
              <div className="cxo-card-content-wrap">
                <div className="cxo-card-heading-title">{typeof item === "string" ? item : item.title || item.name}</div>
                {item.desc && <div className="cxo-card-subtext">{item.desc}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Full profile card used in the carousel and the directory grid. */
function MemberCard({ member }) {
  const [following, setFollowing] = useState(false);

  return (
    <div className="cxo-profile-card" onClick={() => openProfile(member)}>
      <div className="cxo-img-container">
        <img src={member.image} alt={member.name} className="cxo-profile-img" />
        <span className="cxo-badge-floating">
          <ShieldCheck size={11} /> Verified CXO
        </span>
      </div>
      <div className="cxo-card-body">
        <div className="cxo-member-name">{member.name}</div>
        <div className="cxo-member-title">{member.role}</div>
        <div className="cxo-member-company">{member.company}</div>
        <div className="cxo-member-meta">{member.sector}</div>
      </div>
      <div className="cxo-card-hover-overlay" onClick={(e) => e.stopPropagation()}>
        <div className="cxo-overlay-actions">
          <button
            className="cxo-icon-btn"
            onClick={() => notifyToast(`Connection request sent to ${member.name}`)}
          >
            <UserPlus size={13} /> Connect
          </button>
          <button
            className="cxo-icon-btn"
            onClick={() => notifyToast(`Message drafted to ${member.name}`)}
          >
            <MessageCircle size={13} /> Message
          </button>
          <button
            className={`cxo-icon-btn ${following ? "active" : ""}`}
            onClick={() => {
              setFollowing((f) => !f);
              notifyToast(following ? `Unfollowed ${member.name}` : `Now following ${member.name}`);
            }}
          >
            <Heart size={13} /> {following ? "Following" : "Follow"}
          </button>
          <button
            className="cxo-icon-btn"
            onClick={() => notifyToast(`Leadership Connect requested with ${member.name}`)}
          >
            <CalendarClock size={13} /> Book
          </button>
        </div>
        <button className="cxo-view-profile-link" onClick={() => openProfile(member)}>
          View Full Profile <ChevronRight size={13} />
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   GLOBAL HOSTS — toasts + modal (mounted once in the page)
   ============================================================ */

function ToastHost() {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const handler = (e) => {
      const id = Date.now() + Math.random();
      setToasts((t) => [...t, { id, message: e.detail.message }]);
      setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3200);
    };
    window.addEventListener("cxo:toast", handler);
    return () => window.removeEventListener("cxo:toast", handler);
  }, []);

  return (
    <div className="cxo-toast-stack">
      {toasts.map((t) => (
        <div key={t.id} className="cxo-toast">
          <CheckCircle2 size={15} color="#E8A33D" /> {t.message}
        </div>
      ))}
    </div>
  );
}

function ApplicationForm({ context, onDone }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", designation: "" });
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="cxo-form-success">
        <CheckCircle2 size={40} className="cxo-form-success-icon" />
        <h3 style={{ color: "#0B1F3A", fontSize: 18, marginBottom: 6 }}>Application received</h3>
        <p style={{ color: "#64748B", fontSize: 13.5 }}>
          Our membership team will review your profile and respond within 3 business days.
        </p>
        <button className="cxo-btn-primary" style={{ marginTop: 18 }} onClick={onDone}>Close</button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        notifyToast("Membership application submitted");
      }}
    >
      <div className="cxo-form-field">
        <label className="cxo-form-label">Full Name</label>
        <input
          required
          className="cxo-form-input"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your full name"
        />
      </div>
      <div className="cxo-form-field">
        <label className="cxo-form-label">Work Email</label>
        <input
          required
          type="email"
          className="cxo-form-input"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@company.com"
        />
      </div>
      <div className="cxo-form-field">
        <label className="cxo-form-label">Company</label>
        <input
          required
          className="cxo-form-input"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          placeholder="Company name"
        />
      </div>
      <div className="cxo-form-field">
        <label className="cxo-form-label">Designation</label>
        <input
          required
          className="cxo-form-input"
          value={form.designation}
          onChange={(e) => setForm({ ...form, designation: e.target.value })}
          placeholder="e.g. Managing Director"
        />
      </div>
      <button type="submit" className="cxo-btn-primary" style={{ width: "100%", marginTop: 6 }}>
        Submit Application
      </button>
    </form>
  );
}

function ProfileModalContent({ member }) {
  const stats = statsFor(member);
  return (
    <>
      <img
        className="cxo-modal-header-img"
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&fit=crop&q=60"
        alt=""
      />
      <div className="cxo-modal-avatar-row">
        <img src={member.image} alt={member.name} className="cxo-modal-avatar" />
      </div>
      <div className="cxo-modal-body">
        <div className="cxo-modal-name">{member.name}</div>
        <div className="cxo-modal-role">{member.role}</div>
        <div className="cxo-modal-company">{member.company} &middot; {member.sector}</div>

        <div className="cxo-modal-stats-grid">
          <div className="cxo-modal-stat">
            <div className="cxo-modal-stat-num">{stats.dealsClosed}</div>
            <div className="cxo-modal-stat-label">Deals</div>
          </div>
          <div className="cxo-modal-stat">
            <div className="cxo-modal-stat-num">{stats.yearsExperience}+</div>
            <div className="cxo-modal-stat-label">Years</div>
          </div>
          <div className="cxo-modal-stat">
            <div className="cxo-modal-stat-num">{stats.articlesPublished}</div>
            <div className="cxo-modal-stat-label">Articles</div>
          </div>
          <div className="cxo-modal-stat">
            <div className="cxo-modal-stat-num">{stats.connections}</div>
            <div className="cxo-modal-stat-label">Network</div>
          </div>
        </div>

        <p className="cxo-modal-bio">{bioFor(member)}</p>

        <div className="cxo-modal-actions">
          <button className="cxo-icon-btn" onClick={() => notifyToast(`Connection request sent to ${member.name}`)}>
            <UserPlus size={14} /> Connect
          </button>
          <button className="cxo-icon-btn" onClick={() => notifyToast(`Message drafted to ${member.name}`)}>
            <MessageCircle size={14} /> Message
          </button>
          <button className="cxo-icon-btn" onClick={() => notifyToast(`Now following ${member.name}`)}>
            <Heart size={14} /> Follow
          </button>
          <button className="cxo-icon-btn" onClick={() => notifyToast(`Leadership Connect requested with ${member.name}`)}>
            <CalendarClock size={14} /> Book 15-min Connect
          </button>
        </div>
      </div>
    </>
  );
}

function ArticleModalContent({ article }) {
  return (
    <div className="cxo-modal-body" style={{ paddingTop: 40 }}>
      <Quote size={22} color="#c9a84c" />
      <div className="cxo-modal-name" style={{ fontSize: 20, marginTop: 10 }}>{article.title}</div>
      <div className="cxo-modal-role" style={{ marginTop: 4 }}>{article.author} &mdash; {article.designation}</div>
      <p className="cxo-modal-bio">{article.excerpt}</p>
      <p style={{ fontSize: 12, color: "#94A3B8" }}>{article.readTime}</p>
      <button
        className="cxo-btn-primary"
        style={{ width: "100%", marginTop: 10 }}
        onClick={() => notifyToast("Opening full article in Knowledge Hub")}
      >
        Continue Reading in Knowledge Hub
      </button>
    </div>
  );
}

function ModalHost() {
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const handler = (e) => setModal(e.detail);
    const escHandler = (e) => { if (e.key === "Escape") setModal(null); };
    window.addEventListener("cxo:modal", handler);
    window.addEventListener("keydown", escHandler);
    return () => {
      window.removeEventListener("cxo:modal", handler);
      window.removeEventListener("keydown", escHandler);
    };
  }, []);

  if (!modal) return null;

  return (
    <div className="cxo-modal-overlay" onClick={() => setModal(null)}>
      <div className="cxo-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="cxo-modal-close" onClick={() => setModal(null)}><X size={16} /></button>
        {modal.type === "profile" && <ProfileModalContent member={modal.data} />}
        {modal.type === "article" && <ArticleModalContent article={modal.data} />}
        {modal.type === "application" && (
          <div className="cxo-modal-body" style={{ paddingTop: 34 }}>
            <div className="cxo-modal-name" style={{ fontSize: 19 }}>
              {modal.data.context === "invitation" ? "Executive Invitation Request" : "CXO Membership Application"}
            </div>
            <p style={{ fontSize: 13, color: "#64748B", margin: "6px 0 16px" }}>
              Membership is by invitation or verified application only.
            </p>
            <ApplicationForm context={modal.data.context} onDone={() => setModal(null)} />
          </div>
        )}
      </div>
    </div>
  );
}

/* ============================================================
   INDIVIDUAL ROUTE SEGMENTS
   ============================================================ */

export function CxoHero() {
  return (
    <section className="cxo-hero-section">
      <div className="absolute inset-0">
        <img
          className="cxo-hero-bg"
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&fit=crop&q=80"
          alt="Premium luxury skyline real estate background"
        />
        <div className="cxo-hero-overlay" />
      </div>
      <div className="cxo-hero-content">
        <p className="cxo-hero-eyebrow">Exclusive Leadership Network</p>
        <h1 className="cxo-hero-title">
          India's Premier CXO Network
          <br />
          for the Real Estate Industry
        </h1>
        <div className="cxo-hero-divider" />
        <p className="cxo-hero-desc">
          Connect. Influence. Collaborate. Build the Future. A Forbes Council-style experience
          engineered exclusively for top-tier developers, sovereign investors, and foundational decision makers.
        </p>
        <div className="cxo-hero-actions">
          <button className="cxo-btn-primary" onClick={() => openApplication("membership")}>
            Apply for Membership
          </button>
          <button
            className="cxo-btn-secondary"
            onClick={() => {
              const el = document.getElementById("directory");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Members
          </button>
        </div>
      </div>
    </section>
  );
}

export function CxoStats() {
  return (
    <section className="cxo-section bg-light-cream">
      <div className="cxo-inner">
        <div className="cxo-stats-grid">
          {LEADERSHIP_STATS.map((stat, i) => (
            <div key={i} className="cxo-stat-card">
              <div className="cxo-stat-number">{stat.value}</div>
              <div className="cxo-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedCxosCarousel() {
  const trackRef = useRef(null);
  const scrollBy = (dir) => {
    if (trackRef.current) trackRef.current.scrollBy({ left: dir * 260, behavior: "smooth" });
  };

  return (
    <section className="cxo-section bg-light-pure">
      <div className="cxo-inner">
        <SectionHead
          eyebrow="Spotlight"
          title="Featured CXO Members"
          desc="A curated rotation of CEOs, Managing Directors, Founders, Chairmen and Presidents shaping the industry right now."
          icon={Sparkles}
          action={
            <div className="cxo-carousel-controls">
              <button className="cxo-carousel-arrow" onClick={() => scrollBy(-1)} aria-label="Scroll left">
                <ChevronLeft size={16} />
              </button>
              <button className="cxo-carousel-arrow" onClick={() => scrollBy(1)} aria-label="Scroll right">
                <ChevronRight size={16} />
              </button>
            </div>
          }
        />
        <div className="cxo-carousel-wrap">
          <div className="cxo-carousel-track" ref={trackRef}>
            {FEATURED_CXOS.map((member, i) => (
              <MemberCard key={i} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function filterMembers(members, search, dev, sector) {
  return members.filter((item) => {
    if (search && !item.name.toLowerCase().includes(search.toLowerCase())) return false;
    if (dev !== "All Developers" && !item.company.toLowerCase().includes(dev.toLowerCase())) return false;
    if (sector !== "All Sectors" && !item.sector.toLowerCase().includes(sector.toLowerCase())) return false;
    return true;
  });
}

export function DirectorySection() {
  const [devFilter, setDevFilter] = useState("All Developers");
  const [sectorFilter, setSectorFilter] = useState("All Sectors");
  const [search, setSearch] = useState("");

  const results = filterMembers(ALL_MEMBERS, search, devFilter, sectorFilter);

  return (
    <section id="directory" className="cxo-section bg-light-cream">
      <div className="cxo-inner">
        <SectionHead
          eyebrow="Leadership Directory"
          title="Search the Full Member Network"
          desc="Every verified Board Chairman, Managing Director, President, and Founder in one searchable directory."
          icon={UserCheck}
        />

        <div className="cxo-filter-bar">
          <div className="cxo-search-input-wrapper">
            <Search size={14} className="cxo-search-icon" />
            <input
              type="text"
              className="cxo-search-input"
              placeholder="Search leadership profiles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select className="cxo-select-filter" value={devFilter} onChange={(e) => setDevFilter(e.target.value)}>
            {FILTER_DEVELOPERS.map((dev, i) => <option key={i} value={dev}>{dev}</option>)}
          </select>
          <select className="cxo-select-filter" value={sectorFilter} onChange={(e) => setSectorFilter(e.target.value)}>
            {FILTER_SECTORS.map((sec, i) => <option key={i} value={sec}>{sec}</option>)}
          </select>
          {(search || devFilter !== "All Developers" || sectorFilter !== "All Sectors") && (
            <button
              className="cxo-btn-ghost"
              onClick={() => { setSearch(""); setDevFilter("All Developers"); setSectorFilter("All Sectors"); }}
            >
              Clear Filters
            </button>
          )}
        </div>

        <div className="cxo-profile-grid">
          {results.length === 0 && (
            <div className="cxo-empty-state">No CXOs match these filters yet &mdash; try clearing a filter.</div>
          )}
          {results.map((member, i) => <MemberCard key={i} member={member} />)}
        </div>
      </div>
    </section>
  );
}

export function IndustryLeadersByCategorySection() {
  const [expanded, setExpanded] = useState({});

  return (
    <section id="categories" className="cxo-section bg-light-pure">
      <div className="cxo-inner">
        <SectionHead
          eyebrow="Leadership Map"
          title="Industry Leaders by Category"
          desc="Rather than one long list, explore verified leaders grouped by the part of the ecosystem they drive."
          icon={Layers}
        />
        {CATEGORY_LEADERS.map((cat, ci) => {
          const isOpen = !!expanded[cat.category];
          const visible = isOpen ? cat.leaders : cat.leaders.slice(0, 4);
          const CatIcon = cat.icon;
          return (
            <div className="cxo-category-block" key={ci}>
              <div className="cxo-category-head">
                <div className="cxo-category-title"><CatIcon size={16} color="#B0913B" /> {cat.category}</div>
                {cat.leaders.length > 4 && (
                  <button
                    className="cxo-view-all-btn"
                    onClick={() => setExpanded((s) => ({ ...s, [cat.category]: !isOpen }))}
                  >
                    {isOpen ? "Show Top 4" : `View All (${cat.leaders.length})`} <ChevronRight size={13} />
                  </button>
                )}
              </div>
              <div className="cxo-mini-grid">
                {visible.map((leader, li) => (
                  <div className="cxo-mini-card" key={li} onClick={() => openProfile(leader)}>
                    <img src={leader.image} alt={leader.name} className="cxo-mini-avatar" />
                    <div>
                      <div className="cxo-mini-name">{leader.name}</div>
                      <div className="cxo-mini-role">{leader.role}</div>
                      <div className="cxo-mini-company">{leader.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function CxoInsightsSection() {
  return (
    <section id="insights" className="cxo-section bg-light-cream">
      <div className="cxo-inner">
        <SectionHead
          eyebrow="Knowledge & Action"
          title="CXO Insights & Thought Leadership"
          desc="Every verified leader can directly publish native articles, macro infrastructure reports, and investment trends."
          icon={BookOpen}
        />
        <div className="cxo-insights-list">
          {CXO_INSIGHTS.map((post, i) => (
            <div key={i} className="cxo-insight-item" onClick={() => openArticle(post)}>
              <div>
                <div className="cxo-insight-left-title">{post.title}</div>
                <div className="cxo-insight-author">
                  By {post.author} &mdash; <span style={{ color: "#B0913B", fontWeight: 600 }}>{post.designation}</span> ({post.readTime})
                </div>
              </div>
              <button
                className="cxo-read-link"
                onClick={(e) => { e.stopPropagation(); openArticle(post); }}
              >
                Read Article <ChevronRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AdvisoryCouncilSection() {
  return (
    <GridBoxSection
      id="advisory"
      eyebrow="Prestige Core"
      title="RPEC Advisory Council"
      desc="Distinct from standard operations, the advisory body sets national governance parameters and guides RPEC policies."
      icon={Award}
      items={ADVISORY_COUNCIL}
      cols={3}
      bg="light-pure"
    />
  );
}

export function MemberBenefitsSection() {
  return (
    <GridBoxSection
      id="benefits"
      eyebrow="Value Framework"
      title="Exclusive Member Benefits"
      desc="Designed explicitly around multiplying community influence, deal generation pipelines, and closed lounge prestige."
      icon={Gift}
      items={EXCLUSIVE_BENEFITS}
      cols={2}
      bg="light-cream"
    />
  );
}

export function UpcomingEventsSection() {
  return (
    <section id="events" className="cxo-section bg-light-pure">
      <div className="cxo-inner">
        <SectionHead
          eyebrow="Private Calendar"
          title="Upcoming CXO Events & Roundtables"
          desc="Strictly restricted closed-room assemblies matching key asset allocation objectives."
          icon={Calendar}
        />
        <div className="cxo-functional-grid" style={{ "--cols": 3 }}>
          {UPCOMING_EVENTS.map((evt, i) => (
            <div key={i} className="cxo-standard-card" style={{ flexDirection: "column", gap: 4 }}>
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center", marginBottom: 4 }}>
                <span style={{ fontSize: 11, color: "#B0913B", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>{evt.city}</span>
                <span style={{ fontSize: 10, background: "#F1F5F9", border: "1px solid #E2E8F0", padding: "2px 8px", borderRadius: 4, color: "#475569", fontWeight: 600 }}>{evt.type}</span>
              </div>
              <div className="cxo-card-heading-title">{evt.title}</div>
              <div style={{ fontSize: 12, color: "#64748B", marginTop: 8, display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                <span>{evt.date}</span>
                <button
                  style={{ background: "none", border: "none", color: "#B0913B", fontWeight: 700, display: "flex", alignItems: "center", gap: 4, cursor: "pointer" }}
                  onClick={() => notifyToast(`Registered for ${evt.title} \u2014 ${evt.city}`)}
                >
                  Register <ArrowRight size={11} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DifferentiationSection() {
  return (
    <GridBoxSection
      id="ecosystem"
      eyebrow="Ecosystem Strategy"
      title="Differentiating From Standard Directories"
      desc="Transforming basic business contact listings into India's most asset-substantial ecosystem parameters."
      icon={Sparkles}
      items={DIFFERENTIATORS}
      cols={2}
      bg="light-cream"
    />
  );
}

export function BecomeCxoMemberSection() {
  return (
    <section className="cxo-closing-section">
      <img
        className="cxo-closing-bg"
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&fit=crop&q=80"
        alt="Premium real estate boardroom lounge space"
      />
      <div className="cxo-closing-overlay" />
      <div className="cxo-closing-inner">
        <div className="cxo-closing-eyebrow">Become a CXO Member</div>
        <h2 className="cxo-closing-title">
          Join India's Most Influential Real Estate Leadership Network
        </h2>
        <div className="cxo-closing-divider" />
        <p className="cxo-closing-para">
          Membership into the premium executive circle functions strictly on an <strong>Only by Invitation or Verified Application</strong> basis to preserve structural credibility benchmarks.
        </p>
        <button className="cxo-btn-primary" style={{ padding: "14px 32px", fontSize: 13.5, letterSpacing: "1px" }} onClick={() => openApplication("invitation")}>
          Apply for Executive Invitation
        </button>
      </div>
    </section>
  );
}

/* ============================================================
   MAIN ASSEMBLY ROUTE EXPORT
   ============================================================ */

export default function CxoMembersPage() {
  return (
    <>
      <style>{styles}</style>
      <main
        className="cxo-wrapper"
        style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", minHeight: "100vh" }}
      >
        <CxoHero />
        <CxoStats />
        <FeaturedCxosCarousel />
        <DirectorySection />
        <IndustryLeadersByCategorySection />
        <CxoInsightsSection />
        <AdvisoryCouncilSection />
        <MemberBenefitsSection />
        <UpcomingEventsSection />
        <DifferentiationSection />
        <BecomeCxoMemberSection />
      </main>
      <ToastHost />
      <ModalHost />
    </>
  );
}