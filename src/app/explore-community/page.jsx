"use client";
import React from "react";
import {
  Users, Building2, TrendingUp, Handshake, Award, BookOpen, MapPin,
  Network, Calendar, UserCheck, Target, Layers, Briefcase, Cpu,
  Gift, Newspaper, Megaphone, Sparkles,
} from "lucide-react";

/* ============================================================
   CONTENT DATA — sourced from the REPC brief, unabridged
   ============================================================ */

const VISION_POINTS = [
  "Unite every stakeholder of the Indian real estate ecosystem.",
  "Become the most trusted knowledge and business network.",
  "Shape the future of Indian real estate through education, collaboration, and innovation.",
];

const COMMUNITY_MEMBERS = [
  "Real Estate Developers", "Channel Partners & Agents", "Sales Professionals",
  "CRM Professionals", "Marketing Professionals", "Architects",
  "Interior Designers", "Urban Planners", "Engineers",
  "Construction Professionals", "Project Managers", "Facility Management Professionals",
  "PropTech Companies", "Investors", "Banks & Housing Finance Companies",
  "Legal Experts", "Valuers", "Chartered Accountants",
  "Government Officials", "Consultants", "Real Estate Faculty",
  "Students", "Entrepreneurs", "Technology Companies",
  "Material Manufacturers", "ESG & Sustainability Experts",
];

const MEMBERSHIP_TYPES = [
  "Certified Professional", "Individual Professional", "Startup Membership",
  "Corporate Membership", "Developer Membership", "Institutional Membership",
  "International Membership", "Lifetime Membership",
];

const CERTIFICATIONS = [
  "Certified Real Estate Professional", "Certified CRM Professional",
  "Certified Luxury Property Advisor", "Certified Construction Manager",
  "Certified Channel Partner", "Certified Project Manager",
  "Certified Sales Leader", "Certified Facility Manager",
  "Certified Real Estate Marketing Professional", "Certified PropTech Professional",
];

const KNOWLEDGE_ITEMS = [
  "Weekly webinars", "Industry Surveys", "Masterclasses", "Industry reports",
  "Podcasts", "Research papers", "Case studies", "White papers",
  "E-books", "Real estate newsletters", "Market intelligence", "Investment insights",
];

const NETWORKING_ITEMS = [
  "National Conventions", "City Chapters", "Developer Meetups", "Investor Forums",
  "CEO Roundtables", "Leadership Summits", "HR Summits", "Annual Awards",
  "Women in Real Estate Forum", "Young Leaders Forum",
];

const CAREER_ITEMS = [
  "Exclusive Job Portal", "Internship Opportunities", "Resume Reviews",
  "Career Counseling", "Executive Search", "Leadership Development", "Mentorship Programs",
];

const BUSINESS_ITEMS = [
  "Generate qualified leads", "Raise capital", "Find strategic partners",
  "Access top consultants", "Connect with developers", "Discover investment opportunities",
  "Form joint ventures", "Expand across India",
];

const TECH_PLATFORM_ITEMS = [
  "Member Directory", "Discussion Forums", "AI-based Networking", "Mobile App",
  "Knowledge Library", "Learning Management System", "Event Management", "Marketplace",
  "Job Portal", "Certification Dashboard", "Digital Member ID",
  "Continuing Professional Development Tracker",
];

const BENEFITS_ITEMS = [
  "Exclusive research", "Premium learning content", "Networking access",
  "Business referrals", "Vendor discounts", "Industry certifications",
  "Event invitations", "Awards eligibility", "Speaking opportunities", "Leadership recognition",
];

const CONTENT_STRATEGY_ITEMS = [
  "Market updates", "Investment trends", "Policy analysis", "Regulatory changes",
  "Sales strategies", "Marketing insights", "Construction innovations",
  "Sustainability practices", "AI impact in real estate", "Smart cities", "Global best practices",
];

