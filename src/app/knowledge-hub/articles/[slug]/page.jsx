"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

// ── shared article data (move this to a shared lib/data.js file in real project) ──
const allArticles = [
  {
    id: 1,
    tag: "OFFICE MARKET",
    tagColor: "bg-orange-500",
    title: "The Future of Office Spaces in India: Trends Shaping 2024 and Beyond",
    excerpt:
      "Explore key trends transforming India's office real estate market, from hybrid workspaces to sustainable buildings and tech-driven designs.",
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
      {
        id: "introduction",
        heading: "Introduction",
        body: "India's office real estate market is undergoing a significant transformation. As businesses adapt to new ways of working and evolving employee expectations, the demand for smarter, more sustainable, and flexible office spaces has never been greater.",
        highlight: null,
      },
      {
        id: "hybrid",
        heading: "1. Hybrid Work is Here to Stay",
        body: "The hybrid work model has redefined how companies operate. Businesses are now redesigning offices to foster collaboration while offering employees the flexibility they value.",
        highlight: "Flexible spaces, hot-desking, and collaboration zones are becoming essential elements of modern office design.",
        highlightIcon: "🏢",
      },
      {
        id: "sustainability",
        heading: "2. Sustainability Takes Center Stage",
        body: "Green buildings are no longer a luxury—they are a necessity. Developers and occupiers are prioritising energy-efficient designs, sustainable materials, and wellness-focused amenities.",
        highlight: "LEED-certified buildings and net-zero targets are driving real change across the industry.",
        highlightIcon: "🌱",
      },
      {
        id: "technology",
        heading: "3. Technology is Transforming Workspaces",
        body: "From AI-powered building management systems to smart meeting rooms, technology is enhancing efficiency, employee experience, and operational performance.",
        highlight: "Tech-enabled offices are more adaptable, data-driven, and future-ready.",
        highlightIcon: "💡",
      },
      {
        id: "emerging",
        heading: "4. Emerging Markets on the Rise",
        body: "Tier-2 cities like Pune, Hyderabad, and Chennai are emerging as significant office markets driven by infrastructure development and talent availability.",
        highlight: "Companies are diversifying their real estate footprint beyond the traditional metros.",
        highlightIcon: "📍",
      },
      {
        id: "ahead",
        heading: "5. What Lies Ahead?",
        body: "The next 5 years will see a convergence of technology, sustainability, and human-centric design shaping India's office real estate landscape. REITs and institutional capital will accelerate this transformation.",
        highlight: null,
      },
      {
        id: "conclusion",
        heading: "Conclusion",
        body: "India's office market is poised for robust growth, driven by structural reforms, global demand for office space, and a young, aspirational workforce. Stakeholders who adapt early will be best placed to capitalise on the opportunity.",
        highlight: null,
      },
    ],
  },
  {
    id: 2,
    tag: "INVESTMENTS",
    tagColor: "bg-purple-600",
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
      {
        id: "introduction",
        heading: "Introduction",
        body: "India's real estate investment market is attracting unprecedented institutional interest. With strong fundamentals and a maturing regulatory environment, 2024 presents a compelling case for both domestic and foreign investors.",
        highlight: null,
      },
      {
        id: "themes",
        heading: "1. Key Investment Themes",
        body: "Logistics, data centres, and grade-A office assets continue to attract significant capital. Residential markets in metros are also seeing renewed interest from institutional players.",
        highlight: "Logistics and data centre assets are delivering risk-adjusted returns well above traditional asset classes.",
        highlightIcon: "📈",
      },
      {
        id: "risks",
        heading: "2. Risk Factors",
        body: "Global interest rate uncertainty, currency volatility, and regulatory delays remain key risks. Investors are advised to conduct thorough due diligence and focus on cash-yielding assets.",
        highlight: null,
      },
      {
        id: "sector",
        heading: "3. Sector Spotlight",
        body: "Office REITs continue to outperform, with occupancy rates climbing back to pre-pandemic levels. Retail assets in prime locations are also staging a recovery.",
        highlight: "Indian REITs have delivered consistent distributions, making them attractive for income-seeking investors.",
        highlightIcon: "🏦",
      },
      {
        id: "outlook",
        heading: "Outlook",
        body: "The investment outlook for 2024 remains positive. Strong GDP growth, infrastructure development, and a young demographic profile position India as one of the most exciting real estate markets globally.",
        highlight: null,
      },
    ],
  },
  {
    id: 3,
    tag: "SUSTAINABILITY",
    tagColor: "bg-green-600",
    title: "Sustainability in Real Estate: Building a Greener Tomorrow",
    excerpt: "How sustainability mandates, green certifications, and ESG frameworks are reshaping the Indian real estate sector.",
    date: "May 16, 2024",
    readTime: "7 min read",
    views: "1.5K views",
    heroImg: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1400&q=80",
    contentImg: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80",
    author: {
      name: "Neha Iyer",
      role: "Head – ESG & Sustainability",
      company: "JLL India",
      location: "Bengaluru, Karnataka, India",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
      bio: "Neha drives ESG strategy and green building advisory at JLL India, helping developers and occupiers meet sustainability targets.",
      verified: false,
    },
    category: "Sustainability",
    tags: ["Green Buildings", "ESG", "LEED", "Net Zero", "Sustainability"],
    toc: ["Introduction", "ESG in Real Estate", "Green Certifications", "Net Zero Goals", "The Road Ahead"],
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        body: "Sustainability has moved from a nice-to-have to a business imperative in real estate. Occupiers, investors, and regulators are all demanding greener, more responsible buildings.",
        highlight: null,
      },
      {
        id: "esg",
        heading: "1. ESG in Real Estate",
        body: "Environmental, Social, and Governance (ESG) criteria are now central to investment decisions. Buildings with strong ESG credentials command a premium in both rental and capital values.",
        highlight: "ESG-compliant assets are seeing 8–12% premium over non-certified peers.",
        highlightIcon: "🌍",
      },
      {
        id: "certifications",
        heading: "2. Green Certifications",
        body: "LEED, IGBC, and GRIHA certifications are becoming standard requirements for grade-A office developments. Developers are investing heavily in sustainable construction practices.",
        highlight: null,
      },
      {
        id: "netzero",
        heading: "3. Net Zero Goals",
        body: "Major corporates are committing to net-zero carbon targets, driving demand for buildings that support these ambitions through energy efficiency and renewable energy integration.",
        highlight: "India targets 500 GW of renewable energy by 2030 — real estate plays a key enabling role.",
        highlightIcon: "⚡",
      },
      {
        id: "roadahead",
        heading: "The Road Ahead",
        body: "The transition to a sustainable built environment will require collaboration across developers, occupiers, investors, and policymakers. The opportunity is enormous for those who move early.",
        highlight: null,
      },
    ],
  },
  {
    id: 5,
    tag: "POLICY",
    tagColor: "bg-red-600",
    title: "New Industrial Corridor Policy: Impact on Real Estate Markets",
    excerpt: "Analysing how India's new industrial corridor policy is creating new real estate demand hotspots across the country.",
    date: "May 12, 2024",
    readTime: "4 min read",
    views: "760 views",
    heroImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80",
    contentImg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    author: {
      name: "Ramesh Kumar",
      role: "Principal – Policy Research",
      company: "ANAROCK",
      location: "New Delhi, India",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
      bio: "Ramesh specialises in policy analysis and its intersection with real estate markets, with a focus on industrial and logistics sectors.",
      verified: false,
    },
    category: "Policy",
    tags: ["Industrial Corridors", "Policy", "Logistics", "Infrastructure"],
    toc: ["Overview", "Key Corridors", "Real Estate Impact", "Investment Opportunities"],
    sections: [
      {
        id: "overview",
        heading: "Overview",
        body: "India's new industrial corridor policy is one of the most ambitious infrastructure programmes in the country's history, targeting the development of world-class industrial townships across multiple states.",
        highlight: null,
      },
      {
        id: "corridors",
        heading: "1. Key Corridors",
        body: "The Delhi-Mumbai Industrial Corridor (DMIC), Chennai-Bengaluru Industrial Corridor (CBIC), and Amritsar-Kolkata Industrial Corridor (AKIC) are the flagship projects driving this initiative.",
        highlight: "DMIC alone is expected to generate over $90 billion in industrial output by 2030.",
        highlightIcon: "🏗️",
      },
      {
        id: "impact",
        heading: "2. Real Estate Impact",
        body: "Land values along these corridors are appreciating rapidly. Warehousing, logistics parks, and worker housing are among the fastest-growing asset classes in these regions.",
        highlight: null,
      },
      {
        id: "investment",
        heading: "3. Investment Opportunities",
        body: "Savvy investors are acquiring land parcels and developing logistics assets near corridor nodes. First-mover advantage is significant in these emerging markets.",
        highlight: "Early investors in corridor-adjacent land have seen 2–3x appreciation in some locations.",
        highlightIcon: "💰",
      },
    ],
  },
  {
    id: 6,
    tag: "GCC",
    tagColor: "bg-teal-600",
    title: "GCC Expansion in India: Key Drivers and Market Implications",
    excerpt: "Global Capability Centres are reshaping India's commercial office market — here's what you need to know.",
    date: "May 10, 2024",
    readTime: "8 min read",
    views: "2.1K views",
    heroImg: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1400&q=80",
    contentImg: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80",
    author: {
      name: "Priya Mehta",
      role: "Associate Director – Office Leasing",
      company: "CBRE India",
      location: "Hyderabad, Telangana, India",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
      bio: "Priya leads GCC advisory and office leasing for CBRE India, with deep expertise in Hyderabad and Bengaluru markets.",
      verified: true,
    },
    category: "GCC",
    tags: ["GCC", "Office Leasing", "Tech Sector", "Global Occupiers"],
    toc: ["Introduction", "Why India?", "Top GCC Cities", "Demand Outlook", "Challenges"],
    sections: [
      {
        id: "introduction",
        heading: "Introduction",
        body: "India has emerged as the world's premier Global Capability Centre (GCC) destination. With over 1,600 GCCs already operational, the country accounts for nearly 50% of the global GCC market.",
        highlight: null,
      },
      {
        id: "whyindia",
        heading: "1. Why India?",
        body: "A large English-speaking talent pool, competitive costs, improving infrastructure, and a supportive regulatory environment make India the top choice for global firms establishing capability centres.",
        highlight: "India produces over 1.5 million engineering graduates annually — an unmatched talent pipeline.",
        highlightIcon: "🎓",
      },
      {
        id: "cities",
        heading: "2. Top GCC Cities",
        body: "Bengaluru, Hyderabad, Pune, and Chennai dominate GCC activity. Mumbai and Delhi-NCR are also seeing growing interest from BFSI and consulting sector GCCs.",
        highlight: null,
      },
      {
        id: "outlook",
        heading: "3. Demand Outlook",
        body: "GCC office space demand is expected to touch 45–50 million sq ft by 2026. This will be a key driver of grade-A office absorption across India's top 6 cities.",
        highlight: "GCCs now account for nearly 35% of total office leasing in India.",
        highlightIcon: "📊",
      },
      {
        id: "challenges",
        heading: "4. Challenges",
        body: "Talent retention, rising rental costs in prime micro-markets, and infrastructure gaps in some cities remain challenges that need to be addressed to sustain GCC growth momentum.",
        highlight: null,
      },
    ],
  },
  {
    id: 7,
    tag: "OFFICE",
    tagColor: "bg-orange-500",
    title: "Bengaluru Office Market Sees 18% YoY Growth in Q1 2024",
    excerpt: "Bengaluru's office market recorded strong absorption in Q1 2024, led by GCC and tech sector demand.",
    date: "May 8, 2024",
    readTime: "5 min read",
    views: "890 views",
    heroImg: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80",
    contentImg: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    author: {
      name: "Sanjay Dutt",
      role: "MD & CEO",
      company: "Tata Realty",
      location: "Bengaluru, Karnataka, India",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80",
      bio: "Sanjay oversees Tata Realty's commercial portfolio and has been a key voice in Bengaluru's office market for over two decades.",
      verified: true,
    },
    category: "Office Market",
    tags: ["Bengaluru", "Office Market", "Q1 2024", "Commercial Real Estate"],
    toc: ["Market Overview", "Key Transactions", "Micro-Market Analysis", "Outlook"],
    sections: [
      {
        id: "overview",
        heading: "Market Overview",
        body: "Bengaluru's office market absorbed 4.2 million sq ft of grade-A space in Q1 2024, marking an 18% year-on-year growth. The city continues to lead India's commercial real estate landscape.",
        highlight: null,
      },
      {
        id: "transactions",
        heading: "1. Key Transactions",
        body: "Major deals in Q1 included a 500,000 sq ft pre-commitment by a leading US tech firm in Whitefield, and a 350,000 sq ft lease by a global BFSI GCC in Embassy Manyata.",
        highlight: "Pre-commitments accounted for 40% of total Q1 absorption — a sign of strong future demand.",
        highlightIcon: "🤝",
      },
      {
        id: "micromarkets",
        heading: "2. Micro-Market Analysis",
        body: "Outer Ring Road (ORR) and Whitefield remained the dominant micro-markets. CBD and SBD locations are seeing renewed interest from boutique firms and co-working operators.",
        highlight: null,
      },
      {
        id: "outlook",
        heading: "Outlook",
        body: "Bengaluru is expected to sustain strong absorption through 2024, with new supply of 12 million sq ft in the pipeline. Vacancy is expected to remain below 10% in prime micro-markets.",
        highlight: "Grade-A rentals in ORR are projected to grow 6–8% in 2024.",
        highlightIcon: "📈",
      },
    ],
  },
  {
    id: 8,
    tag: "INVESTMENTS",
    tagColor: "bg-purple-600",
    title: "Blackstone Doubles Down on Indian Logistics Assets in 2024",
    excerpt: "Blackstone's aggressive expansion in India's logistics sector signals strong conviction in the country's e-commerce and supply chain growth story.",
    date: "May 6, 2024",
    readTime: "4 min read",
    views: "1.1K views",
    heroImg: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1400&q=80",
    contentImg: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    author: {
      name: "Priya Mehta",
      role: "Associate Director – Office Leasing",
      company: "CBRE India",
      location: "Mumbai, Maharashtra, India",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
      bio: "Priya covers institutional investment trends and logistics real estate for CBRE India.",
      verified: true,
    },
    category: "Investments",
    tags: ["Blackstone", "Logistics", "Institutional Investment", "Warehousing"],
    toc: ["Background", "Key Acquisitions", "Why Logistics?", "Market Impact"],
    sections: [
      {
        id: "background",
        heading: "Background",
        body: "Blackstone, already India's largest commercial real estate owner, is significantly expanding its logistics portfolio in 2024, betting on the country's booming e-commerce and third-party logistics sectors.",
        highlight: null,
      },
      {
        id: "acquisitions",
        heading: "1. Key Acquisitions",
        body: "The firm has announced acquisitions totalling over 25 million sq ft of warehousing and logistics park space across key consumption hubs including Mumbai, Delhi-NCR, Bengaluru, and Hyderabad.",
        highlight: "Blackstone's India logistics portfolio is now the largest in the country at over 60 million sq ft.",
        highlightIcon: "🏭",
      },
      {
        id: "whylogistics",
        heading: "2. Why Logistics?",
        body: "India's logistics real estate market is being driven by rapid e-commerce growth, the China+1 manufacturing strategy, and increasing demand for grade-A warehousing from global retailers and 3PL players.",
        highlight: null,
      },
      {
        id: "impact",
        heading: "3. Market Impact",
        body: "Blackstone's aggressive expansion is setting new benchmarks for logistics asset quality and rental values. Other institutional players are following suit, driving professionalization of the sector.",
        highlight: "Logistics cap rates have compressed 150–200 bps over the past 3 years.",
        highlightIcon: "📉",
      },
    ],
  },
];

