"use client";

import { useState } from "react";
import {
  Target,
  Eye,
  Users,
  Handshake,
  Lightbulb,
  BookOpen,
  TrendingUp,
  Globe2,
  Building2,
  MapPin,
  X,
  Briefcase,
} from "lucide-react";

const stats = [
  { icon: Users, value: "25,000+", label: "Professionals" },
  { icon: Building2, value: "3,500+", label: "Companies" },
  { icon: MapPin, value: "120+", label: "Cities" },
  { icon: Users, value: "150+", label: "Active Groups" },
];

const values = [
  {
    icon: Handshake,
    title: "Integrity",
    desc: "We build trust through honesty, transparency, and ethical conduct.",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "We believe in the power of working together to achieve shared success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We encourage new ideas and innovative solutions to shape the future.",
  },
  {
    icon: BookOpen,
    title: "Knowledge",
    desc: "We promote continuous learning and the sharing of insights.",
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    desc: "We are committed to high standards and delivering real impact.",
  },
  {
    icon: Globe2,
    title: "Community",
    desc: "We value inclusivity, respect, and building long-term relationships.",
  },
];

const founders = [
   {
    name: "Vipin Arora",
    role: "Founder ",
    bio: "Vipin Arora is a highly respected real estate professional with over two decades of experience across some of India's most renowned real estate organizations, including Puri Constructions, DLF, M3M, BPTP, and Pioneer Group. Throughout his career, he has played a pivotal role in driving business growth, strategic partnerships, customer engagement, and market expansion across residential, commercial, and mixed-use developments. As a founding force behind REPC, Vipin envisioned a collaborative platform that brings together professionals from across the real estate ecosystem to connect, share knowledge, create opportunities, and drive industry advancement. His deep understanding of the sector, combined with his extensive professional network, has been instrumental in shaping REPC into a trusted and influential community for real estate professionals. Known for his relationship-driven approach and industry expertise, Vipin continues to champion initiatives that foster meaningful collaborations, encourage thought leadership, and support the growth of India's real estate sector. Through REPC, he remains committed to building a stronger, more connected community that empowers professionals and creates long-term value for the industry.",
    img: "/vipn-sir.jpg",
  },
  {
    name: "Bhaswar Paul",
    role: "Co-Founder ",
    bio: "Bhaswar Paul is a visionary entrepreneur and industry leader with a deep commitment to transforming India's real estate ecosystem through collaboration, innovation, and knowledge sharing. As the Founder of REPC and CEO & Founder of IREED India, he has been instrumental in creating platforms that connect developers, investors, occupiers, consultants, service providers, and industry professionals across the real estate value chain. With extensive experience in real estate advisory, business networking, industry research, and ecosystem development, Bhaswar has consistently championed initiatives that foster meaningful partnerships, promote market intelligence, and accelerate industry growth. Under his leadership, REPC has evolved into a vibrant professional community dedicated to connecting professionals, facilitating opportunities, and driving thought leadership within the sector. His vision is centered on building a stronger, more connected real estate community where professionals can collaborate, learn, innovate, and create lasting business impact. Through REPC and IREED India, he continues to bridge industry stakeholders and contribute to the advancement of India's real estate landscape.",
    img: "/paul-sir.jpg",
  },
 
];

