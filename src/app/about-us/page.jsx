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
    name: "",
    role: "Co-Founder & Chairman",
    bio: "Amitabh brings over 30 years of experience in real estate development and investment. He has led landmark projects across India and believes in the power of community to accelerate industry progress.",
    why: "To create a platform where professionals can connect beyond business, collaborate for impact, and build the future of real estate in India.",
    img: "/",
  },
  {
    name: "",
    role: "Co-Founder & Managing Director",
    bio: "Rajeev is a real estate strategist and advisor with 25+ years in the industry, specializing in market intelligence, corporate real estate, and advisory for global investors.",
    why: "To bring professionals together to share knowledge, solve challenges, and unlock opportunities that create long-term value for the ecosystem.",
    img: "/",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1F3A]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=1600&q=80"
            alt="City skyline at dusk"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/85 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-12 lg:py-32">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#E8A33D]">
            ABOUT REPC
          </p>
          <h1 className="max-w-2xl text-[clamp(20px,2.5vw,36px)] font-extrabold leading-[1.3] text-white">
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

      {/* Mission & Vision */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-8 lg:p-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0B1F3A]">
              <Target className="h-7 w-7 text-white" />
            </div>
            <h2 className="mt-6 text-[19px] font-extrabold text-[#0B1F3A]">
              Our Mission
            </h2>
            <div className="mt-3 h-1 w-12 bg-[#E8A33D]" />
            <p className="mt-5 leading-relaxed text-slate-600">
              To connect real estate professionals, foster collaboration,
              share knowledge, and create opportunities that drive growth,
              innovation, and long-term value for the industry and the
              communities we serve.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-8 lg:p-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E8A33D]">
              <Eye className="h-7 w-7 text-white" />
            </div>
            <h2 className="mt-6 text-[19px] font-extrabold text-[#0B1F3A]">
              Our Vision
            </h2>
            <div className="mt-3 h-1 w-12 bg-[#E8A33D]" />
            <p className="mt-5 leading-relaxed text-slate-600">
              To be the most trusted and influential real estate professional
              community, empowering leaders and shaping a sustainable and
              inclusive real estate ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Power of Networking */}
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-12">
        <div className="overflow-hidden rounded-2xl bg-[#0B1F3A]">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80"
                alt="Professionals networking"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="p-8 lg:p-12">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h2 className="mt-6 text-[19px] font-extrabold text-white">
                The Power of Networking
              </h2>
              <div className="mt-3 h-1 w-12 bg-[#E8A33D]" />
              <p className="mt-5 leading-relaxed text-slate-300">
                At REPC, we believe meaningful connections create lasting
                impact. Our community brings together developers, investors,
                occupiers, consultants, architects, and industry experts to
                exchange ideas, solve challenges, and unlock new
                opportunities&mdash;together.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <Icon className="h-8 w-8 text-[#E8A33D]" />
                    <div>
                      <p className="text-lg font-bold text-white">{value}</p>
                      <p className="text-xs text-slate-300">{label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="text-center">
          <h2 className="text-[19px] font-extrabold text-[#0B1F3A]">
            Our Values
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-[#E8A33D]" />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-50">
                <Icon className="h-7 w-7 text-[#0B1F3A]" />
              </div>
              <h3 className="mt-4 font-bold text-[#0B1F3A]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* People Behind REPC */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <h2 className="text-[19px] font-extrabold text-[#0B1F3A]">
              The People Behind REPC
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              REPC was founded by industry leaders with a shared vision to
              create a united, knowledge-driven community for real estate
              professionals.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {founders.map((f) => (
              <div key={f.name} className="grid gap-6 sm:grid-cols-[160px_1fr]">
                <div className="relative h-48 w-full overflow-hidden rounded-xl sm:h-full">
                  <img
                    src={f.img}
                    alt={f.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-[15px] font-extrabold text-[#0B1F3A]">
                    {f.name}
                  </h3>
                  <p className="text-sm font-semibold text-[#E8A33D]">
                    {f.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {f.bio}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[#E8A33D]">
                    Why he started REPC
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {f.why}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-[#0B1F3A] p-8 text-center sm:flex-row sm:justify-between sm:text-left lg:p-12">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-white/40">
              <Users className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="text-[17px] font-extrabold text-white">
                Be a Part of Something Bigger
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Join thousands of professionals who are building connections,
                sharing knowledge, and shaping the future of real
                estate&mdash;together.
              </p>
            </div>
          </div>
          <a
            href="#"
            className="shrink-0 rounded-md bg-[#E8A33D] px-6 py-3 text-sm font-bold text-[#0B1F3A] transition hover:bg-[#d6922e]"
          >
            Join the Community
          </a>
        </div>
      </section>
    </main>
  );
}