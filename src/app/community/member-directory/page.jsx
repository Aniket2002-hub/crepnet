"use client";

import { useState, useMemo } from "react";
import { Search, MapPin, Building2, ChevronDown, BadgeCheck, X, Mail, Phone, Briefcase } from "lucide-react";

// ---------------- DATA ----------------

const allMembers = [
  {
    id: 1,
    name: "Rohit Mehta",
    role: "Director – Investments",
    company: "Blackstone",
    city: "Mumbai",
    location: "Mumbai, Maharashtra",
    segment: "Investor",
    experience: "5 – 10 Years",
    tagColor: "bg-blue-100 text-blue-700",
    img: "https://i.pravatar.cc/100?img=12",
    email: "rohit.mehta@blackstone.com",
    phone: "+91 98765 43210",
    bio: "Rohit leads investment strategy across commercial real estate portfolios in India, focusing on office and logistics assets.",
  },
  {
    id: 2,
    name: "Ananya Sharma",
    role: "Head – Workplace Solutions",
    company: "JLL",
    city: "Bengaluru",
    location: "Bengaluru, Karnataka",
    segment: "Consultant",
    experience: "5 – 10 Years",
    tagColor: "bg-green-100 text-green-700",
    img: "https://i.pravatar.cc/100?img=45",
    email: "ananya.sharma@jll.com",
    phone: "+91 98765 11223",
    bio: "Ananya advises corporates on workplace strategy, helping organizations optimize their real estate footprint.",
  },
  {
    id: 3,
    name: "Vikram Kapoor",
    role: "CEO",
    company: "Assetz Property Group",
    city: "Bengaluru",
    location: "Bengaluru, Karnataka",
    segment: "Developer",
    experience: "10+ Years",
    tagColor: "bg-purple-100 text-purple-700",
    img: "https://i.pravatar.cc/100?img=33",
    email: "vikram.kapoor@assetz.in",
    phone: "+91 98765 33445",
    bio: "Vikram has been instrumental in scaling residential and commercial developments across South India.",
  },
  {
    id: 4,
    name: "Neha Iyer",
    role: "Senior Architect",
    company: "Morphogenesis",
    city: "Delhi NCR",
    location: "Delhi, NCR",
    segment: "Architect",
    experience: "5 – 10 Years",
    tagColor: "bg-yellow-100 text-yellow-700",
    img: "https://i.pravatar.cc/100?img=47",
    email: "neha.iyer@morphogenesis.com",
    phone: "+91 98765 55667",
    bio: "Neha specializes in sustainable architecture and has worked on award-winning mixed-use projects.",
  },
  {
    id: 5,
    name: "Arvind Nandan",
    role: "Head – Leasing",
    company: "Phoenix Mills Ltd.",
    city: "Mumbai",
    location: "Mumbai, Maharashtra",
    segment: "Broker",
    experience: "10+ Years",
    tagColor: "bg-cyan-100 text-cyan-700",
    img: "https://i.pravatar.cc/100?img=15",
    email: "arvind.nandan@phoenixmills.com",
    phone: "+91 98765 77889",
    bio: "Arvind manages leasing operations for premium retail and mixed-use spaces across Western India.",
  },
  {
    id: 6,
    name: "Puneet Khurana",
    role: "Retail Strategy Lead",
    company: "The Leela Ambience, Gurugram",
    city: "Delhi NCR",
    location: "Gurugram, Haryana",
    segment: "Retailer",
    experience: "0 – 5 Years",
    tagColor: "bg-red-100 text-red-700",
    img: "https://i.pravatar.cc/100?img=51",
    email: "puneet.khurana@leela.com",
    phone: "+91 98765 99001",
    bio: "Puneet drives retail strategy and tenant partnerships for hospitality-led mixed-use developments.",
  },
  {
    id: 7,
    name: "Sneha Joshi",
    role: "Marketing Head",
    company: "Lodha Group",
    city: "Mumbai",
    location: "Mumbai, Maharashtra",
    segment: "Developer",
    experience: "5 – 10 Years",
    tagColor: "bg-purple-100 text-purple-700",
    img: "https://i.pravatar.cc/100?img=24",
    email: "sneha.joshi@lodhagroup.com",
    phone: "+91 98765 22110",
    bio: "Sneha leads brand and marketing initiatives for residential and commercial launches.",
  },
  {
    id: 8,
    name: "Karan Malhotra",
    role: "VP – Capital Markets",
    company: "CBRE",
    city: "Pune",
    location: "Pune, Maharashtra",
    segment: "Investor",
    experience: "10+ Years",
    tagColor: "bg-blue-100 text-blue-700",
    img: "https://i.pravatar.cc/100?img=8",
    email: "karan.malhotra@cbre.com",
    phone: "+91 98765 33221",
    bio: "Karan structures and executes large-scale capital transactions across asset classes.",
  },
  {
    id: 9,
    name: "Ritika Verma",
    role: "Co-founder",
    company: "UrbanNest Realty",
    city: "Hyderabad",
    location: "Hyderabad, Telangana",
    segment: "Developer",
    experience: "5 – 10 Years",
    tagColor: "bg-purple-100 text-purple-700",
    img: "https://i.pravatar.cc/100?img=29",
    email: "ritika.verma@urbannest.in",
    phone: "+91 98765 44556",
    bio: "Ritika co-founded UrbanNest with a focus on affordable housing solutions in Tier-2 cities.",
  },
  {
    id: 10,
    name: "Aditya Rao",
    role: "Project Manager",
    company: "Sobha Limited",
    city: "Bengaluru",
    location: "Bengaluru, Karnataka",
    segment: "Developer",
    experience: "0 – 5 Years",
    tagColor: "bg-purple-100 text-purple-700",
    img: "https://i.pravatar.cc/100?img=51",
    email: "aditya.rao@sobha.com",
    phone: "+91 98765 66778",
    bio: "Aditya oversees execution timelines and quality control for premium residential projects.",
  },
  {
    id: 11,
    name: "Meera Pillai",
    role: "Architect",
    company: "RSP Design Consultants",
    city: "Hyderabad",
    location: "Hyderabad, Telangana",
    segment: "Architect",
    experience: "0 – 5 Years",
    tagColor: "bg-yellow-100 text-yellow-700",
    img: "https://i.pravatar.cc/100?img=44",
    email: "meera.pillai@rsp.com",
    phone: "+91 98765 88990",
    bio: "Meera designs commercial and institutional buildings with a focus on climate-responsive design.",
  },
  {
    id: 12,
    name: "Sanjay Gupta",
    role: "Real Estate Broker",
    company: "Square Yards",
    city: "Delhi NCR",
    location: "Delhi, NCR",
    segment: "Broker",
    experience: "10+ Years",
    tagColor: "bg-cyan-100 text-cyan-700",
    img: "https://i.pravatar.cc/100?img=60",
    email: "sanjay.gupta@squareyards.com",
    phone: "+91 98765 12121",
    bio: "Sanjay has closed over 500 residential transactions across the NCR region.",
  },
  {
    id: 13,
    name: "Priya Nair",
    role: "Investment Analyst",
    company: "Brookfield",
    city: "Pune",
    location: "Pune, Maharashtra",
    segment: "Investor",
    experience: "0 – 5 Years",
    tagColor: "bg-blue-100 text-blue-700",
    img: "https://i.pravatar.cc/100?img=20",
    email: "priya.nair@brookfield.com",
    phone: "+91 98765 34343",
    bio: "Priya evaluates acquisition opportunities across industrial and logistics real estate.",
  },
  {
    id: 14,
    name: "Rahul Chawla",
    role: "Retail Leasing Manager",
    company: "DLF",
    city: "Delhi NCR",
    location: "Delhi, NCR",
    segment: "Retailer",
    experience: "5 – 10 Years",
    tagColor: "bg-red-100 text-red-700",
    img: "https://i.pravatar.cc/100?img=14",
    email: "rahul.chawla@dlf.in",
    phone: "+91 98765 56565",
    bio: "Rahul manages tenant relationships for premium malls across North India.",
  },
];