const relatedArticles = [
  {
    id: 2,
    tag: "INVESTMENTS",
    tagColor: "bg-purple-600",
    title: "Real Estate Investment Outlook 2024: Opportunities and Risk Factors",
    date: "May 18, 2024",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
  },
  {
    id: 3,
    tag: "SUSTAINABILITY",
    tagColor: "bg-green-600",
    title: "Sustainability in Real Estate: Building a Greener Tomorrow",
    date: "May 16, 2024",
    readTime: "7 min read",
    img: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&q=80",
  },
  {
    id: 6,
    tag: "GCC",
    tagColor: "bg-teal-600",
    title: "GCC Expansion in India: Key Drivers and Market Implications",
    date: "May 10, 2024",
    readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=400&q=80",
  },
  {
    id: 7,
    tag: "OFFICE",
    tagColor: "bg-orange-500",
    title: "Bengaluru Office Market Sees 18% YoY Growth in Q1 2024",
    date: "May 8, 2024",
    readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80",
  },
];

const popularTopics = [
  "Office Leasing Trends in NCR",
  "GCC Expansion in India",
  "Retail Market Outlook",
  "Logistics Growth Drivers",
  "Sustainability in CRE",
];

// ── helpers ───────────────────────────────────────────────────────────────────
function VerifiedBadge() {
  return (
    <svg className="w-4 h-4 text-blue-500 inline-block ml-0.5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

function ShareIcons() {
  return (
    <div className="flex items-center gap-2">
      <button className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:opacity-90 transition">
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </button>
      <button className="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition">
        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </button>
      <button className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center hover:opacity-90 transition">
        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      </button>
      <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#c9a84c] hover:text-[#c9a84c] transition text-gray-500">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      </button>
    </div>
  );
}

// ── page component ────────────────────────────────────────────────────────────
export default function ArticleDetailPage() {
  // ✅ FIX 1: Read the slug from URL params
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;

  // ✅ FIX 2: Find the article matching this slug/id
  const article = allArticles.find((a) => String(a.id) === String(slug));

  const [activeSection, setActiveSection] = useState(article?.toc?.[0] || "");
  const [expanded, setExpanded] = useState(false);
  const [email, setEmail] = useState("");

  // ✅ FIX 3: Handle article not found gracefully
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

  // Filter out current article from related
  const related = relatedArticles.filter((r) => r.id !== article.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">

      {/* ── HERO ── */}
      <div className="relative bg-gray-900 text-white overflow-hidden" style={{ minHeight: 300 }}>
        <img
          src={article.heroImg}
          alt="article hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className={`inline-block ${article.tagColor} text-white text-[10px] font-bold px-2.5 py-1 rounded tracking-wider mb-4`}>
            {article.tag}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-3 max-w-3xl">
            {article.title}
          </h1>
          <p className="text-gray-300 text-sm mb-4 max-w-xl">{article.excerpt}</p>
          <div className="flex items-center gap-3 text-xs text-gray-300 flex-wrap">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              {article.date}
            </span>
            <span>•</span>
            <span>{article.readTime}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
              </svg>
              {article.views}
            </span>
          </div>
        </div>
      </div>

      {/* ── BODY: 3-col layout ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">

          {/* LEFT: TOC */}
          <aside className="hidden lg:block w-52 flex-shrink-0">
            <div className="sticky top-20">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">On this page</p>
              <nav className="space-y-0.5">
                {article.toc.map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveSection(item)}
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

          {/* MIDDLE: article content */}
          <main className="flex-1 min-w-0">

            {/* Author card */}
            <div className="flex items-start justify-between gap-4 mb-6 p-4 border border-gray-100 rounded-xl bg-gray-50">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {article.author.name}
                    {article.author.verified && <VerifiedBadge />}
                  </p>
                  <p className="text-xs text-gray-500">{article.author.role}, {article.author.company}</p>
                  <p className="text-xs text-gray-400 flex items-center gap-0.5 mt-0.5">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    {article.author.location}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium hover:border-[#c9a84c] hover:text-[#c9a84c] transition text-gray-600">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" y1="8" x2="19" y2="14" /><line x1="22" y1="11" x2="16" y2="11" />
                  </svg>
                  Follow
                </button>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <span>Share:</span>
                  <ShareIcons />
                </div>
              </div>
            </div>

            {/* Article sections */}
            <div className="prose prose-sm max-w-none">
              {visibleSections.map((sec) => (
                <div key={sec.id} id={sec.id} className="mb-8">
                  {sec.heading === "Introduction" || sec.heading === "Overview" || sec.heading === "Background" ? (
                    <h2 className="text-xl font-bold text-gray-900 mb-3">{sec.heading}</h2>
                  ) : (
                    <h3 className="text-base font-bold text-gray-900 mb-2">{sec.heading}</h3>
                  )}
                  <p className="text-sm text-gray-700 leading-relaxed">{sec.body}</p>

                  {/* Content image after first section */}
                  {sec === visibleSections[0] && (
                    <img
                      src={article.contentImg}
                      alt="article visual"
                      className="w-full rounded-xl mt-4 mb-2 object-cover"
                      style={{ maxHeight: 320 }}
                    />
                  )}

                  {sec.highlight && (
                    <div className="mt-3 flex gap-3 bg-blue-50 border border-blue-100 rounded-lg p-3">
                      <span className="text-lg flex-shrink-0 mt-0.5">{sec.highlightIcon}</span>
                      <p className="text-xs text-blue-800 leading-relaxed">{sec.highlight}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Expand / collapse */}
            <div className="flex justify-center my-6">
              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-2 px-6 py-2.5 border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[#c9a84c] hover:text-[#c9a84c] transition font-medium"
              >
                {expanded ? "Show Less" : "Read Full Article"}
                <svg
                  className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Related Articles */}
            <div className="mt-10 border-t border-gray-100 pt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Related Articles</h2>
                <button
                  onClick={() => router.push("/knowledge-hub/articles")}
                  className="text-xs text-[#c9a84c] font-medium flex items-center gap-0.5 hover:underline"
                >
                  View all Articles
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {related.map((ra) => (
                  <article
                    key={ra.id}
                    className="group cursor-pointer"
                    onClick={() => router.push(`/knowledge-hub/articles/${ra.id}`)}
                  >
                    <div className="relative rounded-lg overflow-hidden mb-2 h-28">
                      <img src={ra.img} alt={ra.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      <span className={`absolute top-2 left-2 ${ra.tagColor} text-white text-[9px] font-bold px-1.5 py-0.5 rounded tracking-wide`}>
                        {ra.tag}
                      </span>
                    </div>
                    <h4 className="text-xs font-semibold text-gray-900 leading-snug group-hover:text-[#c9a84c] transition line-clamp-3">{ra.title}</h4>
                    <p className="text-[10px] text-gray-400 mt-1">{ra.date} · {ra.readTime}</p>
                  </article>
                ))}
              </div>
            </div>

          </main>

          {/* RIGHT: sidebar */}
          <aside className="hidden xl:block w-64 flex-shrink-0 space-y-6">

            {/* Newsletter */}
            <div className="bg-gray-900 text-white rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
                <p className="font-semibold text-sm">Stay Updated</p>
              </div>
              <p className="text-xs text-gray-400 mb-3">Subscribe to our newsletter and never miss important insights and updates.</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 outline-none mb-2 focus:border-[#c9a84c]"
              />
              <button className="w-full bg-[#c9a84c] hover:bg-[#b8973d] text-white text-xs font-medium py-2 rounded-lg transition">
                Subscribe
              </button>
            </div>

            {/* Article Details */}
            <div className="border border-gray-100 rounded-xl p-5 space-y-4">
              <h3 className="font-semibold text-sm text-gray-900">Article Details</h3>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Category</p>
                <span className="inline-block bg-blue-50 text-blue-700 text-xs px-2.5 py-0.5 rounded-full font-medium">{article.category}</span>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Reading Time</p>
                <p className="text-xs text-gray-800 font-medium">{article.readTime}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Published On</p>
                <p className="text-xs text-gray-800 font-medium">{article.date}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Views</p>
                <p className="text-xs text-gray-800 font-medium">{article.views}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1.5">Tags</p>
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full hover:bg-amber-50 hover:text-[#c9a84c] cursor-pointer transition">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* About the Author */}
            <div className="border border-gray-100 rounded-xl p-5">
              <h3 className="font-semibold text-sm text-gray-900 mb-3">About the Author</h3>
              <div className="flex items-start gap-3 mb-3">
                <img src={article.author.avatar} alt={article.author.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-gray-900">
                    {article.author.name}
                    {article.author.verified && <VerifiedBadge />}
                  </p>
                  <p className="text-[11px] text-gray-500">{article.author.role}</p>
                  <p className="text-[11px] text-gray-500">{article.author.company}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5 flex items-center gap-0.5">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    {article.author.location}
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 leading-relaxed mb-3">{article.author.bio}</p>
              <button className="w-full border border-gray-200 text-xs text-gray-600 py-2 rounded-lg hover:border-[#c9a84c] hover:text-[#c9a84c] transition font-medium">
                View Profile
              </button>
            </div>

            {/* Share this Article */}
            <div className="border border-gray-100 rounded-xl p-5">
              <h3 className="font-semibold text-sm text-gray-900 mb-3">Share this Article</h3>
              <ShareIcons />
            </div>

            {/* Popular Topics */}
            <div className="border border-gray-100 rounded-xl p-5">
              <h3 className="font-semibold text-sm text-gray-900 mb-3">Popular Topics</h3>
              <div className="space-y-1">
                {popularTopics.map((topic) => (
                  <button
                    key={topic}
                    className="w-full flex items-center justify-between text-xs text-gray-600 py-1.5 border-b border-gray-50 hover:text-[#c9a84c] transition group"
                  >
                    {topic}
                    <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#c9a84c] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}