export default function AboutPage() {
  const [selectedFounder, setSelectedFounder] = useState(null);

  return (
    <main className="bg-white relative">
      {/* 1. Hero Banner Section */}
      <section className="relative overflow-hidden bg-[#0B1F3A]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=1600&q=80"
            alt="City skyline at dusk"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/85 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-12 lg:py-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#E8A33D]">
            ABOUT REPC
          </p>
          <h1 className="max-w-2xl text-[clamp(20px,2.5vw,36px)] font-bold leading-[1.3] text-white">
            Building Connections.
            <br />
            Creating Opportunities.
            <br />
            Shaping the Future of Real Estate.
          </h1>
          <div className="mt-3.5 h-[3px] w-14 rounded-sm bg-[#E8A33D]" />
          <p className="mt-2 max-w-xl text-sm font-semibold leading-[1.7] text-slate-200">
            REPC is India&apos;s largest community of real estate
            professionals working together to learn, collaborate, and grow.
          </p>
        </div>
      </section>

      {/* 2. People Behind REPC Section */}
      <section className="bg-slate-50 pb-8 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
          <div className="text-center pt-8 lg:pt-12">
            <h2 className="text-[19px] font-bold text-[#0B1F3A]">
              The People Behind REPC
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 text-sm">
              REPC was founded by industry leaders with a shared vision. Click a profile to view their full bio and journey.
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {founders.map((f) => (
              <div 
                key={f.name} 
                onClick={() => setSelectedFounder(f)}
                className="flex flex-col gap-6 sm:flex-row sm:items-start p-4 rounded-xl hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100 transition duration-300 cursor-pointer group"
              >
                <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-xl sm:w-36 shadow-sm group-hover:scale-[1.02] transition duration-300">
                  <img
                    src={f.img}
                    alt={f.name}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                    <span className="bg-white/90 text-[#0B1F3A] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">View Bio</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-[16px] font-bold text-[#0B1F3A] group-hover:text-[#E8A33D] transition duration-200">
                    {f.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mt-0.5 flex items-center gap-1">
                    <Briefcase className="h-3 w-3 text-[#E8A33D]" /> {f.role}
                  </p>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-500 line-clamp-4">
                    {f.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pop-up Modal Design */}
      {selectedFounder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <div 
            className="absolute inset-0 bg-[#0B1F3A]/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedFounder(null)}
          />
          
          <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden z-10 border border-slate-100 max-h-[90vh] flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedFounder(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative w-full md:w-2/5 bg-[#0B1F3A] shrink-0 min-h-[240px] md:min-h-full flex flex-col justify-end p-6 md:p-8">
              <div className="absolute inset-0 z-0">
                <img 
                  src={selectedFounder.img} 
                  alt={selectedFounder.name} 
                  className="w-full h-full object-cover object-top opacity-40 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/50 to-transparent" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white">{selectedFounder.name}</h3>
                <div className="mt-2 h-[2px] w-10 bg-[#E8A33D]" />
                <p className="mt-2 text-xs font-medium text-slate-300 tracking-wide leading-relaxed">{selectedFounder.role}</p>
              </div>
            </div>

            <div className="w-full md:w-3/5 p-6 md:p-8 overflow-y-auto custom-scrollbar">
              <p className="text-xs uppercase tracking-widest text-[#E8A33D] font-bold">Leadership Profile</p>
              <h4 className="text-base font-bold text-[#0B1F3A] mt-1">Professional Journey</h4>
              <p className="mt-4 text-xs md:text-sm leading-relaxed text-slate-600 whitespace-pre-line font-medium">
                {selectedFounder.bio}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 3. Mission & Vision Section */}
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-12 lg:py-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-6 lg:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0B1F3A]">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h2 className="mt-4 text-[18px] font-bold text-[#0B1F3A]">
              Our Mission
            </h2>
            <div className="mt-2 h-1 w-12 bg-[#E8A33D]" />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              To connect real estate professionals, foster collaboration,
              share knowledge, and create opportunities that drive growth,
              innovation, and long-term value for the industry and the
              communities we serve.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 lg:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E8A33D]">
              <Eye className="h-6 w-6 text-white" />
            </div>
            <h2 className="mt-4 text-[18px] font-bold text-[#0B1F3A]">
              Our Vision
            </h2>
            <div className="mt-2 h-1 w-12 bg-[#E8A33D]" />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              To be the most trusted and influential real estate professional
              community, empowering leaders and shaping a sustainable and
              inclusive real estate ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Our Values Section */}
      <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-12 lg:pb-12">
        <div className="text-center">
          <h2 className="text-[19px] font-bold text-[#0B1F3A]">
            Our Values
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-[#E8A33D]" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-50">
                <Icon className="h-6 w-6 text-[#0B1F3A]" />
              </div>
              <h3 className="mt-3 font-bold text-[#0B1F3A]">{title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Power of Networking Section */}
      <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-12 lg:pb-12">
        <div className="overflow-hidden rounded-2xl bg-[#0B1F3A]">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-56 lg:h-auto">
              <img
                src="/the-power-network-img.png"
                alt="Professionals networking"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="p-6 lg:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/40">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h2 className="mt-4 text-[19px] font-bold text-white">
                The Power of Networking
              </h2>
              <div className="mt-2 h-1 w-12 bg-[#E8A33D]" />
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                At REPC, we believe meaningful connections create lasting
                impact. Our community brings together developers, investors,
                occupiers, consultants, architects, and industry experts to
                exchange ideas, solve challenges, and unlock new
                opportunities&mdash;together.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex items-center gap-2.5">
                    <Icon className="h-7 w-7 text-[#E8A33D]" />
                    <div>
                      <p className="text-base font-bold text-white">{value}</p>
                      <p className="text-[11px] text-slate-300">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call To Action (CTA) Section */}
      <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-12 lg:pb-12">
        <div className="flex flex-col items-center gap-4 rounded-2xl bg-[#0B1F3A] p-6 text-center sm:flex-row sm:justify-between sm:text-left lg:p-10">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-white/40">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-[16px] font-bold text-white">
                Be a Part of Something Bigger
              </h2>
              <p className="mt-0.5 text-xs text-slate-300">
                Join thousands of professionals who are building connections,
                sharing knowledge, and shaping the future of real
                estate&mdash;together.
              </p>
            </div>
          </div>
          <a
            href="#"
            className="shrink-0 rounded-md bg-[#E8A33D] px-5 py-2.5 text-sm font-bold text-[#0B1F3A] transition hover:bg-[#d6922e]"
          >
            Join the Community
          </a>
        </div>
      </section>
    </main>
  );
}