"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Newspaper,
  BookOpen,
  Users,
  CalendarDays,
  Building2,
  Home,
  Menu,
  X,
  Bell,
  Settings,
  ChevronDown,
  ChevronRight,
  LogOut,
  User
} from "lucide-react";

/**
 * Mirrors the live site's real menu structure (rpec.vercel.app):
 * About Us / Community > Member Directory, Survey / Events > Awards, Summits,
 * Conferences, Networking, Webinars / Knowledge Hub > Articles, Reports,
 * Podcasts, Market News / Companies > Developers, Retail Brands, Service Providers.
 * "status: soon" items don't have an admin screen built yet, so they render
 * as inert rows with a badge instead of dead links.
 */
const NAV = [
  { type: "link", label: "Overview", href: "/admin", icon: LayoutDashboard },
  {
    type: "group",
    label: "Community",
    icon: Users,
    items: [
      { label: "Member Directory", href: "/admin/member-directory" },
      // { label: "Survey", href: "/admin/survey" }
    ]
  },
  {
    type: "group",
    label: "Events",
    icon: CalendarDays,
    items: [
      { label: "Awards", href: "/admin/events/awards" },
      { label: "Summits", href: "/admin/events/summits" },
      { label: "Conferences", href: "/admin/events/conferences" },
      { label: "Networking", href: "/admin/events/networking" },
      { label: "Webinars", href: "/admin/events/webinars" }
    ]
  },
  {
    type: "group",
    label: "Knowledge Hub",
    icon: BookOpen,
    items: [
      { label: "Articles", href: "/admin/articles", status: "live", icon: Newspaper },
      { label: "Blogs", href: "/admin/blogs", icon: BookOpen },
      { label: "Reports", href: "/admin/knowledge-hub/reports" },
      { label: "Podcasts", href: "/admin/knowledge-hub/podcasts" },
      { label: "Market News", href: "/admin/knowledge-hub/market-news" }
    ]
  },
  {
    type: "group",
    label: "Companies",
    icon: Building2,
    items: [
      { label: "Developers", href: "/admin/companies/developers" },
      { label: "Retail Brands", href: "/admin/companies/retail-brands" },
      { label: "Service Providers", href: "/admin/companies/service-providers" }
    ]
  }
];

const PAGE_TITLES = {
  "/admin": "Dashboard Overview",
  "/admin/articles": "Articles",
  "/admin/blogs": "Blogs"
};

