import { HiUserGroup } from "react-icons/hi";
import { BsBuildingsFill } from "react-icons/bs";
import { TbPresentationAnalytics } from "react-icons/tb";
import { Ellipsis, DollarSign, FileSpreadsheet, Headset } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const LISTINGS_CATEGORIES = [
  { title: "All Stakeholders", icon: HiUserGroup },
  { title: "Developers", icon: BsBuildingsFill },
  { title: "Investors", icon: DollarSign },
  { title: "Occupiers", icon: FileSpreadsheet },
  { title: "Consultants", icon: TbPresentationAnalytics },
  { title: "Service Providers", icon: Headset },
  { title: "More", icon: Ellipsis },
];

// 
// DATA OF THE DEVELOPER CARDS
// 



const DEVELOPER_DATA = [
  [
    {
      name: "Sumeru Developers",
      image: "https://via.placeholder.com/150",
      location: "Mumbai, Maharashtra",
      description:
        "Leading real estate developer with 25+ years of expertise in delivering world-class commercial, retail and mixed-use spaces.",
      experience: "25+ Years",
      ongoingProject: "12+ Ongoing Projects",
      areaDeveloped: "18.5 Mn sq ft",
      tags: ["Office", "Retail", "Mixed-Use", "Hospitality", "+1"],
    },

    {
      name: "Acme Realty",
      image: "https://via.placeholder.com/150",
      location: "Bengaluru, Karnataka",
      description:
        "Creating innovative workspaces and IT parks that empower businesses and communities.",
      experience: "20+ Years",
      ongoingProject: "8+ Ongoing Projects",
      areaDeveloped: "10.2 Mn sq ft",
      tags: ["Office", "IT Parks", "Industrial", "Flex Spaces"],
    },
    {
      name: "Skyline Spaces",
      image: "https://via.placeholder.com/150",
      location: "Delhi NCR",
      description:
        "Specialists in premium commercial, retail and mixed-use developments across North India.",
      experience: "15+ Years",
      ongoingProject: "6+ Ongoing Projects",
      areaDeveloped: "7.8 Mn sq ft",
      tags: ["Retail", "Office", "Mixed-Use", "High Street"],
    },
    {
      name: "UrbanWorks",
      image: "https://via.placeholder.com/150",
      location: "Pune, Maharashtra",
      description:
        "Sustainable real estate solutions with a focus on design, innovation and long-term value.",
      experience: "12+ Years",
      ongoingProject: "5+ Ongoing Projects",
      areaDeveloped: "5.6 Mn sq ft",
      tags: ["Office", "Industrial", "Warehousing"],
    },
  ],
];

// Dividing UI into 5 parts
// 1. Hero Banner
// 2. Categories
// 3. Search Bar
// 4. Result Cards
// 5. Join Us Banner 

// ─────────────────────────────────────────────────────────────
// HERO BANNER
// ─────────────────────────────────────────────────────────────

function HeroBanner() {
  return (
    <div>
      <h1>Hero Banner</h1>
    </div>
  );
}





export default function Listings() {
  return (
    <div>
      <h1>Listing Page</h1>
    </div>
  );
}
