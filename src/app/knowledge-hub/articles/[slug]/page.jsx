"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

// Shared array equipped with detailed section entries and strings matching keys
const allArticles = [
  {
    id: 1,
    tag: "OFFICE MARKET",
    tagColor: "bg-orange-500",
    slug: "the-future-of-office-spaces-in-india-trends-shaping-2024",
    title: "The Future of Office Spaces in India: Trends Shaping 2024 and Beyond",
    excerpt: "Explore key trends transforming India's office real estate market, from hybrid workspaces to sustainable buildings and tech-driven designs.",
    date: "May 20, 2024",
    readTime: "6 min read",
    views: "1.2K views",
    heroImg: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80",
    contentImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    author: {
      name: "Rohit Mehta",
      role: "Director – Investments",
      company: "Blackstone",
      location: "Mumbai, Maharashtra, India",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
      bio: "Rohit has over 15 years of experience in real estate investments and advisory. He specialises in office assets and workplace innovation across India.",
      verified: true,
    },
    category: "Office Market",
    tags: ["Office Spaces", "Real Estate Trends", "Workplace Design", "India Real Estate"],
    toc: [
      "Introduction",
      "Hybrid Work is Here to Stay",
      "Sustainability Takes Center Stage",
      "Technology is Transforming Workspaces",
      "Emerging Markets on the Rise",
      "What Lies Ahead?",
      "Conclusion",
    ],
    sections: [
      { id: "introduction", heading: "Introduction", body: "India's office real estate market is undergoing a significant transformation. As businesses adapt to new ways of working and evolving employee expectations, the demand for smarter, more sustainable, and flexible office spaces has never been greater.", highlight: null },
      { id: "hybrid-work-is-here-to-stay", heading: "1. Hybrid Work is Here to Stay", body: "The hybrid work model has redefined how companies operate. Businesses are now redesigning offices to foster collaboration while offering employees the flexibility they value.", highlight: "Flexible spaces, hot-desking, and collaboration zones are becoming essential elements of modern office design.", highlightIcon: "🏢" },
      { id: "sustainability-takes-center-stage", heading: "2. Sustainability Takes Center Stage", body: "Green buildings are no longer a luxury—they are a necessity. Developers and occupiers are prioritising energy-efficient designs, sustainable materials, and wellness-focused amenities.", highlight: "LEED-certified buildings and net-zero targets are driving real change across the industry.", highlightIcon: "🌱" },
      { id: "technology-is-transforming-workspaces", heading: "3. Technology is Transforming Workspaces", body: "From AI-powered building management systems to smart meeting rooms, technology is enhancing efficiency, employee experience, and operational performance.", highlight: "Tech-enabled offices are more adaptable, data-driven, and future-ready.", highlightIcon: "💡" },
      { id: "emerging-markets-on-the-rise", heading: "4. Emerging Markets on the Rise", body: "Tier-2 cities like Pune, Hyderabad, and Chennai are emerging as significant office markets driven by infrastructure development and talent availability.", highlight: "Companies are diversifying their real estate footprint beyond the traditional metros.", highlightIcon: "📍" },
      { id: "what-lies-ahead?", heading: "5. What Lies Ahead?", body: "The next 5 years will see a convergence of technology, sustainability, and human-centric design shaping India's office real estate landscape. REITs and institutional capital will accelerate this transformation.", highlight: null },
      { id: "conclusion", heading: "Conclusion", body: "India's office market is poised for robust growth, driven by structural reforms, global demand for office space, and a young, aspirational workforce. Stakeholders who adapt early will be best placed to capitalise on the opportunity.", highlight: null },
    ],
  },
  {
    id: 2,
    tag: "INVESTMENTS",
    tagColor: "bg-purple-600",
    slug: "real-estate-investment-outlook-2024-opportunities-risks",
    title: "Real Estate Investment Outlook 2024: Opportunities and Risk Factors",
    excerpt: "A deep dive into the investment landscape for Indian real estate in 2024, covering key sectors, risk factors, and emerging opportunities.",
    date: "May 18, 2024",
    readTime: "5 min read",
    views: "980 views",
    heroImg: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=80",
    contentImg: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    author: {
      name: "Vimal Nadar",
      role: "Senior Director – Research",
      company: "Colliers India",
      location: "Mumbai, Maharashtra, India",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
      bio: "Vimal leads research and market intelligence at Colliers India with over 12 years of experience tracking institutional investment trends.",
      verified: true,
    },
    category: "Investments",
    tags: ["Real Estate Investment", "REITs", "Institutional Capital", "India Market"],
    toc: ["Introduction", "Key Investment Themes", "Risk Factors", "Sector Spotlight", "Outlook"],
    sections: [
      { id: "introduction", heading: "Introduction", body: "India's real estate investment market is attracting unprecedented institutional interest. With strong fundamentals and a maturing regulatory environment, 2024 presents a compelling case for both domestic and foreign investors.", highlight: null },
      { id: "key-investment-themes", heading: "1. Key Investment Themes", body: "Logistics, data centres, and grade-A office assets continue to attract significant capital. Residential markets in metros are also seeing renewed interest from institutional players.", highlight: "Logistics and data centre assets are delivering risk-adjusted returns well above traditional asset classes.", highlightIcon: "📈" },
      { id: "risk-factors", heading: "2. Risk Factors", body: "Global interest rate uncertainty, currency volatility, and regulatory delays remain key risks. Investors are advised to conduct thorough due diligence and focus on cash-yielding assets.", highlight: null },
      { id: "sector-spotlight", heading: "3. Sector Spotlight", body: "Office REITs continue to outperform, with occupancy rates climbing back to pre-pandemic levels. Retail assets in prime locations are also staging a recovery.", highlight: "Indian REITs have delivered consistent distributions, making them attractive for income-seeking investors.", highlightIcon: "🏦" },
      { id: "outlook", heading: "Outlook", body: "The investment outlook for 2024 remains positive. Strong GDP growth, infrastructure development, and a young demographic profile position India as one of the most exciting real estate markets globally.", highlight: null },
    ],
  },
];

