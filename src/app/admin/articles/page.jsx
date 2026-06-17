"use client";

import { useState, useEffect } from "react";
import {
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  Eye,
  X,
  FileText,
  Calendar,
  User,
  ExternalLink
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

export default function ArticlesManagement() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("create"); // "create" | "edit"
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Form State
  const [formTitle, setFormTitle] = useState("");
  const [formAuthor, setFormAuthor] = useState("");
  const [formCategory, setFormCategory] = useState("Office Spaces");
  const [formStatus, setFormStatus] = useState("Draft");
  const [formDate, setFormDate] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formViews, setFormViews] = useState(0);

  // Load data
  useEffect(() => {
    const stored = localStorage.getItem("repc_articles");
    if (stored) {
      setArticles(JSON.parse(stored));
    } else {
      localStorage.setItem("repc_articles", JSON.stringify(DEFAULT_ARTICLES));
      setArticles(DEFAULT_ARTICLES);
    }
  }, []);

  // Filter application
  useEffect(() => {
    let result = [...articles];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        a =>
          a.title.toLowerCase().includes(query) ||
          a.author.toLowerCase().includes(query)
      );
    }

    if (statusFilter !== "All") {
      result = result.filter(a => a.status === statusFilter);
    }

    if (categoryFilter !== "All") {
      result = result.filter(a => a.category === categoryFilter);
    }

    setFilteredArticles(result);
  }, [articles, searchQuery, statusFilter, categoryFilter]);

  // Open modal for Create
  const handleOpenCreate = () => {
    setModalType("create");
    setFormTitle("");
    setFormAuthor("Admin User");
    setFormCategory("Office Spaces");
    setFormStatus("Draft");
    setFormDate(new Date().toISOString().split("T")[0]);
    setFormContent("");
    setFormViews(0);
    setSelectedArticle(null);
    setModalOpen(true);
  };

  // Open modal for Edit
  const handleOpenEdit = (article) => {
    setModalType("edit");
    setSelectedArticle(article);
    setFormTitle(article.title);
    setFormAuthor(article.author);
    setFormCategory(article.category);
    setFormStatus(article.status);
    setFormDate(article.date);
    setFormContent(article.content || "");
    setFormViews(article.views || 0);
    setModalOpen(true);
  };

  // Save Modal (Create / Edit)
  const handleSaveArticle = (e) => {
    e.preventDefault();
    if (!formTitle.trim() || !formAuthor.trim() || !formContent.trim()) {
      alert("Please fill in the title, author, and content fields.");
      return;
    }

    let updatedArticles = [];

    if (modalType === "create") {
      const newArticle = {
        id: `art-${Date.now()}`,
        title: formTitle,
        author: formAuthor,
        category: formCategory,
        status: formStatus,
        date: formDate,
        views: formViews,
        content: formContent
      };
      updatedArticles = [newArticle, ...articles];
    } else {
      updatedArticles = articles.map(a =>
        a.id === selectedArticle.id
          ? {
              ...a,
              title: formTitle,
              author: formAuthor,
              category: formCategory,
              status: formStatus,
              date: formDate,
              views: formViews,
              content: formContent
            }
          : a
      );
    }

    setArticles(updatedArticles);
    localStorage.setItem("repc_articles", JSON.stringify(updatedArticles));
    setModalOpen(false);
    alert(modalType === "create" ? "Article created!" : "Article updated!");
  };

  // Delete Article
  const handleDeleteArticle = (id) => {
    if (!confirm("Are you sure you want to delete this article?")) return;

    const updated = articles.filter(a => a.id !== id);
    setArticles(updated);
    localStorage.setItem("repc_articles", JSON.stringify(updated));
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white">Articles Administration</h2>
          <p className="text-slate-500 text-xs mt-1">Manage publications, news articles, and case studies.</p>
        </div>
        <button
          onClick={handleOpenCreate}
          className="flex items-center justify-center gap-1.5 px-4 py-3 bg-[#E8A33D] text-slate-950 font-bold text-sm rounded-xl shadow-md hover:bg-amber-500 transition-all cursor-pointer shrink-0"
        >
          <Plus className="h-4.5 w-4.5" />
          New Article
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex flex-col md:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title or author..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-slate-700 transition-colors"
          />
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap sm:flex-nowrap gap-3">
          {/* Category Filter */}
          <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 border border-slate-800 rounded-xl">
            <Filter className="h-3.5 w-3.5 text-slate-500" />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-transparent border-none text-xs text-slate-300 font-medium focus:outline-none cursor-pointer"
            >
              <option value="All">All Categories</option>
              <option value="Office Spaces">Office Spaces</option>
              <option value="Retail">Retail</option>
              <option value="Logistics">Logistics</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Investment">Investment</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2 bg-slate-900 px-3 py-1.5 border border-slate-800 rounded-xl">
            <FileText className="h-3.5 w-3.5 text-slate-500" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-transparent border-none text-xs text-slate-300 font-medium focus:outline-none cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid List */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/40 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Author</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Views</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-sm text-slate-300">
              {filteredArticles.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-12 text-slate-500 font-medium">
                    No articles found matching filters.
                  </td>
                </tr>
              ) : (
                filteredArticles.map((article) => (
                  <tr key={article.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-200">
                      <div className="max-w-xs sm:max-w-md truncate" title={article.title}>
                        {article.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-slate-500" />
                        <span>{article.author}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                        {article.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wide ${
                        article.status === "Published"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      }`}>
                        {article.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-400 text-xs">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-slate-500" />
                        <span>{article.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-slate-400 font-mono font-medium">
                      {article.views.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleOpenEdit(article)}
                          className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteArticle(article.id)}
                          className="p-1.5 text-red-500 hover:text-red-400 rounded-lg hover:bg-red-500/10 transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* CRUD Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
          
          {/* Modal Content */}
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">
                {modalType === "create" ? "Create New Article" : "Edit Article"}
              </h3>
              <button className="text-slate-400 hover:text-white p-1 rounded-lg" onClick={() => setModalOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveArticle} className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* Title */}
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1.5">Article Title</label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="Enter a descriptive title..."
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-slate-700"
                />
              </div>

              {/* Author & Date Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1.5">Author Name</label>
                  <input
                    type="text"
                    value={formAuthor}
                    onChange={(e) => setFormAuthor(e.target.value)}
                    placeholder="Author name..."
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-slate-700"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1.5">Publish Date</label>
                  <input
                    type="date"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-slate-700"
                  />
                </div>
              </div>

              {/* Category & Status & Views Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1.5">Category</label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-slate-700"
                  >
                    <option value="Office Spaces">Office Spaces</option>
                    <option value="Retail">Retail</option>
                    <option value="Logistics">Logistics</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Investment">Investment</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1.5">Status</label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-slate-700"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1.5">Mock Views</label>
                  <input
                    type="number"
                    value={formViews}
                    onChange={(e) => setFormViews(Number(e.target.value))}
                    min="0"
                    className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-250 focus:outline-none focus:border-slate-700"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1.5">Content Body</label>
                <textarea
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  rows={6}
                  placeholder="Write the article content body here..."
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-slate-700 resize-none"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-850">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-white rounded-xl bg-slate-900 border border-slate-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-bold bg-[#E8A33D] hover:bg-amber-500 text-slate-950 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  {modalType === "create" ? "Create Article" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
