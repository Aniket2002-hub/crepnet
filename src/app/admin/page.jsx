"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Newspaper,
  BookOpen,
  Eye,
  FileText,
  Plus,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Search,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const DEFAULT_ARTICLES = [
  {
    id: "art-1",
    title: "Co-working Spaces Rise by 25% in Bengaluru & Pune",
    author: "Rohit Mehta",
    category: "Office Spaces",
    status: "Published",
    date: "2026-06-01",
    views: 1240,
    content: "Detailed analysis of coworking trends in key Tier 1 cities..."
  },
  {
    id: "art-2",
    title: "Retail Leasing Trends: Fashion Brands Lead the Demand",
    author: "Ananya Sharma",
    category: "Retail",
    status: "Published",
    date: "2026-06-10",
    views: 940,
    content: "High-streets vs malls: retail absorption is hitting record highs..."
  },
  {
    id: "art-3",
    title: "Logistics Hubs Near Chennai Attract FDI",
    author: "Vikram Kapoor",
    category: "Logistics",
    status: "Draft",
    date: "2026-06-15",
    views: 0,
    content: "New policies and investment flows in industrial warehouses near coastal Chennai..."
  }
];

const DEFAULT_BLOGS = [
  {
    id: "blog-1",
    title: "Why Investors are Pivoting to REITs in 2026",
    author: "Amit Shah",
    tags: "REITs, Investment, Finance",
    readTime: 5,
    status: "Published",
    date: "2026-05-20",
    views: 3420,
    content: "Real Estate Investment Trusts offer steady yields. Here is a breakdown..."
  },
  {
    id: "blog-2",
    title: "5 Design Principles for the Modern Workplace",
    author: "Neha Iyer",
    tags: "Workplace, Architecture",
    readTime: 7,
    status: "Published",
    date: "2026-06-05",
    views: 1890,
    content: "Biophilic designs, private focus pods, and flexible layouts are shaping decisions..."
  },
  {
    id: "blog-3",
    title: "Is Hospitality Recovering in Goa & Rajasthan?",
    author: "Vimal Nadar",
    tags: "Hospitality, Tourism",
    readTime: 4,
    status: "Draft",
    date: "2026-06-14",
    views: 0,
    content: "Resort demand is scaling, leading to major hotel brand signings..."
  }
];

