"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Users,
  Building2,
  TrendingUp,
  Handshake,
  Award,
  BookOpen,
  MapPin,
  Network,
  Calendar,
  UserCheck,
  Target,
  Layers,
  Briefcase,
  Cpu,
  Gift,
  Newspaper,
  Megaphone,
  Sparkles,
} from "lucide-react";

/* ============================================================
   CONTENT DATA — sourced exactly from the provided RPEC brief
   (UNCHANGED)
   ============================================================ */

const VISION_POINTS = [
  "Unite every stakeholder of the Indian real estate ecosystem.",
  "Become the most trusted knowledge and business network.",
  "Shape the future of Indian real estate through education, collaboration, and innovation.",
];

const COMMUNITY_MEMBERS = [
  "Real Estate Developers",
  "Channel Partners & Agents",
  "Sales Professionals",
  "CRM Professionals",
  "Marketing Professionals",
  "Architects",
  "Interior Designers",
  "Urban Planners",
  "Engineers",
  "Construction Professionals",
  "Project Managers",
  "Facility Management Professionals",
  "PropTech Companies",
  "Investors",
  "Banks & Housing Finance Companies",
  "Legal Experts",
  "Valuers",
  "Chartered Accountants",
  "Government Officials",
  "Consultants",
  "Real Estate Faculty",
  "Students",
  "Entrepreneurs",
  "Technology Companies",
  "Material Manufacturers",
  "ESG & Sustainability Experts",
];

const MEMBERSHIP_TYPES = [
  "Certified Professional",
  "Individual Professional",
  "Startup Membership",
  "Corporate Membership",
  "Developer Membership",
  "Institutional Membership",
  "International Membership",
  "Lifetime Membership",
];

const CERTIFICATIONS = [
  "Certified Real Estate Professional",
  "Certified CRM Professional",
  "Certified Luxury Property Advisor",
  "Certified Construction Manager",
  "Certified Channel Partner",
  "Certified Project Manager",
  "Certified Sales Leader",
  "Certified Facility Manager",
  "Certified Real Estate Marketing Professional",
  "Certified PropTech Professional",
];

const KNOWLEDGE_ITEMS = [
  "Weekly webinars",
  "Industry Surveys",
  "Masterclasses",
  "Industry reports",
  "Podcasts",
  "Research papers",
  "Case studies",
  "White papers",
  "E-books",
  "Real estate newsletters",
  "Market intelligence",
  "Investment insights",
];

const NETWORKING_ITEMS = [
  "National Conventions",
  "City Chapters",
  "Developer Meetups",
  "Investor Forums",
  "CEO Roundtables",
  "Leadership Summits",
  "HR Summits",
  "Annual Awards",
  "Women in Real Estate Forum",
  "Young Leaders Forum",
];

const CAREER_ITEMS = [
  "Exclusive Job Portal",
  "Internship Opportunities",
  "Resume Reviews",
  "Career Counseling",
  "Executive Search",
  "Leadership Development",
  "Mentorship Programs",
];

const BUSINESS_ITEMS = [
  "Generate qualified leads",
  "Raise capital",
  "Find strategic partners",
  "Access top consultants",
  "Connect with developers",
  "Discover investment opportunities",
  "Form joint ventures",
  "Expand across India",
];

const TECH_PLATFORM_ITEMS = [
  "Member Directory",
  "Discussion Forums",
  "AI-based Networking",
  "Mobile App",
  "Knowledge Library",
  "Learning Management System",
  "Event Management",
  "Marketplace",
  "Job Portal",
  "Certification Dashboard",
  "Digital Member ID",
  "Continuing Professional Development Tracker",
];

const BENEFITS_ITEMS = [
  "Exclusive research",
  "Premium learning content",
  "Networking access",
  "Business referrals",
  "Vendor discounts",
  "Industry certifications",
  "Event invitations",
  "Awards eligibility",
  "Speaking opportunities",
  "Leadership recognition",
];

