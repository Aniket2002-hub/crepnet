"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Calendar,
  Download,
  Quote,
  ClipboardList,
  Users,
  Globe,
  Lightbulb,
  ShieldCheck,
  Building2,
  BarChart3,
  Award,
} from "lucide-react";

// ---------------- DATA ----------------

const stats = [
  { icon: ClipboardList, value: "25+", label: "Surveys Conducted" },
  { icon: Users, value: "8,500+", label: "Participants" },
  { icon: Globe, value: "30+", label: "Cities Covered" },
  { icon: Lightbulb, value: "15+", label: "Industry Segments" },
];

const surveyTabs = ["All Surveys", "Active Surveys", "Upcoming Surveys", "Completed Surveys"];

const surveys = [
  {
    status: "ACTIVE",
    statusColor: "bg-purple-600",
    img: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=500&h=300&fit=crop",
    title: "India Office Market Outlook Survey 2024",
    description:
      "Share your perspective on office market trends, demand, and future outlook.",
    meta: { type: "time", text: "10 min" },
    meta2: { type: "closes", text: "Closes on 30 Jun 2024" },
    cta: "Participate Now",
    ctaStyle: "primary",
  },
  {
    status: "ACTIVE",
    statusColor: "bg-purple-600",
    img: "https://images.unsplash.com/photo-1555529771-7888783a18d3?w=500&h=300&fit=crop",
    title: "Retail Real Estate Trends Survey 2024",
    description:
      "Help us understand key trends in retail spaces, consumer behavior, and investments.",
    meta: { type: "time", text: "8 min" },
    meta2: { type: "closes", text: "Closes on 25 Jun 2024" },
    cta: "Participate Now",
    ctaStyle: "primary",
  },
  {
    status: "UPCOMING",
    statusColor: "bg-blue-600",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop",
    title: "Sustainability in Real Estate Survey 2024",
    description: "Your insights on sustainable practices and green building adoption.",
    meta: { type: "time", text: "7 min" },
    meta2: { type: "opens", text: "Opens on 05 Jul 2024" },
    cta: "Notify Me",
    ctaStyle: "secondary",
  },
  {
    status: "COMPLETED",
    statusColor: "bg-green-600",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&h=300&fit=crop",
    title: "Logistics & Industrial Real Estate Survey 2023",
    description: "Thank you to all participants for sharing valuable insights.",
    meta: null,
    meta2: null,
    cta: "View Results",
    ctaStyle: "secondary",
  },
];

const whyParticipate = [
  {
    icon: ClipboardList,
    title: "Contribute to Industry Insights",
    description: "Your input helps build comprehensive industry reports.",
  },
  {
    icon: BarChart3,
    title: "Benchmark Your Perspective",
    description: "See how your views compare with industry peers.",
  },
  {
    icon: Lightbulb,
    title: "Drive Meaningful Change",
    description: "Help identify opportunities and challenges that matter.",
  },
  {
    icon: Award,
    title: "Be Recognized",
    description: "Top contributors will be featured in our insights reports.",
  },
];

const resultTabs = [
  "Key Highlights",
  "Market Outlook",
  "Challenges",
  "Investment Intent",
  "Sustainability",
];

const highlights = [
  {
    value: "85%",
    description: "Respondents expect positive growth in the office market in 2024",
  },
  {
    value: "62%",
    description: "Plan to increase investments in office real estate",
  },
  {
    value: "56%",
    description: "Identify flexibility & hybrid work as the top factor shaping demand",
  },
  {
    value: "48%",
    description: "Consider sustainability as a key decision-making criteria",
  },
];

const marketOutlook = [
  { label: "Very Positive", value: 35, color: "#1e40af" },
  { label: "Positive", value: 50, color: "#16a34a" },
  { label: "Neutral", value: 10, color: "#f59e0b" },
  { label: "Negative", value: 4, color: "#ea580c" },
  { label: "Very Negative", value: 1, color: "#dc2626" },
];

const topFactors = [
  { label: "Flexibility & Hybrid Work", value: 56 },
  { label: "Location & Accessibility", value: 48 },
  { label: "Cost Optimization", value: 42 },
  { label: "Sustainability", value: 35 },
  { label: "Employee Well-being", value: 28 },
];

