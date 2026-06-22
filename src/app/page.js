"use client";
import React from "react";
import {
  Users, Building2, TrendingUp, Handshake,
  Search, ChevronDown, Bell, Award, BookOpen,
  MapPin, Clock, ChevronLeft, ChevronRight,
  Network, Calendar, UserCheck, MessageSquare
} from "lucide-react";

const FEATURE_STRIPS = [
  { icon: Users, label: "Network", desc: "Connect with verified real estate professionals" },
  { icon: Handshake, label: "Collaborate", desc: "Work together on projects & deals" },
  { icon: BookOpen, label: "Learn", desc: "Access insights, articles & industry knowledge" },
  { icon: TrendingUp, label: "Grow", desc: "Find opportunities & grow your business" },
  { icon: Bell, label: "Stay Updated", desc: "Get the latest news, trends & updates" },
  { icon: Award, label: "Build Reputation", desc: "Showcase your expertise & build your brand" },
];

const STATS_BAR = [
  { value: "25,000+", label: "Professionals", icon: Users },
  { value: "3,500+", label: "Companies", icon: Building2 },
  { value: "120+", label: "Cities", icon: MapPin },
  { value: "850+", label: "Industry Experts", icon: UserCheck },
  { value: "150+", label: "Active Groups", icon: Network },
  { value: "50+", label: "Events Every Year", icon: Calendar },
];

const COMMUNITY_MEMBERS = [
  {
    name: "Rohit Mehta",
    role: "Director – Investments",
    company: "Blackstone",
    city: "Mumbai",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Ananya Sharma",
    role: "Head – Workplace Solutions, India",
    company: "JLL",
    city: "Bengaluru",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Vikram Kapoor",
    role: "CEO",
    company: "Assetz Property Group",
    city: "Mumbai",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Neha Iyer",
    role: "Senior Architect",
    company: "Morphogenesis",
    city: "Delhi",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
  },
];

const EVENTS = [
  { day: "18", month: "JUN", title: "CREPNET Annual Summit 2024", venue: "Jio World Convention Centre, Mumbai", time: "09:00 AM – 06:00 PM IST" },
  { day: "24", month: "JUN", title: "Retail Real Estate Networking Meet", venue: "The Leela Ambience, Gurugram", time: "04:00 PM – 07:00 PM IST" },
  { day: "07", month: "JUL", title: "GCC & Office Leadership Forum", venue: "ITC Gardenia, Bengaluru", time: "09:30 AM – 05:00 PM IST" },
];

const DISCUSSIONS = [
  { user: "Arvind Nandan", topic: "Future of Office Spaces in Tier 2 Cities", time: "2h ago", replies: 32, img: "https://randomuser.me/api/portraits/men/11.jpg" },
  { user: "Puneet Khurana", topic: "How to Evaluate Retail Locations Effectively?", time: "5h ago", replies: 28, img: "https://randomuser.me/api/portraits/men/22.jpg" },
  { user: "Neha Iyer", topic: "Sustainability in Real Estate Development", time: "1d ago", replies: 41, img: "https://randomuser.me/api/portraits/women/68.jpg" },
  { user: "Vimal Nadar", topic: "Co-working vs Managed Offices – What's Next?", time: "1d ago", replies: 19, img: "https://randomuser.me/api/portraits/men/55.jpg" },
];

const BOTTOM_FEATURES = [
  { icon: Users, title: "Join Groups", desc: "Be part of topic-based professional groups" },
  { icon: BookOpen, title: "Share Knowledge", desc: "Contribute articles, insights & best practices" },
  { icon: TrendingUp, title: "Find Opportunities", desc: "Discover projects, jobs & business leads" },
];

