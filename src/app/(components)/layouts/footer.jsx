"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Handshake, Users, Heart } from "lucide-react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const socialLinks = [
  { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { Icon: FaXTwitter, href: "#", label: "X / Twitter" },
  { Icon: FaFacebookF, href: "#", label: "Facebook" },
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaYoutube, href: "#", label: "YouTube" },
];

const navLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "About REPC", href: "/about-us" },
      { label: "Membership", href: "#" },
      { label: "Events", href: "/events" },
      { label: "Knowledge Hub", href: "/knowledge-hub" },
      { label: "Community Guidelines", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Articles", href: "#" },
      { label: "Market News", href: "#" },
      { label: "Research Reports", href: "#" },
      { label: "Podcasts", href: "#" },
      { label: "Career Center", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-link {
          position: relative;
          display: inline-block;
          color: rgba(255,255,255,0.72);
          transition: color 0.25s ease;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0%;
          height: 1px;
          background: #d6a44a;
          transition: width 0.3s ease;
        }
        .footer-link:hover {
          color: #d6a44a;
        }
        .footer-link:hover::after {
          width: 100%;
        }

        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.75);
          transition: background 0.25s, border-color 0.25s, color 0.25s, transform 0.2s;
        }
        .social-btn:hover {
          background: rgba(214,164,74,0.15);
          border-color: #d6a44a;
          color: #d6a44a;
          transform: translateY(-3px);
        }

        .partner-card {
          border: 1px solid rgba(44,77,121,0.8);
          border-radius: 16px;
          background: linear-gradient(145deg, #071d3f 0%, #0a2248 100%);
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 12px;
          transition: box-shadow 0.3s, border-color 0.3s;
          position: relative;
          overflow: hidden;
        }
        .partner-card::before {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(214,164,74,0.07) 0%, transparent 70%);
          pointer-events: none;
        }
        .partner-card:hover {
          box-shadow: 0 0 28px rgba(214,164,74,0.14);
          border-color: rgba(214,164,74,0.4);
        }

        .join-card {
          border-radius: 16px;
          background: linear-gradient(145deg, #c4882a 0%, #a36d1e 100%);
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 12px;
          transition: box-shadow 0.3s;
          position: relative;
          overflow: hidden;
        }
        .join-card::before {
          content: '';
          position: absolute;
          bottom: -30px;
          left: -30px;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .join-card:hover {
          box-shadow: 0 8px 36px rgba(163,109,30,0.5);
        }

        .partner-btn {
          height: 34px;
          width: 100%;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 12px;
          color: white;
          cursor: pointer;
          background: transparent;
          transition: background 0.25s, border-color 0.25s;
        }
        .partner-btn:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.45);
        }

        .join-btn {
          height: 34px;
          width: 100%;
          border-radius: 8px;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          background: white;
          color: #a36d1e;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.2s;
        }
        .join-btn:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }

        .footer-divider-line {
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #d6a44a, transparent);
          margin: 10px 0 16px;
          border-radius: 2px;
        }

        .logo-c {
          background: linear-gradient(135deg, #d6a44a 0%, #f0c070 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <footer
        style={{
          background: "linear-gradient(180deg, #04162f 0%, #030f20 100%)",
          color: "white",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "40px 30px 0" }}
        >
          {/* Main Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "24px",
              alignItems: "start",
            }}
            className="footer-main-grid"
          >
            <style>{`
              @media (min-width: 1024px) {
                .footer-main-grid {
                  grid-template-columns: 2fr 1fr 1fr 1fr 3fr !important;
                  align-items: start !important;
                }
              }
              @media (min-width: 640px) and (max-width: 1023px) {
                .footer-main-grid {
                  grid-template-columns: 1fr 1fr !important;
                  align-items: start !important;
                }
              }
            `}</style>

            {/* ── Brand Column ── */}
            <div>
              {/* Logo */}
              <div style={{ margin: "-35px 0 -5px -10px" }}>
                <Image
                  src="/Real_Estate_Professionals_Community_Logo-removebg-preview.png"
                  alt="REPC - Real Estate Professional Community"
                  width={150}
                  height={150}
                  style={{ width: "130px", height: "auto" }}
                  priority
                />
              </div>

              {/* Tagline */}
              <p
                style={{
                  marginTop: "0px",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "13px",
                  lineHeight: "1.7",
                  maxWidth: "280px",
                }}
              >
                India&apos;s largest community of real estate professionals
                connecting, collaborating and creating opportunities.
              </p>

              {/* Social Icons */}
              <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
                {socialLinks.map(({ Icon, href, label }) => (
                  <Link key={label} href={href} aria-label={label} className="social-btn" style={{ width: "36px", height: "36px" }}>
                    <Icon size={14} />
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Nav Columns ── */}
            {navLinks.map(({ title, links }) => (
              <div key={title}>
                <h3 style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.3px" }}>
                  {title}
                </h3>
                <div className="footer-divider-line" />
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href} className="footer-link" style={{ fontSize: "12px" }}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* ── CTA Cards ── */}
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}
              className="footer-cards-grid"
            >
              <style>{`
                @media (max-width: 640px) {
                  .footer-cards-grid {
                    grid-template-columns: 1fr !important;
                  }
                }
              `}</style>

              {/* Partner Card */}
              <div className="partner-card">
                {/* Icon + Title row */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "rgba(214,164,74,0.12)",
                      border: "1px solid rgba(214,164,74,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Handshake size={16} style={{ color: "#d6a44a" }} />
                  </div>
                  <h3 style={{ fontSize: "13px", fontWeight: 700, margin: 0 }}>Partner With Us</h3>
                  <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(214,164,74,0.45), transparent)" }} />
                </div>

                {/* Description */}
                <p style={{ fontSize: "11px", lineHeight: "1.6", color: "rgba(255,255,255,0.65)", margin: 0 }}>
                  Collaborate with industry leaders, sponsor events, and showcase
                  your brand to a targeted audience.
                </p>

                {/* Button */}
                <button className="partner-btn">
                  Explore Partnerships
                  <ArrowRight size={12} />
                </button>
              </div>

              {/* Join Card */}
              <div className="join-card">
                {/* Icon + Title row */}
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "rgba(255,255,255,0.15)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Users size={16} style={{ color: "white" }} />
                  </div>
                  <h3 style={{ fontSize: "13px", fontWeight: 700, margin: 0 }}>Join Our Network</h3>
                  <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.3)" }} />
                </div>

                {/* Description */}
                <p style={{ fontSize: "11px", lineHeight: "1.6", color: "rgba(255,255,255,0.82)", margin: 0 }}>
                  Become a part of a trusted community of real estate
                  professionals and unlock endless opportunities.
                </p>

                {/* Button */}
                <button className="join-btn">
                  Join REPC Now
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>

          {/* ── Bottom Bar ── */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              marginTop: "48px",
              padding: "20px 0 24px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>
              © 2024 REPC – Real Estate Professional Community. All Rights Reserved.
            </p>

            <p
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.45)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Made with{" "}
              <Heart
                size={12}
                style={{ color: "#d6a44a", fill: "#d6a44a" }}
              />{" "}
              for Real Estate Professionals
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}