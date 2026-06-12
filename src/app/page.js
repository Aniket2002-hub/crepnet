"use client";
import { useState } from "react";
import {
  Users, Building2, BarChart3, Globe2,
  TrendingUp, Handshake, ArrowRight,
  Search, ChevronDown, Bell, Award, BookOpen,
  MessageSquare, MapPin, Clock, ChevronLeft, ChevronRight,
  Network
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
  { day: "18", month: "JUN", title: "RPEC Annual Summit 2024", venue: "Jio World Convention Centre, Mumbai", time: "09:00 AM – 06:00 PM IST" },
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


// ─── HERO SECTION ────────────────────────────────────────────
function HeroSection() {
  return (
    <section style={{ position: "relative", background: "#0d1e35", overflow: "hidden" }}>
      {/* Background: professionals photo on right */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=85')",
        backgroundSize: "cover", backgroundPosition: "65% center",
      }} />
      {/* Gradient overlay — dark left, transparent right */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to right, #0d1e35 38%, rgba(13,30,53,0.85) 55%, rgba(13,30,53,0.35) 75%, rgba(13,30,53,0.1) 100%)",
      }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "70px 28px 60px" }}>
        <div style={{ maxWidth: "520px" }}>
          <h1 style={{ fontSize: "clamp(28px,3.8vw,46px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, margin: 0 }}>
            India's Largest Community of<br />
            <span style={{ color: "#c9a84c" }}>Real Estate Professionals</span>
          </h1>
          <div style={{ width: "56px", height: "3px", background: "#c9a84c", borderRadius: "2px", margin: "14px 0 18px" }} />
          <p style={{ color: "#e5e7eb", fontSize: "14px", lineHeight: 1.7, margin: "0 0 8px", fontWeight: 600 }}>
            Connect. Collaborate. Grow.
          </p>
          <p style={{ color: "#d1d5db", fontSize: "13.5px", lineHeight: 1.7, margin: "0 0 28px" }}>
            Join a trusted network of professionals, exchange knowledge,<br />
            discover opportunities and grow your business together.
          </p>
          <div style={{ display: "flex", gap: "12px" }}>
            <a href="/join" style={{
              background: "#c9a84c", color: "#fff", padding: "11px 24px",
              borderRadius: "6px", fontSize: "13.5px", fontWeight: 700, textDecoration: "none"
            }}>Join the Community</a>
            <a href="/explore" style={{
              border: "1.5px solid rgba(255,255,255,0.6)", color: "#fff", padding: "11px 24px",
              borderRadius: "6px", fontSize: "13.5px", fontWeight: 600, textDecoration: "none",
              background: "transparent"
            }}>Explore Community</a>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ position: "relative", zIndex: 2, background: "rgba(10,20,38,0.92)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "16px 28px" }}>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div style={{
              flex: 2, display: "flex", alignItems: "center", gap: "10px",
              background: "#fff", borderRadius: "6px", padding: "0 14px", height: "46px"
            }}>
              <Search size={16} color="#9ca3af" />
              <input placeholder="Search professionals, companies, groups..." style={{
                border: "none", outline: "none", flex: 1, fontSize: "13px", color: "#374151"
              }} />
            </div>
            <div style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between",
              background: "#fff", borderRadius: "6px", padding: "0 14px", height: "46px", cursor: "pointer"
            }}>
              <span style={{ fontSize: "13px", color: "#9ca3af" }}>Select Expertise</span>
              <ChevronDown size={14} color="#9ca3af" />
            </div>
            <div style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between",
              background: "#fff", borderRadius: "6px", padding: "0 14px", height: "46px", cursor: "pointer"
            }}>
              <span style={{ fontSize: "13px", color: "#9ca3af" }}>Select Location</span>
              <ChevronDown size={14} color="#9ca3af" />
            </div>
            <button style={{
              background: "#c9a84c", color: "#fff", padding: "0 28px", height: "46px",
              borderRadius: "6px", fontSize: "14px", fontWeight: 700, border: "none", cursor: "pointer"
            }}>Search</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FEATURE STRIP ────────────────────────────────────────────
