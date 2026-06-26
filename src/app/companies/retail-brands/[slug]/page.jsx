import React from 'react';
import Link from 'next/link';
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
  Store,
  Building2,
  Map,
  Leaf,
  Download,
  Users,
  Target,
  Award,
  Compass,
  Heart,
  FileText,
  Clock,
  TrendingUp,
  LineChart,
  Lightbulb,
  ShoppingBag
} from 'lucide-react';

export default function RetailBrandProfile({ params }) {
 
  const { slug } = params;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* ── HERO SECTION ── */}
      <section className="relative bg-[#05152D] pt-6 flex flex-col">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <img 
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#05152D]"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col">
          
          {/* Back Button */}
          <Link href="/companies/retail-brands" className="flex items-center text-white/80 hover:text-white text-sm font-medium mb-10 w-max transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Directory
          </Link>

          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-end pb-8">
            
            {/* Profile Logo Box */}
            <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex-shrink-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
              <div className="text-center">
                <span className="font-light text-[#0B1F3A] text-lg md:text-2xl tracking-[0.2em] leading-tight block mb-1">URBAN</span>
                <span className="font-light text-[#0B1F3A] text-lg md:text-2xl tracking-[0.2em] leading-tight block mb-1">THREADS</span>
                <span className="font-bold text-slate-400 text-[8px] md:text-[10px] tracking-widest uppercase block">Fashion</span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-white pb-2">
              <div className="inline-flex items-center bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                Verified Retail Brand
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Urban Threads</h1>
              <p className="text-white/80 text-lg mb-4 font-medium">Redefining fashion. Expanding globally.</p>
              
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs md:text-[13px] text-white/70">
                <div className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" /> Mumbai, Maharashtra, India</div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
                <div className="flex items-center"><Globe className="w-4 h-4 mr-1.5" /> www.urbanthreads.com</div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
                <div className="flex items-center"><Mail className="w-4 h-4 mr-1.5" /> hello@urbanthreads.com</div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
                <div className="flex items-center"><Phone className="w-4 h-4 mr-1.5" /> +91 22 4567 8901</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 w-full md:w-auto pb-2">
              <button className="flex-1 md:flex-none flex items-center justify-center px-5 py-2.5 border border-white/30 hover:bg-white/10 text-white rounded-lg text-sm font-semibold transition-colors">
                <Share2 className="w-4 h-4 mr-2" />
                Share Profile
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center px-6 py-2.5 bg-[#C59B46] hover:bg-[#b0893b] text-white rounded-lg text-sm font-semibold transition-colors shadow-lg">
                <UserPlus className="w-4 h-4 mr-2" />
                Connect
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="w-full bg-[#030B18] border-t border-white/10 mt-auto text-white relative z-10">
          <div className="container mx-auto px-6 overflow-x-auto scrollbar-hide">
            <div className="flex items-center space-x-8 text-sm font-semibold">
              <button className="text-[#C59B46] border-b-2 border-[#C59B46] py-4 whitespace-nowrap">Overview</button>
              <button className="text-white/60 hover:text-white py-4 whitespace-nowrap transition-colors">Expansion Plans</button>
              <button className="text-white/60 hover:text-white py-4 whitespace-nowrap transition-colors">Team</button>
              <button className="text-white/60 hover:text-white py-4 whitespace-nowrap transition-colors">Milestones</button>
              <button className="text-white/60 hover:text-white py-4 whitespace-nowrap transition-colors">Media</button>
              <button className="text-white/60 hover:text-white py-4 whitespace-nowrap transition-colors">Sustainability</button>
              <button className="text-white/60 hover:text-white py-4 whitespace-nowrap transition-colors">Reviews</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN (70%) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Row 1: About & Snapshot */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* About Text */}
              <div>
                <h2 className="text-lg font-bold text-[#0B1F3A] mb-4">About Urban Threads</h2>
                <div className="text-[13px] text-slate-600 space-y-4 leading-relaxed mb-8">
                  <p>Urban Threads is one of India's leading fashion retail brands known for delivering contemporary styles, premium quality and exceptional customer experiences.</p>
                  <p>We are on an aggressive expansion journey across India and international markets, looking for the right partners, locations and opportunities to grow together.</p>
                </div>
                {/* Stats Grid (3x2) */}
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <Clock className="w-5 h-5 text-[#C59B46]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-sm">12+</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">Years in Retail</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <Building2 className="w-5 h-5 text-[#C59B46]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-sm">120+</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">Stores Across India</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <ShoppingBag className="w-5 h-5 text-[#C59B46]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-sm">8</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">International Markets</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <Heart className="w-5 h-5 text-[#C59B46]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-sm">45M+</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">Happy Customers</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <FileText className="w-5 h-5 text-[#C59B46]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-sm">1.8M sq ft</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5 leading-tight">Retail Space Operated</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <Users className="w-5 h-5 text-[#C59B46]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-sm">2500+</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">Team Members</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Snapshot Card */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-max">
                <h3 className="font-bold text-[#0B1F3A] mb-6">Company Snapshot</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Company Type</div>
                    <div className="font-medium text-[#0B1F3A]">Private Limited</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Founded</div>
                    <div className="font-medium text-[#0B1F3A]">2012</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Headquarters</div>
                    <div className="font-medium text-[#0B1F3A]">Mumbai, Maharashtra</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Team Size</div>
                    <div className="font-medium text-[#0B1F3A]">2500+ Professionals</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Presence</div>
                    <div className="font-medium text-[#0B1F3A]">100+ Cities in India</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">International Presence</div>
                    <div className="font-medium text-[#0B1F3A]">8 Countries</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Annual Revenue</div>
                    <div className="font-medium text-[#0B1F3A]">₹850+ Cr</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Website</div>
                    <div className="font-medium text-[#0B1F3A]">www.urbanthreads.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Featured Stores & Core Strengths */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
              
              {/* Featured Store Locations (span 7) */}
              <div className="xl:col-span-7">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold text-[#0B1F3A]">Featured Store Locations</h3>
                  <Link href="#" className="text-[#0077b5] text-sm font-semibold flex items-center hover:underline">
                    View all locations <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                  </Link>
                </div>

                <div className="relative">
                  <button className="absolute -left-4 top-[35%] -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md z-10 text-gray-600 hover:text-black">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="absolute -right-4 top-[35%] -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md z-10 text-gray-600 hover:text-black">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Store 1 */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm group">
                      <div className="h-32 relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-2 left-2 bg-[#0B1F3A] text-white text-[10px] font-bold px-2 py-0.5 rounded">Flagship Store</span>
                      </div>
                      <div className="p-3">
                        <h4 className="font-bold text-sm text-[#0B1F3A] truncate mb-1">Phoenix Palladium</h4>
                        <div className="text-[11px] text-slate-500 mb-2 leading-tight">Mumbai<br/>25,000 sq ft</div>
                        <div className="flex items-center text-[10px] font-semibold text-emerald-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-1.5"></div> Operational
                        </div>
                      </div>
                    </div>
                    {/* Store 2 */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm group">
                      <div className="h-32 relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">High Street Store</span>
                      </div>
                      <div className="p-3">
                        <h4 className="font-bold text-sm text-[#0B1F3A] truncate mb-1">Select Citywalk</h4>
                        <div className="text-[11px] text-slate-500 mb-2 leading-tight">New Delhi<br/>12,500 sq ft</div>
                        <div className="flex items-center text-[10px] font-semibold text-emerald-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-1.5"></div> Operational
                        </div>
                      </div>
                    </div>
                    {/* Store 3 */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm group">
                      <div className="h-32 relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1555529771-835f59bfc50c?q=80&w=1974" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-2 left-2 bg-[#C59B46] text-white text-[10px] font-bold px-2 py-0.5 rounded">Upcoming Store</span>
                      </div>
                      <div className="p-3">
                        <h4 className="font-bold text-sm text-[#0B1F3A] truncate mb-1">Forum Mall</h4>
                        <div className="text-[11px] text-slate-500 mb-2 leading-tight">Bengaluru<br/>18,000 sq ft</div>
                        <div className="flex items-center text-[10px] font-semibold text-[#C59B46]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C59B46] mr-1.5"></div> Under Construction
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Strengths (span 5) */}
              <div className="xl:col-span-5 bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-max">
                <h3 className="font-bold text-[#0B1F3A] mb-6">Core Strengths</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-slate-700">Strong Brand Equity</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Store className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-slate-700">Wide Product Range</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Map className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-slate-700">Omnichannel Presence</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-slate-700">Customer-Centric Approach</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <LineChart className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-slate-700">Data-Driven Expansion</span>
                  </li>
                  <li className="flex items-center gap-3 pt-1">
                    <Leaf className="w-5 h-5 text-emerald-500" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-emerald-600">Sustainable Fashion Practices</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Row 3: Bottom Banner */}
            <div className="bg-[#05152D] rounded-xl p-8 text-white relative overflow-hidden shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="font-bold text-[17px] mb-6 tracking-wide">Why Partner with Urban Threads?</h3>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-6 text-[10px] leading-relaxed text-white/70 text-center md:text-left">
                  <div className="flex flex-col items-center md:items-start">
                    <Award className="w-6 h-6 text-[#C59B46] mb-3" strokeWidth={1.5} />
                    <strong className="text-white block mb-1">Established &</strong>
                    Trusted Fashion Retail Brand
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <TrendingUp className="w-6 h-6 text-[#C59B46] mb-3" strokeWidth={1.5} />
                    <strong className="text-white block mb-1">Rapid Expansion</strong>
                    Across India & Global Markets
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <Leaf className="w-6 h-6 text-[#C59B46] mb-3" strokeWidth={1.5} />
                    <strong className="text-white block mb-1">High Footfall</strong>
                    Locations & Strong Sales Performance
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <Leaf className="w-6 h-6 text-[#C59B46] mb-3" strokeWidth={1.5} />
                    <strong className="text-white block mb-1">Marketing & Brand</strong>
                    Collaboration Opportunities
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <Target className="w-6 h-6 text-[#C59B46] mb-3" strokeWidth={1.5} />
                    <strong className="text-white block mb-1">Long-Term Strategic</strong>
                    Partnerships
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <Lightbulb className="w-6 h-6 text-[#C59B46] mb-3" strokeWidth={1.5} />
                    <strong className="text-white block mb-1">Innovation & Trend</strong>
                    Driven Collections
                  </div>
                </div>
              </div>
              
              {/* Darker CTA Box */}
              <div className="bg-[#0A192F] p-6 rounded-xl border border-white/10 w-full lg:w-64 shrink-0 text-center">
                <h4 className="text-[#C59B46] font-bold text-sm mb-2">Let's Grow Together</h4>
                <p className="text-[11px] text-white/70 mb-5 leading-relaxed">Connect with us to explore store locations, partnerships and expansion opportunities.</p>
                <button className="w-full py-2.5 bg-[#C59B46] hover:bg-[#b0893b] text-white rounded-lg text-sm font-semibold transition-colors shadow-lg">
                  Connect with Us
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR (30%) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Membership Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 relative overflow-hidden">
              <h3 className="font-bold text-[#0B1F3A] mb-4">CREPNET Membership</h3>
              <div className="inline-block bg-[#C59B46] text-white text-[11px] uppercase tracking-wide font-bold px-3 py-1 rounded shadow-sm mb-5">
                Premium Retail Brand
              </div>
              <p className="text-[13px] text-slate-600 mb-5 leading-relaxed">
                Urban Threads is a Premium Retail Brand Member of CREPNET.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2 text-[13px] font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Verified & Trusted
                </li>
                <li className="flex items-start gap-2 text-[13px] font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Featured Visibility
                </li>
                <li className="flex items-start gap-2 text-[13px] font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Access to Exclusive Leads
                </li>
                <li className="flex items-start gap-2 text-[13px] font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Invitations to Events
                </li>
                <li className="flex items-start gap-2 text-[13px] font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Market Intelligence Access
                </li>
              </ul>
              <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                <Award className="w-8 h-8 text-[#C59B46]" strokeWidth={1.5} />
                <div>
                  <div className="text-[11px] text-slate-500 font-medium">Member Since</div>
                  <div className="font-bold text-[#0B1F3A] text-sm">July 2023</div>
                </div>
              </div>
            </div>

            {/* Profile Highlights Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-bold text-[#0B1F3A] mb-5">Profile Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-slate-600">Profile Views</span>
                  <span className="font-bold text-[#0B1F3A]">3,250</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-slate-600">Connections</span>
                  <span className="font-bold text-[#0B1F3A]">268</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-slate-600">Leads Received</span>
                  <span className="font-bold text-[#0B1F3A]">92</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-slate-600">Enquiries</span>
                  <span className="font-bold text-[#0B1F3A]">54</span>
                </div>
              </div>
            </div>

            {/* Download Profile Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-bold text-[#0B1F3A] mb-5">Download Profile</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between px-4 py-3 border border-gray-200 hover:border-[#0077b5] hover:bg-blue-50/50 rounded-lg group transition-colors">
                  <span className="text-[13px] font-semibold text-slate-700 group-hover:text-[#0077b5]">Company Brochure</span>
                  <Download className="w-4 h-4 text-slate-400 group-hover:text-[#0077b5]" />
                </button>
                <button className="w-full flex items-center justify-between px-4 py-3 border border-gray-200 hover:border-[#0077b5] hover:bg-blue-50/50 rounded-lg group transition-colors">
                  <span className="text-[13px] font-semibold text-slate-700 group-hover:text-[#0077b5]">Expansion Deck</span>
                  <Download className="w-4 h-4 text-slate-400 group-hover:text-[#0077b5]" />
                </button>
                <button className="w-full flex items-center justify-between px-4 py-3 border border-gray-200 hover:border-[#0077b5] hover:bg-blue-50/50 rounded-lg group transition-colors">
                  <span className="text-[13px] font-semibold text-slate-700 group-hover:text-[#0077b5]">Brand Media Kit</span>
                  <Download className="w-4 h-4 text-slate-400 group-hover:text-[#0077b5]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