const ARTICLE_BADGE = "text-[#D9821E] bg-[#E8A33D]/10 border-[#E8A33D]/25";
const BLOG_BADGE = "text-sky-700 bg-sky-500/10 border-sky-500/25";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ articles: 0, blogs: 0, drafts: 0, views: 0 });
  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const [draftTitle, setDraftTitle] = useState("");
  const [draftType, setDraftType] = useState("article");
  const [draftCategory, setDraftCategory] = useState("Office Spaces");
  const [draftContent, setDraftContent] = useState("");
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  useEffect(() => {
    let articles = JSON.parse(localStorage.getItem("repc_articles")) || DEFAULT_ARTICLES;
    let blogs = JSON.parse(localStorage.getItem("repc_blogs")) || DEFAULT_BLOGS;

    const draftArticles = articles.filter((a) => a.status === "Draft").length;
    const draftBlogs = blogs.filter((b) => b.status === "Draft").length;
    const viewsArticles = articles.reduce((sum, item) => sum + (item.views || 0), 0);
    const viewsBlogs = blogs.reduce((sum, item) => sum + (item.views || 0), 0);

    setStats({
      articles: articles.length,
      blogs: blogs.length,
      drafts: draftArticles + draftBlogs,
      views: viewsArticles + viewsBlogs
    });

    const formattedArticles = articles.map((a) => ({ ...a, type: "Article", badgeClass: ARTICLE_BADGE }));
    const formattedBlogs = blogs.map((b) => ({ ...b, type: "Blog", badgeClass: BLOG_BADGE }));

    const combined = [...formattedArticles, ...formattedBlogs].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setAllItems(combined);
    setFilteredItems(combined);
  }, []);

  useEffect(() => {
    let results = allItems;
    if (searchTerm) {
      results = results.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (statusFilter !== "All") {
      results = results.filter((item) => item.status === statusFilter);
    }
    if (typeFilter !== "All") {
      results = results.filter((item) => item.type === typeFilter);
    }
    setFilteredItems(results);
  }, [searchTerm, statusFilter, typeFilter, allItems]);

  const handleSaveQuickDraft = (e) => {
    e.preventDefault();
    if (!draftTitle.trim() || !draftContent.trim()) return;

    setIsSavingDraft(true);

    setTimeout(() => {
      const today = new Date().toISOString().split("T")[0];
      const newItem = {
        id: `draft-${Date.now()}`,
        title: draftTitle,
        author: "Admin User",
        status: "Draft",
        date: today,
        views: 0,
        content: draftContent
      };

      if (draftType === "article") {
        const current = JSON.parse(localStorage.getItem("repc_articles")) || DEFAULT_ARTICLES;
        newItem.category = draftCategory;
        localStorage.setItem("repc_articles", JSON.stringify([newItem, ...current]));
      } else {
        const current = JSON.parse(localStorage.getItem("repc_blogs")) || DEFAULT_BLOGS;
        newItem.tags = draftCategory;
        newItem.readTime = 5;
        localStorage.setItem("repc_blogs", JSON.stringify([newItem, ...current]));
      }

      const typeLabel = draftType === "article" ? "Article" : "Blog";
      const badge = draftType === "article" ? ARTICLE_BADGE : BLOG_BADGE;

      setAllItems((prev) => [{ ...newItem, type: typeLabel, badgeClass: badge }, ...prev]);
      setStats((prev) => ({
        ...prev,
        articles: draftType === "article" ? prev.articles + 1 : prev.articles,
        blogs: draftType === "blog" ? prev.blogs + 1 : prev.blogs,
        drafts: prev.drafts + 1
      }));

      setDraftTitle("");
      setDraftContent("");
      setIsSavingDraft(false);
    }, 500);
  };

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="relative rounded-2xl bg-gradient-to-br from-[#0B1F3A] to-[#1E3A8A] p-6 sm:p-8 overflow-hidden shadow-sm text-white">
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
          <Sparkles className="h-56 w-56 text-amber-400" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300/90 mb-2">
            Workspace Overview
          </p>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Content Performance at a Glance
          </h2>
          <p className="text-slate-300 text-sm mt-3 leading-relaxed max-w-xl">
            Track published articles and blogs, monitor engagement across your real estate
            coverage, and publish new content directly from this desk.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <Link
              href="/admin/articles"
              className="flex items-center gap-2 px-4 py-2.5 bg-[#E8A33D] text-slate-950 font-bold text-xs rounded-xl shadow-sm hover:bg-amber-400 transition-colors"
            >
              <Plus className="h-4 w-4 stroke-[3]" /> New Article
            </Link>
            <Link
              href="/admin/blogs"
              className="flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-xl transition-colors border border-white/15"
            >
              <Plus className="h-4 w-4 text-[#E8A33D]" /> New Blog Post
            </Link>
          </div>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: "Total Articles", value: stats.articles, icon: Newspaper, color: "text-[#D9821E] bg-[#E8A33D]/10" },
          { label: "Total Blogs", value: stats.blogs, icon: BookOpen, color: "text-sky-700 bg-sky-500/10" },
          { label: "Drafts Pending", value: stats.drafts, icon: FileText, color: "text-amber-700 bg-amber-500/10" },
          { label: "Total Views", value: stats.views.toLocaleString(), icon: Eye, color: "text-[#0B1F3A] bg-[#0B1F3A]/5" }
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:border-slate-300 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{card.label}</p>
                <h3 className="text-3xl font-black text-slate-900 mt-2 tracking-tight">{card.value}</h3>
              </div>
              <div className={`p-3 rounded-xl ${card.color}`}>
                <card.icon className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Records Table */}
        <div className="lg:col-span-2 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900 tracking-tight">Recent Content</h3>
              <p className="text-xs text-slate-500 mt-0.5">All published and draft records, most recent first.</p>
            </div>

            <div className="flex gap-2">
              <select
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:border-slate-300"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Article">Articles</option>
                <option value="Blog">Blogs</option>
              </select>
              <select
                className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-700 focus:outline-none focus:border-slate-300"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>

          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-300 transition-colors"
            />
          </div>

          <div className="overflow-x-auto border border-slate-100 rounded-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                  <th className="p-4">Content</th>
                  <th className="p-4">Author</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Open</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredItems.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-10 text-slate-400">
                      No content matches your filters.
                    </td>
                  </tr>
                ) : (
                  filteredItems.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 max-w-xs">
                        <div className="font-semibold text-slate-900 truncate">{item.title}</div>
                        <div className="text-[10px] text-slate-500 flex items-center gap-2 mt-1">
                          <span>{item.date}</span>
                          <span>·</span>
                          <span className="flex items-center gap-1">
                            <Eye className="h-2.5 w-2.5" /> {item.views} views
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-slate-600 font-medium">{item.author}</td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 border rounded text-[10px] font-bold tracking-wide ${item.badgeClass}`}>
                          {item.type}
                        </span>
                      </td>
                      <td className="p-4">
                        <div
                          className={`flex items-center gap-1.5 text-[11px] font-semibold ${
                            item.status === "Published" ? "text-emerald-600" : "text-amber-600"
                          }`}
                        >
                          {item.status === "Published" ? (
                            <CheckCircle className="h-3 w-3" />
                          ) : (
                            <AlertCircle className="h-3 w-3" />
                          )}
                          {item.status}
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <Link
                          href={item.type === "Article" ? "/admin/articles" : "/admin/blogs"}
                          className="inline-flex items-center justify-center p-2 bg-white text-slate-400 rounded-lg hover:text-slate-900 border border-slate-200 hover:border-slate-300 transition-colors"
                        >
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Draft Panel */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm space-y-5">
          <div>
            <h3 className="text-base font-bold text-slate-900 tracking-tight">Quick Draft</h3>
            <p className="text-xs text-slate-500 mt-0.5">Save a new draft in seconds.</p>
          </div>

          <form onSubmit={handleSaveQuickDraft} className="space-y-4">
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5">
                Content Type
              </label>
              <div className="grid grid-cols-2 gap-2 bg-slate-50 p-1 border border-slate-200 rounded-xl">
                <button
                  type="button"
                  onClick={() => setDraftType("article")}
                  className={`py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    draftType === "article" ? "bg-[#E8A33D] text-slate-950" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Article
                </button>
                <button
                  type="button"
                  onClick={() => setDraftType("blog")}
                  className={`py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    draftType === "blog" ? "bg-sky-500 text-slate-950" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Blog
                </button>
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5">
                Title
              </label>
              <input
                type="text"
                value={draftTitle}
                onChange={(e) => setDraftTitle(e.target.value)}
                placeholder="Enter a title..."
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-300 transition-colors"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5">
                {draftType === "article" ? "Category" : "Tags (comma separated)"}
              </label>
              {draftType === "article" ? (
                <select
                  value={draftCategory}
                  onChange={(e) => setDraftCategory(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-slate-300 transition-colors"
                >
                  <option value="Office Spaces">Office Spaces</option>
                  <option value="Retail">Retail</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Investment">Investment</option>
                </select>
              ) : (
                <input
                  type="text"
                  value={draftCategory}
                  onChange={(e) => setDraftCategory(e.target.value)}
                  placeholder="e.g. Design, Workplace"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-300 transition-colors"
                />
              )}
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5">
                Summary
              </label>
              <textarea
                value={draftContent}
                onChange={(e) => setDraftContent(e.target.value)}
                rows={4}
                placeholder="Write a short summary..."
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-300 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSavingDraft}
              className="w-full py-3 bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60 font-bold text-xs rounded-xl transition-colors tracking-wider uppercase cursor-pointer"
            >
              {isSavingDraft ? "Saving Draft..." : "Save Draft"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}