function FeatureStrip() {
  return (
    <section style={{ background: "#fff", borderBottom: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
          {FEATURE_STRIPS.map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: "12px",
              padding: "20px 16px", borderRight: i < 5 ? "1px solid #e5e7eb" : "none"
            }}>
              <item.icon size={36} color="#1a2744" strokeWidth={1.2} style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a2744" }}>{item.label}</div>
                <div style={{ fontSize: "11px", color: "#6b7280", lineHeight: 1.4, marginTop: "2px" }}>{item.desc}</div>
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
    <section style={{ background: "#0d1e35" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
          {STATS_BAR.map((stat, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: "14px",
              padding: "22px 20px", borderRight: i < 5 ? "1px solid rgba(255,255,255,0.08)" : "none"
            }}>
              <stat.icon size={36} color="#c9a84c" strokeWidth={1.2} style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: "22px", fontWeight: 800, color: "#c9a84c", lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: "11px", color: "#9ca3af", marginTop: "3px" }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── THREE-COLUMN SECTION ────────────────────────────────────
function ThreeColumnSection() {
  return (
    <section style={{ background: "#f9fafb", padding: "40px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px" }}>

        {/* Community Spotlight */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h2 style={{ fontSize: "17px", fontWeight: 800, color: "#1a2744", margin: 0 }}>Community Spotlight</h2>
            <a href="/community" style={{ fontSize: "12px", color: "#c9a84c", fontWeight: 600, textDecoration: "none" }}>View all</a>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {COMMUNITY_MEMBERS.map((m, i) => (
                <div key={i} style={{
                  background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px",
                  padding: "14px 12px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center"
                }}>
                  <img src={m.img} alt={m.name} style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", marginBottom: "8px", border: "2px solid #e5e7eb" }} />
                  <div style={{ fontSize: "12.5px", fontWeight: 700, color: "#1a2744" }}>{m.name}</div>
                  <div style={{ fontSize: "10.5px", color: "#6b7280", marginTop: "2px", lineHeight: 1.3 }}>{m.role}</div>
                  <div style={{ fontSize: "10.5px", color: "#6b7280" }}>{m.company}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "3px", marginTop: "4px" }}>
                    <MapPin size={10} color="#9ca3af" />
                    <span style={{ fontSize: "10px", color: "#9ca3af" }}>{m.city}</span>
                  </div>
                  <button style={{
                    marginTop: "10px", padding: "5px 20px", border: "1px solid #d1d5db",
                    borderRadius: "5px", fontSize: "11px", fontWeight: 600, color: "#1a2744",
                    background: "#fff", cursor: "pointer", width: "100%"
                  }}>Connect</button>
                </div>
              ))}
            </div>
            {/* Prev/Next arrows */}
            <button style={{
              position: "absolute", left: "-14px", top: "50%", transform: "translateY(-50%)",
              width: "28px", height: "28px", borderRadius: "50%", background: "#fff",
              border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.1)"
            }}>
              <ChevronLeft size={14} color="#374151" />
            </button>
            <button style={{
              position: "absolute", right: "-14px", top: "50%", transform: "translateY(-50%)",
              width: "28px", height: "28px", borderRadius: "50%", background: "#fff",
              border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", boxShadow: "0 1px 4px rgba(0,0,0,0.1)"
            }}>
              <ChevronRight size={14} color="#374151" />
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h2 style={{ fontSize: "17px", fontWeight: 800, color: "#1a2744", margin: 0 }}>Upcoming Events</h2>
            <a href="/events" style={{ fontSize: "12px", color: "#c9a84c", fontWeight: 600, textDecoration: "none" }}>View all</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {EVENTS.map((ev, i) => (
              <div key={i} style={{
                background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px",
                padding: "14px 16px", display: "flex", gap: "14px", alignItems: "flex-start"
              }}>
                <div style={{
                  minWidth: "52px", background: "#1a2744", borderRadius: "8px",
                  display: "flex", flexDirection: "column", alignItems: "center", padding: "8px 10px"
                }}>
                  <span style={{ fontSize: "20px", fontWeight: 800, color: "#fff", lineHeight: 1 }}>{ev.day}</span>
                  <span style={{ fontSize: "10px", color: "#c9a84c", fontWeight: 700, marginTop: "2px" }}>{ev.month}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a2744", marginBottom: "5px" }}>{ev.title}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "3px" }}>
                    <MapPin size={11} color="#9ca3af" />
                    <span style={{ fontSize: "11px", color: "#6b7280" }}>{ev.venue}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Clock size={11} color="#9ca3af" />
                    <span style={{ fontSize: "11px", color: "#6b7280" }}>{ev.time}</span>
                  </div>
                </div>
                <button style={{
                  background: "#1a2744", color: "#fff", padding: "7px 14px", borderRadius: "6px",
                  fontSize: "11.5px", fontWeight: 700, border: "none", cursor: "pointer", flexShrink: 0
                }}>Register</button>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Discussions */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h2 style={{ fontSize: "17px", fontWeight: 800, color: "#1a2744", margin: 0 }}>Popular Discussions</h2>
            <a href="/discussions" style={{ fontSize: "12px", color: "#c9a84c", fontWeight: 600, textDecoration: "none" }}>View all</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {DISCUSSIONS.map((d, i) => (
              <div key={i} style={{
                background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px",
                padding: "14px 16px", display: "flex", gap: "12px", alignItems: "center",
                marginBottom: "10px"
              }}>
                <img src={d.img} alt={d.user} style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#1a2744", lineHeight: 1.35 }}>{d.topic}</div>
                  <div style={{ fontSize: "11px", color: "#9ca3af", marginTop: "4px" }}>{d.user} · {d.time}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", flexShrink: 0 }}>
                  <MessageSquare size={13} color="#9ca3af" />
                  <span style={{ fontSize: "12px", color: "#6b7280", fontWeight: 600 }}>{d.replies}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── BOTTOM CTA SECTION ──────────────────────────────────────
function BottomCTASection() {
  return (
    <section style={{ background: "#fff", padding: "48px 0", borderTop: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1.5fr 0.8fr 1fr 1fr 1fr", gap: "32px", alignItems: "center" }}>

        {/* Left text */}
        <div>
          <h2 style={{ fontSize: "26px", fontWeight: 800, color: "#1a2744", margin: "0 0 10px", lineHeight: 1.25 }}>
            Create. Connect. Collaborate.
          </h2>
          <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: 1.6, margin: "0 0 20px" }}>
            Join groups, participate in discussions, share knowledge<br />
            and build meaningful professional relationships.
          </p>
          <a href="/explore" style={{
            display: "inline-block", background: "#1a2744", color: "#fff",
            padding: "10px 22px", borderRadius: "6px", fontSize: "13px", fontWeight: 700,
            textDecoration: "none"
          }}>Explore Community</a>
        </div>

        {/* Illustration placeholder */}
        <div style={{
          background: "#f3f4f6", borderRadius: "12px", height: "130px",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <Users size={48} color="#d1d5db" strokeWidth={1} />
        </div>

        {/* Feature blocks */}
        {BOTTOM_FEATURES.map((f, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "10px" }}>
            <div style={{
              width: "56px", height: "56px", borderRadius: "50%", background: "#f3f4f6",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <f.icon size={26} color="#1a2744" strokeWidth={1.4} />
            </div>
            <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a2744" }}>{f.title}</div>
            <div style={{ fontSize: "12px", color: "#6b7280", lineHeight: 1.4 }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────
export default function Page() {
  return (
    <main style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", minHeight: "100vh" }}>
      <HeroSection />

      <FeatureStrip />
      <StatsBar />
      <ThreeColumnSection />
      <BottomCTASection />
    </main>
  );
}