const cityOptions = ["Mumbai", "Bengaluru", "Delhi NCR", "Pune", "Hyderabad"];
const segmentOptions = ["Developer", "Consultant", "Broker", "Investor", "Architect", "Retailer"];
const experienceOptions = ["0 – 5 Years", "5 – 10 Years", "10+ Years"];

function countBy(items, key) {
  const counts = {};
  items.forEach((m) => {
    counts[m[key]] = (counts[m[key]] || 0) + 1;
  });
  return counts;
}

// ---------------- COMPONENTS ----------------

function ProfileModal({ member, onClose, onConnect, isConnected }) {
  if (!member) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4">
          <img
            src={member.img}
            alt={member.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-1">
              <h2 className="text-lg font-bold text-gray-900">{member.name}</h2>
              <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500/20" />
            </div>
            <p className="text-sm text-gray-700">{member.role}</p>
            <p className="text-sm text-gray-700">{member.company}</p>
          </div>
        </div>

        <div className="mt-4">
          <span className={`text-xs font-medium px-2.5 py-1 rounded ${member.tagColor}`}>
            {member.segment}
          </span>
        </div>

        <p className="text-sm text-gray-600 mt-4 leading-relaxed">{member.bio}</p>

        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            {member.location}
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-gray-400" />
            {member.experience} experience
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-400" />
            {member.email}
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-400" />
            {member.phone}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={onClose}
            className="border border-gray-300 text-gray-800 text-sm font-medium py-2 rounded-md hover:bg-gray-50"
          >
            Close
          </button>
          <button
            onClick={() => onConnect(member)}
            disabled={isConnected}
            className={`text-sm font-medium py-2 rounded-md ${
              isConnected
                ? "bg-green-50 text-green-700 border border-green-200 cursor-default"
                : "bg-[#0B1F3A] text-white hover:bg-[#0B1F3A]/90"
            }`}
          >
            {isConnected ? "Request Sent" : "Message"}
          </button>
        </div>
      </div>
    </div>
  );
}

