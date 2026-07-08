import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Share2,
  UserPlus,
  MapPin,
  Globe,
  Mail,
  Phone,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Building2,
  Briefcase,
  Store,
  Map,
  Leaf,
  Download,
  Users,
  Award,
  Compass
} from 'lucide-react';

const DEVELOPERS = [
  {
    slug: "prestige-group-developers",
    name: "Prestige Group Developers",
    tagline: "Building landmarks. Elevating skylines.",
    category: "COMMERCIAL ASSETS",
    location: "Bengaluru, Mumbai, Chennai",
    hq: "Bengaluru, Karnataka",
    sqft: "120 Million Sq. Ft. Delivered",
    desc: "Famous for Prestige Tech Cloud and landmark Grade-A commercial properties in Southern India.",
    about: [
      "With over 35 years of legacy, Prestige Group is one of India's leading real estate developers delivering world-class commercial, retail, residential and hospitality projects across Southern India.",
      "Known for landmark IT parks and mixed-use developments, Prestige has earned the trust of global occupiers, investors and institutional partners.",
    ],
    date: "JULY 2, 2026",
    heroImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    logoLabel: "PRESTIGE",
    website: "www.prestigeconstructions.com",
    email: "info@prestigeconstructions.com",
    phone: "+91 80 1234 5678",
    founded: "1986",
    teamSize: "500+ Professionals",
    presence: "15 Cities in India",
    reraRegistered: "Yes",
    stats: {
      years: "35+",
      totalDeveloped: "120 Mn sq ft",
      ongoing: "18+",
      projectValue: "₹ 15,000 Cr+",
    },
    projects: [
      {
        title: "Prestige Tech Cloud",
        location: "Bengaluru",
        sqft: "2.1 Mn sq ft",
        tag: "Office",
        tagColor: "bg-[#0B1F3A]",
        status: "Under Construction",
        statusColor: "text-[#c9a84c]",
        statusDot: "bg-[#c9a84c]",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
      },
      {
        title: "Prestige Forum Mall",
        location: "Bengaluru",
        sqft: "780,000 sq ft",
        tag: "Retail",
        tagColor: "bg-emerald-600",
        status: "Ongoing",
        statusColor: "text-emerald-600",
        statusDot: "bg-emerald-600",
        img: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2126",
      },
      {
        title: "Prestige City",
        location: "Chennai",
        sqft: "3.4 Mn sq ft",
        tag: "Mixed-Use",
        tagColor: "bg-indigo-600",
        status: "Under Construction",
        statusColor: "text-[#c9a84c]",
        statusDot: "bg-[#c9a84c]",
        img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2187",
      },
    ],
    capabilities: [
      "Office Developments",
      "Retail & High Street",
      "Mixed-Use Developments",
      "IT Parks & SEZ",
      "Hospitality Developments",
    ],
    memberSince: "Jan 2023",
  },
  {
    slug: "dlf-limited-builders",
    name: "DLF Limited Builders",
    tagline: "India's pioneer in cyber-infrastructure.",
    category: "CYBER INFRASTRUCTURE",
    location: "Delhi-NCR, Gurugram, Kolkata",
    hq: "Gurugram, Haryana",
    sqft: "150 Million Sq. Ft. Delivered",
    desc: "India's pioneer developer behind DLF CyberCity and cyber-infrastructure corridors.",
    about: [
      "DLF Limited is India's largest publicly listed real estate developer, with over 75 years of experience delivering homes, offices, and retail destinations across the country.",
      "DLF CyberCity in Gurugram remains one of India's most iconic commercial micro-markets, anchoring global occupiers and institutional capital alike.",
    ],
    date: "JULY 2, 2026",
    heroImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
    logoLabel: "DLF",
    website: "www.dlf.in",
    email: "info@dlf.in",
    phone: "+91 124 456 7890",
    founded: "1946",
    teamSize: "1,200+ Professionals",
    presence: "24 Cities in India",
    reraRegistered: "Yes",
    stats: {
      years: "75+",
      totalDeveloped: "150 Mn sq ft",
      ongoing: "22+",
      projectValue: "₹ 28,000 Cr+",
    },
    projects: [
      {
        title: "DLF CyberCity",
        location: "Gurugram",
        sqft: "12.5 Mn sq ft",
        tag: "Office",
        tagColor: "bg-[#0B1F3A]",
        status: "Operational",
        statusColor: "text-emerald-600",
        statusDot: "bg-emerald-600",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070",
      },
      {
        title: "DLF Mall of India",
        location: "Noida",
        sqft: "2 Mn sq ft",
        tag: "Retail",
        tagColor: "bg-emerald-600",
        status: "Operational",
        statusColor: "text-emerald-600",
        statusDot: "bg-emerald-600",
        img: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2126",
      },
      {
        title: "DLF Downtown",
        location: "Gurugram",
        sqft: "4.2 Mn sq ft",
        tag: "Mixed-Use",
        tagColor: "bg-indigo-600",
        status: "Under Construction",
        statusColor: "text-[#c9a84c]",
        statusDot: "bg-[#c9a84c]",
        img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2187",
      },
    ],
    capabilities: [
      "Office Developments",
      "Retail & High Street",
      "Mixed-Use Developments",
      "IT Parks & SEZ",
      "Residential Townships",
    ],
    memberSince: "Mar 2022",
  },
  {
    slug: "embassy-group",
    name: "Embassy Group",
    tagline: "Pioneering India's first commercial REIT.",
    category: "REIT PORTFOLIO",
    location: "Bengaluru, Pune, Hyderabad",
    hq: "Bengaluru, Karnataka",
    sqft: "85 Million Sq. Ft. Delivered",
    desc: "Pioneered premium IT park solutions and spearheaded the first commercial REIT launch in India.",
    about: [
      "Embassy Group has been shaping India's commercial real estate landscape for over 35 years, delivering Grade-A office parks, industrial and residential developments.",
      "As co-sponsor of India's first listed REIT, Embassy has set the benchmark for institutional-grade office assets and investor transparency.",
    ],
    date: "JULY 1, 2026",
    heroImg: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
    logoLabel: "EMBASSY",
    website: "www.embassygroup.com",
    email: "info@embassygroup.com",
    phone: "+91 80 9876 5432",
    founded: "1990",
    teamSize: "400+ Professionals",
    presence: "9 Cities in India",
    reraRegistered: "Yes",
    stats: {
      years: "35+",
      totalDeveloped: "85 Mn sq ft",
      ongoing: "14+",
      projectValue: "₹ 11,200 Cr+",
    },
    projects: [
      {
        title: "Embassy TechVillage",
        location: "Bengaluru",
        sqft: "9.5 Mn sq ft",
        tag: "Office",
        tagColor: "bg-[#0B1F3A]",
        status: "Operational",
        statusColor: "text-emerald-600",
        statusDot: "bg-emerald-600",
        img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070",
      },
      {
        title: "Embassy Pune Tech Park",
        location: "Pune",
        sqft: "3.1 Mn sq ft",
        tag: "Office",
        tagColor: "bg-[#0B1F3A]",
        status: "Ongoing",
        statusColor: "text-emerald-600",
        statusDot: "bg-emerald-600",
        img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070",
      },
      {
        title: "Embassy One",
        location: "Bengaluru",
        sqft: "1.8 Mn sq ft",
        tag: "Mixed-Use",
        tagColor: "bg-indigo-600",
        status: "Under Construction",
        statusColor: "text-[#c9a84c]",
        statusDot: "bg-[#c9a84c]",
        img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2187",
      },
    ],
    capabilities: [
      "Office Developments",
      "IT Parks & SEZ",
      "Mixed-Use Developments",
      "Industrial & Logistics",
      "Sustainable & Green Buildings",
    ],
    memberSince: "May 2024",
  },
];

