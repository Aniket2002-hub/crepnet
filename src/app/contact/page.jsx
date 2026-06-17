"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Share2,
  Headphones,
  Users,
  MessageSquare,
  Lock,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !emailAddress.trim() || !message.trim()) {
      alert("Please fill in your name, email address, and message.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      alert(`Thank you, ${fullName}! Your message has been sent successfully. We will get back to you soon.`);
      setFullName("");
      setEmailAddress("");
      setPhoneNumber("");
      setSubject("");
      setMessage("");
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans antialiased text-slate-800">
      
      {/* ── HERO BANNER SECTION ── */}
      <section className="relative bg-[#020b18] text-white pt-16 pb-20 overflow-hidden">
        {/* Background boardroom at night image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt="REPC Office Boardroom overlooking night skyline"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020b18] via-[#020b18]/85 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
            <Link href="/" className="text-[#c9a84c] hover:underline">Home</Link>
            <span className="text-white">&gt;</span>
            <span className="text-white">Contact Us</span>
          </nav>

          {/* Heading content */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              We'd Love to Hear From You
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              Have a question, suggestion, or collaboration idea? <br />
              The REPC team is here to help.
            </p>
            <div className="h-[3px] w-12 bg-[#c9a84c] my-6" />
          </div>

          {/* 3 Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 mt-8 border-t border-white/10 max-w-5xl">
            {/* Point 1 */}
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full border-2 border-blue-600/70 bg-[#0c1e35]/80 flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.25)]">
                <Headphones className="h-6 w-6 stroke-[1.75]" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-white">We're here to help</h4>
                <p className="text-slate-400 text-xs sm:text-sm mt-0.5 leading-snug">
                  Quick responses &amp;<br />
                  personal support
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full border-2 border-blue-600/70 bg-[#0c1e35]/80 flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.25)]">
                <Users className="h-6 w-6 stroke-[1.75]" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-white">Connect with experts</h4>
                <p className="text-slate-400 text-xs sm:text-sm mt-0.5 leading-snug">
                  Reach the right team<br />
                  for your needs
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full border-2 border-blue-600/70 bg-[#0c1e35]/80 flex items-center justify-center text-white shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.25)]">
                <MessageSquare className="h-6 w-6 stroke-[1.75]" />
              </div>
              <div>
                <h4 className="font-bold text-sm sm:text-base text-white">Collaborate &amp; Grow</h4>
                <p className="text-slate-400 text-xs sm:text-sm mt-0.5 leading-snug">
                  Let's build the future<br />
                  of real estate together
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN LAYOUT GRID ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            
            {/* Card 1: Our Address */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-3.5 text-left">
              <div className="h-10 w-10 rounded-full bg-[#fdf8f0] flex items-center justify-center text-[#c9a84c] shrink-0 border border-amber-50">
                <MapPin className="h-5 w-5 stroke-[1.75]" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-[#0B1F3A] text-lg leading-none">Our Address</h3>
                <div className="h-[2.5px] w-8 bg-[#c9a84c] rounded-full" />
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  <span className="font-bold text-[#0B1F3A] block mb-1 text-sm">REPC</span>
                  Real Estate Professional Community <br />
                  401, 4th Floor, World Trade Center, <br />
                  Cuffe Parade, Mumbai – 400005, <br />
                  Maharashtra, India
                </p>
              </div>
            </div>

            {/* Card 2: Call Us */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-3.5 text-left">
              <div className="h-10 w-10 rounded-full bg-[#fdf8f0] flex items-center justify-center text-[#c9a84c] shrink-0 border border-amber-50">
                <Phone className="h-5 w-5 stroke-[1.75]" />
              </div>
              <div className="space-y-1.5 w-full">
                <h3 className="font-bold text-[#0B1F3A] text-lg leading-none">Call Us</h3>
                <div className="h-[2.5px] w-8 bg-[#c9a84c] rounded-full" />
                <p className="text-[#0B1F3A] font-extrabold text-base sm:text-[17px] md:text-lg tracking-tight leading-none whitespace-nowrap">
                  +91 22 1234 5678
                </p>
                <p className="text-slate-400 text-xs whitespace-nowrap">
                  Mon - Fri: 9:00 AM – 6:00 PM IST
                </p>
              </div>
            </div>

            {/* Card 3: Email Us */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-3.5 text-left">
              <div className="h-10 w-10 rounded-full bg-[#fdf8f0] flex items-center justify-center text-[#c9a84c] shrink-0 border border-amber-50">
                <Mail className="h-5 w-5 stroke-[1.75]" />
              </div>
              <div className="space-y-1.5 w-full">
                <h3 className="font-bold text-[#0B1F3A] text-lg leading-none">Email Us</h3>
                <div className="h-[2.5px] w-8 bg-[#c9a84c] rounded-full" />
                <div>
                  <a href="mailto:info@repc.in" className="inline-block text-[#0B1F3A] hover:underline font-extrabold text-sm sm:text-base leading-none whitespace-nowrap">
                    info@repc.in
                  </a>
                </div>
                <p className="text-slate-400 text-xs">
                  We aim to respond within 24 hours.
                </p>
              </div>
            </div>

            {/* Card 4: Connect With Us */}
            <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-start gap-3.5 text-left">
              <div className="h-10 w-10 rounded-full bg-[#fdf8f0] flex items-center justify-center text-[#c9a84c] shrink-0 border border-amber-50">
                <Share2 className="h-5 w-5 stroke-[1.75]" />
              </div>
              <div className="space-y-1.5 w-full">
                <h3 className="font-bold text-[#0B1F3A] text-lg leading-none">Connect With Us</h3>
                <div className="h-[2.5px] w-8 bg-[#c9a84c] rounded-full" />
                
                {/* Social media icons grid - nowrap to force single line */}
                <div className="flex flex-row flex-nowrap gap-2">
                  {/* LinkedIn */}
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="h-7.5 w-7.5 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-sm shrink-0"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  {/* X (Twitter) */}
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="h-7.5 w-7.5 rounded-full bg-[#000] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-sm shrink-0"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="h-7.5 w-7.5 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-sm shrink-0"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="h-7.5 w-7.5 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-sm shrink-0"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a
                    href="#"
                    aria-label="YouTube"
                    className="h-7.5 w-7.5 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-sm shrink-0"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Message Form Card */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row gap-8 items-stretch relative overflow-hidden">
            
            {/* Form Fields Panel */}
            <div className="flex-1 space-y-6 text-left">
              <div>
                <h3 className="text-xl font-bold text-[#0B1F3A] tracking-tight">Send Us a Message</h3>
                <div className="h-[2.5px] w-8 bg-[#c9a84c] rounded-full mt-2" />
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full Name"
                      className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-slate-350 text-slate-800"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      placeholder="Email Address"
                      className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-slate-350 text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="Phone Number"
                      className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-slate-350 text-slate-800"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Subject"
                      className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-slate-350 text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-3.5 py-3 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:border-slate-350 text-slate-800 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#be7a15] hover:bg-[#a5690f] text-white font-extrabold text-sm rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <ArrowRight className="h-4.5 w-4.5" />
                    </>
                  )}
                </button>
              </form>

              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mt-4">
                <Lock className="h-3.5 w-3.5 text-slate-400" />
                <span>Your information is safe with us and will never be shared.</span>
              </div>
            </div>

            {/* Illustration subpanel */}
            <div className="hidden md:flex md:w-5/12 items-center justify-center shrink-0 max-w-[220px] self-center">
              <svg viewBox="0 0 240 240" className="w-full h-auto text-slate-400 fill-none stroke-current stroke-[1.25]">
                {/* Sun/Moon Circle */}
                <circle cx="160" cy="110" r="45" stroke="#fef3c7" strokeWidth="1" strokeDasharray="3 3" />
                
                {/* Dotted Arc */}
                <path d="M 35 210 A 90 90 0 0 1 205 210" stroke="#cbd5e1" strokeWidth="1.25" strokeDasharray="4 4" />
                
                {/* Dotted Arc Nodes */}
                <circle cx="50" cy="165" r="2.5" fill="#be7a15" stroke="none" />
                <circle cx="120" cy="120" r="2.5" fill="#3b82f6" stroke="none" />
                <circle cx="190" cy="165" r="2.5" fill="#be7a15" stroke="none" />
                
                {/* Clouds */}
                <path d="M185 85 a7 7 0 0 1 12 -1 a9 9 0 0 1 14 3 a7 7 0 0 1 2 10 h-28 z" stroke="#e2e8f0" strokeWidth="1" fill="#f8fafc" />

                {/* Building 1: Far Left (Short) */}
                <rect x="35" y="170" width="18" height="40" className="fill-white stroke-slate-300" />
                <line x1="40" y1="180" x2="48" y2="180" className="stroke-slate-200" />
                <line x1="40" y1="190" x2="48" y2="190" className="stroke-slate-200" />
                <line x1="40" y1="200" x2="48" y2="200" className="stroke-slate-200" />

                {/* Building 2: Left slanted top */}
                <path d="M 53 210 L 53 135 L 70 145 L 70 210 Z" className="fill-white stroke-slate-300" />
                <line x1="59" y1="150" x2="59" y2="200" className="stroke-[#be7a15] stroke-[1]" />
                <line x1="64" y1="155" x2="64" y2="200" className="stroke-slate-200" />

                {/* Building 3: Medium Left */}
                <path d="M 70 210 L 70 110 L 88 110 L 88 210 Z" className="fill-white stroke-slate-300" />
                <line x1="76" y1="120" x2="82" y2="120" className="stroke-slate-200" />
                <line x1="76" y1="135" x2="82" y2="135" className="stroke-slate-200" />
                <line x1="76" y1="150" x2="82" y2="150" className="stroke-slate-200" />
                <line x1="76" y1="165" x2="82" y2="165" className="stroke-[#be7a15] stroke-[1]" />
                <line x1="76" y1="180" x2="82" y2="180" className="stroke-slate-200" />
                <line x1="76" y1="195" x2="82" y2="195" className="stroke-slate-200" />

                {/* Building 4: Very Tall Central Tower */}
                <path d="M 88 210 L 88 80 L 100 68 L 112 80 L 112 210 Z" className="fill-white stroke-slate-400" />
                {/* Central Tower Antenna */}
                <line x1="100" y1="68" x2="100" y2="45" className="stroke-slate-400 stroke-[1.5]" />
                <circle cx="100" cy="45" r="2.5" fill="#be7a15" stroke="none" />
                {/* Vertical stripes and lights */}
                <line x1="94" y1="90" x2="94" y2="200" className="stroke-slate-200" />
                <line x1="100" y1="90" x2="100" y2="200" className="stroke-[#be7a15] stroke-[1]" />
                <line x1="106" y1="90" x2="106" y2="200" className="stroke-slate-200" />
                
                {/* Building 5: Tall Right-Center */}
                <path d="M 112 210 L 112 115 L 130 115 L 130 210 Z" className="fill-white stroke-slate-300" />
                <line x1="118" y1="125" x2="118" y2="200" className="stroke-slate-200" />
                <line x1="124" y1="125" x2="124" y2="200" className="stroke-[#be7a15] stroke-[1]" />

                {/* Building 6: Far Right Tall Grid */}
                <rect x="130" y="90" width="22" height="120" className="fill-white stroke-slate-300" />
                {/* Grid lines */}
                <line x1="135" y1="100" x2="135" y2="200" className="stroke-slate-200" />
                <line x1="141" y1="100" x2="141" y2="200" className="stroke-slate-200" />
                <line x1="147" y1="100" x2="147" y2="200" className="stroke-slate-200" />
                <line x1="130" y1="110" x2="152" y2="110" className="stroke-slate-200" />
                <line x1="130" y1="130" x2="152" y2="130" className="stroke-slate-200" />
                <line x1="130" y1="150" x2="152" y2="150" className="stroke-slate-200" />
                <line x1="130" y1="170" x2="152" y2="170" className="stroke-slate-200" />
                <line x1="130" y1="190" x2="152" y2="190" className="stroke-slate-200" />

                {/* Ground Line */}
                <line x1="20" y1="210" x2="220" y2="210" className="stroke-slate-400 stroke-[1.5]" />
              </svg>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
