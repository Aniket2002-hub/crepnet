"use client";

import { useState, useMemo } from "react";
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  X,
  MapPin,
  Briefcase,
  Mail,
  Phone,
  BadgeCheck,
  Filter
} from "lucide-react";

/**
 * /admin/member-directory
 * Mirrors the public member directory (rpec.vercel.app/community/member-directory)
 * but with admin controls: search, filter, add / edit / delete.
 *
 * Swap MOCK_MEMBERS + the handlers below for real API calls
 * (e.g. fetch("/api/members") ) when your backend is ready.
 */

const SEGMENTS = ["Investor", "Consultant", "Developer", "Architect", "Broker", "Retailer"];

const MOCK_MEMBERS = [
  {
    id: 1,
    name: "Rohit Mehta",
    verified: true,
    title: "Director – Investments",
    company: "Blackstone",
    location: "Mumbai, Maharashtra",
    segment: "Investor",
    experience: "5 – 10 Years experience",
    email: "rohit.mehta@blackstone.com",
    phone: "+91 98765 43210",
    bio: "Rohit leads investment strategy across commercial real estate portfolios in India, focusing on office and logistics assets."
  },
  {
    id: 2,
    name: "Ananya Sharma",
    verified: true,
    title: "Head – Workplace Solutions",
    company: "JLL",
    location: "Bengaluru, Karnataka",
    segment: "Consultant",
    experience: "8 – 12 Years experience",
    email: "ananya.sharma@jll.com",
    phone: "+91 98450 11223",
    bio: "Ananya advises corporates on workplace strategy, portfolio optimization and flexible-space adoption."
  },
  {
    id: 3,
    name: "Vikram Kapoor",
    verified: true,
    title: "CEO",
    company: "Assetz Property Group",
    location: "Bengaluru, Karnataka",
    segment: "Developer",
    experience: "15+ Years experience",
    email: "vikram.kapoor@assetz.in",
    phone: "+91 99000 22334",
    bio: "Vikram oversees residential and mixed-use development delivery across South India."
  },
  {
    id: 4,
    name: "Neha Iyer",
    verified: true,
    title: "Senior Architect",
    company: "Morphogenesis",
    location: "Delhi, NCR",
    segment: "Architect",
    experience: "6 – 10 Years experience",
    email: "neha.iyer@morphogenesis.com",
    phone: "+91 98111 44556",
    bio: "Neha designs sustainable large-format commercial and institutional projects."
  },
  {
    id: 5,
    name: "Arvind Nandan",
    verified: true,
    title: "Head – Leasing",
    company: "Phoenix Mills Ltd.",
    location: "Mumbai, Maharashtra",
    segment: "Broker",
    experience: "10 – 15 Years experience",
    email: "arvind.nandan@phoenixmills.com",
    phone: "+91 98200 77889",
    bio: "Arvind manages leasing strategy and tenant relationships across Phoenix's retail portfolio."
  },
  {
    id: 6,
    name: "Puneet Khurana",
    verified: true,
    title: "Retail Strategy Lead",
    company: "The Leela Ambience, Gurugram",
    location: "Gurugram, Haryana",
    segment: "Retailer",
    experience: "7 – 11 Years experience",
    email: "puneet.khurana@leela.com",
    phone: "+91 98999 66112",
    bio: "Puneet drives retail category mix and brand partnerships for premium hospitality-linked retail."
  }
];

const SEGMENT_STYLES = {
  Investor: "bg-sky-50 text-sky-700 border-sky-200",
  Consultant: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Developer: "bg-violet-50 text-violet-700 border-violet-200",
  Architect: "bg-amber-50 text-amber-700 border-amber-200",
  Broker: "bg-cyan-50 text-cyan-700 border-cyan-200",
  Retailer: "bg-rose-50 text-rose-700 border-rose-200"
};

const EMPTY_FORM = {
  name: "",
  title: "",
  company: "",
  location: "",
  segment: SEGMENTS[0],
  experience: "",
  email: "",
  phone: "",
  bio: ""
};