const styles = `
  .dashboard-main-wrapper * { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0; 
  }

  .dashboard-main-wrapper {
    overflow-x: hidden;
  }

  /* ===== Hero ===== */
  .hero-section {
    position: relative;
    background: #0d1e35;
    padding-bottom: 0;
  }
  .hero-bg {
    position: absolute;
    inset: 0;
    background-image: url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=85');
    background-size: cover;
    background-position: 65% center;
  }
  .hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, #0d1e35 45%, rgba(13,30,53,0.9) 65%, rgba(13,30,53,0.4) 85%, rgba(13,30,53,0.15) 100%);
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 1280px;
    margin: 0 auto;
    padding: 72px 20px 96px;
    display: flex;
    align-items: center;
  }
  .hero-text { max-width: 750px; width: 100%; }
  .hero-title {
    font-size: clamp(26px, 3.5vw, 42px);
    font-weight: 800;
    color: #fff;
    line-height: 1.25;
  }
  .hero-gold { color: #c9a84c; }
  .hero-divider {
    width: 48px; height: 3px;
    background: #c9a84c;
    border-radius: 2px;
    margin: 16px 0 20px;
  }
  .hero-tagline-bold {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 12px;
  }
  .hero-desc {
    color: #d1d5db;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 32px;
    max-width: 620px;
  }

  .hero-cta-row {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    margin-bottom: 8px;
  }
  .btn-hero-primary {
    background: #c9a84c;
    color: #fff;
    padding: 13px 26px;
    border-radius: 6px;
    font-weight: 700;
    font-size: 14px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: background 0.2s;
  }
  .btn-hero-primary:hover { background: #b2933f; }
  .btn-hero-outline {
    background: transparent;
    color: #fff;
    padding: 13px 26px;
    border-radius: 6px;
    font-weight: 700;
    font-size: 14px;
    border: 1.5px solid rgba(255,255,255,0.55);
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: background 0.2s;
  }
  .btn-hero-outline:hover { background: rgba(255,255,255,0.08); }

  .search-bar-wrap {
    position: relative;
    z-index: 10;
    background: rgba(10,20,38,0.96);
    border: 1px solid rgba(255,255,255,0.08);
    max-width: 1240px;
    margin: -72px auto 0;
    border-radius: 8px;
    box-shadow: 0 12px 30px -5px rgba(0, 0, 0, 0.4);
  }
  .search-bar-inner {
    padding: 16px;
  }
  .search-row {
    display: flex;
    gap: 12px;
    align-items: center;
    width: 100%;
  }
  .search-input-wrap {
    flex: 2;
    display: flex;
    align-items: center;
    gap: 12px;
    background: #fff;
    border-radius: 6px;
    padding: 0 16px;
    height: 48px;
  }
  .search-input-wrap input {
    border: none;
    outline: none;
    flex: 1;
    font-size: 14px;
    color: #111827;
    min-width: 0;
  }
  .search-select {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 6px;
    padding: 0 16px;
    height: 48px;
    cursor: pointer;
  }
  .search-select span { font-size: 14px; color: #4b5563; }
  .search-btn {
    background: #c9a84c;
    color: #fff;
    padding: 0 36px;
    height: 48px;
    border-radius: 6px;
    font-size: 14.5px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s;
  }
  .search-btn:hover { background: #b2933f; }

  /* Core Feature Stripe Element */
  .feature-strip {
    background: #fff;
    border-bottom: 1px solid #e5e7eb;
    padding-top: 16px; /* Decreased gap from 48px to cleanly align under search box shadow */
  }
  .feature-strip-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
  .feature-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 24px 14px;
  }
  .feature-label { font-size: 13.5px; font-weight: 700; color: #1a2744; }
  .feature-desc { font-size: 11.5px; color: #6b7280; line-height: 1.4; margin-top: 4px; }

  /* ===== Stats Bar ===== */
  .stats-bar {
    background: #0d1e35;
    padding: 32px 0;
  }
  .stats-bar-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
  }
  .stat-block {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .stat-icon-circle {
    width: 44px; height: 44px;
    border-radius: 50%;
    background: rgba(201,168,76,0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .stat-value { font-size: 22px; font-weight: 800; color: #c9a84c; line-height: 1; }
  .stat-label { font-size: 12px; color: #cbd5e1; margin-top: 4px; }

  /* Three Column Dashboard Section */
  .three-col-section {
    background: #f9fafb;
    padding: 48px 0;
    width: 100%;
  }
  .three-col-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 2.2fr 1.4fr 1.4fr; 
    align-items: start;
    gap: 24px;
  }
  .dashboard-column {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    padding: 24px 20px;
    min-height: 415px; 
    box-shadow: 0 1px 3px rgba(0,0,0,0.02);
    min-width: 0;
  }
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
  }
  .section-title { font-size: 16px; font-weight: 800; color: #1a2744; margin: 0; }
  .view-all { font-size: 13px; color: #c9a84c; font-weight: 600; text-decoration: none; }

  /* Spotlight Grid Layer */
  .members-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 12px;
    width: 100%;
  }
  .member-card {
    background: #fff;
    border: 1px solid #f0f2f5;
    border-radius: 10px;
    padding: 16px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-width: 0;
  }
  .member-img {
    width: 58px; height: 58px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 12px;
    border: 2px solid #e5e7eb;
    background-color: #f3f4f6;
  }
  .member-name { font-size: 13px; font-weight: 700; color: #1a2744; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; width: 100%; }
  .member-role { font-size: 11px; color: #6b7280; margin-top: 3px; line-height: 1.3; height: 28px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .member-company { font-size: 11px; color: #4b5563; font-weight: 600; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; width: 100%; margin-top: 2px; }
  .member-city { display: flex; align-items: center; gap: 4px; margin-top: 6px; }
  .member-city span { font-size: 10px; color: #9ca3af; }
  .connect-btn {
    margin-top: 14px;
    padding: 6px 0;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 600;
    color: #1a2744;
    background: #fff;
    cursor: pointer;
    width: 100%;
    transition: all 0.2s;
  }
  .connect-btn:hover {
    background: #f9fafb;
    border-color: #1a2744;
  }

  .carousel-wrap { position: relative; }
  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 28px; height: 28px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    z-index: 10;
  }
  .carousel-btn.left { left: -14px; }
  .carousel-btn.right { right: -14px; }

  /* Agenda Event Rows */
  .events-list { display: flex; flex-direction: column; gap: 12px; }
  .event-card {
    background: #fff;
    border: 1px solid #f0f2f5;
    border-radius: 8px;
    padding: 12px;
    display: flex;
    gap: 12px;
    align-items: center;
  }
  .event-date {
    min-width: 48px;
    background: #1a2744;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px;
    flex-shrink: 0;
  }
  .event-day { font-size: 16px; font-weight: 800; color: #fff; line-height: 1; }
  .event-month { font-size: 9px; color: #c9a84c; font-weight: 700; margin-top: 2px; }
  .event-title { font-size: 12.5px; font-weight: 700; color: #1a2744; margin-bottom: 4px; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }
  .event-meta { display: flex; align-items: center; gap: 4px; margin-bottom: 2px; }
  .event-meta span { font-size: 11px; color: #6b7280; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }
  .register-btn {
    background: #1a2744;
    color: #fff;
    padding: 7px 14px;
    border-radius: 6px;
    font-size: 11.5px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    flex-shrink: 0;
    margin-left: auto;
    transition: background 0.2s;
  }
  .register-btn:hover { background: #111a2e; }

  /* Forums Discussion Rows */
  .discussion-card {
    background: #fff;
    border: 1px solid #f0f2f5;
    border-radius: 8px;
    padding: 12px;
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 10px;
  }
  .discussion-card:last-child { margin-bottom: 0; }
  .discussion-img {
    width: 38px; height: 38px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }
  .discussion-topic { font-size: 12.5px; font-weight: 600; color: #1a2744; line-height: 1.35; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }
  .discussion-meta { font-size: 11px; color: #9ca3af; margin-top: 4px; }
  .discussion-replies { display: flex; align-items: center; gap: 4px; margin-left: auto; flex-shrink: 0; }
  .discussion-replies span { font-size: 11.5px; color: #6b7280; font-weight: 600; }

  /* Bottom CTA Landing Layout */
  .bottom-cta {
    background: #fff;
    padding: 60px 0; 
    border-top: 1px solid #e5e7eb;
  }
  .bottom-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1.8fr 0.8fr 3fr;
    gap: 40px;
    align-items: center;
  }
  .bottom-title { font-size: 24px; font-weight: 800; color: #1a2744; margin-bottom: 12px; line-height: 1.25; }
  .bottom-desc { font-size: 14px; color: #6b7280; line-height: 1.6; margin-bottom: 24px; }
  .btn-dark {
    display: inline-block;
    background: #1a2744;
    color: #fff;
    padding: 12px 26px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    transition: background 0.2s;
  }
  .btn-dark:hover { background: #111a2e; }
  
  .bottom-illustration {
    background: #f3f4f6;
    border-radius: 12px;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bottom-features-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .bottom-feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
  }
  .bottom-feature-icon {
    width: 56px; height: 56px;
    border-radius: 50%;
    background: #f3f4f6;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bottom-feature-title { font-size: 14px; font-weight: 700; color: #1a2744; }
  .bottom-feature-desc { font-size: 12.5px; color: #6b7280; line-height: 1.4; }

  /* RESPONSIVE MEDIA QUERIES */
  @media (max-width: 1200px) {
    .three-col-inner { 
      grid-template-columns: 1fr 1fr; 
    }
    .dashboard-column:first-child { 
      grid-column: span 2; 
    }
    .feature-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .feature-item {
      border-right: none !important;
      border-bottom: 1px solid #e5e7eb;
    }
    .feature-item:nth-child(4), .feature-item:nth-child(5), .feature-item:nth-child(6) {
      border-bottom: none;
    }
    .stats-bar-inner {
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
    .bottom-inner {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .bottom-illustration {
      display: none;
    }
  }

  @media (max-width: 992px) {
    .search-row {
      flex-wrap: wrap;
    }
    .search-input-wrap {
      flex: unset;
      width: 100%;
    }
    .search-select {
      flex: 1;
    }
    .search-btn {
      width: auto;
    }
    .hero-content {
      padding-top: 56px;
    }
    .search-bar-wrap {
      margin-top: -60px;
    }
  }

  @media (max-width: 768px) {
    .three-col-inner { 
      grid-template-columns: 1fr; 
    }
    .dashboard-column:first-child { 
      grid-column: span 1; 
    }
    .members-grid { 
      grid-template-columns: repeat(2, 1fr); 
    }
    .stats-bar-inner {
      grid-template-columns: repeat(2, 1fr);
    }
    .feature-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .feature-item:nth-child(3), .feature-item:nth-child(4) {
      border-bottom: 1px solid #e5e7eb;
    }
    .search-row {
      flex-direction: column;
      gap: 10px;
    }
    .search-select {
      width: 100%;
      flex: unset;
    }
    .search-btn {
      width: 100%;
    }
    .hero-content {
      padding: 64px 20px 88px;
    }
    .hero-title {
      font-size: 28px;
      line-height: 1.3;
    }
    .bottom-features-row {
      grid-template-columns: 1fr;
      gap: 24px;
    }
    .search-bar-wrap {
      margin-left: 16px;
      margin-right: 16px;
      margin-top: -40px;
    }
  }

  @media (max-width: 480px) {
    .feature-grid {
      grid-template-columns: 1fr;
    }
    .feature-item {
      border-bottom: 1px solid #e5e7eb !important;
    }
    .feature-item:last-child {
      border-bottom: none !important;
    }
    .stats-bar-inner {
      grid-template-columns: 1fr;
    }
    .members-grid { 
      grid-template-columns: 1fr; 
    }
    .event-card {
      flex-direction: column;
      align-items: flex-start;
    }
    .register-btn {
      width: 100%;
      text-align: center;
      margin-left: 0;
      margin-top: 4px;
    }
    .hero-content {
      padding: 56px 16px 76px;
    }
    .hero-title {
      font-size: 21px;
      line-height: 1.3;
      letter-spacing: -0.2px;
    }
    .hero-divider {
      margin: 14px 0 16px;
    }
    .hero-tagline-bold {
      font-size: 15.5px;
      margin-bottom: 10px;
    }
    .hero-desc {
      font-size: 13px;
      margin-bottom: 24px;
    }
    .hero-cta-row {
      gap: 10px;
    }
    .btn-hero-primary, .btn-hero-outline {
      padding: 11px 20px;
      font-size: 13px;
    }
  }

  @media (max-width: 360px) {
    .hero-title {
      font-size: 19px;
    }
  }
`;

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            India's Largest Community of <br />
            <span className="hero-gold">Real Estate Professionals</span>
          </h1>
          <div className="hero-divider" />

          <p className="hero-tagline-bold">Connect. Collaborate. Grow.</p>
          <p className="hero-desc">
            Join a trusted network of professionals, exchange knowledge,
            discover opportunities and grow your business together.
          </p>

          <div className="hero-cta-row">
            <a href="/join" className="btn-hero-primary">Join the Community</a>
            <a href="/explore" className="btn-hero-outline">Explore Community</a>
          </div>
        </div>
      </div>
      <div className="search-bar-wrap">
        <div className="search-bar-inner">
          <div className="search-row">
            <div className="search-input-wrap">
              <Search size={18} color="#9ca3af" />
              <input placeholder="Search professionals, companies, groups..." />
            </div>
            <div className="search-select">
              <span>Select Expertise</span>
              <ChevronDown size={15} color="#9ca3af" />
            </div>
            <div className="search-select">
              <span>Select Location</span>
              <ChevronDown size={15} color="#9ca3af" />
            </div>
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureStrip() {
  return (
    <section className="feature-strip">
      <div className="feature-strip-inner">
        <div className="feature-grid">
          {FEATURE_STRIPS.map((item, i) => (
            <div key={i} className="feature-item" style={{ borderRight: i < 5 ? "1px solid #e5e7eb" : "none" }}>
              <item.icon size={32} color="#1a2744" strokeWidth={1.2} style={{ flexShrink: 0, marginTop: "2px" }} />
              <div>
                <div className="feature-label">{item.label}</div>
                <div className="feature-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="stats-bar-inner">
        {STATS_BAR.map((stat, i) => (
          <div key={i} className="stat-block">
            <div className="stat-icon-circle">
              <stat.icon size={20} color="#c9a84c" strokeWidth={1.8} />
            </div>
            <div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function ThreeColumnSection() {
  return (
    <section className="three-col-section">
      <div className="three-col-inner">

        {/* Dashboard Column 1: Spotlight */}
        <div className="dashboard-column">
          <div className="section-header">
            <h2 className="section-title">Community Spotlight</h2>
            <a href="/community" className="view-all">View all</a>
          </div>
          <div className="carousel-wrap">
            <button className="carousel-btn left">
              <ChevronLeft size={14} color="#374151" />
            </button>
            <div className="members-grid">
              {COMMUNITY_MEMBERS.map((m, i) => (
                <div key={i} className="member-card">
                  <img src={m.img} alt={m.name} className="member-img" />
                  <div className="member-name">{m.name}</div>
                  <div className="member-role">{m.role}</div>
                  <div className="member-company">{m.company}</div>
                  <div className="member-city">
                    <MapPin size={10} color="#9ca3af" />
                    <span>{m.city}</span>
                  </div>
                  <button className="connect-btn">Message</button>
                </div>
              ))}
            </div>
            <button className="carousel-btn right">
              <ChevronRight size={14} color="#374151" />
            </button>
          </div>
        </div>

        {/* Dashboard Column 2: Upcoming Events */}
        <div className="dashboard-column">
          <div className="section-header">
            <h2 className="section-title">Upcoming Events</h2>
            <a href="/events" className="view-all">View all</a>
          </div>
          <div className="events-list">
            {EVENTS.map((ev, i) => (
              <div key={i} className="event-card">
                <div className="event-date">
                  <span className="event-day">{ev.day}</span>
                  <span className="event-month">{ev.month}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="event-title">{ev.title}</div>
                  <div className="event-meta">
                    <MapPin size={12} color="#9ca3af" />
                    <span>{ev.venue}</span>
                  </div>
                  <div className="event-meta">
                    <Clock size={12} color="#9ca3af" />
                    <span>{ev.time}</span>
                  </div>
                </div>
                <button className="register-btn">Register</button>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Column 3: Popular Discussions */}
        <div className="dashboard-column">
          <div className="section-header">
            <h2 className="section-title">Popular Discussions</h2>
            <a href="/discussions" className="view-all">View all</a>
          </div>
          <div>
            {DISCUSSIONS.map((d, i) => (
              <div key={i} className="discussion-card">
                <img src={d.img} alt={d.user} className="discussion-img" />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="discussion-topic">{d.topic}</div>
                  <div className="discussion-meta">{d.user} · {d.time}</div>
                </div>
                <div className="discussion-replies">
                  <MessageSquare size={14} color="#9ca3af" />
                  <span>{d.replies}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export function BottomCTASection() {
  return (
    <section className="bottom-cta">
      <div className="bottom-inner">
        <div>
          <h2 className="bottom-title">Create. Connect. Collaborate.</h2>
          <p className="bottom-desc">
            Join groups, participate in discussions, share knowledge and build meaningful professional relationships.
          </p>
          <a href="/explore" className="btn-dark">Explore Community</a>
        </div>
        <div className="bottom-illustration">
          <Users size={52} color="#d1d5db" strokeWidth={1} />
        </div>
        <div className="bottom-features-row">
          {BOTTOM_FEATURES.map((f, i) => (
            <div key={i} className="bottom-feature">
              <div className="bottom-feature-icon">
                <f.icon size={26} color="#1a2744" strokeWidth={1.4} />
              </div>
              <div className="bottom-feature-title">{f.title}</div>
              <div className="bottom-feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <style>{styles}</style>
      <main className="dashboard-main-wrapper" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", minHeight: "100vh" }}>
        <HeroSection />
        <FeatureStrip />
        <StatsBar />
        <ThreeColumnSection />
        <BottomCTASection />
      </main>
    </>
  );
}