function ConnectModal({ member, onClose, onSent }) {
  const [message, setMessage] = useState("");

  if (!member) return null;

  const handleSend = () => {
    onSent(member.id);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4 mb-4">
          <img
            src={member.img}
            alt={member.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-1">
              <h2 className="text-lg font-bold text-gray-900">{member.name}</h2>
              <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500/20" />
            </div>
            <p className="text-sm text-gray-700">{member.role}</p>
            <p className="text-sm text-gray-700">{member.company}</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-3">
          Send a connection request to {member.name}. Add a short note to introduce yourself.
        </p>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder={`Hi ${member.name.split(" ")[0]}, I'd like to connect with you on REPC...`}
          className="w-full border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/30 resize-none"
        />

        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={onClose}
            className="border border-gray-300 text-gray-800 text-sm font-medium py-2 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            className="bg-[#0B1F3A] text-white text-sm font-medium py-2 rounded-md hover:bg-[#0B1F3A]/90"
          >
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
}

function MemberCard({ member, onViewProfile, onConnect, isConnected }) {
  return (
    <div className="border border-gray-200 rounded-lg p-5 bg-white flex flex-col">
      <div className="flex items-start gap-3">
        <img
          src={member.img}
          alt={member.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <h3 className="font-semibold text-gray-900">{member.name}</h3>
            <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500/20" />
          </div>
          <p className="text-sm text-gray-700 mt-0.5">{member.role}</p>
          <p className="text-sm text-gray-700">{member.company}</p>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
            <MapPin className="w-3 h-3" />
            {member.location}
          </p>
        </div>
      </div>

      <div className="mt-3">
        <span className={`text-xs font-medium px-2.5 py-1 rounded ${member.tagColor}`}>
          {member.segment}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          onClick={() => onViewProfile(member)}
          className="border border-gray-300 text-gray-800 text-sm font-medium py-2 rounded-md hover:bg-gray-50"
        >
          View Profile
        </button>
        <button
          onClick={() => onConnect(member)}
          disabled={isConnected}
          className={`text-sm font-medium py-2 rounded-md ${
            isConnected
              ? "bg-green-50 text-green-700 border border-green-200 cursor-default"
              : "bg-[#0B1F3A] text-white hover:bg-[#0B1F3A]/90"
          }`}
        >
          {isConnected ? "Request Sent" : "Message"}
        </button>
      </div>
    </div>
  );
}

function CheckboxFilterGroup({ title, items, counts, selected, onToggle, searchable, search, onSearchChange }) {
  return (
    <div className="py-4 border-b border-gray-200">
      <h4 className="font-semibold text-gray-900 mb-3">{title}</h4>

      {searchable && (
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={`Search ${title.toLowerCase()}...`}
            className="w-full border border-gray-300 rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/30"
          />
        </div>
      )}

      <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
        {items
          .filter((item) => !search || item.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <label
              key={item}
              className="flex items-center justify-between text-sm text-gray-700 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selected.includes(item)}
                  onChange={() => onToggle(item)}
                  className="w-4 h-4 rounded border-gray-300 text-[#0B1F3A] focus:ring-[#0B1F3A]"
                />
                {item}
              </span>
              <span className="text-gray-400">{counts[item] || 0}</span>
            </label>
          ))}
      </div>
    </div>
  );
}

// ---------------- MAIN PAGE ----------------

export default function MemberDirectory() {
  const [searchName, setSearchName] = useState("");
  const [searchCompany, setSearchCompany] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchSegment, setSearchSegment] = useState("");

  const [appliedSearch, setAppliedSearch] = useState({
    name: "",
    company: "",
    city: "",
    segment: "",
  });

  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedSegments, setSelectedSegments] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [citySidebarSearch, setCitySidebarSearch] = useState("");

  const [sortBy, setSortBy] = useState("Relevance");

  const [activeMember, setActiveMember] = useState(null);
  const [connectMember, setConnectMember] = useState(null);
  const [connectStatus, setConnectStatus] = useState({});

  const cityCounts = useMemo(() => countBy(allMembers, "city"), []);
  const segmentCounts = useMemo(() => countBy(allMembers, "segment"), []);
  const experienceCounts = useMemo(() => countBy(allMembers, "experience"), []);

  const toggleFromArray = (arr, setArr, value) => {
    setArr(arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]);
  };

  const handleSearch = () => {
    setAppliedSearch({
      name: searchName,
      company: searchCompany,
      city: searchCity,
      segment: searchSegment,
    });
  };

  const handleReset = () => {
    setSearchName("");
    setSearchCompany("");
    setSearchCity("");
    setSearchSegment("");
    setAppliedSearch({ name: "", company: "", city: "", segment: "" });
    setSelectedCities([]);
    setSelectedSegments([]);
    setSelectedExperience([]);
    setCitySidebarSearch("");
    setSortBy("Relevance");
  };

  const clearAllFilters = () => {
    setSelectedCities([]);
    setSelectedSegments([]);
    setSelectedExperience([]);
    setCitySidebarSearch("");
  };

  const filteredMembers = useMemo(() => {
    let result = allMembers.filter((m) => {
      const matchesName = m.name.toLowerCase().includes(appliedSearch.name.toLowerCase());
      const matchesCompany = m.company.toLowerCase().includes(appliedSearch.company.toLowerCase());
      const matchesCityDropdown = !appliedSearch.city || m.city === appliedSearch.city;
      const matchesSegmentDropdown = !appliedSearch.segment || m.segment === appliedSearch.segment;

      const matchesCitySidebar = selectedCities.length === 0 || selectedCities.includes(m.city);
      const matchesSegmentSidebar = selectedSegments.length === 0 || selectedSegments.includes(m.segment);
      const matchesExperience = selectedExperience.length === 0 || selectedExperience.includes(m.experience);

      return (
        matchesName &&
        matchesCompany &&
        matchesCityDropdown &&
        matchesSegmentDropdown &&
        matchesCitySidebar &&
        matchesSegmentSidebar &&
        matchesExperience
      );
    });

    if (sortBy === "Name (A-Z)") {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "Name (Z-A)") {
      result = [...result].sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "Experience") {
      const order = { "10+ Years": 3, "5 – 10 Years": 2, "0 – 5 Years": 1 };
      result = [...result].sort((a, b) => order[b.experience] - order[a.experience]);
    }

    return result;
  }, [appliedSearch, selectedCities, selectedSegments, selectedExperience, sortBy]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. Hero Banner Section */}
      <section className="relative overflow-hidden bg-[#0B1F3A]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=400&fit=crop"
            alt="Real estate professionals"
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A]/85 to-transparent" />
        </div>

        {/* Increased vertical padding here slightly from py-8 -> py-10 and lg:py-12 -> lg:py-16 */}
        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-12 lg:py-16">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#E8A33D]">
            MEMBER DIRECTORY
          </p>
          <h1 className="max-w-2xl text-[clamp(20px,2.5vw,36px)] font-bold leading-[1.3] text-white">
            Find &amp; Connect with
            <br />
            Real Estate Professionals.
          </h1>
          <div className="mt-3.5 h-[3px] w-14 rounded-sm bg-[#E8A33D]" />
          <p className="mt-2 max-w-xl text-sm font-semibold leading-[1.7] text-slate-200">
            Search, connect, and collaborate with verified real estate professionals across India and grow your network.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div className="md:col-span-1">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Search by Name
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                👤
              </span>
              <input
                type="text"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Enter name..."
                className="w-full border border-gray-300 rounded-md pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/30"
              />
            </div>
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Company Name
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchCompany}
                onChange={(e) => setSearchCompany(e.target.value)}
                placeholder="Enter company name..."
                className="w-full border border-gray-300 rounded-md pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/30"
              />
            </div>
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              City
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <select
                value={searchCity}
                onChange={(e) => setSearchCity(e.target.value)}
                className="w-full border border-gray-300 rounded-md pl-9 pr-8 py-2.5 text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/30"
              >
                <option value="">Select city...</option>
                {cityOptions.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="md:col-span-1">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Segment
            </label>
            <div className="relative">
              <select
                value={searchSegment}
                onChange={(e) => setSearchSegment(e.target.value)}
                className="w-full border border-gray-300 rounded-md pl-3 pr-8 py-2.5 text-sm text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/30"
              >
                <option value="">Select segment...</option>
                {segmentOptions.map((seg) => (
                  <option key={seg} value={seg}>
                    {seg}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="md:col-span-1 flex items-center gap-4">
            <button
              onClick={handleSearch}
              className="flex-1 bg-[#0B1F3A] text-white font-medium py-2.5 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-[#0B1F3A]/90"
            >
              <Search className="w-4 h-4" />
              Search
            </button>
            <button
              onClick={handleReset}
              className="text-blue-600 text-sm font-medium whitespace-nowrap"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Members List */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              Members ({filteredMembers.length} Results)
            </h2>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md pl-3 pr-8 py-2 text-sm text-gray-700 appearance-none focus:outline-none"
              >
                <option value="Relevance">Sort by: Relevance</option>
                <option value="Name (A-Z)">Name (A-Z)</option>
                <option value="Name (Z-A)">Name (Z-A)</option>
                <option value="Experience">Experience</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {filteredMembers.length === 0 ? (
            <div className="text-center py-16 text-gray-500 border border-dashed border-gray-300 rounded-lg">
              No members found. Try adjusting your filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMembers.map((member) => (
                <MemberCard
                  key={member.id}
                  member={member}
                  onViewProfile={setActiveMember}
                  onConnect={setConnectMember}
                  isConnected={!!connectStatus[member.id]}
                />
              ))}
            </div>
          )}
        </div>

        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-gray-900">Filter Members</h3>
              <button onClick={clearAllFilters} className="text-blue-600 text-sm font-medium">
                Clear All
              </button>
            </div>

            <CheckboxFilterGroup
              title="City"
              items={cityOptions}
              counts={cityCounts}
              selected={selectedCities}
              onToggle={(val) => toggleFromArray(selectedCities, setSelectedCities, val)}
              searchable
              search={citySidebarSearch}
              onSearchChange={setCitySidebarSearch}
            />

            <CheckboxFilterGroup
              title="Segment"
              items={segmentOptions}
              counts={segmentCounts}
              selected={selectedSegments}
              onToggle={(val) => toggleFromArray(selectedSegments, setSelectedSegments, val)}
            />

            <CheckboxFilterGroup
              title="Experience"
              items={experienceOptions}
              counts={experienceCounts}
              selected={selectedExperience}
              onToggle={(val) => toggleFromArray(selectedExperience, setSelectedExperience, val)}
            />
          </div>
        </div>
      </div>

      <ProfileModal
        member={activeMember}
        onClose={() => setActiveMember(null)}
        onConnect={(m) => {
          setActiveMember(null);
          setConnectMember(m);
        }}
        isConnected={activeMember ? !!connectStatus[activeMember.id] : false}
      />

      <ConnectModal
        member={connectMember}
        onClose={() => setConnectMember(null)}
        onSent={(id) =>
          setConnectStatus((prev) => ({ ...prev, [id]: true }))
        }
      />
    </div>
  );
}