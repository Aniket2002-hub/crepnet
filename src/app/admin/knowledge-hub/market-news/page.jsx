"use client";

import { useState, useMemo, useEffect } from "react";
import { Search, Plus, Pencil, Trash2, X, Globe, ImageIcon, Filter, Calendar, ExternalLink } from "lucide-react";

const MOCK_NEWS = [
  {
    id: 1,
    headline: "Commercial Office Leasing Hits Record High in Q2",
    source: "Economic Times",
    category: "Market Updates",
    status: "Published",
    date: "2026-07-25",
    url: "https://economictimes.com",
  },
  {
    id: 2,
    headline: "New FDI Regulations for Retail Sector Announced",
    source: "Moneycontrol",
    category: "Policy & Regulations",
    status: "Published",
    date: "2026-07-22",
    url: "https://moneycontrol.com",
  },
  {
    id: 3,
    headline: "Top 5 Emerging PropTech Startups to Watch",
    source: "CREPNet Editorial",
    category: "Technology",
    status: "Draft",
    date: "2026-08-01",
    url: "",
  }
];

const STATUS_STYLES = {
  Published: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Draft: "bg-amber-50 text-amber-700 border-amber-200",
  Archived: "bg-slate-100 text-slate-600 border-slate-200",
};

const EMPTY_FORM = {
  headline: "",
  source: "",
  category: "Market Updates",
  content: "",
  url: "",
  status: "Published",
  thumbnail: null,
};

