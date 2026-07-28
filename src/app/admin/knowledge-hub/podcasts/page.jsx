"use client";

import { useState, useMemo, useEffect } from "react";
import { Search, Plus, Pencil, Trash2, X, PlayCircle, Music, Filter, Calendar } from "lucide-react";

const MOCK_PODCASTS = [
  {
    id: 1,
    title: "Future of Commercial Real Estate in India",
    host: "Aniket Sharma",
    guest: "Vikram Kapoor",
    duration: "45:20",
    status: "Published",
    date: "2026-07-20",
  },
  {
    id: 2,
    title: "Navigating Retail Leasing Post-2025",
    host: "Aniket Sharma",
    guest: "Arvind Nandan",
    duration: "32:15",
    status: "Published",
    date: "2026-07-10",
  },
  {
    id: 3,
    title: "Tech Innovations in Property Management",
    host: "Riya Desai",
    guest: "Ananya Sharma",
    duration: "28:40",
    status: "Draft",
    date: "2026-08-01",
  }
];

const STATUS_STYLES = {
  Published: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Draft: "bg-amber-50 text-amber-700 border-amber-200",
  Archived: "bg-slate-100 text-slate-600 border-slate-200",
};

const EMPTY_FORM = {
  title: "",
  host: "Aniket Sharma",
  guest: "",
  description: "",
  duration: "",
  status: "Published",
  audioFile: null,
  link: "",
  uploadMethod: "link", // 'link' or 'file'
};

