"use client";
import { useState } from "react";
import {
  Users, Building2, BarChart3,
  TrendingUp, Handshake, ArrowRight,
  Search, ChevronDown, Bell, Award, BookOpen,
  MessageSquare, MapPin, Clock, ChevronLeft, ChevronRight,
  Network, Menu, X
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
  { value: "850+", label: "Industry Experts", icon: Users },
  { value: "150+", label: "Active Groups", icon: Network },
  { value: "50+", label: "Events Every Year", icon: BarChart3 },
];

const COMMUNITY_MEMBERS = [
  { name: "Rohit Mehta", role: "Director – Investments", company: "Blackstone", city: "Mumbai", img: "/" },
  { name: "Ananya Sharma", role: "Head – Workplace Solutions, India", company: "JLL", city: "Bengaluru", img: "/" },
  { name: "Vikram Kapoor", role: "CEO", company: "Assetz Property Group", city: "Mumbai", img: "/" },
  { name: "Neha Iyer", role: "Senior Architect", company: "Morphogenesis", city: "Delhi", img: "/" },
];

const EVENTS = [
  { day: "18", month: "JUN", title: "REPC Annual Summit 2024", venue: "Jio World Convention Centre, Mumbai", time: "09:00 AM – 06:00 PM IST" },
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

// ─── RESPONSIVE STYLES ────────────────────────────────────────
const styles = `
  * { box-sizing: border-box; }

  .hero-section {
    position: relative;
    background: #0d1e35;
    overflow: hidden;
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
    background: linear-gradient(to right, #0d1e35 38%, rgba(13,30,53,0.85) 55%, rgba(13,30,53,0.35) 75%, rgba(13,30,53,0.1) 100%);
  }
 .hero-content {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 100px 20px 90px;
  min-height: 420px;
  display: flex;
  align-items: center;
}
  .hero-text { max-width: 540px; }
 .hero-title {
  font-size: clamp(20px, 2.5vw, 36px);
  font-weight: 800;
  color: #fff;
  line-height: 1.3;
  margin: 0;
}
  .hero-gold { color: #c9a84c; }
  .hero-divider {
    width: 56px; height: 3px;
    background: #c9a84c;
    border-radius: 2px;
    margin: 14px 0 18px;
  }
  .hero-subtitle {
    color: #e5e7eb;
    font-size: 14px;
    line-height: 1.7;
    margin: 0 0 8px;
    font-weight: 600;
  }
  .hero-desc {
    color: #d1d5db;
    font-size: 13.5px;
    line-height: 1.7;
    margin: 0 0 28px;
  }
  .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
  .btn-primary {
    background: #c9a84c;
    color: #fff;
    padding: 11px 24px;
    border-radius: 6px;
    font-size: 13.5px;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
  }
  .btn-outline {
    border: 1.5px solid rgba(255,255,255,0.6);
    color: #fff;
    padding: 11px 24px;
    border-radius: 6px;
    font-size: 13.5px;
    font-weight: 600;
    text-decoration: none;
    background: transparent;
    white-space: nowrap;
  }

  /* Search Bar */
  .search-bar-wrap {
    position: relative;
    z-index: 2;
    background: rgba(10,20,38,0.92);
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  .search-bar-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 16px 20px;
  }
  .search-row {
    display: flex;
    gap: 8px;
    align-items: center;
    flex-wrap: wrap;
  }
  .search-input-wrap {
    flex: 2;
    min-width: 180px;
    display: flex;
    align-items: center;
    gap: 10px;
    background: #fff;
    border-radius: 6px;
    padding: 0 14px;
    height: 46px;
  }
  .search-input-wrap input {
    border: none;
    outline: none;
    flex: 1;
    font-size: 13px;
    color: #374151;
    min-width: 0;
  }
  .search-select {
    flex: 1;
    min-width: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 6px;
    padding: 0 14px;
    height: 46px;
    cursor: pointer;
  }
  .search-select span { font-size: 13px; color: #9ca3af; }
  .search-btn {
    background: #c9a84c;
    color: #fff;
    padding: 0 28px;
    height: 46px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    white-space: nowrap;
  }

  /* Feature Strip */
  .feature-strip {
    background: #fff;
    border-bottom: 1px solid #e5e7eb;
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
    align-items: center;
    gap: 12px;
    padding: 18px 14px;
  }
  .feature-label { font-size: 13px; font-weight: 700; color: #1a2744; }
  .feature-desc { font-size: 11px; color: #6b7280; line-height: 1.4; margin-top: 2px; }

  /* Stats Bar */
  .stats-bar { background: #0d1e35; }
  .stats-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
  .stat-item {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 22px 16px;
  }
  .stat-value { font-size: 22px; font-weight: 800; color: #c9a84c; line-height: 1; }
  .stat-label { font-size: 11px; color: #9ca3af; margin-top: 3px; }

  /* Three Column */
  .three-col-section {
    background: #f9fafb;
    padding: 40px 0;
  }
  .three-col-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .section-title { font-size: 17px; font-weight: 800; color: #1a2744; margin: 0; }
  .view-all { font-size: 12px; color: #c9a84c; font-weight: 600; text-decoration: none; }

  /* Members Grid */
  .members-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }
  .member-card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 14px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .member-img {
    width: 60px; height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 8px;
    border: 2px solid #e5e7eb;
  }
  .member-name { font-size: 12.5px; font-weight: 700; color: #1a2744; }
  .member-role { font-size: 10.5px; color: #6b7280; margin-top: 2px; line-height: 1.3; }
  .member-company { font-size: 10.5px; color: #6b7280; }
  .member-city { display: flex; align-items: center; gap: 3px; margin-top: 4px; }
  .member-city span { font-size: 10px; color: #9ca3af; }
  .connect-btn {
    margin-top: 10px;
    padding: 5px 20px;
    border: 1px solid #d1d5db;
    border-radius: 5px;
    font-size: 11px;
    font-weight: 600;
    color: #1a2744;
    background: #fff;
    cursor: pointer;
    width: 100%;
  }

  /* Events */
  .events-list { display: flex; flex-direction: column; gap: 14px; }
  .event-card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 14px 16px;
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }
  .event-date {
    min-width: 52px;
    background: #1a2744;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 10px;
    flex-shrink: 0;
  }
  .event-day { font-size: 20px; font-weight: 800; color: #fff; line-height: 1; }
  .event-month { font-size: 10px; color: #c9a84c; font-weight: 700; margin-top: 2px; }
  .event-title { font-size: 13px; font-weight: 700; color: #1a2744; margin-bottom: 5px; }
  .event-meta { display: flex; align-items: center; gap: 4px; margin-bottom: 3px; }
  .event-meta span { font-size: 11px; color: #6b7280; }
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
    align-self: center;
  }

  /* Discussions */
  .discussion-card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 14px 16px;
    display: flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 10px;
  }
  .discussion-img {
    width: 40px; height: 40px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }
  .discussion-topic { font-size: 13px; font-weight: 600; color: #1a2744; line-height: 1.35; }
  .discussion-meta { font-size: 11px; color: #9ca3af; margin-top: 4px; }
  .discussion-replies { display: flex; align-items: center; gap: 4px; flex-shrink: 0; }
  .discussion-replies span { font-size: 12px; color: #6b7280; font-weight: 600; }

  /* Bottom CTA */
  .bottom-cta {
    background: #fff;
    padding: 48px 0;
    border-top: 1px solid #e5e7eb;
  }
  .bottom-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1.5fr 0.8fr 1fr 1fr 1fr;
    gap: 32px;
    align-items: center;
  }
  .bottom-title { font-size: 26px; font-weight: 800; color: #1a2744; margin: 0 0 10px; line-height: 1.25; }
  .bottom-desc { font-size: 13px; color: #6b7280; line-height: 1.6; margin: 0 0 20px; }
  .btn-dark {
    display: inline-block;
    background: #1a2744;
    color: #fff;
    padding: 10px 22px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
  }
  .bottom-illustration {
    background: #f3f4f6;
    border-radius: 12px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bottom-feature {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
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
  .bottom-feature-desc { font-size: 12px; color: #6b7280; line-height: 1.4; }

  /* Carousel Arrows */
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
    box-shadow: 0 1px 4px rgba(0,0,0,0.1);
    z-index: 1;
  }
  .carousel-btn.left { left: -14px; }
  .carousel-btn.right { right: -14px; }

  /* ─── TABLET (768px) ─── */
  @media (max-width: 1024px) {
    .feature-grid { grid-template-columns: repeat(3, 1fr); }
    .feature-item:nth-child(3) { border-right: none; }
    .stats-grid { grid-template-columns: repeat(3, 1fr); }
    .stat-item:nth-child(3) { border-right: none !important; }
    .three-col-inner { grid-template-columns: 1fr 1fr; }
    .bottom-inner { grid-template-columns: 1fr 1fr; }
    .bottom-illustration { display: none; }
  }

  /* ─── MOBILE (640px) ─── */
  @media (max-width: 640px) {
  .hero-content { padding: 40px 16px 36px; }
  .hero-title { font-size: clamp(18px, 5.5vw, 26px); }
  .hero-text { max-width: 100%; }
  .hero-desc { display: none; }
    .hero-btns { flex-direction: column; gap: 10px; }
    .btn-primary, .btn-outline { text-align: center; }

    .search-row { flex-direction: column; }
    .search-input-wrap, .search-select { width: 100%; flex: none; min-width: 0; }
    .search-btn { width: 100%; }

    .feature-grid { grid-template-columns: 1fr 1fr; }
    .feature-item { border-right: none !important; border-bottom: 1px solid #e5e7eb; }
    .feature-item:nth-last-child(-n+2) { border-bottom: none; }

    .stats-grid { grid-template-columns: 1fr 1fr; }
    .stat-item { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.08); padding: 16px 12px; }
    .stat-item:nth-last-child(-n+2) { border-bottom: none; }
    .stat-value { font-size: 18px; }

    .three-col-inner { grid-template-columns: 1fr; gap: 32px; }
    .carousel-btn.left { left: -8px; }
    .carousel-btn.right { right: -8px; }

    .event-card { flex-wrap: wrap; }
    .register-btn { width: 100%; text-align: center; margin-top: 4px; }

    .bottom-inner {
      grid-template-columns: 1fr;
      gap: 24px;
    }
    .bottom-illustration { display: none; }
    .bottom-features-row {
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .bottom-title { font-size: 20px; }
  }

  @media (max-width: 400px) {
    .members-grid { grid-template-columns: 1fr; }
    .bottom-features-row { grid-template-columns: 1fr !important; }
  }
`;

// ─── HERO ─────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            India's Largest Community of <span className="hero-gold">Real Estate Professionals</span>
          </h1>
          <div className="hero-divider" />
          <p className="hero-subtitle">Connect. Collaborate. Grow.</p>
          <p className="hero-desc">
            Join a trusted network of professionals, exchange knowledge,<br />
            discover opportunities and grow your business together.
          </p>
          <div className="hero-btns">
            <a href="/join" className="btn-primary">Join the Community</a>
            <a href="/explore" className="btn-outline">Explore Community</a>
          </div>
        </div>
      </div>
      <div className="search-bar-wrap">
        <div className="search-bar-inner">
          <div className="search-row">
            <div className="search-input-wrap">
              <Search size={16} color="#9ca3af" />
              <input placeholder="Search professionals, companies, groups..." />
            </div>
            <div className="search-select">
              <span>Select Expertise</span>
              <ChevronDown size={14} color="#9ca3af" />
            </div>
            <div className="search-select">
              <span>Select Location</span>
              <ChevronDown size={14} color="#9ca3af" />
            </div>
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FEATURE STRIP ────────────────────────────────────────────
function FeatureStrip() {
  return (
    <section className="feature-strip">
      <div className="feature-strip-inner">
        <div className="feature-grid">
          {FEATURE_STRIPS.map((item, i) => (
            <div key={i} className="feature-item" style={{ borderRight: i < 5 ? "1px solid #e5e7eb" : "none" }}>
              <item.icon size={32} color="#1a2744" strokeWidth={1.2} style={{ flexShrink: 0 }} />
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

// ─── STATS BAR ───────────────────────────────────────────────
function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="stats-inner">
        <div className="stats-grid">
          {STATS_BAR.map((stat, i) => (
            <div key={i} className="stat-item" style={{ borderRight: i < 5 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
              <stat.icon size={32} color="#c9a84c" strokeWidth={1.2} style={{ flexShrink: 0 }} />
              <div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── THREE COLUMN ─────────────────────────────────────────────
function ThreeColumnSection() {
  return (
    <section className="three-col-section">
      <div className="three-col-inner">

        {/* Community Spotlight */}
        <div>
          <div className="section-header">
            <h2 className="section-title">Community Spotlight</h2>
            <a href="/community" className="view-all">View all</a>
          </div>
          <div className="carousel-wrap">
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
                  <button className="connect-btn">Connect</button>
                </div>
              ))}
            </div>
            <button className="carousel-btn left">
              <ChevronLeft size={14} color="#374151" />
            </button>
            <button className="carousel-btn right">
              <ChevronRight size={14} color="#374151" />
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
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
                <div style={{ flex: 1 }}>
                  <div className="event-title">{ev.title}</div>
                  <div className="event-meta">
                    <MapPin size={11} color="#9ca3af" />
                    <span>{ev.venue}</span>
                  </div>
                  <div className="event-meta">
                    <Clock size={11} color="#9ca3af" />
                    <span>{ev.time}</span>
                  </div>
                </div>
                <button className="register-btn">Register</button>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Discussions */}
        <div>
          <div className="section-header">
            <h2 className="section-title">Popular Discussions</h2>
            <a href="/discussions" className="view-all">View all</a>
          </div>
          <div>
            {DISCUSSIONS.map((d, i) => (
              <div key={i} className="discussion-card">
                <img src={d.img} alt={d.user} className="discussion-img" />
                <div style={{ flex: 1 }}>
                  <div className="discussion-topic">{d.topic}</div>
                  <div className="discussion-meta">{d.user} · {d.time}</div>
                </div>
                <div className="discussion-replies">
                  <MessageSquare size={13} color="#9ca3af" />
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

// ─── BOTTOM CTA ───────────────────────────────────────────────
function BottomCTASection() {
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
          <Users size={48} color="#d1d5db" strokeWidth={1} />
        </div>
        <div className="bottom-features-row" style={{ display: "contents" }}>
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

// ─── PAGE ─────────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      <style>{styles}</style>
      <main style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", minHeight: "100vh" }}>
        <HeroSection />
        <FeatureStrip />
        <StatsBar />
        <ThreeColumnSection />
        <BottomCTASection />
      </main>
    </>
  );
}