function BrandMark() {
  return (
    <div className="flex items-center gap-2.5 min-w-0">
      <div className="flex flex-col leading-[1.1] min-w-0">
        <span className="text-[13px] font-black tracking-tight text-[#1B3A6B] truncate">
          Real Estate Professionals
        </span>
        <span className="text-[13px] font-black tracking-tight text-[#1B3A6B] -mt-0.5 truncate">
          Community
        </span>
      </div>
    </div>
  );
}

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState(() =>
    NAV.filter((n) => n.type === "group").map((n) => n.label)
  );

  useEffect(() => {
    const activeGroup = NAV.find(
      (n) => n.type === "group" && n.items.some((i) => i.href === pathname)
    );
    if (activeGroup) {
      setOpenGroups((prev) => (prev.includes(activeGroup.label) ? prev : [...prev, activeGroup.label]));
    }
  }, [pathname]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleGroup = (label) =>
    setOpenGroups((prev) => (prev.includes(label) ? prev.filter((g) => g !== label) : [...prev, label]));

  const pageTitle = PAGE_TITLES[pathname] || (pathname.split("/").pop() || "Dashboard");

  const NavContent = ({ onNavigate }) => (
    <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
      {NAV.map((entry) => {
        if (entry.type === "link") {
          const isActive = pathname === entry.href;
          const Icon = entry.icon;
          return (
            <Link
              key={entry.label}
              href={entry.href}
              onClick={onNavigate}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-[#E8A33D] text-slate-950 shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Icon className={`h-4.5 w-4.5 ${isActive ? "text-slate-950" : "text-slate-400"}`} />
              {entry.label}
            </Link>
          );
        }

        // entry.type === "group"
        const GroupIcon = entry.icon;
        const isOpen = openGroups.includes(entry.label);
        const hasActiveChild = entry.items.some((i) => i.href === pathname);

        return (
          <div key={entry.label} className="space-y-1">
            <button
              type="button"
              onClick={() => toggleGroup(entry.label)}
              className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                hasActiveChild
                  ? "text-slate-900 bg-slate-100"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <span className="flex items-center gap-3">
                <GroupIcon className={`h-4.5 w-4.5 ${hasActiveChild ? "text-slate-700" : "text-slate-400"}`} />
                {entry.label}
              </span>
              {isOpen ? (
                <ChevronDown className="h-4 w-4 text-slate-400" />
              ) : (
                <ChevronRight className="h-4 w-4 text-slate-400" />
              )}
            </button>

            {isOpen && (
              <div className="ml-4 pl-4 border-l border-slate-200 space-y-1">
                {entry.items.map((item) => {
                  if (item.status === "soon") {
                    return (
                      <div
                        key={item.label}
                        className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg text-sm text-slate-400 cursor-not-allowed"
                      >
                        {item.label}
                        <span className="text-[10px] uppercase tracking-wide font-bold bg-slate-100 text-slate-400 px-1.5 py-0.5 rounded">
                          Soon
                        </span>
                      </div>
                    );
                  }

                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={onNavigate}
                      className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[#E8A33D] text-slate-950 font-bold"
                          : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex font-sans antialiased" suppressHydrationWarning>
      {/* ── Sidebar Desktop ── */}
      <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-slate-200 shrink-0">
        <a
          href="https://rpec.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="h-20 flex items-center px-6 border-b border-slate-200 hover:bg-slate-50 transition-colors"
          title="Visit REPC – Real Estate Professionals Community"
        >
          <BrandMark />
        </a>

        <NavContent />

        <div className="p-4 border-t border-slate-200 space-y-1">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <Home className="h-4.5 w-4.5 text-slate-400" />
            Back to Website
          </Link>
          <button
            onClick={() => alert("Logged out successfully.")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
          >
            <LogOut className="h-4.5 w-4.5 text-red-500" />
            Log Out
          </button>
        </div>
      </aside>

      {/* ── Mobile Sidebar ── */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={toggleSidebar} />

        {/* Menu Container */}
        <aside
          className={`absolute top-0 bottom-0 left-0 w-72 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-16 flex items-center justify-between px-6 border-b border-slate-200">
            <Link href="/admin" className="flex flex-col leading-none" onClick={toggleSidebar}>
              <span className="text-lg font-black tracking-tight text-[#E8A33D] uppercase">
                REPC Admin
              </span>
              <span className="text-[8px] tracking-[0.2em] text-slate-400 font-semibold uppercase mt-0.5">
                Control Panel
              </span>
            </Link>
            <button className="text-slate-400 hover:text-slate-700" onClick={toggleSidebar}>
              <X className="h-5 w-5" />
            </button>
          </div>

          <NavContent onNavigate={toggleSidebar} />

          <div className="p-4 border-t border-slate-200 space-y-1">
            <Link
              href="/"
              onClick={toggleSidebar}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <Home className="h-4.5 w-4.5 text-slate-400" />
              Back to Website
            </Link>
            <button
              onClick={() => {
                toggleSidebar();
                alert("Logged out successfully.");
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-600 hover:bg-red-50 text-left cursor-pointer"
            >
              <LogOut className="h-4.5 w-4.5 text-red-500" />
              Log Out
            </button>
          </div>
        </aside>
      </div>

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Brand utility strip */}
        <div className="h-9 bg-[#0B1F3A] text-white/80 flex items-center justify-between px-4 sm:px-6 lg:px-8 text-[11px]">
          <a
            href="https://rpec.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:text-amber-300 transition-colors truncate"
          >
            REPC – Real Estate Professionals Community
          </a>
          <span className="hidden sm:inline text-white/50 font-medium">
            One Network. Endless Possibilities.
          </span>
        </div>

        <header className="h-16 border-b border-slate-200 bg-white/90 backdrop-blur-md sticky top-9 z-30 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-slate-500 hover:text-slate-800 p-1.5 rounded-lg hover:bg-slate-100"
              onClick={toggleSidebar}
            >
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="text-lg font-bold text-slate-800 tracking-tight capitalize">
              {pageTitle}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 relative transition-colors border border-slate-200 bg-white">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-amber-500 rounded-full" />
            </button>

            <div className="relative">
              <button
                className="flex items-center gap-2 p-1 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200 bg-white"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-[#E8A33D] to-amber-300 flex items-center justify-center text-slate-950 font-black text-xs">
                  A
                </div>
                <span className="hidden sm:inline text-sm font-semibold text-slate-600">Admin User</span>
                <ChevronDown className="h-4 w-4 text-slate-500 hidden sm:inline" />
              </button>

              {profileOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)} />
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-2xl py-1.5 z-50 text-sm">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="font-bold text-slate-900">REPC Admin</p>
                      <p className="text-xs text-slate-500">admin@repc.in</p>
                    </div>
                    <Link
                      href="/admin"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    >
                      <LayoutDashboard className="h-4 w-4 text-slate-400" />
                      Dashboard
                    </Link>
                    <Link
                      href="/admin"
                      onClick={() => {
                        setProfileOpen(false);
                        alert("Settings are coming soon.");
                      }}
                      className="flex items-center gap-2 px-4 py-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    >
                      <Settings className="h-4 w-4 text-slate-400" />
                      Settings
                    </Link>
                    <hr className="border-slate-100 my-1" />
                    <button
                      onClick={() => {
                        setProfileOpen(false);
                        alert("Logged out successfully.");
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2.5 text-red-600 hover:bg-red-50 text-left cursor-pointer font-medium"
                    >
                      <LogOut className="h-4 w-4" />
                      Log Out
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}