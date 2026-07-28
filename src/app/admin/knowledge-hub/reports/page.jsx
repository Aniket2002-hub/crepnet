"use client";

import { useState, useMemo, useEffect } from "react";
import { Search, Plus, Pencil, Trash2, X, Download, FileText, Filter, Calendar } from "lucide-react";

const MOCK_REPORTS = [
  {
    id: 1,
    title: "India Real Estate Vision 2030",
    description: "Comprehensive analysis of market trends and future projections for Indian real estate.",
    category: "Market Analysis",
    status: "Published",
    date: "2026-07-15",
    downloads: 1245,
  },
  {
    id: 2,
    title: "Q2 2026 Commercial Office Space Report",
    description: "Quarterly review of office space absorption and vacancy rates across top 7 cities.",
    category: "Quarterly Report",
    status: "Published",
    date: "2026-07-01",
    downloads: 890,
  },
  {
    id: 3,
    title: "Sustainable Architecture Guidelines",
    description: "Best practices for green building certifications and sustainable materials.",
    category: "Guidelines",
    status: "Draft",
    date: "2026-08-10",
    downloads: 0,
  }
];

const STATUS_STYLES = {
  Published: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Draft: "bg-amber-50 text-amber-700 border-amber-200",
  Archived: "bg-slate-100 text-slate-600 border-slate-200",
};

const EMPTY_FORM = {
  title: "",
  description: "",
  category: "Market Analysis",
  status: "Published",
  file: null,
};

export default function AdminReportsPage() {
  const [reports, setReports] = useState([]);
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  useEffect(() => {
    setReports(MOCK_REPORTS);
  }, []);

  const filteredReports = useMemo(() => {
    return reports.filter((r) => {
      const matchesQuery = !query || r.title.toLowerCase().includes(query.toLowerCase());
      const matchesCat = categoryFilter === "All Categories" || r.category === categoryFilter;
      return matchesQuery && matchesCat;
    });
  }, [reports, query, categoryFilter]);

  const categories = ["All Categories", ...Array.from(new Set(reports.map(r => r.category)))];

  function openAddModal() {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setModalOpen(true);
  }

  function openEditModal(report) {
    setEditingId(report.id);
    setForm({
      title: report.title,
      description: report.description,
      category: report.category,
      status: report.status,
      file: null, // Don't prefill file for security/browser reasons
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
    if (!form.title.trim() || !form.category.trim()) return;

    if (editingId) {
      setReports((prev) => prev.map((r) => (r.id === editingId ? { ...r, ...form } : r)));
    } else {
      setReports((prev) => [
        { 
          id: Date.now(), 
          downloads: 0, 
          date: new Date().toISOString().split('T')[0],
          ...form 
        },
        ...prev
      ]);
    }
    closeModal();
  }

  function handleDelete(id) {
    setReports((prev) => prev.filter((r) => r.id !== id));
    setConfirmDeleteId(null);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Reports</h2>
          <p className="text-sm text-slate-500 mt-1">
            Upload and manage industry reports, analyses, and guidelines.
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E8A33D] text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-sm"
        >
          <Plus className="h-4 w-4" />
          Upload Report
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
            placeholder="Search reports by title..."
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
                <th className="px-6 py-4 w-2/5">Report Details</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Downloads</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredReports.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-sm text-slate-400">
                    No reports found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredReports.map((report) => (
                  <tr key={report.id} className="hover:bg-slate-50 transition-colors bg-white group">
                    <td className="px-6 py-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 bg-rose-50 text-rose-500 p-2 rounded-lg">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900">{report.title}</p>
                          <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{report.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600 font-medium bg-slate-100 px-2.5 py-1 rounded-md">
                        {report.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <span>{report.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-lg border ${STATUS_STYLES[report.status]}`}>
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-sm font-medium text-slate-700">
                        {report.downloads.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          className="p-2 rounded-lg text-slate-400 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                          title="Download PDF"
                        >
                          <Download className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => openEditModal(report)}
                          className="p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                          title="Edit Report"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => setConfirmDeleteId(report.id)}
                          className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Delete Report"
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
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white shrink-0">
              <h3 className="font-bold text-slate-900">
                {editingId ? "Edit Report" : "Upload Report"}
              </h3>
              <button type="button" onClick={closeModal} className="text-slate-400 hover:text-slate-700">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 overflow-y-auto bg-slate-50/50 flex-1">
              <Field label="Report Title">
                <input
                  required
                  value={form.title}
                  onChange={(e) => handleFormChange("title", e.target.value)}
                  className="input"
                  placeholder="e.g. Q2 2026 Commercial Report"
                />
              </Field>

              <Field label="Description">
                <textarea
                  required
                  value={form.description}
                  onChange={(e) => handleFormChange("description", e.target.value)}
                  className="input min-h-[80px]"
                  placeholder="Brief summary of the report contents..."
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Category">
                  <input
                    required
                    value={form.category}
                    onChange={(e) => handleFormChange("category", e.target.value)}
                    className="input"
                    placeholder="e.g. Market Analysis"
                    list="category-suggestions"
                  />
                  <datalist id="category-suggestions">
                    <option value="Market Analysis" />
                    <option value="Quarterly Report" />
                    <option value="Guidelines" />
                  </datalist>
                </Field>
                <Field label="Status">
                  <select
                    value={form.status}
                    onChange={(e) => handleFormChange("status", e.target.value)}
                    className="input"
                  >
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                    <option value="Archived">Archived</option>
                  </select>
                </Field>
              </div>

              <Field label="Upload PDF File">
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Download className="w-8 h-8 mb-2 text-slate-400" />
                      <p className="mb-1 text-sm text-slate-500 font-medium">Click to upload or drag and drop</p>
                      <p className="text-xs text-slate-400">PDF files only (MAX. 20MB)</p>
                    </div>
                    <input 
                      type="file" 
                      className="hidden" 
                      accept=".pdf,application/pdf"
                      onChange={(e) => handleFormChange("file", e.target.files[0])}
                    />
                  </label>
                </div>
                {form.file && (
                  <p className="mt-2 text-sm text-emerald-600 font-medium flex items-center gap-1.5">
                    <FileText className="h-4 w-4" />
                    Selected: {form.file.name}
                  </p>
                )}
              </Field>
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
                {editingId ? "Save Changes" : "Upload Report"}
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
            <h3 className="font-bold text-slate-900 mb-1">Delete this report?</h3>
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