const FLAGSHIP_EVENTS = [
  "India Real Estate Leadership Summit", "Luxury Real Estate Forum",
  "National Developers Conference", "Affordable Housing Forum",
  "Real Estate Technology Expo", "Student Leadership Summit",
  "India PropTech Summit", "Women in Real Estate Summit", "Real Estate Awards",
];

const REGIONS = [
  "Delhi NCR", "Mumbai", "Pune", "Bengaluru", "Hyderabad", "Chennai",
  "Ahmedabad", "Kolkata", "Chandigarh", "Jaipur", "Lucknow", "Indore",
  "Kochi", "Bhubaneswar", "Visakhapatnam",
];

const ADVOCACY_ITEMS = [
  "Publishing policy recommendations", "Conducting industry surveys",
  "Producing annual reports", "Supporting skill development",
  "Promoting ESG adoption", "Facilitating government–industry dialogue",
];

/* ============================================================
   STYLES — Exact Survey Page Banner Matching Sizing
   ============================================================ */

const styles = `
  .ec-wrapper * { box-sizing: border-box; margin: 0; padding: 0; }
  .ec-wrapper { overflow-x: hidden; }

  .ec-hero-title, .ec-section-title, .ec-closing-title {
    font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif !important;
  }

  /* ===== Hero Banner — EXACT Match to Survey Banner Design Dimensions ===== */
  .ec-hero-section {
    position: relative;
    overflow: hidden;
    background: #0B1F3A;
  }
  .ec-hero-bg {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.6;
  }
  .ec-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, #0B1F3A 0%, rgba(11, 31, 58, 0.85) 60%, transparent 100%);
  }
  .ec-hero-content {
    position: relative;
    z-index: 2;
    margin-left: auto;
    margin-right: auto;
    max-width: 80rem; /* max-w-7xl */
    padding: 2.5rem 1.5rem; /* px-6 py-10 */
  }
  @media (min-width: 1024px) {
    .ec-hero-content {
      padding-left: 3rem;  /* lg:px-12 */
      padding-right: 3rem; /* lg:px-12 */
      padding-top: 3.5rem;   /* lg:py-14 */
      padding-bottom: 3.5rem;/* lg:py-14 */
    }
  }
  .ec-hero-eyebrow {
    font-size: 0.875rem; /* text-sm */
    font-weight: 600; /* font-semibold */
    color: #E8A33D;
    letter-spacing: 0.2em; /* tracking-[0.2em] */
    text-transform: uppercase;
  }
  .ec-hero-title {
    max-width: 42rem; /* max-w-2xl */
    font-size: clamp(24px, 3vw, 42px); /* text-[clamp(24px,3vw,42px)] */
    font-weight: 400; /* font-normal */
    color: #fff;
    line-height: 1.25;
    letter-spacing: 0.025em; /* tracking-wide */
    margin-top: 0px;
  }
  .ec-hero-divider {
    height: 2px;
    width: 4rem; /* w-16 */
    background: #E8A33D;
    margin-top: 1rem; /* mt-4 */
  }
  .ec-hero-desc {
    max-width: 36rem; /* max-w-xl */
    color: #e2e8f0; /* text-slate-200 */
    font-size: 0.875rem; /* text-sm */
    font-weight: 300; /* font-light */
    line-height: 1.7; /* leading-[1.7] */
    margin-top: 1rem; /* mt-4 */
  }

  /* ===== Shared content-section ===== */
  .ec-section { padding: 20px 0; }
  .ec-section.bg-light { background: #fff; }
  .ec-section.bg-gray { background: #f9fafb; }
  .ec-section.bg-dark { background: #0d1e35; }
  .ec-inner { max-width: 1280px; margin: 0 auto; padding: 0 20px; }

  .ec-section-head { max-width: 700px; margin-bottom: 14px; }
  .ec-head-row { display: flex; align-items: center; gap: 12px; margin-bottom: 4px; }
  .ec-head-icon {
    width: 36px; height: 36px;
    border-radius: 50%;
    background: rgba(201,168,76,0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .ec-eyebrow {
    font-size: 12px;
    font-weight: 700;
    color: #c9a84c;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }
  .ec-section-title {
    font-size: 24px;
    font-weight: 800;
    color: #1a2744;
    line-height: 1.25;
  }
  .ec-section-title.on-dark { color: #fff; }
  .ec-divider {
    width: 48px; height: 3px;
    background: #c9a84c;
    border-radius: 2px;
    margin: 8px 0 10px;
  }
  .ec-section-desc {
    font-size: 14px;
    color: #6b7280;
    line-height: 1.5;
    max-width: 640px;
  }
  .ec-section-desc.on-dark { color: #b9c3d4; }

  /* ===== Card grid ===== */
  .ec-card-grid {
    display: grid;
    grid-template-columns: repeat(var(--cols, 3), 1fr);
    gap: 12px;
  }
  .ec-item-card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 12px 14px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  .ec-item-card.on-dark {
    background: rgba(255,255,255,0.04);
    border-color: rgba(255,255,255,0.12);
  }
  .ec-item-icon-circle {
    width: 32px; height: 32px;
    border-radius: 50%;
    background: rgba(201,168,76,0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .ec-item-label {
    font-size: 13px;
    font-weight: 700;
    color: #1a2744;
    line-height: 1.35;
    padding-top: 4px;
  }
  .ec-item-label.on-dark { color: #fff; }

  /* ===== Chip grid ===== */
  .ec-chip-grid { display: flex; flex-wrap: wrap; gap: 8px; }
  .ec-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 999px;
    padding: 8px 14px 8px 10px;
    font-size: 12.5px;
    font-weight: 600;
    color: #1a2744;
  }
  .ec-chip-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #c9a84c;
    flex-shrink: 0;
  }

  /* ===== Vision list ===== */
  .ec-vision-list { list-style: none; display: flex; flex-direction: column; gap: 10px; max-width: 640px; }
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

  /* ===== Closing vision banner ===== */
  .ec-closing-section {
    position: relative;
    background: #0d1e35;
    overflow: hidden;
    padding: 120px 0;
  }
  .ec-closing-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.4) brightness(0.3);
  }
  .ec-closing-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(13,30,53,0.9) 0%, rgba(13,30,53,0.75) 60%, rgba(13,30,53,0.95) 100%);
  }
  .ec-closing-inner {
    position: relative;
    z-index: 2;
    max-width: 820px;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;
  }
  .ec-closing-eyebrow {
    font-size: 12px;
    font-weight: 700;
    color: #c9a84c;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 14px;
  }
  .ec-closing-title {
    font-size: clamp(24px, 3.4vw, 36px);
    font-weight: 700;
    color: #fff;
    line-height: 1.3;
    margin-bottom: 20px;
  }
  .ec-closing-divider {
    width: 48px; height: 3px;
    background: #c9a84c;
    border-radius: 2px;
    margin: 0 auto 26px;
  }
  .ec-closing-para {
    font-size: 14.5px;
    color: #cbd5e1;
    line-height: 1.7;
    margin-bottom: 16px;
  }
  .ec-closing-para:last-child { margin-bottom: 0; }

  /* ===== Responsive ===== */
  @media (max-width: 1024px) {
    .ec-card-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .ec-card-grid { grid-template-columns: 1fr; }
    .ec-section { padding: 12px 0; }
    .ec-closing-section { padding: 96px 0; }
  }
`;

