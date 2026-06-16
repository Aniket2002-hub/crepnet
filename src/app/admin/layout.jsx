"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Newspaper,
  Home,
  Menu,
  X,
  Bell,
  Settings,
  ChevronDown,
  LogOut,
  User
} from "lucide-react";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const menuItems = [
    { label: "Overview", href: "/admin", icon: LayoutDashboard },
    { label: "Articles", href: "/admin/articles", icon: Newspaper },
    { label: "Blogs", href: "/admin/blogs", icon: BookOpen },
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex font-sans antialiased" suppressHydrationWarning>
      {/* ── Sidebar Desktop ── */}
      <aside className="hidden lg:flex flex-col w-64 bg-slate-950 border-r border-slate-800 shrink-0">
        {/* Branding */}
        <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950">
          <Link href="/admin" className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tight text-[#E8A33D] uppercase">
              REPC Admin
            </span>
            <span className="text-[9px] tracking-[0.2em] text-slate-400 font-semibold uppercase mt-0.5">
              Control Panel
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#E8A33D] text-slate-950 font-bold shadow-lg shadow-[#E8A33D]/20 scale-[1.02]"
                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                }`}
              >
                <Icon className={`h-5 w-5 ${isActive ? "text-slate-950" : "text-slate-400 group-hover:text-white"}`} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800 space-y-1 bg-slate-950/50">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
          >
            <Home className="h-5 w-5 text-slate-400" />
            Back to Website
          </Link>
          <button
            onClick={() => alert("Logged out successfully!")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors cursor-pointer"
          >
            <LogOut className="h-5 w-5 text-red-400" />
            Logout
          </button>
        </div>
      </aside>

      {/* ── Mobile Sidebar (Drawer) ── */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={toggleSidebar} />

        {/* Menu Container */}
        <aside
          className={`absolute top-0 bottom-0 left-0 w-64 bg-slate-950 border-r border-slate-800 flex flex-col transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
            <Link href="/admin" className="flex flex-col leading-none" onClick={toggleSidebar}>
              <span className="text-lg font-black tracking-tight text-[#E8A33D] uppercase">
                REPC Admin
              </span>
              <span className="text-[8px] tracking-[0.2em] text-slate-400 font-semibold uppercase mt-0.5">
                Control Panel
              </span>
            </Link>
            <button className="text-slate-400 hover:text-white" onClick={toggleSidebar}>
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={toggleSidebar}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#E8A33D] text-slate-950 font-bold"
                      : "text-slate-400 hover:text-white hover:bg-slate-900"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "text-slate-950" : "text-slate-400"}`} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-slate-800 space-y-1 bg-slate-950/50">
            <Link
              href="/"
              onClick={toggleSidebar}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              <Home className="h-5 w-5" />
              Back to Website
            </Link>
            <button
              onClick={() => {
                toggleSidebar();
                alert("Logged out successfully!");
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors text-left cursor-pointer"
            >
              <LogOut className="h-5 w-5" />
              Logout
            </button>
          </div>
        </aside>
      </div>

      {/* ── Main Content Area ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Header */}
        <header className="h-16 border-b border-slate-800 bg-slate-950/40 backdrop-blur-md sticky top-0 z-30 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Mobile Toggle & Page Title */}
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-900"
              onClick={toggleSidebar}
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-bold text-white tracking-tight capitalize">
              {pathname === "/admin" ? "Dashboard Overview" : pathname.split("/").pop()}
            </h1>
          </div>

          {/* Right: Notifications & Profile */}
          <div className="flex items-center gap-4">
            {/* Notifications */}
            <button className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 relative transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full" />
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-900 transition-colors text-left"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-[#E8A33D] to-amber-300 flex items-center justify-center text-slate-950 font-black text-sm shadow-md">
                  A
                </div>
                <span className="hidden sm:inline text-sm font-semibold text-slate-300">Admin User</span>
                <ChevronDown className="h-4 w-4 text-slate-500 hidden sm:inline" />
              </button>

              {profileOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)} />
                  <div className="absolute right-0 mt-2 w-48 bg-slate-950 border border-slate-800 rounded-xl shadow-2xl py-1.5 z-50 text-sm">
                    <div className="px-4 py-2 border-b border-slate-800">
                      <p className="font-bold text-white">REPC Admin</p>
                      <p className="text-xs text-slate-500">admin@repc.in</p>
                    </div>
                    <Link
                      href="/admin"
                      onClick={() => setProfileOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-900"
                    >
                      <LayoutDashboard className="h-4 w-4 text-slate-400" />
                      Dashboard
                    </Link>
                    <Link
                      href="/admin"
                      onClick={() => {
                        setProfileOpen(false);
                        alert("Settings are coming soon!");
                      }}
                      className="flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-900"
                    >
                      <Settings className="h-4 w-4 text-slate-400" />
                      Settings
                    </Link>
                    <hr className="border-slate-800 my-1.5" />
                    <button
                      onClick={() => {
                        setProfileOpen(false);
                        alert("Logged out successfully!");
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 text-left cursor-pointer"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Content Container */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