export default function AdminMarketNewsPage() {
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  useEffect(() => {
    setNews(MOCK_NEWS);
  }, []);

  const filteredNews = useMemo(() => {
    return news.filter((n) => {
      const matchesQuery = !query || n.headline.toLowerCase().includes(query.toLowerCase()) || n.source.toLowerCase().includes(query.toLowerCase());
      const matchesCat = categoryFilter === "All Categories" || n.category === categoryFilter;
      return matchesQuery && matchesCat;
    });
  }, [news, query, categoryFilter]);

  const categories = ["All Categories", ...Array.from(new Set(news.map(n => n.category)))];

  function openAddModal() {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setModalOpen(true);
  }

  function openEditModal(newsItem) {
    setEditingId(newsItem.id);
    setForm({
      headline: newsItem.headline,
      source: newsItem.source,
      category: newsItem.category,
      content: "", // mock doesn't have it
      url: newsItem.url,
      status: newsItem.status,
      thumbnail: null,
    });
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setEditingId(null);
    setForm(EMPTY_FORM);
  }

  function handleFormChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSave(e) {
    e.preventDefault();
    if (!form.headline.trim() || !form.source.trim()) return;

    if (editingId) {
      setNews((prev) => prev.map((n) => (n.id === editingId ? { ...n, ...form } : n)));
    } else {
      setNews((prev) => [
        { 
          id: Date.now(), 
          date: new Date().toISOString().split('T')[0],
          ...form 
        },
        ...prev
      ]);
    }
    closeModal();
  }

  function handleDelete(id) {
    setNews((prev) => prev.filter((n) => n.id !== id));
    setConfirmDeleteId(null);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Market News</h2>
          <p className="text-sm text-slate-500 mt-1">
            Curate and post industry news, updates, and external articles.
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E8A33D] text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-sm"
        >
          <Plus className="h-4 w-4" />
          Post News
        </button>
      </div>

      {/* Search + Filter bar */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search news by headline or source..."
            className="input pl-10 pr-4"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="input appearance-none pl-10 pr-8 font-medium text-slate-700"
          >
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-slate-50/50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 w-2/5">Headline</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Source</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredNews.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-sm text-slate-400">
                    No news items found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredNews.map((newsItem) => (
                  <tr key={newsItem.id} className="hover:bg-slate-50 transition-colors bg-white group">
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 bg-amber-50 text-amber-500 p-2 rounded-lg shrink-0">
                          <Globe className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 line-clamp-2">{newsItem.headline}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600 font-medium bg-slate-100 px-2.5 py-1 rounded-md whitespace-nowrap">
                        {newsItem.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-slate-600 font-medium">{newsItem.source}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <span>{newsItem.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-lg border ${STATUS_STYLES[newsItem.status]}`}>
                        {newsItem.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {newsItem.url && (
                          <a
                            href={newsItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg text-slate-400 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                            title="Open Link"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                        <button
                          onClick={() => openEditModal(newsItem)}
                          className="p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                          title="Edit News"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => setConfirmDeleteId(newsItem.id)}
                          className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Delete News"
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

      {/* Add / Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={closeModal} />
          <form
            onSubmit={handleSave}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white shrink-0">
              <h3 className="font-bold text-slate-900">
                {editingId ? "Edit News Post" : "Post Market News"}
              </h3>
              <button type="button" onClick={closeModal} className="text-slate-400 hover:text-slate-700">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 overflow-y-auto bg-slate-50/50 flex-1">
              <Field label="Headline">
                <input
                  required
                  value={form.headline}
                  onChange={(e) => handleFormChange("headline", e.target.value)}
                  className="input font-semibold"
                  placeholder="e.g. Commercial Office Leasing Hits Record High"
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Source / Author">
                  <input
                    required
                    value={form.source}
                    onChange={(e) => handleFormChange("source", e.target.value)}
                    className="input"
                    placeholder="e.g. Economic Times"
                  />
                </Field>
                <Field label="Category">
                  <input
                    required
                    value={form.category}
                    onChange={(e) => handleFormChange("category", e.target.value)}
                    className="input"
                    placeholder="e.g. Policy & Regulations"
                    list="news-categories"
                  />
                  <datalist id="news-categories">
                    <option value="Market Updates" />
                    <option value="Policy & Regulations" />
                    <option value="Technology" />
                  </datalist>
                </Field>
              </div>

              <Field label="External URL (Optional)">
                <input
                  type="url"
                  value={form.url}
                  onChange={(e) => handleFormChange("url", e.target.value)}
                  className="input"
                  placeholder="https://..."
                />
              </Field>

              <Field label="News Content">
                <textarea
                  value={form.content}
                  onChange={(e) => handleFormChange("content", e.target.value)}
                  className="input min-h-[120px]"
                  placeholder="Write or paste the news content here..."
                />
              </Field>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field label="Thumbnail Image (Optional)">
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <ImageIcon className="w-5 h-5 mb-1 text-slate-400" />
                        <p className="text-xs text-slate-500 font-medium">Upload Image</p>
                      </div>
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={(e) => handleFormChange("thumbnail", e.target.files[0])}
                      />
                    </label>
                  </div>
                  {form.thumbnail && (
                    <p className="mt-1.5 text-xs text-emerald-600 font-medium flex items-center gap-1">
                      <ImageIcon className="h-3 w-3" />
                      {form.thumbnail.name}
                    </p>
                  )}
                </Field>
                
                <Field label="Status">
                  <select
                    value={form.status}
                    onChange={(e) => handleFormChange("status", e.target.value)}
                    className="input h-10 mt-1"
                  >
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                    <option value="Archived">Archived</option>
                  </select>
                </Field>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-200 bg-white shrink-0">
              <button
                type="button"
                onClick={closeModal}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#E8A33D] text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors"
              >
                {editingId ? "Save Changes" : "Post News"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Delete confirmation */}
      {confirmDeleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setConfirmDeleteId(null)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center">
            <h3 className="font-bold text-slate-900 mb-1">Delete this news post?</h3>
            <p className="text-sm text-slate-500 mb-6">This action cannot be undone.</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setConfirmDeleteId(null)}
                className="flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(confirmDeleteId)}
                className="flex-1 px-4 py-2.5 rounded-xl bg-red-600 text-white text-sm font-bold hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block group">
      <span className="block text-[13px] font-bold text-slate-700 mb-2 group-focus-within:text-[#E8A33D] transition-colors">{label}</span>
      {children}
    </label>
  );
}