const CONTENT_STRATEGY_ITEMS = [
  "Market updates",
  "Investment trends",
  "Policy analysis",
  "Regulatory changes",
  "Sales strategies",
  "Marketing insights",
  "Construction innovations",
  "Sustainability practices",
  "AI impact in real estate",
  "Smart cities",
  "Global best practices",
];

const FLAGSHIP_EVENTS = [
  "India Real Estate Leadership Summit",
  "Luxury Real Estate Forum",
  "National Developers Conference",
  "Affordable Housing Forum",
  "Real Estate Technology Expo",
  "Student Leadership Summit",
  "India PropTech Summit",
  "Women in Real Estate Summit",
  "Real Estate Awards",
];

const REGIONS = [
  "Delhi NCR",
  "Mumbai",
  "Pune",
  "Bengaluru",
  "Hyderabad",
  "Chennai",
  "Ahmedabad",
  "Kolkata",
  "Chandigarh",
  "Jaipur",
  "Lucknow",
  "Indore",
  "Kochi",
  "Bhubaneswar",
  "Visakhapatnam",
];

const ADVOCACY_ITEMS = [
  "Publishing policy recommendations",
  "Conducting industry surveys",
  "Producing annual reports",
  "Supporting skill development",
  "Promoting ESG adoption",
  "Facilitating government–industry dialogue",
];

/* ============================================================
   STYLES — Same color theme (navy / gold), new "blueprint
   annotation" design system: corner marks, chapter numerals,
   grid/noise textures, scroll reveals, hover motion.
   ============================================================ */