export default function AdminPodcastsPage() {
  const [podcasts, setPodcasts] = useState([]);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  useEffect(() => {
    setPodcasts(MOCK_PODCASTS);
  }, []);

  const filteredPodcasts = useMemo(() => {
    return podcasts.filter((p) => {
      const matchesQuery = !query || p.title.toLowerCase().includes(query.toLowerCase()) || p.guest.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = statusFilter === "All Statuses" || p.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [podcasts, query, statusFilter]);

  function openAddModal() {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setModalOpen(true);
  }

  function openEditModal(podcast) {
    setEditingId(podcast.id);
    setForm({
      title: podcast.title,
      host: podcast.host,
      guest: podcast.guest,
      description: "", // Mock doesn't have it, but form does
      duration: podcast.duration,
      status: podcast.status,
      audioFile: null,
      link: "",
      uploadMethod: "link",
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
    if (!form.title.trim() || !form.host.trim()) return;

    if (editingId) {
      setPodcasts((prev) => prev.map((p) => (p.id === editingId ? { ...p, ...form } : p)));
    } else {
      setPodcasts((prev) => [
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
    setPodcasts((prev) => prev.filter((p) => p.id !== id));
    setConfirmDeleteId(null);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Podcasts</h2>
          <p className="text-sm text-slate-500 mt-1">
            Manage podcast episodes, audio files, and Spotify/YouTube links.
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E8A33D] text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-sm"
        >
          <Plus className="h-4 w-4" />
          Upload Podcast
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
            placeholder="Search episodes by title or guest..."
            className="input pl-10 pr-4"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="input appearance-none pl-10 pr-8 font-medium text-slate-700"
          >
            <option value="All Statuses">All Statuses</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
            <option value="Archived">Archived</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-slate-50/50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 w-1/3">Episode Info</th>
                <th className="px-6 py-4">Host & Guest</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPodcasts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-sm text-slate-400">
                    No podcasts found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredPodcasts.map((podcast) => (
                  <tr key={podcast.id} className="hover:bg-slate-50 transition-colors bg-white group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-[#1B3A6B]/10 text-[#1B3A6B] p-2.5 rounded-xl shrink-0">
                          <Music className="h-5 w-5" />
                        </div>
                        <p className="font-semibold text-slate-900 line-clamp-2">{podcast.title}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-slate-900 font-medium">Guest: {podcast.guest}</p>
                      <p className="text-xs text-slate-500 mt-0.5">Host: {podcast.host}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-slate-600 font-medium bg-slate-100 px-2.5 py-1 rounded-md">
                        {podcast.duration}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <span>{podcast.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-lg border ${STATUS_STYLES[podcast.status]}`}>
                        {podcast.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          className="p-2 rounded-lg text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors"
                          title="Play Preview"
                        >
                          <PlayCircle className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => openEditModal(podcast)}
                          className="p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                          title="Edit Podcast"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => setConfirmDeleteId(podcast.id)}
                          className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Delete Podcast"
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
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white shrink-0">
              <h3 className="font-bold text-slate-900">
                {editingId ? "Edit Podcast" : "Upload Podcast"}
              </h3>
              <button type="button" onClick={closeModal} className="text-slate-400 hover:text-slate-700">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 overflow-y-auto bg-slate-50/50 flex-1">
              <Field label="Episode Title">
                <input
                  required
                  value={form.title}
                  onChange={(e) => handleFormChange("title", e.target.value)}
                  className="input"
                  placeholder="e.g. Ep 12: Future of Commercial Real Estate"
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Host Name">
                  <input
                    required
                    value={form.host}
                    onChange={(e) => handleFormChange("host", e.target.value)}
                    className="input"
                  />
                </Field>
                <Field label="Guest Name">
                  <input
                    value={form.guest}
                    onChange={(e) => handleFormChange("guest", e.target.value)}
                    className="input"
                    placeholder="e.g. Vikram Kapoor"
                  />
                </Field>
              </div>

              <Field label="Description / Show Notes">
                <textarea
                  value={form.description}
                  onChange={(e) => handleFormChange("description", e.target.value)}
                  className="input min-h-[80px]"
                  placeholder="Brief summary of the episode..."
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Duration">
                  <input
                    value={form.duration}
                    onChange={(e) => handleFormChange("duration", e.target.value)}
                    className="input"
                    placeholder="e.g. 45:20"
                  />
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

              {/* Media Upload Toggle */}
              <div className="pt-2">
                <span className="block text-xs font-semibold text-slate-500 mb-2">Media Upload Method</span>
                <div className="flex bg-slate-100 p-1 rounded-xl mb-4 w-fit">
                  <button
                    type="button"
                    onClick={() => handleFormChange("uploadMethod", "link")}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      form.uploadMethod === "link" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    External Link
                  </button>
                  <button
                    type="button"
                    onClick={() => handleFormChange("uploadMethod", "file")}
                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      form.uploadMethod === "file" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    Upload Audio
                  </button>
                </div>

                {form.uploadMethod === "link" ? (
                  <Field label="Podcast URL (Spotify, YouTube, Apple)">
                    <input
                      type="url"
                      value={form.link}
                      onChange={(e) => handleFormChange("link", e.target.value)}
                      className="input"
                      placeholder="https://open.spotify.com/episode/..."
                    />
                  </Field>
                ) : (
                  <Field label="Upload Audio File">
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Music className="w-6 h-6 mb-2 text-slate-400" />
                          <p className="mb-1 text-sm text-slate-500 font-medium">Click to upload or drag and drop</p>
                          <p className="text-xs text-slate-400">MP3 or WAV files only (MAX. 50MB)</p>
                        </div>
                        <input 
                          type="file" 
                          className="hidden" 
                          accept="audio/mpeg,audio/wav"
                          onChange={(e) => handleFormChange("audioFile", e.target.files[0])}
                        />
                      </label>
                    </div>
                    {form.audioFile && (
                      <p className="mt-2 text-sm text-emerald-600 font-medium flex items-center gap-1.5">
                        <Music className="h-4 w-4" />
                        Selected: {form.audioFile.name}
                      </p>
                    )}
                  </Field>
                )}
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
                {editingId ? "Save Changes" : "Upload Podcast"}
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
            <h3 className="font-bold text-slate-900 mb-1">Delete this podcast?</h3>
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
