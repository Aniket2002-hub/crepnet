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
  Building2,
  Map,
  Download,
  Users,
  Target,
  Award,
  FileText,
  Handshake,
  User,
  ShieldCheck,
  TrendingUp,
  BarChart,
  ClipboardList,
  Search
} from 'lucide-react';

export default function ServiceProviderProfile({ params }) {
  // Using dummy data based on the provided design image for "ProSpace Advisors".
  // In a real application, you would fetch data using `params.slug`.
  const { slug } = params;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* ── HERO SECTION ── */}
      <section className="relative bg-[#05152D] pt-6 flex flex-col">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <img 
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#05152D]"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col">
          
          {/* Back Button */}
          <Link href="/companies/service-providers" className="flex items-center text-white/80 hover:text-white text-sm font-medium mb-10 w-max transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Directory
          </Link>

          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-end pb-8">
            
            {/* Profile Logo Box */}
            <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex-shrink-0 w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center">
                {/* Hexagon/Building Logo Graphic */}
                <div className="relative w-12 h-14 mb-2">
                  <div className="absolute inset-0 bg-[#0B1F3A] clip-hexagon flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="absolute top-0 right-0 w-4 h-full bg-[#C59B46] clip-polygon"></div>
                </div>
                <span className="font-bold text-[#0B1F3A] text-sm md:text-base tracking-widest leading-none block mb-1">PROSPACE</span>
                <span className="font-medium text-slate-400 text-[8px] md:text-[10px] tracking-[0.3em] uppercase block">ADVISORS</span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-white pb-2">
              <div className="inline-flex items-center bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                Verified Service Provider
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">ProSpace Advisors</h1>
              <p className="text-white/80 text-lg mb-4 font-medium">Expert advice. Smarter real estate decisions.</p>
              
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs md:text-[13px] text-white/70">
                <div className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" /> Mumbai, Maharashtra, India</div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
                <div className="flex items-center"><Globe className="w-4 h-4 mr-1.5" /> www.prospaceadvisors.com</div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
                <div className="flex items-center"><Mail className="w-4 h-4 mr-1.5" /> contact@prospaceadvisors.com</div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
                <div className="flex items-center"><Phone className="w-4 h-4 mr-1.5" /> +91 22 6789 4321</div>
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
              <button className="text-white/60 hover:text-white py-4 whitespace-nowrap transition-colors">Services</button>
              <button className="text-white/60 hover:text-white py-4 whitespace-nowrap transition-colors">Team</button>
              <button className="text-white/60 hover:text-white py-4 whitespace-nowrap transition-colors">Milestones</button>
              <button className="text-white/60 hover:text-white py-4 whitespace-nowrap transition-colors">Case Studies</button>
              <button className="text-white/60 hover:text-white py-4 whitespace-nowrap transition-colors">Insights</button>
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
                <h2 className="text-lg font-bold text-[#0B1F3A] mb-4">About ProSpace Advisors</h2>
                <div className="text-[13px] text-slate-600 space-y-4 leading-relaxed mb-8">
                  <p>ProSpace Advisors is a leading real estate consulting and advisory firm providing end-to-end solutions across the commercial real estate lifecycle.</p>
                  <p>We partner with developers, investors, occupiers and retail brands to deliver strategic advisory, transaction support, project management and valuation services.</p>
                </div>
                {/* Stats Grid (3x2) */}
                <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <User className="w-5 h-5 text-[#C59B46]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-sm">15+</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">Years Experience</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <Building2 className="w-5 h-5 text-[#C59B46]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-sm">250+</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">Projects Advised</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <ClipboardList className="w-5 h-5 text-[#C59B46]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-sm">50+</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">Professional Experts</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <Handshake className="w-5 h-5 text-[#C59B46]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-sm">300+</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">Clients Served</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <MapPin className="w-5 h-5 text-[#C59B46]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-sm">20+</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5 leading-tight">Cities Covered</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <Globe className="w-5 h-5 text-[#C59B46]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-sm">International</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">Clientele</div>
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
                    <div className="font-medium text-[#0B1F3A]">2009</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Headquarters</div>
                    <div className="font-medium text-[#0B1F3A]">Mumbai, Maharashtra</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Team Size</div>
                    <div className="font-medium text-[#0B1F3A]">180+ Professionals</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Presence</div>
                    <div className="font-medium text-[#0B1F3A]">20+ Cities in India</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">International Presence</div>
                    <div className="font-medium text-[#0B1F3A]">5 Countries</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Annual Revenue</div>
                    <div className="font-medium text-[#0B1F3A]">₹120+ Cr</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Website</div>
                    <div className="font-medium text-[#0B1F3A]">www.prospaceadvisors.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Featured Services & Core Expertise */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
              
              {/* Featured Services (span 7) */}
              <div className="xl:col-span-7">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold text-[#0B1F3A]">Featured Services</h3>
                  <Link href="#" className="text-[#0077b5] text-sm font-semibold flex items-center hover:underline">
                    View all services <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                  </Link>
                </div>

                <div className="relative">
                  <button className="absolute -left-4 top-[35%] -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md z-10 text-gray-600 hover:text-black">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="absolute -right-4 top-[35%] -translate-y-1/2 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md z-10 text-gray-600 hover:text-black">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1">
                    {/* Service 1 */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm group flex flex-col h-full">
                      <div className="h-28 relative overflow-hidden shrink-0">
                        <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-2 left-2 bg-[#0B1F3A] text-white text-[10px] font-bold px-2 py-0.5 rounded">Advisory</span>
                      </div>
                      <div className="p-3 flex flex-col flex-1">
                        <h4 className="font-bold text-sm text-[#0B1F3A] mb-1">Strategic Advisory</h4>
                        <div className="text-[11px] text-slate-500 mb-3 leading-tight flex-1">Market entry, expansion strategy, and portfolio planning.</div>
                        <div className="flex items-center text-[11px] font-semibold text-[#0077b5] group-hover:text-blue-800 transition-colors">
                          Learn more <ArrowLeft className="w-3.5 h-3.5 ml-1 rotate-180" />
                        </div>
                      </div>
                    </div>
                    {/* Service 2 */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm group flex flex-col h-full">
                      <div className="h-28 relative overflow-hidden shrink-0">
                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-2 left-2 bg-[#0B1F3A] text-white text-[10px] font-bold px-2 py-0.5 rounded">Transaction Support</span>
                      </div>
                      <div className="p-3 flex flex-col flex-1">
                        <h4 className="font-bold text-sm text-[#0B1F3A] mb-1">Transaction Advisory</h4>
                        <div className="text-[11px] text-slate-500 mb-3 leading-tight flex-1">End-to-end support for leasing, sales and acquisitions.</div>
                        <div className="flex items-center text-[11px] font-semibold text-[#0077b5] group-hover:text-blue-800 transition-colors">
                          Learn more <ArrowLeft className="w-3.5 h-3.5 ml-1 rotate-180" />
                        </div>
                      </div>
                    </div>
                    {/* Service 3 */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm group flex flex-col h-full">
                      <div className="h-28 relative overflow-hidden shrink-0">
                        <img src="https://images.unsplash.com/photo-1541888086925-0c13bb1047d3?q=80&w=2080" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-2 left-2 bg-[#0B1F3A] text-white text-[10px] font-bold px-2 py-0.5 rounded">Project Management</span>
                      </div>
                      <div className="p-3 flex flex-col flex-1">
                        <h4 className="font-bold text-sm text-[#0B1F3A] mb-1">Project Management</h4>
                        <div className="text-[11px] text-slate-500 mb-3 leading-tight flex-1">Planning, execution and delivery for commercial projects.</div>
                        <div className="flex items-center text-[11px] font-semibold text-[#0077b5] group-hover:text-blue-800 transition-colors">
                          Learn more <ArrowLeft className="w-3.5 h-3.5 ml-1 rotate-180" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Expertise (span 5) */}
              <div className="xl:col-span-5 bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-max">
                <h3 className="font-bold text-[#0B1F3A] mb-6">Core Expertise</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-slate-700">Real Estate Advisory</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Handshake className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-slate-700">Transaction Services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <BarChart className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-slate-700">Valuation & Appraisal</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ClipboardList className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-slate-700">Project Management</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Search className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-slate-700">Research & Market Intelligence</span>
                  </li>
                  <li className="flex items-center gap-3 pt-1">
                    <Building2 className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-slate-700">Tenant Representation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Row 3: Bottom Banner */}
            <div className="bg-[#05152D] rounded-xl p-8 text-white relative overflow-hidden shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="font-bold text-[17px] mb-6 tracking-wide">Why Partner with ProSpace Advisors?</h3>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-6 text-[10px] leading-relaxed text-white/70 text-center md:text-left">
                  <div className="flex flex-col items-center md:items-start">
                    <Target className="w-6 h-6 text-[#C59B46] mb-3" strokeWidth={1.5} />
                    <strong className="text-white block mb-1">Deep Market</strong>
                    Knowledge & Industry Insights
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <Users className="w-6 h-6 text-[#C59B46] mb-3" strokeWidth={1.5} />
                    <strong className="text-white block mb-1">Strong Network</strong>
                    of Owners, Tenants & Investors
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <Award className="w-6 h-6 text-[#C59B46] mb-3" strokeWidth={1.5} />
                    <strong className="text-white block mb-1">Proven Track Record</strong>
                    of Successful Transactions
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <BarChart className="w-6 h-6 text-[#C59B46] mb-3" strokeWidth={1.5} />
                    <strong className="text-white block mb-1">Data-Driven</strong>
                    Approach for Better Decision Making
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <Handshake className="w-6 h-6 text-[#C59B46] mb-3" strokeWidth={1.5} />
                    <strong className="text-white block mb-1">End-to-End Support</strong>
                    Across the Real Estate Lifecycle
                  </div>
                  <div className="flex flex-col items-center md:items-start">
                    <ShieldCheck className="w-6 h-6 text-[#C59B46] mb-3" strokeWidth={1.5} />
                    <strong className="text-white block mb-1">Ethical, Transparent</strong>
                    & Client-Focused Partnership
                  </div>
                </div>
              </div>
              
              {/* Darker CTA Box */}
              <div className="bg-[#0A192F] p-6 rounded-xl border border-white/10 w-full lg:w-64 shrink-0 text-center">
                <h4 className="text-[#C59B46] font-bold text-sm mb-2">Let's Work Together</h4>
                <p className="text-[11px] text-white/70 mb-5 leading-relaxed">Connect with us to leverage our expertise and create value for your real estate goals.</p>
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
                Premium Service Provider
              </div>
              <p className="text-[13px] text-slate-600 mb-5 leading-relaxed">
                ProSpace Advisors is a Premium Service Provider Member of CREPNET.
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
                  <div className="font-bold text-[#0B1F3A] text-sm">March 2022</div>
                </div>
              </div>
            </div>

            {/* Profile Highlights Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-bold text-[#0B1F3A] mb-5">Profile Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-slate-600">Profile Views</span>
                  <span className="font-bold text-[#0B1F3A]">2,850</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-slate-600">Connections</span>
                  <span className="font-bold text-[#0B1F3A]">196</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-slate-600">Leads Received</span>
                  <span className="font-bold text-[#0B1F3A]">78</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-slate-600">Enquiries</span>
                  <span className="font-bold text-[#0B1F3A]">41</span>
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
                  <span className="text-[13px] font-semibold text-slate-700 group-hover:text-[#0077b5]">Service Portfolio</span>
                  <Download className="w-4 h-4 text-slate-400 group-hover:text-[#0077b5]" />
                </button>
                <button className="w-full flex items-center justify-between px-4 py-3 border border-gray-200 hover:border-[#0077b5] hover:bg-blue-50/50 rounded-lg group transition-colors">
                  <span className="text-[13px] font-semibold text-slate-700 group-hover:text-[#0077b5]">Credentials Document</span>
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