const styles = `
  .ec-wrapper * { box-sizing: border-box; margin: 0; padding: 0; }
  .ec-wrapper { overflow-x: hidden; }

  .ec-hero-title, .ec-section-title, .ec-closing-title {
    font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif !important;
  }

  @keyframes ec-draw-line { from { width: 0; } to { width: 64px; } }
  @keyframes ec-fade-up { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes ec-drift {
    0%   { transform: translate(0, 0); }
    50%  { transform: translate(-2%, -1.5%); }
    100% { transform: translate(0, 0); }
  }

  /* ===== Hero Banner ===== */
  .ec-hero-section {
    position: relative;
    overflow: hidden;
    background: #0B1F3A;
  }
  .ec-hero-bg-wrap { position: absolute; inset: 0; }
  .ec-hero-bg {
    position: absolute;
    inset: -3%;
    height: 106%;
    width: 106%;
    object-fit: cover;
    opacity: 0.55;
    animation: ec-drift 26s ease-in-out infinite;
  }
  .ec-hero-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(232,163,61,0.10) 1px, transparent 1px),
      linear-gradient(90deg, rgba(232,163,61,0.10) 1px, transparent 1px);
    background-size: 42px 42px;
    -webkit-mask-image: linear-gradient(to right, black, transparent 75%);
            mask-image: linear-gradient(to right, black, transparent 75%);
  }
  .ec-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, #0B1F3A 0%, rgba(11, 31, 58, 0.88) 55%, rgba(11,31,58,0.35) 100%),
                linear-gradient(to top, #0B1F3A 0%, transparent 30%);
  }
  .ec-hero-content {
    position: relative;
    z-index: 2;
    margin-left: auto;
    margin-right: auto;
    max-width: 80rem;
    padding: 2.5rem 1.5rem;
  }
  @media (min-width: 1024px) {
    .ec-hero-content { padding: 3.5rem 3rem; }
  }
  .ec-hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid rgba(232,163,61,0.4);
    border-radius: 999px;
    padding: 5px 14px 5px 10px;
    margin-bottom: 14px;
  }
  .ec-hero-tag-dot { width: 6px; height: 6px; border-radius: 50%; background: #E8A33D; }
  .ec-hero-eyebrow {
    font-size: 0.75rem;
    font-weight: 600;
    color: #E8A33D;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  .ec-hero-title {
    max-width: 42rem;
    font-size: clamp(20px, 2.8vw, 40px);
    font-weight: 400;
    color: #fff;
    line-height: 1.25;
    letter-spacing: 0.025em;
    margin-top: 0px;
  }
  .ec-hero-divider {
    height: 2px;
    width: 64px;
    background: #E8A33D;
    margin-top: 1rem;
    animation: ec-draw-line 1.1s cubic-bezier(.16,1,.3,1) 0.2s both;
  }
  .ec-hero-desc {
    max-width: 36rem;
    color: #e2e8f0;
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 1.7;
    margin-top: 1rem;
  }
  .ec-hero-coords {
    display: flex;
    gap: 22px;
    margin-top: 26px;
    flex-wrap: wrap;
  }
  .ec-hero-coord { font-size: 11px; color: rgba(226,232,240,0.55); letter-spacing: 0.08em; }
  .ec-hero-coord b { color: #E8A33D; font-weight: 600; }

  /* ===== Compact Section Structure ===== */
  .ec-section { padding: 20px 0; position: relative; }
  .ec-section.bg-light { background: #fff; }
  .ec-section.bg-gray { background: #f9fafb; }
  .ec-section.bg-dark { background: #0d1e35; }

  .ec-section.bg-light::before, .ec-section.bg-gray::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(26,39,68,0.035) 1px, transparent 1px),
      linear-gradient(90deg, rgba(26,39,68,0.035) 1px, transparent 1px);
    background-size: 34px 34px;
    pointer-events: none;
  }
  .ec-section.bg-dark::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(201,168,76,0.14) 1px, transparent 1px);
    background-size: 22px 22px;
    pointer-events: none;
  }

  /* ===== Banner sections — background photo + navy/blue fade ===== */
  .ec-section-banner-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.85;
    transition: opacity 0.5s ease, transform 6s ease;
  }
  .ec-section-banner-overlay {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(180deg, rgba(11,31,58,0.58) 0%, rgba(19,42,74,0.32) 42%, rgba(11,31,58,0.62) 100%);
  }
  .ec-section.has-banner:hover .ec-section-banner-img { opacity: 0.92; transform: scale(1.03); }

  /* readability boosts for text/cards sitting on a banner photo */
  .ec-section.has-banner .ec-section-title.on-dark,
  .ec-section.has-banner .ec-section-desc.on-dark,
  .ec-section.has-banner .ec-chapter-num.on-dark {
    text-shadow: 0 1px 6px rgba(0,0,0,0.55);
  }
  .ec-section.has-banner .ec-item-card.on-dark {
    background: rgba(9,18,33,0.6);
    border-color: rgba(255,255,255,0.22);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
  .ec-section.has-banner .ec-item-label.on-dark {
    text-shadow: 0 1px 4px rgba(0,0,0,0.5);
  }
  .ec-section.has-banner .ec-chip {
    background: rgba(9,18,33,0.6);
    border-color: rgba(255,255,255,0.22);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    text-shadow: 0 1px 4px rgba(0,0,0,0.5);
  }

  .ec-inner { max-width: 1280px; margin: 0 auto; padding: 0 20px; position: relative; }

  .ec-section-head { max-width: 750px; margin-bottom: 14px; position: relative; padding-left: 16px; }
  .ec-section-head::before {
    content: "";
    position: absolute;
    left: 0; top: 2px; bottom: 6px;
    width: 2px;
    background: linear-gradient(to bottom, #c9a84c, rgba(201,168,76,0));
  }
  .ec-head-row { display: flex; align-items: center; gap: 12px; margin-bottom: 4px; }
  .ec-head-icon {
    width: 32px; height: 32px;
    border-radius: 50%;
    background: rgba(201,168,76,0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.35s ease, background 0.35s ease;
  }
  .ec-section:hover .ec-head-icon { transform: rotate(-8deg) scale(1.06); background: rgba(201,168,76,0.2); }
  .ec-eyebrow-row { display: flex; align-items: baseline; gap: 10px; }
  .ec-eyebrow {
    font-size: 11px;
    font-weight: 700;
    color: #c9a84c;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
  .ec-chapter-num {
    font-family: ui-serif, Georgia, serif;
    font-size: 11px;
    color: rgba(26,39,68,0.35);
    letter-spacing: 0.1em;
  }
  .ec-section-title.on-dark ~ .ec-chapter-num,
  .ec-chapter-num.on-dark { color: rgba(255,255,255,0.35); }
  .ec-section-title {
    font-size: 24px;
    font-weight: 800;
    color: #1a2744;
    line-height: 1.25;
    margin-top: 4px;
  }
  .ec-section-title.on-dark { color: #fff; }
  .ec-divider {
    width: 48px; height: 3px;
    background: #c9a84c;
    border-radius: 2px;
    margin: 6px 0 8px;
  }
  .ec-section-desc {
    font-size: 14px;
    color: #525a66;
    line-height: 1.5;
  }
  .ec-section-desc.on-dark { color: #b9c3d4; }

  /* corner registration marks — architectural drawing motif */
  .ec-corner {
    position: absolute;
    width: 14px; height: 14px;
    border: 1.5px solid rgba(201,168,76,0.55);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  .ec-section:hover .ec-corner { opacity: 1; }
  .ec-corner-tl { top: 0; left: -2px; border-right: none; border-bottom: none; }
  .ec-corner-br { bottom: 0; right: 0; border-left: none; border-top: none; }

  /* ===== Reveal-on-scroll ===== */
  .ec-reveal {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1);
  }
  .ec-reveal.is-visible { opacity: 1; transform: translateY(0); }
  @media (prefers-reduced-motion: reduce) {
    .ec-reveal { opacity: 1; transform: none; transition: none; }
    .ec-hero-bg { animation: none; }
    .ec-hero-divider { animation: none; width: 64px; }
  }

  /* ===== Functional Grid Elements ===== */
  .ec-card-grid {
    display: grid;
    grid-template-columns: repeat(var(--cols, 3), 1fr);
    gap: 10px;
  }
  .ec-item-card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-left: 2px solid transparent;
    border-radius: 8px;
    padding: 10px 14px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }
  .ec-item-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px -12px rgba(26,39,68,0.28);
    border-color: #e5e7eb;
    border-left-color: #c9a84c;
  }
  .ec-item-card.on-dark {
    background: rgba(255,255,255,0.04);
    border-color: rgba(255,255,255,0.12);
    border-left-color: transparent;
  }
  .ec-item-card.on-dark:hover {
    background: rgba(255,255,255,0.07);
    border-left-color: #c9a84c;
    box-shadow: 0 10px 26px -12px rgba(0,0,0,0.5);
  }
  .ec-item-icon-circle {
    width: 22px; height: 22px;
    border-radius: 50%;
    background: rgba(201,168,76,0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
    transition: transform 0.25s ease;
  }
  .ec-item-card:hover .ec-item-icon-circle { transform: scale(1.25); }
  .ec-item-label {
    font-size: 13px;
    font-weight: 600;
    color: #1a2744;
    line-height: 1.4;
  }
  .ec-item-label.on-dark { color: #fff; }

  /* ===== Fluid Chip Collections ===== */
  .ec-chip-grid { display: flex; flex-wrap: wrap; gap: 8px; }
  .ec-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 999px;
    padding: 6px 14px 6px 10px;
    font-size: 12.5px;
    font-weight: 600;
    color: #1a2744;
    transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  }
  .ec-chip:hover {
    transform: translateY(-2px);
    background: rgba(201,168,76,0.08);
    border-color: #c9a84c;
  }
  .ec-section.bg-dark .ec-chip {
    background: rgba(255,255,255,0.06);
    border-color: rgba(255,255,255,0.16);
    color: #fff;
  }
  .ec-section.bg-dark .ec-chip:hover {
    background: rgba(201,168,76,0.18);
    border-color: #c9a84c;
  }
  .ec-chip-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #c9a84c;
    flex-shrink: 0;
    transition: transform 0.2s ease;
  }
  .ec-chip:hover .ec-chip-dot { transform: scale(1.4); }

  /* ===== Bulleted Vision Items ===== */
  .ec-vision-list { list-style: none; display: flex; flex-direction: column; gap: 10px; max-width: 700px; }
  .ec-vision-list li {
    position: relative;
    padding-left: 18px;
    font-size: 14px;
    color: #374151;
    line-height: 1.5;
  }
  .ec-vision-list li::before {
    content: "";
    position: absolute;
    left: 0; top: 7px;
    width: 5px; height: 5px;
    border-radius: 50%;
    background: #c9a84c;
  }

  /* ===== Closing Vision Showcase ===== */
  .ec-closing-section {
    position: relative;
    background: #0d1e35;
    overflow: hidden;
    padding: 130px 0;
  }
  .ec-closing-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.3) brightness(0.25);
  }
  @media (min-width: 1024px) {
    .ec-closing-bg { background-attachment: fixed; }
  }
  .ec-closing-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(13,30,53,0.92) 0%, rgba(13,30,53,0.8) 60%, rgba(13,30,53,0.96) 100%);
  }
  .ec-closing-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(201,168,76,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(201,168,76,0.06) 1px, transparent 1px);
    background-size: 48px 48px;
  }
  .ec-closing-inner {
    position: relative;
    z-index: 2;
    max-width: 860px;
    margin: 0 auto;
    padding: 0 24px;
    text-align: center;
  }
  .ec-closing-eyebrow {
    font-size: 12px;
    font-weight: 700;
    color: #c9a84c;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 14px;
  }
  .ec-closing-title {
    font-size: clamp(26px, 3.8vw, 42px);
    font-weight: 700;
    color: #fff;
    line-height: 1.35;
    margin-bottom: 24px;
  }
  .ec-closing-divider {
    width: 60px; height: 3px;
    background: #c9a84c;
    border-radius: 2px;
    margin: 0 auto 26px;
  }
  .ec-closing-para {
    font-size: 15px;
    color: #cbd5e1;
    line-height: 1.75;
    margin-bottom: 16px;
  }
  .ec-closing-para:last-child { margin-bottom: 0; }

  /* ===== Breakpoint Handlers ===== */
  @media (max-width: 1024px) {
    .ec-card-grid { grid-template-columns: repeat(2, 1fr) !important; }
    .ec-closing-section { padding: 100px 0; }
  }
  @media (max-width: 640px) {
    .ec-card-grid { grid-template-columns: 1fr !important; }
    .ec-section { padding: 12px 0; }
    .ec-closing-section { padding: 80px 0; }
    .ec-hero-content { padding: 2.25rem 1.5rem; }
    .ec-corner { display: none; }
  }
`;

