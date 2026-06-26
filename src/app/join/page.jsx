import React from "react";
import {
  Users,
  Building2,
  TrendingUp,
  Handshake,
  MapPin,
  ShoppingBag,
  Briefcase,
  Globe,
  LineChart,
  Network,
  Target,
  Calendar,
  ShieldCheck,
  BadgeCheck,
  Settings,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";

export default function JoiningPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* --- HERO SECTION --- */}
      <section className="relative w-full bg-gray-50">
        {/* Dark Blue Background Layer covering roughly 75% of this section */}
        <div className="absolute top-0 left-0 w-full h-[65%] lg:h-[75%] bg-[#05152D] z-0 overflow-hidden">
          <div
            className="absolute inset-0 z-0 mix-blend-lighten opacity-70"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
              backgroundPosition: "center right",
              backgroundSize: "cover",
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#05152D] via-[#05152D]/60 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 pt-24 pb-0 lg:pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8 max-w-2xl text-white pb-12 lg:pb-0">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Be Part of India&apos;s Premier <br />
              Commercial <span className="text-[#C59B46]">
                Real Estate
              </span>{" "}
              Network
            </h1>
            <div className="w-16 h-1 bg-[#C59B46]"></div>

            <div className="space-y-4">
              <p className="text-xl font-medium text-gray-200">
                Connect. Collaborate. Grow.
              </p>
              <p className="text-gray-400 text-lg">
                Join a trusted community of 10,000+ professionals, leading
                companies and global partners shaping the future of commercial
                real estate in India.
              </p>
            </div>

            {/* Icons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-700">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full border border-gray-600 bg-white/5">
                  <Users className="w-6 h-6 text-[#C59B46]" />
                </div>
                <span className="text-sm text-gray-300">
                  Expand Your
                  <br />
                  Network
                </span>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full border border-gray-600 bg-white/5">
                  <Building2 className="w-6 h-6 text-[#C59B46]" />
                </div>
                <span className="text-sm text-gray-300">
                  Discover New
                  <br />
                  Opportunities
                </span>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full border border-gray-600 bg-white/5">
                  <TrendingUp className="w-6 h-6 text-[#C59B46]" />
                </div>
                <span className="text-sm text-gray-300">
                  Gain Market
                  <br />
                  Intelligence
                </span>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full border border-gray-600 bg-white/5">
                  <Handshake className="w-6 h-6 text-[#C59B46]" />
                </div>
                <span className="text-sm text-gray-300">
                  Collaborate &<br />
                  Grow Business
                </span>
              </div>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md text-gray-900 relative z-20 flex flex-col">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Join CREPNET
                </h2>
                <p className="text-[#C59B46] font-medium mt-1">
                  It&apos;s Free to Get Started
                </p>
              </div>

              {/* Stepper */}
              <div className="flex justify-between items-center mb-8 relative">
                <div className="absolute left-0 top-4 w-full h-[2px] bg-gray-200 -z-10"></div>
                <div className="flex flex-col items-center bg-white px-2">
                  <div className="w-8 h-8 rounded-full bg-[#C59B46] text-white flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <span className="text-xs text-gray-500 mt-2">
                    Create Account
                  </span>
                </div>
                <div className="flex flex-col items-center bg-white px-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <span className="text-xs text-gray-400 mt-2">
                    Tell Us About You
                  </span>
                </div>
                <div className="flex flex-col items-center bg-white px-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <span className="text-xs text-gray-400 mt-2">Complete</span>
                </div>
              </div>

              {/* Social Login */}
              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-md py-2.5 text-sm font-medium hover:bg-gray-50 transition">
                  <FcGoogle className="w-5 h-5" />
                  <span>Continue with Google</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-md py-2.5 text-sm font-medium hover:bg-gray-50 transition">
                  <FaLinkedin className="w-5 h-5 text-[#0077b5]" />
                  <span>Continue with LinkedIn</span>
                </button>
              </div>

              <div className="relative flex items-center justify-center mb-6">
                <div className="border-t border-gray-200 w-full"></div>
                <span className="bg-white px-3 text-xs text-gray-400 absolute">
                  or
                </span>
              </div>

              {/* Form */}
              <form className="space-y-4">
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Users className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="pl-10 w-full border border-gray-300 rounded-md py-2.5 text-sm focus:ring-[#C59B46] focus:border-[#C59B46] outline-none"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      placeholder="Work Email"
                      className="pl-10 w-full border border-gray-300 rounded-md py-2.5 text-sm focus:ring-[#C59B46] focus:border-[#C59B46] outline-none"
                    />
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="pl-10 w-full border border-gray-300 rounded-md py-2.5 text-sm focus:ring-[#C59B46] focus:border-[#C59B46] outline-none"
                    />
                  </div>
                </div>
                <div>
                  <select className="w-full border border-gray-300 rounded-md py-2.5 px-3 text-sm focus:ring-[#C59B46] focus:border-[#C59B46] outline-none text-gray-600 appearance-none bg-white">
                    <option value="" >
                      Select Your Role
                    </option>
                    <option value="developer">Developer</option>
                    <option value="investor">Investor</option>
                    <option value="broker">Broker / Consultant</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="w-full bg-[#C59B46] hover:bg-[#b0893b] text-white rounded-md py-3 font-semibold text-sm transition mt-2"
                >
                  Get Started
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-600">
                Already a member?{" "}
                <a
                  href="/login"
                  className="text-[#0077b5] font-semibold hover:underline"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHO CAN JOIN SECTION --- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="h-[1px] w-12 bg-[#C59B46]"></div>
            <h2 className="text-3xl font-bold text-gray-900">
              Who Can Join CREPNET?
            </h2>
            <div className="h-[1px] w-12 bg-[#C59B46]"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition">
              <Building2
                className="w-10 h-10 text-gray-700 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-semibold text-gray-900 mb-2">Developers</h3>
              <p className="text-xs text-gray-500">
                Showcase projects & connect with the right partners
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition">
              <Users
                className="w-10 h-10 text-gray-700 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-semibold text-gray-900 mb-2">Investors</h3>
              <p className="text-xs text-gray-500">
                Discover high-quality investment opportunities
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition">
              <Network
                className="w-10 h-10 text-gray-700 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-semibold text-gray-900 mb-2">
                Occupiers & Brands
              </h3>
              <p className="text-xs text-gray-500">
                Find ideal spaces for expansion & operations
              </p>
            </div>
            {/* Card 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition">
              <ShoppingBag
                className="w-10 h-10 text-gray-700 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-semibold text-gray-900 mb-2">Retailers</h3>
              <p className="text-xs text-gray-500">
                Expand stores, find locations & franchise partners
              </p>
            </div>
            {/* Card 5 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition">
              <Briefcase
                className="w-10 h-10 text-gray-700 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-semibold text-gray-900 mb-2">
                Consultants & Advisors
              </h3>
              <p className="text-xs text-gray-500">
                Build your network & grow your practice
              </p>
            </div>
            {/* Card 6 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition">
              <Globe
                className="w-10 h-10 text-gray-700 mb-4"
                strokeWidth={1.5}
              />
              <h3 className="font-semibold text-gray-900 mb-2">
                Trade Bodies & Partners
              </h3>
              <p className="text-xs text-gray-500">
                Explore India business opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY JOIN SECTION --- */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left Content */}
            <div className="lg:w-1/2 w-full space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Why Join CREPNET?
                </h2>
                <div className="w-16 h-1 bg-[#C59B46]"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <LineChart className="w-8 h-8 text-[#C59B46] shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Access Exclusive Market Insights
                    </h4>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Network className="w-8 h-8 text-[#C59B46] shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Connect with Key Decision Makers
                    </h4>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Target className="w-8 h-8 text-[#C59B46] shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Find High-Value Opportunities
                    </h4>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Calendar className="w-8 h-8 text-[#C59B46] shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Stay Ahead with Industry Updates
                    </h4>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <ShieldCheck className="w-8 h-8 text-[#C59B46] shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Leverage a Trusted National Network
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image / Quote */}
            <div className="lg:w-1/2 w-full relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative h-80 w-full">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                  alt="Modern Office Building"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote Card */}
              <div className="absolute -left-8 -bottom-8 bg-white p-6 rounded-xl shadow-xl max-w-sm border-l-4 border-[#C59B46]">
                <p className="text-sm text-gray-700 italic mb-4">
                  &quot;CREPNET has helped us connect with the right partners,
                  discover great opportunities and stay ahead in a fast-evolving
                  market.&quot;
                </p>
                <p className="text-sm font-bold text-gray-900">
                  — CEO, Leading Realty Firm
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="bg-[#05152D] py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-4">
            <div className="flex items-center space-x-4">
              <Users className="w-10 h-10 text-[#C59B46]" />
              <div>
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-sm text-gray-400">Professionals</div>
              </div>
            </div>
            <div className="hidden lg:block w-px h-12 bg-white/10"></div>
            <div className="flex items-center space-x-4">
              <Building2 className="w-10 h-10 text-[#C59B46]" />
              <div>
                <div className="text-2xl font-bold text-white">2,500+</div>
                <div className="text-sm text-gray-400">Companies</div>
              </div>
            </div>
            <div className="hidden lg:block w-px h-12 bg-white/10"></div>
            <div className="flex items-center space-x-4">
              <Globe className="w-10 h-10 text-[#C59B46]" />
              <div>
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-sm text-gray-400">Countries Connected</div>
              </div>
            </div>
            <div className="hidden lg:block w-px h-12 bg-white/10"></div>
            <div className="flex items-center space-x-4">
              <Handshake className="w-10 h-10 text-[#C59B46]" />
              <div>
                <div className="text-2xl font-bold text-white">5,000+</div>
                <div className="text-sm text-gray-400">Opportunities</div>
              </div>
            </div>
            <div className="hidden lg:block w-px h-12 bg-white/10"></div>
            <div className="flex items-center space-x-4">
              <TrendingUp className="w-10 h-10 text-[#C59B46]" />
              <div>
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-sm text-gray-400">Cities Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST BADGES SECTION --- */}
      <section className="bg-[#05152D] ">
        <div className="mx-auto ">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch py-6 border-y border-[#1A2E4C] md:divide-x divide-[#1A2E4C] gap-y-8">
            {/* Item 1 */}
            <div className="flex items-center space-x-4 px-2 lg:px-6 w-full md:w-1/4 justify-center lg:justify-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#C59B46] shrink-0">
                <BadgeCheck className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-[14px]">
                  Trusted Network
                </h4>
                <p className="text-gray-400 text-xs mt-1 leading-tight">
                  Verified members & quality connections
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center space-x-4 px-2 lg:px-6 w-full md:w-1/4 justify-center lg:justify-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#C59B46] shrink-0">
                <ShieldCheck className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-[14px]">
                  Secure & Reliable
                </h4>
                <p className="text-gray-400 text-xs mt-1 leading-tight">
                  Your data is protected with us
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center space-x-4 px-2 lg:px-6 w-full md:w-1/4 justify-center lg:justify-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#C59B46] shrink-0">
                <Users className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-[14px]">
                  Collaborative Community
                </h4>
                <p className="text-gray-400 text-xs mt-1 leading-tight">
                  Work together to build success
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-center space-x-4 px-2 lg:px-6 w-full md:w-1/4 justify-center lg:justify-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#C59B46] shrink-0">
                <Settings className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-semibold text-[14px]">
                  Growth Focused
                </h4>
                <p className="text-gray-400 text-xs mt-1 leading-tight">
                  Built to help your business scale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
