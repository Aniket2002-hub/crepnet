import Link from "next/link";

// 1. Replicated your exact data array so all 6 reports pull correctly on click
const reportsData = [
  {
    id: 1,
    slug: "india-residential-market-outlook-h1-2024",
    title: "India Residential Market Outlook H1 2024",
    subtitle: "Deep dive into luxury, mid and affordable segments across 8 cities",
    date: "June 2024", type: "Market Report", pages: "56 pages",
    gradient: "from-rose-800 to-rose-950",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    tag: "RESIDENTIAL",
  },
  {
    id: 2,
    slug: "india-coworking-flex-space-report-2024",
    title: "India Coworking & Flex Space Report 2024",
    subtitle: "Operators, occupiers and the evolving demand landscape",
    date: "June 2024", type: "Research Report", pages: "44 pages",
    gradient: "from-indigo-800 to-indigo-950",
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
    tag: "COWORKING",
  },
  {
    id: 3,
    slug: "data-centre-real-estate-india-2024",
    title: "Data Centre Real Estate in India 2024",
    subtitle: "Land, power and policy shaping hyperscale growth",
    date: "May 2024", type: "Sector Report", pages: "38 pages",
    gradient: "from-violet-800 to-violet-950",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    tag: "DATA CENTRES",
  },
  {
    id: 4,
    slug: "india-hospitality-sector-investment-report-2024",
    title: "India Hospitality Sector Investment Report 2024",
    subtitle: "Cap rates, RevPAR trends and PE activity in hotels",
    date: "May 2024", type: "Investment Report", pages: "48 pages",
    gradient: "from-amber-800 to-amber-950",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    tag: "HOSPITALITY",
  },
  {
    id: 5,
    slug: "proptech-india-investment-landscape-2024",
    title: "PropTech India Investment Landscape 2024",
    subtitle: "VC flows, startup ecosystem and emerging verticals",
    date: "April 2024", type: "Research Report", pages: "34 pages",
    gradient: "from-cyan-800 to-cyan-950",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    tag: "PROPTECH",
  },
  {
    id: 6,
    slug: "infrastructure-real-estate-convergence-2024",
    title: "Infrastructure & Real Estate Convergence 2024",
    subtitle: "How Gati Shakti and corridor projects reshape property markets",
    date: "April 2024", type: "Policy Report", pages: "52 pages",
    gradient: "from-yellow-800 to-yellow-950",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    tag: "INFRASTRUCTURE",
  },
];

export default async function ReportDetailPage({ params }) {
  const { slug } = await params;
  
  // Find the exact matching report object using the active slug
  const report = reportsData.find((r) => r.slug === slug);

  // Fallback state if a user types an invalid slug into the URL bar
  if (!report) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-sans">
        <h1 className="text-xl font-bold text-gray-800 mb-4">Report Not Found</h1>
        <Link href="/knowledge-hub/reports" className="px-5 py-2 bg-[#c9a84c] text-white rounded-lg text-sm">
          Return to Reports
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans pb-16">
      {/* Dynamic Styled Hero Section with Matching Gradient & Image */}
      <div className="relative bg-gray-900 text-white overflow-hidden min-h-[340px] flex items-center">
        <img
          src={report.img}
          alt={report.title}
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${report.gradient} opacity-85`} />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
          <Link 
            href="/knowledge-hub/reports" 
            className="group inline-flex items-center gap-2 text-xs text-white/80 hover:text-[#c9a84c] mb-6 transition-colors font-medium tracking-wide uppercase"
          >
            <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Reports
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/15 text-white text-[10px] font-semibold px-3 py-1 rounded-full border border-white/20 uppercase tracking-wider">
              {report.type}
            </span>
            <span className="bg-[#c9a84c] text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider">
              {report.tag}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white max-w-4xl leading-tight mb-3">
            {report.title}
          </h1>
          <p className="text-white/70 max-w-2xl text-sm sm:text-base font-light">
            {report.subtitle}
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left/Main Column: Abstract and Premium Overview Layout */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4 border-b pb-3 border-gray-100">
              Executive Summary & Market Analysis
            </h2>
            <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
              <p>
                This comprehensive research document outlines deep cyclical transitions observed across India's micro-markets during the first halves of the current fiscal timelines. Driven by macroeconomic variables, revised infrastructure blueprints, and targeted liquidity adjustments, the vertical segment displays resilient consolidation trajectories.
              </p>
              <p>
                As detailed indicators suggest shifts in institutional funding deployment patterns, specialized assets under this spectrum continue providing strong diversification safeguards for private capital.
              </p>
              <blockquote className="border-l-4 border-[#c9a84c] bg-amber-50/50 p-4 rounded-r-lg text-gray-700 italic my-6">
                "Strategic policy integration combined with corridor initiatives under Gati Shakti are structurally shifting valuation paradigms for real assets globally."
              </blockquote>
              <p>
                Interested parties can leverage the full dynamic set of metadata matrices provided in the comprehensive download suite attached horizontally to this framework tracking historical quarter-on-quarter changes.
              </p>
            </div>
          </div>

          {/* Right Column: Key Details & Download Widget Area */}
          <div className="flex flex-col gap-6">
            {/* Quick Metrics Cards */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                Report Blueprint
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-xs text-gray-500">Timeline</span>
                  <span className="text-sm font-semibold text-gray-800">{report.date}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-xs text-gray-500">Length</span>
                  <span className="text-sm font-semibold text-gray-800">{report.pages}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-50">
                  <span className="text-xs text-gray-500">Access Tier</span>
                  <span className="text-xs bg-emerald-50 text-emerald-700 font-medium px-2 py-0.5 rounded-md border border-emerald-100">
                    Complimentary
                  </span>
                </div>
              </div>

              {/* Action Call Button matching original Gold styling */}
              <button className="w-full mt-6 bg-[#c9a84c] hover:bg-[#b8973d] text-white py-3 px-4 rounded-lg text-xs font-semibold tracking-wider uppercase shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download Full Document
              </button>
            </div>
            
            {/* Context Notice Box */}
            <div className="bg-gray-900 text-white rounded-xl p-5 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 translate-x-3 translate-y-3 opacity-10 text-white">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                </svg>
              </div>
              <h4 className="text-xs font-bold text-[#c9a84c] uppercase tracking-wide mb-1">Confidential Intelligence</h4>
              <p className="text-[11px] text-gray-400 leading-normal">
                All data matrices, visual graphs, and statistical projections are copyrighted resources. Usage inside derivative portfolios requires clear attribute tags.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}