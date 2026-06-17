export const CATEGORIES_CONFIG = {
  all: {
    label: "All Events",
    title: "Events. Connections. Opportunities.",
    desc: "REPC brings together industry leaders, innovators and decision makers through high-impact events, conferences and summits across India and beyond.",
    stats: [
      { value: "50+", label: "Events Hosted", iconName: "Calendar" },
      { value: "15,000+", label: "Attendees", iconName: "Users" },
      { value: "250+", label: "Industry Speakers", iconName: "Mic2" },
      { value: "25+", label: "Cities Covered", iconName: "Globe2" },
    ]
  },
  conferences: {
    label: "Conferences",
    title: "Conferences. Knowledge. Growth.",
    desc: "Participate in structured research tracks, interactive panels, and technical roundtables that dissect policy, valuation, RERA rules, and global investment standards.",
    stats: [
      { value: "30+", label: "Conferences Hosted", iconName: "Calendar" },
      { value: "10,000+", label: "Delegates Reached", iconName: "Users" },
      { value: "300+", label: "Research Papers", iconName: "BookOpen" },
      { value: "150+", label: "Valued Sponsors", iconName: "Mic2" },
    ]
  },
  summits: {
    label: "Summits",
    title: "Summits. Strategy. Leadership.",
    desc: "Connect directly with institutional capital partners, top developers, and multi-national occupiers in an exclusive environment designed to create transactions and growth.",
    stats: [
      { value: "15+", label: "Summits Completed", iconName: "Calendar" },
      { value: "4,000+", label: "C-Suite Attendees", iconName: "Users" },
      { value: "120+", label: "Industry Speakers", iconName: "Mic2" },
      { value: "500+", label: "Deals Originated", iconName: "Globe2" },
    ]
  },
  webinars: {
    label: "Webinars",
    title: "Webinars. Learning. Access.",
    desc: "Access free, interactive live webinars and Q&A sessions led by real estate lawyers, PropTech CEOs, and sustainability heads from the comfort of your office.",
    stats: [
      { value: "80+", label: "Sessions Broadcast", iconName: "Laptop" },
      { value: "25,000+", label: "Unique Streamers", iconName: "Users" },
      { value: "150+", label: "Virtual Experts", iconName: "Mic2" },
      { value: "4.8/5", label: "Avg Member Rating", iconName: "Star" },
    ]
  },
  networking: {
    label: "Networking",
    title: "Networking. Trust. Partnerships.",
    desc: "Forget cold calling. Meet local and national real estate developers, verified brokers, capital managers, and corporate heads in our interactive physical mixer programs.",
    stats: [
      { value: "100+", label: "Mixers Conducted", iconName: "Calendar" },
      { value: "15k+", label: "Business Links", iconName: "Users" },
      { value: "20+", label: "Local Chapters", iconName: "Share2" },
      { value: "12", label: "Metros Covered", iconName: "MapPin" },
    ]
  },
  awards: {
    label: "Awards",
    title: "Awards. Excellence. Impact.",
    desc: "Celebrating the achievements of commercial real estate developers, visionary leaders, brokerage groups, and outstanding organizations who are actively shaping the future of Indian infrastructure.",
    stats: [
      { value: "12+", label: "Award Categories", iconName: "Trophy" },
      { value: "500+", label: "Awardees", iconName: "Users" },
      { value: "2500+", label: "Nominations", iconName: "Calendar" },
      { value: "10+", label: "Years of Excellence", iconName: "Mic2" },
    ]
  }
};