/* ============================================================
   REUSABLE UI ATOMS
   ============================================================ */

/** Fades + slides content up once it scrolls into view. */
function Reveal({ children, as: Tag = "div", className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`ec-reveal${visible ? " is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

function SectionHead({ eyebrow, title, desc, icon: Icon, onDark, chapter }) {
  return (
    <div className="ec-section-head">
      <div className="ec-eyebrow-row">
        <div className="ec-head-row" style={{ marginBottom: 0 }}>
          <div className="ec-head-icon">
            <Icon size={14} color="#c9a84c" strokeWidth={2} />
          </div>
          <span className="ec-eyebrow">{eyebrow}</span>
        </div>
        {chapter && (
          <span className={`ec-chapter-num${onDark ? " on-dark" : ""}`}>
            {chapter} / 15
          </span>
        )}
      </div>
      <h2 className={`ec-section-title${onDark ? " on-dark" : ""}`}>{title}</h2>
      <div className="ec-divider" />
      {desc && (
        <p className={`ec-section-desc${onDark ? " on-dark" : ""}`}>{desc}</p>
      )}
    </div>
  );
}

function CardGridSection({
  id,
  eyebrow,
  title,
  desc,
  icon,
  items,
  cols = 3,
  bg = "light",
  chapter,
  bgImage,
}) {
  const onDark = bg === "dark";
  return (
    <section
      id={id}
      className={`ec-section bg-${bg}${bgImage ? " has-banner" : ""}`}
    >
      {bgImage && (
        <>
          <img
            className="ec-section-banner-img"
            src={bgImage}
            alt=""
            aria-hidden="true"
          />
          <div className="ec-section-banner-overlay" />
        </>
      )}
      <span className="ec-corner ec-corner-tl" />
      <span className="ec-corner ec-corner-br" />
      <div className="ec-inner">
        <Reveal>
          <SectionHead
            eyebrow={eyebrow}
            title={title}
            desc={desc}
            icon={icon}
            onDark={onDark}
            chapter={chapter}
          />
        </Reveal>
        <div className="ec-card-grid" style={{ "--cols": cols }}>
          {items.map((item, i) => (
            <Reveal key={i} delay={Math.min(i, 8) * 40}>
              <div className={`ec-item-card${onDark ? " on-dark" : ""}`}>
                <div className="ec-item-icon-circle">
                  <span className="ec-chip-dot" />
                </div>
                <div className={`ec-item-label${onDark ? " on-dark" : ""}`}>
                  {item}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChipGridSection({
  id,
  eyebrow,
  title,
  desc,
  icon,
  items,
  bg = "light",
  chapter,
  bgImage,
}) {
  const onDark = bg === "dark";
  return (
    <section
      id={id}
      className={`ec-section bg-${bg}${bgImage ? " has-banner" : ""}`}
    >
      {bgImage && (
        <>
          <img
            className="ec-section-banner-img"
            src={bgImage}
            alt=""
            aria-hidden="true"
          />
          <div className="ec-section-banner-overlay" />
        </>
      )}
      <span className="ec-corner ec-corner-tl" />
      <span className="ec-corner ec-corner-br" />
      <div className="ec-inner">
        <Reveal>
          <SectionHead
            eyebrow={eyebrow}
            title={title}
            desc={desc}
            icon={icon}
            onDark={onDark}
            chapter={chapter}
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="ec-chip-grid">
            {items.map((item, i) => (
              <span key={i} className="ec-chip">
                <span className="ec-chip-dot" />
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   LAYOUT VIEWS
   ============================================================ */

export function ExploreHero() {
  return (
    <section className="ec-hero-section">
      <div className="ec-hero-bg-wrap">
        <img
          className="ec-hero-bg"
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1600&h=500&fit=crop"
          alt="Indian city skyline background"
        />
        <div className="ec-hero-grid" />
        <div className="ec-hero-overlay" />
      </div>
      <div className="ec-hero-content">
        <div className="ec-hero-tag">
          <span className="ec-hero-tag-dot" />
          <p className="ec-hero-eyebrow" style={{ margin: 0 }}>
            Real Estate Professionals Community
          </p>
        </div>
        <h1 className="ec-hero-title">
          Building India's Largest &
          <br />
          Most Influential Real Estate Community
        </h1>
        <div className="ec-hero-divider" />
        <p className="ec-hero-desc">
          The objective of RPEC is to build India's largest and most influential
          community of real estate professionals, the focus is to go beyond
          networking alone to create an ecosystem that delivers knowledge,
          careers, business opportunities, credibility, and industry influence.
        </p>
        <div className="ec-hero-coords">
          <span className="ec-hero-coord">
            <b>26</b> stakeholder groups
          </span>
          <span className="ec-hero-coord">
            <b>15</b> chapters of the plan
          </span>
          <span className="ec-hero-coord">
            <b>15+</b> city chapters nationwide
          </span>
        </div>
      </div>
    </section>
  );
}

export function VisionSection() {
  return (
    <section className="ec-section bg-light">
      <span className="ec-corner ec-corner-tl" />
      <span className="ec-corner ec-corner-br" />
      <div className="ec-inner">
        <Reveal>
          <SectionHead
            eyebrow="Key Pillars"
            title="Clear Vision"
            desc="RPEC is built on three founding commitments that guide everything the community does."
            icon={Target}
            chapter="01"
          />
        </Reveal>
        <Reveal delay={80}>
          <ul className="ec-vision-list">
            {VISION_POINTS.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function CommunityMembersSection() {
  return (
    <ChipGridSection
      id="members"
      eyebrow="Diverse Group"
      title="Build a Diverse Group of Community Members Comprising:"
      desc="Every stakeholder in the real estate value chain has a seat at the table."
      icon={Users}
      items={COMMUNITY_MEMBERS}
      bg="dark"
      bgImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80&auto=format&fit=crop"
      chapter="02"
    />
  );
}

export function MembershipStructureSection() {
  return (
    <CardGridSection
      id="membership"
      eyebrow="Structure"
      title="Membership Structure"
      desc="Membership tiers designed for individuals, startups, and large organizations alike."
      icon={Layers}
      items={MEMBERSHIP_TYPES}
      cols={4}
      bg="light"
      chapter="03"
    />
  );
}

export function CertificationsSection() {
  return (
    <CardGridSection
      id="certifications"
      eyebrow="Professional Certification"
      title="Develop industry-recognized certifications such as:"
      desc="Credentials that validate expertise across every real estate discipline."
      icon={Award}
      items={CERTIFICATIONS}
      cols={2}
      bg="dark"
      bgImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80&auto=format&fit=crop"
      chapter="04"
    />
  );
}

export function KnowledgeEcosystemSection() {
  return (
    <CardGridSection
      id="knowledge"
      eyebrow="Knowledge Ecosystem"
      title="Offer continuous learning through:"
      desc="Regular formats that keep members ahead of the market."
      icon={BookOpen}
      items={KNOWLEDGE_ITEMS}
      cols={3}
      bg="light"
      chapter="05"
    />
  );
}

export function NetworkingSection() {
  return (
    <CardGridSection
      id="networking"
      eyebrow="Networking Opportunities"
      title="Rooms Worth Being In"
      desc="Forums and summits that put members in front of the right people."
      icon={Network}
      items={NETWORKING_ITEMS}
      cols={2}
      bg="dark"
      bgImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80&auto=format&fit=crop"
      chapter="06"
    />
  );
}

export function CareerDevelopmentSection() {
  return (
    <CardGridSection
      id="careers"
      eyebrow="Career Development"
      title="Grow Your Career, Not Just Your Network"
      desc="Support at every stage — from first internship to executive search."
      icon={Briefcase}
      items={CAREER_ITEMS}
      cols={3}
      bg="light"
      chapter="07"
    />
  );
}

export function BusinessDevelopmentSection() {
  return (
    <CardGridSection
      id="business"
      eyebrow="Business Development"
      title="RPEC offers a platform to connect with professionals of choice from the member group:"
      desc="Form strategic alignments, find clients, and secure investment pipelines safely."
      icon={TrendingUp}
      items={BUSINESS_ITEMS}
      cols={2}
      bg="gray"
      chapter="08"
    />
  );
}

export function TechPlatformSection() {
  return (
    <CardGridSection
      id="technology"
      eyebrow="Technology Platform"
      title="Develop a digital platform featuring:"
      desc="Everything members need, integrated into a high-performance modern space."
      icon={Cpu}
      items={TECH_PLATFORM_ITEMS}
      cols={3}
      bg="dark"
      chapter="09"
    />
  );
}

export function BenefitsSection() {
  return (
    <CardGridSection
      id="benefits"
      eyebrow="Community Benefits"
      title="RPEC Members should receive:"
      desc="Unmatched ROI in professional credibility, knowledge tools, and global growth structures."
      icon={Gift}
      items={BENEFITS_ITEMS}
      cols={2}
      bg="light"
      chapter="10"
    />
  );
}

export function ContentStrategySection() {
  return (
    <CardGridSection
      id="content"
      eyebrow="Content Strategy"
      title="RPEC to Publish high-value content regularly:"
      desc="Stay informed with real-time breakdowns of macro policies and local updates."
      icon={Newspaper}
      items={CONTENT_STRATEGY_ITEMS}
      cols={3}
      bg="dark"
      bgImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&q=80&auto=format&fit=crop"
      chapter="11"
    />
  );
}

export function FlagshipEventsSection() {
  return (
    <CardGridSection
      id="events"
      eyebrow="Annual Flagship Events"
      title="RPEC shall host signature events such as:"
      desc="Major interactive setups connecting policy leaders with scaling real estate founders."
      icon={Calendar}
      items={FLAGSHIP_EVENTS}
      cols={3}
      bg="light"
      chapter="12"
    />
  );
}

export function RegionalExpansionSection() {
  return (
    <ChipGridSection
      id="regions"
      eyebrow="Regional Expansion"
      title="Create active chapters across major markets, including:"
      desc="Local chapter hubs bringing deep actionable community context directly to your city."
      icon={MapPin}
      items={REGIONS}
      bg="dark"
      bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80&auto=format&fit=crop"
      chapter="13"
    />
  );
}

export function AdvocacySection() {
  return (
    <CardGridSection
      id="advocacy"
      eyebrow="Industry Advocacy"
      title="RPEC to act as a respected industry voice by:"
      desc="Driving deep structural improvements through data analytics and collaborative policy frameworks."
      icon={Megaphone}
      items={ADVOCACY_ITEMS}
      cols={2}
      bg="light"
      chapter="14"
    />
  );
}

export function ClosingVisionSection() {
  return (
    <section className="ec-closing-section">
      <img
        className="ec-closing-bg"
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85&auto=format&fit=crop"
        alt="Real estate premium workspace structure"
      />
      <div className="ec-closing-overlay" />
      <div className="ec-closing-grid" />
      <div className="ec-closing-inner">
        <Reveal>
          <div className="ec-closing-eyebrow">
            Chapter 15 / 15 — A Long-Term Vision
          </div>
          <h2 className="ec-closing-title">
            Where Professionals Learn, Earn, Connect, Innovate, and Lead
          </h2>
          <div className="ec-closing-divider" />
        </Reveal>
        <Reveal delay={120}>
          <p className="ec-closing-para">
            RPEC aspires to create India's most trusted professional ecosystem
            for the entire real estate value chain, where professionals learn,
            earn, connect, innovate, and lead throughout their careers.
          </p>
          <p className="ec-closing-para">
            RPEC is not only a mere networking platform, it would function as an
            integrated ecosystem combining education, certification, career
            advancement, business development, thought leadership, and policy
            engagement.
          </p>
          <p className="ec-closing-para">
            This RPEC model will create lasting value for individual
            professionals, organizations, and the broader Indian real estate
            industry.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   MAIN WRAPPER INTERFACE ASSEMBLY
   ============================================================ */

export default function ExploreCommunityPage() {
  return (
    <>
      <style>{styles}</style>
      <main
        className="ec-wrapper"
        style={{
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          minHeight: "100vh",
        }}
      >
        <ExploreHero />
        <VisionSection />
        <CommunityMembersSection />
        <MembershipStructureSection />
        <CertificationsSection />
        <KnowledgeEcosystemSection />
        <NetworkingSection />
        <CareerDevelopmentSection />
        <BusinessDevelopmentSection />
        <TechPlatformSection />
        <BenefitsSection />
        <ContentStrategySection />
        <FlagshipEventsSection />
        <RegionalExpansionSection />
        <AdvocacySection />
        <ClosingVisionSection />
      </main>
    </>
  );
}