function getDeveloperBySlug(slug) {
  return DEVELOPERS.find((d) => d.slug === slug) || null;
}

export function generateStaticParams() {
  return DEVELOPERS.map((d) => ({ slug: d.slug }));
}

const CAPABILITY_ICONS = {
  "Office Developments": Building2,
  "Retail & High Street": Store,
  "Mixed-Use Developments": Map,
  "IT Parks & SEZ": Briefcase,
  "Hospitality Developments": Building2,
  "Residential Townships": Building2,
  "Industrial & Logistics": Building2,
  "Sustainable & Green Buildings": Leaf,
};

export default async function DeveloperProfile({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  // Intercept segment keyword routes inside this layout file context
  if (slug === "sectors" || slug === "retail-shopping-centers" || slug === "commercial-office-parks" || slug === "industrial-logistics-hubs" || slug === "mixed-use-townships") {
    return (
      <div className="min-h-screen bg-slate-50 font-sans flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-xl max-w-md w-full">
          <Building2 className="w-16 h-16 text-blue-700 mx-auto mb-4" />
          <h1 className="text-2xl font-serif font-bold text-[#0B1F3A] mb-2">Development Sector Active</h1>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Viewing localized results inside the primary module framework. Please return to filter live directory nodes.
          </p>
          <Link href="/companies/developers" className="inline-block py-2.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-700 to-indigo-800 shadow-md">
            Return to Directory
          </Link>
        </div>
      </div>
    );
  }

  const developer = getDeveloperBySlug(slug);

  if (!developer) {
    notFound();
  }

  const {
    name,
    tagline,
    category,
    location,
    hq,
    about,
    heroImg,
    logoLabel,
    website,
    email,
    phone,
    founded,
    teamSize,
    presence,
    reraRegistered,
    stats,
    projects,
    capabilities,
    memberSince,
  } = developer;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* ── SECTIONS MATCHING THE BLUE-TO-INDIGO GRADIENT SPEC DESIGN ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-800 shadow-md">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/90 via-blue-900/40 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-12 lg:py-8">
          <Link href="/companies/developers" className="flex items-center text-white/80 hover:text-white text-sm font-medium mb-4 w-max transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Directory
          </Link>

          <div className="flex flex-col md:flex-row gap-5 items-start md:items-end">
            <div className="bg-white p-3 rounded-xl shadow-xl border border-gray-100 flex-shrink-0 w-24 h-28 flex items-center justify-center">
              <div className="text-center">
                <Building2 className="w-8 h-8 text-[#0B1F3A] mx-auto mb-0.5" />
                <span className="font-bold text-[#0B1F3A] text-[10px] tracking-wide block">{logoLabel}</span>
              </div>
            </div>

            <div className="flex-1 text-white text-left">
              <div className="inline-flex items-center bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                Verified Developer
              </div>

              <p className="text-xs font-semibold tracking-[0.2em] text-[#E8A33D] uppercase">{category}</p>
              <h1 className="font-serif text-[clamp(22px,2.5vw,36px)] font-normal leading-tight text-white tracking-wide mt-0.5">
                {name}
              </h1>
              <p className="mt-1 text-xs font-light text-slate-200">{tagline}</p>

              <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-white/70 mt-3">
                <div className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" /> {location}</div>
                <div className="w-1 h-1 rounded-full bg-white/30"></div>
                <div className="flex items-center"><Globe className="w-3.5 h-3.5 mr-1" /> {website}</div>
                <div className="w-1 h-1 rounded-full bg-white/30"></div>
                <div className="flex items-center"><Mail className="w-3.5 h-3.5 mr-1" /> {email}</div>
                <div className="w-1 h-1 rounded-full bg-white/30"></div>
                <div className="flex items-center"><Phone className="w-3.5 h-3.5 mr-1" /> {phone}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <button className="flex-1 md:flex-none flex items-center justify-center px-4 py-2 border border-white/30 hover:bg-white/10 text-white rounded-lg text-sm font-semibold transition-colors">
                <Share2 className="w-4 h-4 mr-2" /> Share
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center px-5 py-2 bg-[#c9a84c] hover:bg-[#b8963e] text-white rounded-lg text-sm font-semibold transition-colors shadow-lg">
                <UserPlus className="w-4 h-4 mr-2" /> Connect
              </button>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#09152c]/60 border-t border-white/10 relative z-10">
          <div className="max-w-7xl mx-auto px-6 overflow-x-auto scrollbar-hide">
            <div className="flex items-center space-x-6 text-xs font-semibold">
              <button className="text-[#E8A33D] border-b-2 border-[#E8A33D] py-3 whitespace-nowrap">Overview</button>
              <button className="text-white/60 hover:text-white py-3 whitespace-nowrap transition-colors">Projects</button>
              <button className="text-white/60 hover:text-white py-3 whitespace-nowrap transition-colors">Capabilities</button>
              <button className="text-white/60 hover:text-white py-3 whitespace-nowrap transition-colors">Team</button>
              <button className="text-white/60 hover:text-white py-3 whitespace-nowrap transition-colors">Milestones</button>
              <button className="text-white/60 hover:text-white py-3 whitespace-nowrap transition-colors">Credentials</button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-left">
                <h2 className="font-serif text-lg font-normal text-[#0B1F3A] tracking-wide mb-3">About {name}</h2>
                <div className="text-[13px] text-slate-600 space-y-3 leading-relaxed mb-6">
                  {about.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <svg className="w-4 h-4 text-[#c9a84c]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-sm">{stats.years}</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">Years Experience</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <Building2 className="w-4 h-4 text-[#c9a84c]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-sm">{stats.totalDeveloped}</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">Total Developed</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 h-max text-left">
                <h3 className="font-serif text-base font-normal text-[#0B1F3A] tracking-wide mb-4">Company Snapshot</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Company Type</div>
                    <div className="font-medium text-[#0B1F3A]">Private Limited</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Founded</div>
                    <div className="font-medium text-[#0B1F3A]">{founded}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Headquarters</div>
                    <div className="font-medium text-[#0B1F3A]">{hq}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Team Size</div>
                    <div className="font-medium text-[#0B1F3A]">{teamSize}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Presence</div>
                    <div className="font-medium text-[#0B1F3A]">{presence}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">RERA Registered</div>
                    <div className="font-medium text-[#0B1F3A]">{reraRegistered}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
              <div className="xl:col-span-7 text-left">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-base font-normal text-[#0B1F3A] tracking-wide">Featured Projects</h3>
                  <Link href="#" className="text-blue-600 text-sm font-medium flex items-center hover:underline">
                    View all <ArrowLeft className="w-3.5 h-3.5 ml-1 rotate-180" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {projects.map((proj, i) => (
                    <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm group">
                      <div className="h-28 relative overflow-hidden">
                        <img src={proj.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className={`absolute top-2 left-2 ${proj.tagColor} text-white text-[10px] font-bold px-2 py-0.5 rounded`}>{proj.tag}</span>
                      </div>
                      <div className="p-2.5">
                        <h4 className="font-bold text-sm text-[#0B1F3A] truncate mb-0.5">{proj.title}</h4>
                        <div className="text-[11px] text-slate-500 mb-1.5 leading-tight">{proj.location}<br />{proj.sqft}</div>
                        <div className={`flex items-center text-[10px] font-semibold ${proj.statusColor}`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${proj.statusDot} mr-1`}></div> {proj.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="xl:col-span-5 bg-white rounded-xl border border-gray-200 shadow-sm p-5 h-max text-left">
                <h3 className="font-serif text-base font-normal text-[#0B1F3A] tracking-wide mb-4">Core Capabilities</h3>
                <ul className="space-y-3">
                  {capabilities.map((cap) => {
                    const Icon = CAPABILITY_ICONS[cap] || Building2;
                    const isGreen = cap === "Sustainable & Green Buildings";
                    return (
                      <li key={cap} className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isGreen ? "text-emerald-500" : "text-slate-400"}`} strokeWidth={1.5} />
                        <span className={`text-[13px] font-medium ${isGreen ? "text-emerald-600" : "text-slate-700"}`}>{cap}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 relative overflow-hidden">
              <h3 className="font-serif text-base font-normal text-[#0B1F3A] tracking-wide mb-3">CREPNET Membership</h3>
              <div className="inline-block bg-[#c9a84c] text-white text-[10px] uppercase tracking-wide font-bold px-2.5 py-0.5 rounded shadow-sm mb-4">
                Premium Developer
              </div>
              <p className="text-[13px] text-slate-600 mb-4 leading-relaxed">
                {name} is a Premium Developer Member of CREPNET.
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <Award className="w-6 h-6 text-[#c9a84c]" strokeWidth={1.5} />
                <div>
                  <div className="text-[10px] text-slate-500 font-medium">Member Since</div>
                  <div className="font-bold text-[#0B1F3A] text-sm">{memberSince}</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <h3 className="font-serif text-base font-normal text-[#0B1F3A] tracking-wide mb-3">Download Documents</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center justify-between px-3 py-2 border border-gray-200 hover:border-blue-600 hover:bg-blue-50/50 rounded-lg group transition-colors text-left cursor-pointer">
                  <span className="text-xs font-semibold text-slate-700 group-hover:text-blue-600">Company Brochure</span>
                  <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                </button>
                <button className="w-full flex items-center justify-between px-3 py-2 border border-gray-200 hover:border-blue-600 hover:bg-blue-50/50 rounded-lg group transition-colors text-left cursor-pointer">
                  <span className="text-xs font-semibold text-slate-700 group-hover:text-blue-600">Project Portfolio</span>
                  <Download className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}