export default function MemberDirectoryPage() {
  const [members, setMembers] = useState(MOCK_MEMBERS);
  const [query, setQuery] = useState("");
  const [segmentFilter, setSegmentFilter] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  const filtered = useMemo(() => {
    return members.filter((m) => {
      const matchesQuery =
        !query ||
        m.name.toLowerCase().includes(query.toLowerCase()) ||
        m.company.toLowerCase().includes(query.toLowerCase()) ||
        m.location.toLowerCase().includes(query.toLowerCase());
      const matchesSegment = segmentFilter === "All" || m.segment === segmentFilter;
      return matchesQuery && matchesSegment;
    });
  }, [members, query, segmentFilter]);

  function openAddModal() {
    setEditingId(null);
    setForm(EMPTY_FORM);
    setModalOpen(true);
  }

  function openEditModal(member) {
    setEditingId(member.id);
    setForm({
      name: member.name,
      title: member.title,
      company: member.company,
      location: member.location,
      segment: member.segment,
      experience: member.experience,
      email: member.email,
      phone: member.phone,
      bio: member.bio
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
    if (!form.name.trim() || !form.company.trim()) return;

    if (editingId) {
      setMembers((prev) =>
        prev.map((m) => (m.id === editingId ? { ...m, ...form } : m))
      );
    } else {
      setMembers((prev) => [
        ...prev,
        { id: Date.now(), verified: false, ...form }
      ]);
    }
    closeModal();
  }

  function handleDelete(id) {
    setMembers((prev) => prev.filter((m) => m.id !== id));
    setConfirmDeleteId(null);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Member Directory</h2>
          <p className="text-sm text-slate-500 mt-1">
            {members.length} member{members.length !== 1 && "s"} · manage profiles shown on the public directory
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E8A33D] text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-sm"
        >
          <Plus className="h-4 w-4" />
          Add Member
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
            placeholder="Search by name, company, or city..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          <select
            value={segmentFilter}
            onChange={(e) => setSegmentFilter(e.target.value)}
            className="appearance-none pl-10 pr-8 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300"
          >
            <option value="All">All Segments</option>
            {SEGMENTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Member cards */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-400 text-sm bg-white border border-dashed border-slate-200 rounded-2xl">
          No members match your search.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((m) => (
            <div
              key={m.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-tr from-[#E8A33D] to-amber-300 flex items-center justify-center text-slate-950 font-black text-sm shrink-0">
                    {m.name
                      .split(" ")
                      .map((p) => p[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="font-bold text-slate-900 truncate">{m.name}</p>
                      {m.verified && (
                        <BadgeCheck className="h-4 w-4 text-sky-500 shrink-0" />
                      )}
                    </div>
                    <p className="text-sm text-slate-500 truncate">{m.title}</p>
                  </div>
                </div>
              </div>

              <div>
                <span
                  className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-lg border ${
                    SEGMENT_STYLES[m.segment] || "bg-slate-50 text-slate-600 border-slate-200"
                  }`}
                >
                  {m.segment}
                </span>
              </div>

              <div className="space-y-1.5 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{m.company}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{m.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{m.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{m.phone}</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 line-clamp-3">{m.bio}</p>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <button
                  onClick={() => openEditModal(m)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                >
                  <Pencil className="h-3.5 w-3.5" />
                  Edit
                </button>
                <button
                  onClick={() => setConfirmDeleteId(m.id)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={closeModal} />
          <form
            onSubmit={handleSave}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 sticky top-0 bg-white rounded-t-2xl">
              <h3 className="font-bold text-slate-900">
                {editingId ? "Edit Member" : "Add Member"}
              </h3>
              <button
                type="button"
                onClick={closeModal}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <Field label="Full Name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => handleFormChange("name", e.target.value)}
                  className="input"
                  placeholder="e.g. Rohit Mehta"
                />
              </Field>

              <Field label="Job Title">
                <input
                  value={form.title}
                  onChange={(e) => handleFormChange("title", e.target.value)}
                  className="input"
                  placeholder="e.g. Director – Investments"
                />
              </Field>

              <Field label="Company">
                <input
                  required
                  value={form.company}
                  onChange={(e) => handleFormChange("company", e.target.value)}
                  className="input"
                  placeholder="e.g. Blackstone"
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Location">
                  <input
                    value={form.location}
                    onChange={(e) => handleFormChange("location", e.target.value)}
                    className="input"
                    placeholder="City, State"
                  />
                </Field>
                <Field label="Segment">
                  <select
                    value={form.segment}
                    onChange={(e) => handleFormChange("segment", e.target.value)}
                    className="input"
                  >
                    {SEGMENTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Experience">
                <input
                  value={form.experience}
                  onChange={(e) => handleFormChange("experience", e.target.value)}
                  className="input"
                  placeholder="e.g. 5 – 10 Years experience"
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Email">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleFormChange("email", e.target.value)}
                    className="input"
                    placeholder="name@company.com"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    value={form.phone}
                    onChange={(e) => handleFormChange("phone", e.target.value)}
                    className="input"
                    placeholder="+91 00000 00000"
                  />
                </Field>
              </div>

              <Field label="Bio">
                <textarea
                  value={form.bio}
                  onChange={(e) => handleFormChange("bio", e.target.value)}
                  rows={3}
                  className="input resize-none"
                  placeholder="Short professional summary..."
                />
              </Field>
            </div>

            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-200 sticky bottom-0 bg-white rounded-b-2xl">
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
                {editingId ? "Save Changes" : "Add Member"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Delete confirmation */}
      {confirmDeleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setConfirmDeleteId(null)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center">
            <h3 className="font-bold text-slate-900 mb-1">Delete this member?</h3>
            <p className="text-sm text-slate-500 mb-6">
              This action can't be undone.
            </p>
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

      {/* shared input styling */}
      <style jsx global>{`
        .input {
          width: 100%;
          padding: 0.625rem 0.875rem;
          border-radius: 0.75rem;
          border: 1px solid #e2e8f0;
          font-size: 0.875rem;
          color: #1e293b;
          background: white;
        }
        .input:focus {
          outline: none;
          box-shadow: 0 0 0 2px #fcd34d;
          border-color: #fcd34d;
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-slate-500 mb-1.5">{label}</span>
      {children}
    </label>
  );
}