export const ALL_EVENTS = [
  // Summits
  {
    category: "summits",
    type: "Summit",
    typeBg: "bg-purple-600",
    featured: true,
    date: "18",
    month: "JUN",
    title: "REPC India Commercial Real Estate Summit 2024",
    venue: "Jio World Convention Centre, Mumbai",
    desc: "India's largest gathering of CRE leaders, developers & occupiers.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
    location: "Mumbai",
    isUpcoming: true
  },
  {
    category: "summits",
    type: "Summit",
    typeBg: "bg-purple-600",
    featured: false,
    date: "21",
    month: "AUG",
    title: "Logistics & Industrial Real Estate Summit",
    venue: "Hyatt Regency, Pune",
    desc: "Supply chain resilience, industrial parks & warehousing opportunities.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80",
    location: "Pune",
    isUpcoming: true
  },
  {
    category: "summits",
    type: "Summit",
    title: "REPC Annual Real Estate Summit 2024",
    date: "15 May 2024",
    location: "Mumbai",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&q=80",
    isUpcoming: false
  },
  {
    category: "summits",
    type: "Summit",
    title: "Retail & High Street Summit 2024",
    date: "10 Feb 2024",
    location: "Delhi",
    img: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=300&q=80",
    isUpcoming: false
  },

  // Conferences
  {
    category: "conferences",
    type: "Conference",
    typeBg: "bg-blue-500",
    featured: false,
    date: "24",
    month: "JUL",
    title: "Retail Real Estate Conference 2024",
    venue: "The Leela Ambience, Gurugram",
    desc: "Exploring the future of retail, consumer trends & experiential destinations.",
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=80",
    location: "Delhi",
    isUpcoming: true
  },
  {
    category: "conferences",
    type: "Conference",
    typeBg: "bg-blue-500",
    featured: false,
    date: "07",
    month: "AUG",
    title: "Office & GCC Leadership Forum 2024",
    venue: "ITC Gardenia, Bengaluru",
    desc: "GCC expansion, office demand outlook & future-ready workspaces.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
    location: "Bengaluru",
    isUpcoming: true
  },
  {
    category: "conferences",
    type: "Conference",
    title: "GCC & Office Spaces Conference 2024",
    date: "21 March 2024",
    location: "Bengaluru",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80",
    isUpcoming: false
  },
  {
    category: "conferences",
    type: "Conference",
    title: "Industrial & Logistics Real Estate Forum 2023",
    date: "12 Dec 2023",
    location: "Hyderabad",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&q=80",
    isUpcoming: false
  },

  // Webinars
  {
    category: "webinars",
    type: "Webinar",
    typeBg: "bg-green-600",
    featured: false,
    date: "28",
    month: "JUN",
    title: "ESG & Green Operations Masterclass",
    venue: "Online Streaming Session",
    desc: "Online course covering carbon offsets, LEED ratings, and energy dashboards.",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&q=80",
    location: "Bengaluru",
    isUpcoming: true
  },
  {
    category: "webinars",
    type: "Webinar",
    typeBg: "bg-green-600",
    featured: false,
    date: "05",
    month: "JUL",
    title: "Retail Automation API Integration",
    venue: "Online Streaming Session",
    desc: "Tech talk regarding smart mall infrastructure, logistics integration, and consumer APIs.",
    img: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=80",
    location: "Mumbai",
    isUpcoming: true
  },
  {
    category: "webinars",
    type: "Webinar",
    title: "RERA Compliance Q&A Live Session",
    date: "18 Jan 2024",
    location: "Mumbai",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=300&q=80",
    isUpcoming: false
  },

  // Networking
  {
    category: "networking",
    type: "Networking",
    typeBg: "bg-teal-600",
    featured: false,
    date: "12",
    month: "JUL",
    title: "Regional Cocktail Mixer & Business Matchmaking",
    venue: "St. Regis, Mumbai",
    desc: "Informal evening social event for developers, brokers, and consultants.",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&q=80",
    location: "Mumbai",
    isUpcoming: true
  },
  {
    category: "networking",
    type: "Networking",
    typeBg: "bg-teal-600",
    featured: false,
    date: "28",
    month: "JUL",
    title: "PropTech Startup & Investor Pitch Night",
    venue: "WeWork Galaxy, Bengaluru",
    desc: "Fostering collaboration by letting tech startups pitch to VC funds.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
    location: "Bengaluru",
    isUpcoming: true
  },
  {
    category: "networking",
    type: "Networking",
    title: "Delhi-NCR Chapter Cocktails Mixer",
    date: "25 Feb 2024",
    location: "Delhi",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&q=80",
    isUpcoming: false
  },

  // Awards
  {
    category: "awards",
    type: "Awards",
    typeBg: "bg-amber-600",
    featured: true,
    date: "15",
    month: "DEC",
    title: "Annual CREPNET Awards Gala Ceremony 2024",
    venue: "Taj Lands End, Mumbai",
    desc: "Celebrating outstanding achievements, sustainable designs, and exemplary leaders in the CRE space.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80",
    location: "Mumbai",
    isUpcoming: true
  },
  {
    category: "awards",
    type: "Awards",
    title: "CREPNET Awards Night 2023",
    date: "12 Dec 2023",
    location: "Mumbai",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=300&q=80",
    isUpcoming: false
  }
];
