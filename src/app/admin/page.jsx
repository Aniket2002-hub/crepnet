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
  Clock,
  Sparkles
} from "lucide-react";

// Default seed data
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

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    articles: 0,
    blogs: 0,
    drafts: 0,
    views: 0
  });
  const [recentItems, setRecentItems] = useState([]);
  
  // Quick Draft Form State
  const [draftTitle, setDraftTitle] = useState("");
  const [draftType, setDraftType] = useState("article");
  const [draftCategory, setDraftCategory] = useState("Office Spaces");
  const [draftContent, setDraftContent] = useState("");
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  useEffect(() => {
    // Initialise LocalStorage if empty
    let articles = JSON.parse(localStorage.getItem("repc_articles"));
    if (!articles) {
      localStorage.setItem("repc_articles", JSON.stringify(DEFAULT_ARTICLES));
      articles = DEFAULT_ARTICLES;
    }

    let blogs = JSON.parse(localStorage.getItem("repc_blogs"));
    if (!blogs) {
      localStorage.setItem("repc_blogs", JSON.stringify(DEFAULT_BLOGS));
      blogs = DEFAULT_BLOGS;
    }

    // Calculate Stats
    const draftArticles = articles.filter(a => a.status === "Draft").length;
    const draftBlogs = blogs.filter(b => b.status === "Draft").length;
    
    const viewsArticles = articles.reduce((sum, item) => sum + (item.views || 0), 0);
    const viewsBlogs = blogs.reduce((sum, item) => sum + (item.views || 0), 0);

    setStats({
      articles: articles.length,
      blogs: blogs.length,
      drafts: draftArticles + draftBlogs,
      views: viewsArticles + viewsBlogs
    });

    // Merge & Sort for Recent Activity (latest first)
    const formattedArticles = articles.map(a => ({ ...a, type: "Article", colorClass: "text-[#E8A33D] bg-[#E8A33D]/10" }));
    const formattedBlogs = blogs.map(b => ({ ...b, type: "Blog", colorClass: "text-sky-400 bg-sky-500/10" }));
    const merged = [...formattedArticles, ...formattedBlogs]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 4);

    setRecentItems(merged);
  }, []);

  const handleSaveQuickDraft = (e) => {
    e.preventDefault();
    if (!draftTitle.trim() || !draftContent.trim()) {
      alert("Please fill in the draft title and content.");
      return;
    }

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
        const updated = [newItem, ...current];
        localStorage.setItem("repc_articles", JSON.stringify(updated));
        
        // Refresh Stats
        setStats(prev => ({
          ...prev,
          articles: updated.length,
          drafts: prev.drafts + 1
        }));
      } else {
        const current = JSON.parse(localStorage.getItem("repc_blogs")) || DEFAULT_BLOGS;
        newItem.tags = draftCategory;
        newItem.readTime = 5; // default
        const updated = [newItem, ...current];
        localStorage.setItem("repc_blogs", JSON.stringify(updated));
        
        // Refresh Stats
        setStats(prev => ({
          ...prev,
          blogs: updated.length,
          drafts: prev.drafts + 1
        }));
      }

      // Prepend to recent list
      const typeLabel = draftType === "article" ? "Article" : "Blog";
      const color = draftType === "article" ? "text-[#E8A33D] bg-[#E8A33D]/10" : "text-sky-400 bg-sky-500/10";
      setRecentItems(prev => [
        { ...newItem, type: typeLabel, colorClass: color },
        ...prev
      ].slice(0, 4));

      // Reset Form
      setDraftTitle("");
      setDraftContent("");
      setIsSavingDraft(false);
      alert("Quick Draft saved successfully!");
    }, 800);
  };

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="relative rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-[#0B1F3A] border border-slate-800 p-6 sm:p-8 overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Sparkles className="h-40 w-40 text-amber-400" />
        </div>
        <div className="relative z-10 max-w-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Welcome Back, <span className="text-[#E8A33D]">Admin</span>!
          </h2>
          <p className="text-slate-400 text-sm mt-2 leading-relaxed">
            Manage your corporate blog posts, research articles, and marketing content from your centralized real estate control center.
          </p>
          <div className="mt-5 flex gap-3 flex-wrap">
            <Link
              href="/admin/articles"
              className="flex items-center gap-1.5 px-4 py-2 bg-[#E8A33D] text-slate-950 font-bold text-xs rounded-xl shadow-md hover:bg-amber-500 hover:shadow-lg transition-all"
            >
              <Plus className="h-4 w-4" /> Add Article
            </Link>
            <Link
              href="/admin/blogs"
              className="flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-all"
            >
              <Plus className="h-4 w-4 text-slate-400" /> Add Blog Post
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Articles */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 group shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Articles</p>
              <h3 className="text-3xl font-extrabold text-white mt-2 group-hover:text-[#E8A33D] transition-colors">{stats.articles}</h3>
            </div>
            <div className="p-3 bg-[#E8A33D]/10 rounded-xl text-[#E8A33D]">
              <Newspaper className="h-6 w-6" />
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-4 font-semibold">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>+2 updated this week</span>
          </div>
        </div>

        {/* Total Blogs */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 group shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Blogs</p>
              <h3 className="text-3xl font-extrabold text-white mt-2 group-hover:text-sky-400 transition-colors">{stats.blogs}</h3>
            </div>
            <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400">
              <BookOpen className="h-6 w-6" />
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-4 font-semibold">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>+1 new post published</span>
          </div>
        </div>

        {/* Pending Drafts */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 group shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Drafts Queue</p>
              <h3 className="text-3xl font-extrabold text-white mt-2 group-hover:text-amber-500 transition-colors">{stats.drafts}</h3>
            </div>
            <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500">
              <FileText className="h-6 w-6" />
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-4">
            <Clock className="h-3.5 w-3.5 text-slate-500" />
            <span>Awaiting publication review</span>
          </div>
        </div>

        {/* Estimated Views */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 group shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Content Views</p>
              <h3 className="text-3xl font-extrabold text-white mt-2 group-hover:text-purple-400 transition-colors">{stats.views.toLocaleString()}</h3>
            </div>
            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
              <Eye className="h-6 w-6" />
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-4 font-semibold">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>+12.4% vs last month</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Recent Activity & Quick Draft */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Content Activity */}
        <div className="lg:col-span-2 bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white tracking-tight">Recent Content Updates</h3>
              <span className="text-xs text-slate-500">Sorted by newest</span>
            </div>

            <div className="space-y-4">
              {recentItems.length === 0 ? (
                <p className="text-slate-500 text-sm text-center py-6">No recent updates. Create content to get started.</p>
              ) : (
                recentItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-slate-900/40 rounded-xl border border-slate-800 hover:border-slate-700 transition-all group"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className={`h-10 w-10 shrink-0 rounded-lg flex items-center justify-center font-bold text-xs ${item.colorClass}`}>
                        {item.type}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-sm text-slate-200 truncate group-hover:text-white transition-colors">
                          {item.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                          <span>By {item.author}</span>
                          <span>•</span>
                          <span>{item.date}</span>
                          <span>•</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            item.status === "Published" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={item.type === "Article" ? "/admin/articles" : "/admin/blogs"}
                      className="p-2 text-slate-500 hover:text-white rounded-lg hover:bg-slate-850 transition-all shrink-0"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
            <span className="text-slate-500">Live preview synced with client storage</span>
            <div className="flex gap-4">
              <Link href="/admin/articles" className="text-[#E8A33D] hover:underline font-bold">Manage Articles</Link>
              <Link href="/admin/blogs" className="text-sky-400 hover:underline font-bold">Manage Blogs</Link>
            </div>
          </div>
        </div>

        {/* Quick Draft Container */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-md">
          <h3 className="text-lg font-bold text-white tracking-tight mb-4">Quick Draft</h3>
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">
            Quickly jot down a draft title and description. It will save in draft mode for you to review and publish later.
          </p>

          <form onSubmit={handleSaveQuickDraft} className="space-y-4">
            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Draft Type</label>
              <div className="grid grid-cols-2 gap-2 bg-slate-900 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setDraftType("article")}
                  className={`py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    draftType === "article"
                      ? "bg-[#E8A33D] text-slate-950"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Article
                </button>
                <button
                  type="button"
                  onClick={() => setDraftType("blog")}
                  className={`py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    draftType === "blog"
                      ? "bg-sky-450 bg-sky-500 text-slate-950"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  Blog Post
                </button>
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Title</label>
              <input
                type="text"
                value={draftTitle}
                onChange={(e) => setDraftTitle(e.target.value)}
                placeholder="Draft idea title..."
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-slate-700 transition-colors"
              />
            </div>

            {draftType === "article" && (
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Category</label>
                <select
                  value={draftCategory}
                  onChange={(e) => setDraftCategory(e.target.value)}
                  className="w-full px-3 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-slate-700 transition-colors"
                >
                  <option value="Office Spaces">Office Spaces</option>
                  <option value="Retail">Retail</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Investment">Investment</option>
                </select>
              </div>
            )}

            {draftType === "blog" && (
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Tags (separated by comma)</label>
                <input
                  type="text"
                  value={draftCategory}
                  onChange={(e) => setDraftCategory(e.target.value)}
                  placeholder="e.g. Design, Workplace, REITs"
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-slate-700 transition-colors"
                />
              </div>
            )}

            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Content Outline</label>
              <textarea
                value={draftContent}
                onChange={(e) => setDraftContent(e.target.value)}
                rows={3}
                placeholder="What is this piece about?"
                className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-slate-700 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSavingDraft}
              className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {isSavingDraft ? "Saving..." : "Save Draft"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