const relatedArticles = [
  { id: 2, tag: "INVESTMENTS", tagColor: "bg-purple-600", title: "Real Estate Investment Outlook 2024: Opportunities and Risk Factors", date: "May 18, 2024", readTime: "5 min read", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80" },
  { id: 3, tag: "SUSTAINABILITY", tagColor: "bg-green-600", title: "Sustainability in Real Estate: Building a Greener Tomorrow", date: "May 16, 2024", readTime: "7 min read", img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&q=80" },
];

function VerifiedBadge() {
  return (
    <svg className="w-4 h-4 text-blue-500 inline-block ml-0.5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

export default function ArticleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;

  // Find the current active article by matching the slug string
  const article = allArticles.find((a) => a.slug === slug);

  const [activeSection, setActiveSection] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (article?.toc?.length > 0) {
      setActiveSection(article.toc[0]);
    }
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-sm">Article not found.</p>
        <button
          onClick={() => router.push("/knowledge-hub/articles")}
          className="px-5 py-2 bg-[#c9a84c] text-white rounded-full text-sm font-medium hover:bg-[#b8973d] transition"
        >
          Back to Articles
        </button>
      </div>
    );
  }

  const visibleSections = expanded ? article.sections : article.sections.slice(0, 3);
  const related = relatedArticles.filter((r) => r.id !== article.id);

  // Smooth scroll function when clicking items on the Table of Contents menu
  const scrollToSection = (item, index) => {
    setActiveSection(item);
    const sectionId = article.sections[index]?.id;
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Hero */}
      <div className="relative bg-gray-900 text-white overflow-hidden" style={{ minHeight: 300 }}>
        <img src={article.heroImg} alt="article hero" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className={`inline-block ${article.tagColor} text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-wider mb-4`}>
            {article.tag}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3 max-w-3xl">
            {article.title}
          </h1>
          <p className="text-gray-300 text-sm mb-4 max-w-xl">{article.excerpt}</p>
          <div className="flex items-center gap-3 text-xs text-gray-300 flex-wrap">
            <span className="flex items-center gap-1">⏱️ {article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
            <span>•</span>
            <span>👁️ {article.views}</span>
          </div>
        </div>
      </div>

      {/* Main Layout Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          
          {/* LEFT: TOC Sticky Sidebar Menu */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-20">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">On this page</p>
              <nav className="space-y-0.5">
                {article.toc.map((item, idx) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item, idx)}
                    className={`block w-full text-left text-xs py-1.5 pl-3 border-l-2 transition-colors ${
                      activeSection === item
                        ? "border-[#c9a84c] text-[#c9a84c] font-medium"
                        : "border-gray-200 text-gray-500 hover:text-gray-800 hover:border-gray-400"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* MIDDLE: Dynamic Headers Content Display */}
          <main className="flex-1 min-w-0">
            {/* Author Profile Information Display Banner */}
            <div className="flex items-start justify-between gap-4 mb-6 p-4 border border-gray-100 rounded-xl bg-gray-50">
              <div className="flex items-center gap-3">
                <img src={article.author.avatar} alt={article.author.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {article.author.name} {article.author.verified && <VerifiedBadge />}
                  </p>
                  <p className="text-xs text-gray-500">{article.author.role}, {article.author.company}</p>
                </div>
              </div>
            </div>

            {/* Structured Section Loop pulling dynamic data values correctly */}
            <div className="prose prose-sm max-w-none">
              {visibleSections.map((sec, idx) => (
                <div key={sec.id} id={sec.id} className="mb-8 scroll-mt-24">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{sec.heading}</h2>
                  <p className="text-sm text-gray-700 leading-relaxed">{sec.body}</p>

                  {idx === 0 && (
                    <img src={article.contentImg} alt="visual content" className="w-full rounded-xl mt-4 mb-2 object-cover max-h-80" />
                  )}

                  {sec.highlight && (
                    <div className="mt-3 flex gap-3 bg-blue-50 border border-blue-100 rounded-lg p-3">
                      <span className="text-lg">{sec.highlightIcon}</span>
                      <p className="text-xs text-blue-800 leading-relaxed">{sec.highlight}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Read Control Triggers */}
            <div className="flex justify-center my-6">
              <button
                onClick={() => setExpanded(!expanded)}
                className="px-6 py-2.5 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[#c9a84c] hover:text-[#c9a84c] transition font-medium"
              >
                {expanded ? "Show Less" : "Read Full Article"}
              </button>
            </div>
          </main>

          {/* RIGHT: Metadata Context Sidebar Widget */}
          <aside className="hidden xl:block w-64 flex-shrink-0 space-y-6">
            <div className="border border-gray-100 rounded-xl p-5 space-y-4 bg-white shadow-sm">
              <h3 className="font-semibold text-sm text-gray-900">Article Details</h3>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Category</p>
                <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2.5 py-0.5 rounded-full font-medium">{article.category}</span>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Published On</p>
                <p className="text-xs text-gray-800 font-medium">{article.date}</p>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}