const testimonials = [
  {
    quote:
      "The survey gave us a platform to voice our perspectives and see how the industry is evolving. The insights reports are extremely valuable for strategic planning.",
    name: "Arvind Nandan",
    role: "Head – Leasing, Phoenix Mills Ltd.",
    img: "https://i.pravatar.cc/100?img=15",
  },
  {
    quote:
      "It's encouraging to see a data-driven approach to understanding real estate trends. The benchmarks help us stay ahead of the curve.",
    name: "Neha Iyer",
    role: "Senior Architect, Morphogenesis",
    img: "https://i.pravatar.cc/100?img=47",
  },
  {
    quote:
      "Participating in CREPNET surveys helps shape meaningful conversations and drive positive change across our industry.",
    name: "Vikram Kapoor",
    role: "CEO, Assetz Property Group",
    img: "https://i.pravatar.cc/100?img=33",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Data You Can Trust",
    description: "Surveys designed and analyzed by industry experts.",
  },
  {
    icon: Building2,
    title: "Wide Industry Participation",
    description: "Insights from a diverse network of real estate professionals.",
  },
  {
    icon: BarChart3,
    title: "Actionable Insights",
    description: "Turn data into decisions with expert analysis and reports.",
  },
  {
    icon: Users,
    title: "Secure & Confidential",
    description: "Your responses are secure and anonymity is always protected.",
  },
];

// ---------------- HELPERS ----------------

function buildDonutGradient(data) {
  let cumulative = 0;
  const stops = data.map((d) => {
    const start = cumulative;
    cumulative += d.value;
    return `${d.color} ${start}% ${cumulative}%`;
  });
  return `conic-gradient(${stops.join(", ")})`;
}

// ---------------- COMPONENTS ----------------

function SurveyCard({ survey }) {
  return (
    <div className="border border-gray-200 rounded-lg bg-white overflow-hidden flex flex-col">
      <div className="relative h-36">
        <img src={survey.img} alt={survey.title} className="w-full h-full object-cover" />
        <span
          className={`absolute top-3 left-3 text-white text-xs font-semibold px-2.5 py-1 rounded ${survey.statusColor}`}
        >
          {survey.status}
        </span>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-gray-900 leading-snug">{survey.title}</h3>
        <p className="text-sm text-gray-600 mt-2 flex-1">{survey.description}</p>

        {(survey.meta || survey.meta2) && (
          <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
            {survey.meta && (
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {survey.meta.text}
              </span>
            )}
            {survey.meta2 && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {survey.meta2.text}
              </span>
            )}
          </div>
        )}

        <button
          className={`mt-4 w-full text-sm font-medium py-2.5 rounded-md ${
            survey.ctaStyle === "primary"
              ? "bg-[#0B1F3A] text-white hover:bg-[#0B1F3A]/90"
              : "border border-gray-300 text-gray-800 hover:bg-gray-50"
          }`}
        >
          {survey.cta}
        </button>
      </div>
    </div>
  );
}