/* ============================================================
   REUSABLE PIECES
   ============================================================ */

function SectionHead({ eyebrow, title, desc, icon: Icon, onDark }) {
  return (
    <div className="ec-section-head">
      <div className="ec-head-row">
        <div className="ec-head-icon">
          <Icon size={16} color="#c9a84c" strokeWidth={1.8} />
        </div>
        <span className="ec-eyebrow">{eyebrow}</span>
      </div>
      <h2 className={`ec-section-title${onDark ? " on-dark" : ""}`}>{title}</h2>
      <div className="ec-divider" />
      {desc && <p className={`ec-section-desc${onDark ? " on-dark" : ""}`}>{desc}</p>}
    </div>
  );
}

function CardGridSection({ id, eyebrow, title, desc, icon, items, cols = 3, bg = "light" }) {
  const onDark = bg === "dark";
  return (
    <section id={id} className={`ec-section bg-${bg}`}>
      <div className="ec-inner">
        <SectionHead eyebrow={eyebrow} title={title} desc={desc} icon={icon} onDark={onDark} />
        <div className="ec-card-grid" style={{ "--cols": cols }}>
          {items.map((item, i) => (
            <div key={i} className={`ec-item-card${onDark ? " on-dark" : ""}`}>
              <div className="ec-item-icon-circle">
                <span className="ec-chip-dot" />
              </div>
              <div className={`ec-item-label${onDark ? " on-dark" : ""}`}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChipGridSection({ id, eyebrow, title, desc, icon, items, bg = "light" }) {
  return (
    <section id={id} className={`ec-section bg-${bg}`}>
      <div className="ec-inner">
        <SectionHead eyebrow={eyebrow} title={title} desc={desc} icon={icon} />
        <div className="ec-chip-grid">
          {items.map((item, i) => (
            <span key={i} className="ec-chip">
              <span className="ec-chip-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE SECTIONS
   ============================================================ */

export function ExploreHero() {
  return (
    <section className="ec-hero-section">
      <div className="absolute inset-0">
        <img
          className="ec-hero-bg"
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1600&h=500&fit=crop"
          alt="Indian city skyline"
        />
        <div className="ec-hero-overlay" />
      </div>
      <div className="ec-hero-content">
        <p className="ec-hero-eyebrow">Real Estate Professionals Community</p>
        <h1 className="ec-hero-title">
          Building India's Largest and Most
          <br />
          Influential Real Estate Community
        </h1>
        <div className="ec-hero-divider" />
        <p className="ec-hero-desc">
          REPC goes beyond networking alone — creating an ecosystem that delivers knowledge,
          careers, business opportunities, credibility, and industry influence for every
          stakeholder of Indian real estate.
        </p>
      </div>
    </section>
  );
}

export function VisionSection() {
  return (
    <section className="ec-section bg-light">
      <div className="ec-inner">
        <SectionHead
          eyebrow="Our Foundation"
          title="A Clear Vision"
          desc="REPC is built on three founding commitments that guide everything the community does."
          icon={Target}
        />
        <ul className="ec-vision-list">
          {VISION_POINTS.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function CommunityMembersSection() {
  return (
    <ChipGridSection
      id="members"
      eyebrow={`${COMMUNITY_MEMBERS.length} Professional Categories`}
      title="A Diverse Community of Members"
      desc="Every stakeholder in the real estate value chain has a seat at the table."
      icon={Users}
      items={COMMUNITY_MEMBERS}
      bg="gray"
    />
  );
}

export function MembershipStructureSection() {
  return (
    <CardGridSection
      id="membership"
      eyebrow="Membership Structure"
      title="Choose the Membership That Fits"
      desc="Eight membership tiers designed for individuals, startups, and large organizations alike."
      icon={Layers}
      items={MEMBERSHIP_TYPES}
      cols={4}
      bg="light"
    />
  );
}

export function CertificationsSection() {
  return (
    <CardGridSection
      id="certifications"
      eyebrow="Professional Certification"
      title="Industry-Recognized Certifications"
      desc="Credentials that validate expertise across every real estate discipline."
      icon={Award}
      items={CERTIFICATIONS}
      cols={3}
      bg="gray"
    />
  );
}

export function KnowledgeEcosystemSection() {
  return (
    <CardGridSection
      id="knowledge"
      eyebrow="Knowledge Ecosystem"
      title="Continuous Learning, Always On"
      desc="Regular formats that keep members ahead of the market."
      icon={BookOpen}
      items={KNOWLEDGE_ITEMS}
      cols={4}
      bg="light"
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
      cols={3}
      bg="gray"
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
      cols={4}
      bg="light"
    />
  );
}

export function BusinessDevelopmentSection() {
  return (
    <CardGridSection
      id="business"
      eyebrow="Business Development"
      title="A Platform Built for Business"
      desc="Connect with the professionals of your choice from within the member group."
      icon={TrendingUp}
      items={BUSINESS_ITEMS}
      cols={4}
      bg="gray"
    />
  );
}

export function TechPlatformSection() {
  return (
    <CardGridSection
      id="technology"
      eyebrow="Technology Platform"
      title="A Digital Home for the Community"
      desc="Everything members need, in one connected platform."
      icon={Cpu}
      items={TECH_PLATFORM_ITEMS}
      cols={4}
      bg="dark"
    />
  );
}

export function BenefitsSection() {
  return (
    <CardGridSection
      id="benefits"
      eyebrow="Community Benefits"
      title="What Members Receive"
      icon={Gift}
      items={BENEFITS_ITEMS}
      cols={5}
      bg="light"
    />
  );
}

export function ContentStrategySection() {
  return (
    <CardGridSection
      id="content"
      eyebrow="Content Strategy"
      title="High-Value Content, Published Regularly"
      icon={Newspaper}
      items={CONTENT_STRATEGY_ITEMS}
      cols={4}
      bg="gray"
    />
  );
}

export function FlagshipEventsSection() {
  return (
    <CardGridSection
      id="events"
      eyebrow="Annual Flagship Events"
      title="Signature Events Members Look Forward To"
      icon={Calendar}
      items={FLAGSHIP_EVENTS}
      cols={3}
      bg="light"
    />
  );
}

export function RegionalExpansionSection() {
  return (
    <ChipGridSection
      id="regions"
      eyebrow={`${REGIONS.length} Cities and Counting`}
      title="Active Chapters Across Major Markets"
      desc="REPC's regional expansion brings the community closer to where its members work."
      icon={MapPin}
      items={REGIONS}
      bg="gray"
    />
  );
}

export function AdvocacySection() {
  return (
    <CardGridSection
      id="advocacy"
      eyebrow="Industry Advocacy"
      title="A Respected Industry Voice"
      icon={Megaphone}
      items={ADVOCACY_ITEMS}
      cols={3}
      bg="light"
    />
  );
}

export function ClosingVisionSection() {
  return (
    <section className="ec-closing-section">
      <img
        className="ec-closing-bg"
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85&auto=format&fit=crop"
        alt="Real estate leadership"
      />
      <div className="ec-closing-overlay" />
      <div className="ec-closing-inner">
        <div className="ec-closing-eyebrow">The Long-Term Vision</div>
        <h2 className="ec-closing-title">
          Where Professionals Learn, Earn, Connect, Innovate, and Lead
        </h2>
        <div className="ec-closing-divider" />
        <p className="ec-closing-para">
          REPC aspires to create India's most trusted professional ecosystem for the entire
          real estate value chain, where professionals learn, earn, connect, innovate, and
          lead throughout their careers.
        </p>
        <p className="ec-closing-para">
          REPC is not only a networking platform — it functions as an integrated ecosystem
          combining education, certification, career advancement, business development,
          thought leadership, and policy engagement.
        </p>
        <p className="ec-closing-para">
          This model creates lasting value for individual professionals, organizations, and
          the broader Indian real estate industry.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE
   ============================================================ */

export default function ExploreCommunityPage() {
  return (
    <>
      <style>{styles}</style>
      <main
        className="ec-wrapper"
        style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", minHeight: "100vh" }}
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