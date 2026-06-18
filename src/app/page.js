"use client";
import { useState } from "react";
import {
  Users, Building2, BarChart3,
  TrendingUp, Handshake, ArrowRight,
  Search, ChevronDown, Bell, Award, BookOpen,
  MessageSquare, MapPin, Clock, ChevronLeft, ChevronRight,
  Network, Menu, X, Calendar
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
  { value: "25,000+", label: "Total Professionals", icon: Users },
  { value: "1,800+", label: "Articles", icon: BookOpen },
  { value: "500+", label: "Events", icon: Calendar },
  { value: "3,500+", label: "Total Companies", icon: Building2 },
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

const styles = `
  .dashboard-main-wrapper * { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0; 
  }

  .dashboard-main-wrapper {
    overflow-x: hidden;
  }

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
    background: linear-gradient(to right, #0d1e35 45%, rgba(13,30,53,0.9) 65%, rgba(13,30,53,0.4) 85%, rgba(13,30,53,0.15) 100%);
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px 20px 20px; 
    min-height: auto;
    display: flex;
    align-items: center;
  }
  .hero-text { max-width: 750px; width: 100%; }
  .hero-title {
    font-size: clamp(24px, 3vw, 36px);
    font-weight: 800;
    color: #fff;
    line-height: 1.25;
  }
  .hero-gold { color: #c9a84c; }
  .hero-divider {
    width: 48px; height: 3px;
    background: #c9a84c;
    border-radius: 2px;
    margin: 12px 0 16px;
  }
  .hero-desc {
    color: #d1d5db;
    font-size: 14.5px;
    line-height: 1.6;
    margin-bottom: 24px;
    max-width: 600px;
  }

  .hero-stats-row {
    display: flex;
    gap: 36px;
    flex-wrap: wrap;
    margin-bottom: 12px;
  }
  .hero-stat-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .hero-stat-value {
    font-size: 22px;
    font-weight: 800;
    color: #fff;
    line-height: 1;
  }
  .hero-stat-label {
    font-size: 12.5px;
    color: #9ca3af;
    margin-top: 3px;
  }

  /* Search Engine Wrapper Layout */
  .search-bar-wrap {
    position: relative;
    z-index: 2;
    background: rgba(10,20,38,0.94);
    border-top: 1px solid rgba(255,255,255,0.06);
  }
  .search-bar-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 14px 20px;
  }
  .search-row {
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
  }
  .search-input-wrap {
    flex: 2.2;
    min-width: 200px;
    display: flex;
    align-items: center;
    gap: 12px;
    background: #fff;
    border-radius: 6px;
    padding: 0 16px;
    height: 46px;
  }
  .search-input-wrap input {
    border: none;
    outline: none;
    flex: 1;
    font-size: 13.5px;
    color: #111827;
    min-width: 0;
  }
  .search-select {
    flex: 1;
    min-width: 140px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 6px;
    padding: 0 16px;
    height: 46px;
    cursor: pointer;
  }
  .search-select span { font-size: 13.5px; color: #6b7280; }
  .search-btn {
    background: #c9a84c;
    color: #fff;
    padding: 0 32px;
    height: 46px;
    border-radius: 6px;
    font-size: 14.5px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    white-space: nowrap;
  }

  /* Core Feature Stripe Element */
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
    padding: 16px 14px;
  }
  .feature-label { font-size: 13px; font-weight: 700; color: #1a2744; }
  .feature-desc { font-size: 11px; color: #6b7280; line-height: 1.4; margin-top: 2px; }

  /* Three Column Dashboard Section */
  .three-col-section {
    background: #f9fafb;
    padding: 40px 0;
    width: 100%;
    overflow: hidden;
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
    padding: 24px 16px;
    min-height: 415px; 
    box-shadow: 0 1px 3px rgba(0,0,0,0.01);
    min-width: 0;
  }
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
  }
  .section-title { font-size: 16px; font-weight: 800; color: #1a2744; margin: 0; }
  .view-all { font-size: 12.5px; color: #c9a84c; font-weight: 600; text-decoration: none; }

  /* Spotlight Grid Layer */
  .members-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 8px;
    width: 100%;
  }
  .member-card {
    background: #fff;
    border: 1px solid #f0f2f5;
    border-radius: 10px;
    padding: 16px 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-width: 0;
  }
  .member-img {
    width: 56px; height: 56px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
    border: 2px solid #e5e7eb;
    background-color: #f3f4f6;
  }
  .member-name { font-size: 12px; font-weight: 700; color: #1a2744; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; width: 100%; }
  .member-role { font-size: 9.5px; color: #6b7280; margin-top: 3px; line-height: 1.3; height: 26px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
  .member-company { font-size: 9.5px; color: #6b7280; font-weight: 500; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; width: 100%; }
  .member-city { display: flex; align-items: center; gap: 3px; margin-top: 5px; }
  .member-city span { font-size: 9px; color: #9ca3af; }
  .connect-btn {
    margin-top: 12px;
    padding: 5px 0;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 10.5px;
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
    width: 24px; height: 24px;
    border-radius: 50%;
    background: #fff;
    border: 1px solid #e5e7eb;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 1px 4px rgba(0,0,0,0.08);
    z-index: 10;
  }
  .carousel-btn.left { left: -10px; }
  .carousel-btn.right { right: -10px; }

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
    min-width: 46px;
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
  .event-title { font-size: 12px; font-weight: 700; color: #1a2744; margin-bottom: 3px; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }
  .event-meta { display: flex; align-items: center; gap: 4px; margin-bottom: 2px; }
  .event-meta span { font-size: 10.5px; color: #6b7280; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }
  .register-btn {
    background: #1a2744;
    color: #fff;
    padding: 6px 12px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    flex-shrink: 0;
    margin-left: auto;
  }

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
    width: 36px; height: 36px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0;
  }
  .discussion-topic { font-size: 12px; font-weight: 600; color: #1a2744; line-height: 1.3; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }
  .discussion-meta { font-size: 10.5px; color: #9ca3af; margin-top: 3px; }
  .discussion-replies { display: flex; align-items: center; gap: 4px; margin-left: auto; flex-shrink: 0; }
  .discussion-replies span { font-size: 11px; color: #6b7280; font-weight: 600; }

  /* Bottom CTA Landing Layout */
  .bottom-cta {
    background: #fff;
    padding: 10px 0 55px; 
    border-top: 1px solid #e5e7eb;
  }
  .bottom-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: 1.6fr 0.7fr 1fr 1fr 1fr;
    gap: 32px;
    align-items: center;
  }
  .bottom-title { font-size: 26px; font-weight: 800; color: #1a2744; margin: 0 0 8px; line-height: 1.25; }
  .bottom-desc { font-size: 13.5px; color: #6b7280; line-height: 1.6; margin: 0 0 16px; }
  .btn-dark {
    display: inline-block;
    background: #1a2744;
    color: #fff;
    padding: 11px 24px;
    border-radius: 6px;
    font-size: 13.5px;
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

  /* MEDIA QUERIES */
  @media (max-width: 1240px) {
    .three-col-inner { grid-template-columns: 1.4fr 1fr; }
    .dashboard-column:first-child { grid-column: span 2; }
    .members-grid { grid-template-columns: repeat(4, 1fr); }
  }

  @media (max-width: 960px) {
    .three-col-inner { grid-template-columns: 1fr; }
    .dashboard-column:first-child { grid-column: span 1; }
    .feature-grid { grid-template-columns: repeat(3, 1fr); }
    .bottom-inner { grid-template-columns: 1fr 1fr; }
    .bottom-features-row { display: grid !important; grid-template-columns: repeat(3, 1fr); gap: 16px; grid-column: span 2; }
  }

  @media (max-width: 768px) {
    .members-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .hero-stats-row { gap: 24px; }
  }

  @media (max-width: 640px) {
    .hero-content { padding: 35px 16px 15px; }
    .hero-title { font-size: clamp(20px, 6vw, 26px); }
    .hero-text { max-width: 100%; }

    .search-row { flex-direction: column; gap: 8px; }
    .search-input-wrap, .search-select { width: 100%; flex: none; min-width: 0; }
    .search-btn { width: 100%; }

    .feature-grid { grid-template-columns: 1fr 1fr; }
    .feature-item { border-right: none !important; border-bottom: 1px solid #e5e7eb; padding: 16px 10px; }
    .feature-item:nth-last-child(-n+2) { border-bottom: none; }

    .event-card { flex-wrap: wrap; gap: 10px; }
    .register-btn { width: 100%; text-align: center; margin-top: 4px; }

    .bottom-inner { grid-template-columns: 1fr; gap: 28px; }
    .bottom-features-row { grid-template-columns: 1fr 1fr; grid-column: span 1; }
    .bottom-title { font-size: 20px; }
    .hero-stats-row { gap: 16px; }
    .hero-stat-value { font-size: 20px; }
    .hero-stat-label { font-size: 12px; }
  }

  @media (max-width: 440px) {
    .members-grid { grid-template-columns: 1fr; }
    .bottom-features-row { grid-template-columns: 1fr !important; }
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
          
          <p className="hero-desc">
            Join a trusted network of professionals, exchange knowledge,<br />
            discover opportunities and grow your business together.
          </p>

          <div className="hero-stats-row">
            {STATS_BAR.map((stat, i) => (
              <div key={i} className="hero-stat-item">
                <stat.icon size={24} color="#c9a84c" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                <div>
                  <div className="hero-stat-value">{stat.value}</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
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

export function FeatureStrip() {
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
                    <MapPin size={9} color="#9ca3af" />
                    <span>{m.city}</span>
                  </div>
                  <button className="connect-btn">Connect</button>
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

export default function Page() {
  return (
    <>
      <style>{styles}</style>
      <main className="dashboard-main-wrapper" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", minHeight: "100vh" }}>
        <HeroSection />
        <FeatureStrip />
        <ThreeColumnSection />
        <BottomCTASection />
      </main>
    </>
  );
}