function Donut({ data }) {
  return (
    <div className="flex items-center gap-6">
      <div className="relative w-36 h-36 shrink-0">
        <div
          className="w-full h-full rounded-full"
          style={{ background: buildDonutGradient(data) }}
        />
        <div className="absolute inset-4 bg-white rounded-full flex flex-col items-center justify-center text-center">
          <span className="text-lg font-bold text-gray-900">1,250+</span>
          <span className="text-xs text-gray-500">Responses</span>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        {data.map((d) => (
          <div key={d.label} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-sm shrink-0"
              style={{ backgroundColor: d.color }}
            />
            <span className="text-gray-700 flex-1">{d.label}</span>
            <span className="font-semibold text-gray-900">{d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BarChartHorizontal({ data }) {
  return (
    <div className="space-y-3">
      {data.map((d) => (
        <div key={d.label}>
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-gray-700">{d.label}</span>
            <span className="font-semibold text-gray-900">{d.value}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5">
            <div
              className="bg-[#3b5998] h-2.5 rounded-full"
              style={{ width: `${d.value}%` }}
            />
          </div>
        </div>
      ))}
      <div className="flex justify-between text-xs text-gray-400 pt-1">
        {[0, 20, 40, 60, 80, 100].map((v) => (
          <span key={v}>{v}%</span>
        ))}
      </div>
    </div>
  );
}

// ---------------- MAIN PAGE ----------------

export default function SurveysPage() {
  const [activeSurveyTab, setActiveSurveyTab] = useState("All Surveys");
  const [activeResultTab, setActiveResultTab] = useState("Key Highlights");
  const [filters, setFilters] = useState({
    survey: "All Surveys",
    year: "All Years",
    city: "All Cities",
    segment: "All Segments",
  });
  const [activeDot, setActiveDot] = useState(0);

  const updateFilter = (key, value) => setFilters((prev) => ({ ...prev, [key]: value }));
  const resetFilters = () =>
    setFilters({
      survey: "All Surveys",
      year: "All Years",
      city: "All Cities",
      segment: "All Segments",
    });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#0B1F3A]">
        <img
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1600&h=500&fit=crop"
          alt="City skyline"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/85 to-[#0B1F3A]/40" />

        <div className="relative max-w-7xl mx-auto px-6 pt-6 pb-10">
          <div className="text-sm text-white/80 flex items-center gap-2 mb-6">
            <span>Home</span>
            <span>›</span>
            <span>Surveys</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h1 className="text-4xl font-bold text-white leading-tight">
                Surveys &amp; Results
              </h1>
              <p className="text-orange-400 font-semibold mt-2">
                Your Insights. Our Industry. Better Decisions.
              </p>
              <p className="text-white/80 mt-4 max-w-md">
                CREPNET Surveys bring the real estate community together to
                capture insights on trends, challenges, and opportunities
                shaping our industry.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-start gap-2">
                    <stat.icon className="w-6 h-6 text-orange-400 shrink-0" />
                    <div>
                      <p className="text-xl font-bold text-white">{stat.value}</p>
                      <p className="text-xs text-white/70">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* spacer for the image on the right (background covers it) */}
            <div className="hidden lg:block" />
          </div>

          {/* CTA Banner */}
          <div className="mt-8 bg-[#16294a] border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                <ClipboardList className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Your Opinion Shapes the Future</h3>
                <p className="text-white/70 text-sm mt-1">
                  Participate in our surveys and help drive meaningful change
                  across the real estate industry.
                </p>
              </div>
            </div>
            <button className="bg-orange-500 text-white font-medium px-6 py-2.5 rounded-md hover:bg-orange-600 whitespace-nowrap">
              Participate in a Survey
            </button>
          </div>
        </div>
      </div>

      {/* Browse Surveys + Why Participate */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <h2 className="text-xl font-bold text-gray-900">Browse Surveys</h2>
            <a href="#" className="text-blue-600 text-sm font-medium">
              View All Surveys →
            </a>
          </div>

          <div className="flex items-center gap-6 border-b border-gray-200 mb-6 overflow-x-auto">
            {surveyTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSurveyTab(tab)}
                className={`pb-3 text-sm font-medium whitespace-nowrap border-b-2 -mb-px transition-colors ${
                  activeSurveyTab === tab
                    ? "border-orange-500 text-orange-600"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {surveys.map((survey) => (
                <SurveyCard key={survey.title} survey={survey} />
              ))}
            </div>

            <button className="hidden lg:flex absolute -left-5 top-1/3 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-full items-center justify-center shadow-sm hover:bg-gray-50">
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button className="hidden lg:flex absolute -right-5 top-1/3 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-full items-center justify-center shadow-sm hover:bg-gray-50">
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Why Participate */}
        <div className="lg:col-span-1">
          <div className="bg-[#0B1F3A] rounded-xl p-6 h-full flex flex-col">
            <h3 className="text-white font-bold text-lg mb-5">Why Participate?</h3>

            <div className="space-y-5 flex-1">
              {whyParticipate.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-md flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{item.title}</p>
                    <p className="text-white/60 text-xs mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-6 border border-orange-400 text-orange-400 text-sm font-medium py-2.5 rounded-md hover:bg-orange-400/10">
              How It Works
            </button>
          </div>
        </div>
      </div>

      {/* Latest Survey Results */}
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <h2 className="text-xl font-bold text-gray-900">Latest Survey Results</h2>
            <a href="#" className="text-blue-600 text-sm font-medium">
              View All Results →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Featured Report Card */}
            <div className="md:col-span-1 border border-gray-200 rounded-lg bg-white overflow-hidden flex flex-col">
              <div className="relative h-40">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop"
                  alt="City skyline at dusk"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-semibold px-2.5 py-1 rounded">
                  FEATURED REPORT
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-gray-900 leading-snug">
                  India Office Market Outlook Survey Results 2024
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  A comprehensive analysis of current market sentiment, key
                  trends, and future outlook.
                </p>

                <div className="mt-4 text-xs text-gray-500 space-y-1">
                  <p className="font-medium text-gray-700">Survey Period</p>
                  <p>Apr 15 – May 15, 2024</p>
                  <p className="font-medium text-gray-700 pt-1">Participants</p>
                  <p>1,250+ Professionals</p>
                </div>

                <button className="mt-4 border border-gray-300 text-gray-800 text-sm font-medium py-2.5 rounded-md hover:bg-gray-50 flex items-center justify-center gap-2">
                  Download Report
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Results Detail */}
            <div className="md:col-span-2 flex flex-col">
              <div className="flex items-center gap-6 border-b border-gray-200 mb-5 overflow-x-auto">
                {resultTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveResultTab(tab)}
                    className={`pb-3 text-sm font-medium whitespace-nowrap border-b-2 -mb-px transition-colors ${
                      activeResultTab === tab
                        ? "border-orange-500 text-orange-600"
                        : "border-transparent text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Highlights grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {highlights.map((h) => (
                  <div key={h.description} className="border border-gray-200 rounded-lg p-4 bg-white">
                    <p className="text-2xl font-bold text-gray-900">{h.value}</p>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                      {h.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <h4 className="font-semibold text-gray-900">Market Outlook for 2024</h4>
                  <p className="text-xs text-gray-500 mt-1 mb-4">
                    How do you see the overall office market performance in 2024?
                  </p>
                  <Donut data={marketOutlook} />
                </div>

                <div className="border border-gray-200 rounded-lg p-4 bg-white">
                  <h4 className="font-semibold text-gray-900">Top Factors Influencing Office Demand</h4>
                  <p className="text-xs text-gray-500 mt-1 mb-4">
                    Select the top 3 factors influencing office space demand.
                  </p>
                  <BarChartHorizontal data={topFactors} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-5 sticky top-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Filters</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Survey</label>
                <div className="relative">
                  <select
                    value={filters.survey}
                    onChange={(e) => updateFilter("survey", e.target.value)}
                    className="w-full border border-gray-300 rounded-md pl-3 pr-8 py-2.5 text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/30"
                  >
                    <option>All Surveys</option>
                    <option>India Office Market Outlook Survey 2024</option>
                    <option>Retail Real Estate Trends Survey 2024</option>
                    <option>Sustainability in Real Estate Survey 2024</option>
                    <option>Logistics & Industrial Real Estate Survey 2023</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Year</label>
                <div className="relative">
                  <select
                    value={filters.year}
                    onChange={(e) => updateFilter("year", e.target.value)}
                    className="w-full border border-gray-300 rounded-md pl-3 pr-8 py-2.5 text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/30"
                  >
                    <option>All Years</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">City</label>
                <div className="relative">
                  <select
                    value={filters.city}
                    onChange={(e) => updateFilter("city", e.target.value)}
                    className="w-full border border-gray-300 rounded-md pl-3 pr-8 py-2.5 text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/30"
                  >
                    <option>All Cities</option>
                    <option>Mumbai</option>
                    <option>Bengaluru</option>
                    <option>Delhi NCR</option>
                    <option>Pune</option>
                    <option>Hyderabad</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Segment</label>
                <div className="relative">
                  <select
                    value={filters.segment}
                    onChange={(e) => updateFilter("segment", e.target.value)}
                    className="w-full border border-gray-300 rounded-md pl-3 pr-8 py-2.5 text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/30"
                  >
                    <option>All Segments</option>
                    <option>Developer</option>
                    <option>Consultant</option>
                    <option>Broker</option>
                    <option>Investor</option>
                    <option>Architect</option>
                    <option>Retailer</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <button className="w-full bg-[#0B1F3A] text-white text-sm font-medium py-2.5 rounded-md mt-5 hover:bg-[#0B1F3A]/90">
              Apply Filters
            </button>
            <button
              onClick={resetFilters}
              className="w-full text-blue-600 text-sm font-medium mt-3 text-center"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Insights From Our Community */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <h2 className="text-xl font-bold text-gray-900">Insights From Our Community</h2>
          <a href="#" className="text-blue-600 text-sm font-medium">
            View All Insights →
          </a>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col">
                <Quote className="w-6 h-6 text-gray-300 mb-3" />
                <p className="text-sm text-gray-700 flex-1 leading-relaxed">{t.quote}</p>
                <div className="flex items-center gap-3 mt-5">
                  <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="hidden lg:flex absolute -left-5 top-1/3 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-full items-center justify-center shadow-sm hover:bg-gray-50">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button className="hidden lg:flex absolute -right-5 top-1/3 -translate-y-1/2 w-9 h-9 bg-white border border-gray-200 rounded-full items-center justify-center shadow-sm hover:bg-gray-50">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {[0, 1, 2, 3].map((dot) => (
            <button
              key={dot}
              onClick={() => setActiveDot(dot)}
              className={`w-2 h-2 rounded-full transition-colors ${
                activeDot === dot ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Suggest a Topic Banner */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="bg-[#0B1F3A] rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
              <Lightbulb className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h3 className="text-white font-semibold">Have a Topic in Mind?</h3>
              <p className="text-white/70 text-sm mt-1">
                Suggest a survey topic you&apos;d like to see covered in our
                upcoming reports.
              </p>
            </div>
          </div>
          <button className="bg-orange-500 text-white font-medium px-6 py-2.5 rounded-md hover:bg-orange-600 whitespace-nowrap">
            Suggest a Topic
          </button>
        </div>
      </div>

      {/* Trust Points */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex items-start gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                <point.icon className="w-5 h-5 text-[#0B1F3A]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{point.title}</p>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}