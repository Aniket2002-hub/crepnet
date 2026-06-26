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
  Briefcase,
  Store,
  Map,
  Leaf,
  Download,
  Users,
  Target,
  Award,
  Compass
} from 'lucide-react';

export default function DeveloperProfile({ params }) {

  const { slug } = params;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* ── HERO SECTION ── */}
      <section className="relative bg-[#05152D] pt-6 flex flex-col ">
        {/* Background Image & Gradient */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#05152D]"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col">
          
          {/* Back Button */}
          <Link href="/companies/developers" className="flex items-center text-white/80 hover:text-white text-sm font-medium mb-10 w-max transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Directory
          </Link>

          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-end pb-8">
            
            {/* Profile Logo Box */}
            <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex-shrink-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
              <div className="text-center">
                <Building2 className="w-12 h-12 text-[#0077b5] mx-auto mb-1" />
                <span className="font-bold text-[#0B1F3A] text-xs md:text-sm tracking-wide leading-tight block">SUMERU<br/>DEVELOPERS</span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-white pb-2">
              <div className="inline-flex items-center bg-green-500/20 border border-green-500/30 text-green-400 text-xs font-semibold px-2.5 py-1 rounded-full mb-3">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                Verified Developer
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Sumeru Developers</h1>
              <p className="text-white/80 text-lg mb-4 font-medium">Building landmarks. Creating value.</p>
              
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs md:text-[13px] text-white/70">
                <div className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" /> Mumbai, Maharashtra, India</div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
                <div className="flex items-center"><Globe className="w-4 h-4 mr-1.5" /> www.sumerudevelopers.com</div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
                <div className="flex items-center"><Mail className="w-4 h-4 mr-1.5" /> info@sumerudevelopers.com</div>
                <div className="hidden sm:block w-1 h-1 rounded-full bg-white/30"></div>
                <div className="flex items-center"><Phone className="w-4 h-4 mr-1.5" /> +91 22 1234 5678</div>
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
        <div className="w-full bg-[#09152c] border-t border-white/10 mt-auto text-white relative z-10">
          <div className="container mx-auto px-6 overflow-x-auto scrollbar-hide">
            <div className="flex items-center space-x-8 text-sm font-semibold">
              <button className="text-[#C59B46] border-b-2 border-[#C59B46] py-4 whitespace-nowrap">Overview</button>
              <button className="text-white/60 hover:text-white py-4 whitespace-nowrap transition-colors">Projects</button>
              <button className="text-white/60 hover:text-white py-4 whitespace-nowrap transition-colors">Capabilities</button>
              <button className="text-white/60 hover:text-white py-4 whitespace-nowrap transition-colors">Team</button>
              <button className="text-white/60 hover:text-white py-4 whitespace-nowrap transition-colors">Milestones</button>
              <button className="text-white/60 hover:text-white py-4 whitespace-nowrap transition-colors">Credentials</button>
              <button className="text-white/60 hover:text-white py-4 whitespace-nowrap transition-colors">Media</button>
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
                <h2 className="text-lg font-bold text-[#0B1F3A] mb-4">About Sumeru Developers</h2>
                <div className="text-[13px] text-slate-600 space-y-4 leading-relaxed mb-8">
                  <p>With over 25 years of legacy, Sumeru Developers is a leading real estate development company delivering world-class commercial, retail, mixed-use and hospitality projects across India.</p>
                  <p>Our focus on innovation, design excellence and sustainability has earned us the trust of global occupiers, investors and partners.</p>
                </div>
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <svg className="w-5 h-5 text-[#C59B46]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-sm">25+</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">Years Experience</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <Building2 className="w-5 h-5 text-[#C59B46]" />
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-sm">18.5 Mn sq ft</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">Total Developed</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <svg className="w-5 h-5 text-[#C59B46]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-sm">12+</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">Ongoing Projects</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                      <svg className="w-5 h-5 text-[#C59B46]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                    </div>
                    <div>
                      <div className="font-bold text-[#0B1F3A] text-sm">₹ 8,500 Cr+</div>
                      <div className="text-[11px] text-slate-500 font-medium mt-0.5">Project Value</div>
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
                    <div className="font-medium text-[#0B1F3A]">1998</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Headquarters</div>
                    <div className="font-medium text-[#0B1F3A]">Mumbai, Maharashtra</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Team Size</div>
                    <div className="font-medium text-[#0B1F3A]">250+ Professionals</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">Presence</div>
                    <div className="font-medium text-[#0B1F3A]">12 Cities in India</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[13px]">
                    <div className="text-slate-500">RERA Registered</div>
                    <div className="font-medium text-[#0B1F3A]">Yes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Featured Projects & Capabilities */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
              
              {/* Featured Projects (span 7) */}
              <div className="xl:col-span-7">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold text-[#0B1F3A]">Featured Projects</h3>
                  <Link href="#" className="text-[#0077b5] text-sm font-semibold flex items-center hover:underline">
                    View all projects <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
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
                    {/* Project 1 */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm group">
                      <div className="h-32 relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-2 left-2 bg-[#0077b5] text-white text-[10px] font-bold px-2 py-0.5 rounded">Office</span>
                      </div>
                      <div className="p-3">
                        <h4 className="font-bold text-sm text-[#0B1F3A] truncate mb-1">Sumeru Business Park</h4>
                        <div className="text-[11px] text-slate-500 mb-2 leading-tight">Mumbai<br/>1.2 Mn sq ft</div>
                        <div className="flex items-center text-[10px] font-semibold text-[#C59B46]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C59B46] mr-1.5"></div> Under Construction
                        </div>
                      </div>
                    </div>
                    {/* Project 2 */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm group">
                      <div className="h-32 relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2126" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">Retail</span>
                      </div>
                      <div className="p-3">
                        <h4 className="font-bold text-sm text-[#0B1F3A] truncate mb-1">Sumeru High Street</h4>
                        <div className="text-[11px] text-slate-500 mb-2 leading-tight">Pune<br/>620,000 sq ft</div>
                        <div className="flex items-center text-[10px] font-semibold text-emerald-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-1.5"></div> Ongoing
                        </div>
                      </div>
                    </div>
                    {/* Project 3 */}
                    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm group">
                      <div className="h-32 relative overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2187" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className="absolute top-2 left-2 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">Mixed-Use</span>
                      </div>
                      <div className="p-3">
                        <h4 className="font-bold text-sm text-[#0B1F3A] truncate mb-1">Sumeru One World</h4>
                        <div className="text-[11px] text-slate-500 mb-2 leading-tight">Bengaluru<br/>2.5 Mn sq ft</div>
                        <div className="flex items-center text-[10px] font-semibold text-[#C59B46]">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#C59B46] mr-1.5"></div> Under Construction
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Capabilities (span 5) */}
              <div className="xl:col-span-5 bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-max">
                <h3 className="font-bold text-[#0B1F3A] mb-6">Core Capabilities</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-slate-700">Office Developments</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Store className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-slate-700">Retail & High Street</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Map className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-slate-700">Mixed-Use Developments</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Briefcase className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-slate-700">IT Parks & SEZ</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-slate-700">Hospitality Developments</span>
                  </li>
                  <li className="flex items-center gap-3 pt-1">
                    <Leaf className="w-5 h-5 text-emerald-500" strokeWidth={1.5} />
                    <span className="text-[13px] font-medium text-emerald-600">Sustainable & Green Buildings</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Row 3: Bottom Banner */}
            <div className="bg-[#05152D] rounded-xl p-8 text-white relative overflow-hidden shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="font-bold text-[17px] mb-6 tracking-wide">Why Partner with Sumeru Developers?</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-[10px] leading-relaxed text-white/70">
                  <div>
                    <Award className="w-6 h-6 text-[#C59B46] mb-3" strokeWidth={1.5} />
                    <strong className="text-white block mb-1">Proven Track Record</strong>
                    of delivering large-scale iconic projects
                  </div>
                  <div>
                    <Users className="w-6 h-6 text-[#C59B46] mb-3" strokeWidth={1.5} />
                    <strong className="text-white block mb-1">Strong Network</strong>
                    of occupiers, investors & global partners
                  </div>
                  <div>
                    <Compass className="w-6 h-6 text-[#C59B46] mb-3" strokeWidth={1.5} />
                    <strong className="text-white block mb-1">Design Excellence</strong>
                    and customer-centric approach
                  </div>
                  <div>
                    <CheckCircle2 className="w-6 h-6 text-[#C59B46] mb-3" strokeWidth={1.5} />
                    <strong className="text-white block mb-1">Timely Delivery</strong>
                    with uncompromised quality
                  </div>
                  <div>
                    <Leaf className="w-6 h-6 text-emerald-400 mb-3" strokeWidth={1.5} />
                    <strong className="text-white block mb-1">Sustainable</strong>
                    practices for a better tomorrow
                  </div>
                </div>
              </div>
              
              {/* Darker CTA Box */}
              <div className="bg-[#0A192F] p-6 rounded-xl border border-white/10 w-full lg:w-64 shrink-0 text-center">
                <h4 className="text-[#C59B46] font-bold text-sm mb-2">Let's Build the Future Together</h4>
                <p className="text-[11px] text-white/70 mb-5 leading-relaxed">Connect with us to explore partnership opportunities.</p>
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
                Premium Developer
              </div>
              <p className="text-[13px] text-slate-600 mb-5 leading-relaxed">
                Sumeru Developers is a Premium Developer Member of CREPNET.
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
                  <div className="font-bold text-[#0B1F3A] text-sm">May 2024</div>
                </div>
              </div>
            </div>

            {/* Profile Highlights Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-bold text-[#0B1F3A] mb-5">Profile Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-slate-600">Profile Views</span>
                  <span className="font-bold text-[#0B1F3A]">2,450</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-slate-600">Connections</span>
                  <span className="font-bold text-[#0B1F3A]">184</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-slate-600">Leads Received</span>
                  <span className="font-bold text-[#0B1F3A]">67</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] font-medium text-slate-600">Enquiries</span>
                  <span className="font-bold text-[#0B1F3A]">32</span>
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
                  <span className="text-[13px] font-semibold text-slate-700 group-hover:text-[#0077b5]">Project Portfolio</span>
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
