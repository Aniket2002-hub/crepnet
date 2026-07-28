"use client";

import { useState, useMemo, useEffect } from "react";
import { useParams } from "next/navigation";
import { Search, Plus, Pencil, Trash2, X, Users, Calendar, MapPin, Filter } from "lucide-react";

// Helper to format category title
const formatTitle = (type) => {
  if (!type) return "Events";
  return type.charAt(0).toUpperCase() + type.slice(1);
};

// Mock data generator based on event type
const getMockEvents = (type) => [
  {
    id: 1,
    title: `REPC Annual ${formatTitle(type)} 2026`,
    date: "2026-10-15",
    time: "09:00 AM",
    location: "Bengaluru, Karnataka",
    status: "Upcoming",
    registrants: 1240,
  },
  {
    id: 2,
    title: `Regional ${formatTitle(type)}: North India`,
    date: "2026-11-05",
    time: "10:30 AM",
    location: "New Delhi, NCR",
    status: "Upcoming",
    registrants: 850,
  },
  {
    id: 3,
    title: `Global ${formatTitle(type)} Virtual Connect`,
    date: "2026-06-20",
    time: "04:00 PM",
    location: "Virtual",
    status: "Past",
    registrants: 3100,
  },
  {
    id: 4,
    title: `${formatTitle(type)} on Retail Leasing Trends`,
    date: "2026-07-28",
    time: "02:00 PM",
    location: "Mumbai, Maharashtra",
    status: "Ongoing",
    registrants: 420,
  }
];

const MOCK_REGISTRANTS = [
  { id: 101, name: "Rohit Mehta", company: "Blackstone", title: "Director – Investments", email: "rohit.mehta@blackstone.com", registeredAt: "2026-07-01" },
  { id: 102, name: "Ananya Sharma", company: "JLL", title: "Head – Workplace Solutions", email: "ananya.sharma@jll.com", registeredAt: "2026-07-02" },
  { id: 103, name: "Vikram Kapoor", company: "Assetz Property Group", title: "CEO", email: "vikram.kapoor@assetz.in", registeredAt: "2026-07-05" },
  { id: 104, name: "Neha Iyer", company: "Morphogenesis", title: "Senior Architect", email: "neha.iyer@morphogenesis.com", registeredAt: "2026-07-10" },
  { id: 105, name: "Arvind Nandan", company: "Phoenix Mills Ltd.", title: "Head – Leasing", email: "arvind.nandan@phoenixmills.com", registeredAt: "2026-07-12" },
];

const STATUS_STYLES = {
  Upcoming: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Ongoing: "bg-amber-50 text-amber-700 border-amber-200",
  Past: "bg-slate-100 text-slate-600 border-slate-200",
};

const EMPTY_EVENT_FORM = {
  title: "",
  date: "",
  time: "",
  location: "",
  status: "Upcoming"
};

export default function EventsPage() {
  const params = useParams();
  const eventType = params?.type || "events";
  const title = formatTitle(eventType);

  const [events, setEvents] = useState([]);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(EMPTY_EVENT_FORM);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  const [registrantsModalOpen, setRegistrantsModalOpen] = useState(false);
  const [selectedEventForRegistrants, setSelectedEventForRegistrants] = useState(null);

  // Initialize data on client to prevent hydration mismatch with dynamic data if any
  useEffect(() => {
    setEvents(getMockEvents(eventType));
  }, [eventType]);

  const filteredEvents = useMemo(() => {
    return events.filter((e) => {
      const matchesQuery = !query || e.title.toLowerCase().includes(query.toLowerCase()) || e.location.toLowerCase().includes(query.toLowerCase());
      const matchesStatus = statusFilter === "All Statuses" || e.status === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [events, query, statusFilter]);

  function openAddModal() {
    setEditingId(null);
    setForm(EMPTY_EVENT_FORM);
    setEventModalOpen(true);
  }

  function openEditModal(event) {
    setEditingId(event.id);
    setForm({
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      status: event.status,
    });
    setEventModalOpen(true);
  }

  function closeEventModal() {
    setEventModalOpen(false);
    setEditingId(null);
    setForm(EMPTY_EVENT_FORM);
  }

  function handleFormChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSave(e) {
    e.preventDefault();
    if (!form.title.trim() || !form.date || !form.location.trim()) return;

    if (editingId) {
      setEvents((prev) => prev.map((ev) => (ev.id === editingId ? { ...ev, ...form } : ev)));
    } else {
      setEvents((prev) => [
        { id: Date.now(), registrants: 0, ...form },
        ...prev
      ]);
    }
    closeEventModal();
  }

  function handleDelete(id) {
    setEvents((prev) => prev.filter((ev) => ev.id !== id));
    setConfirmDeleteId(null);
  }

  function openRegistrantsModal(event) {
    setSelectedEventForRegistrants(event);
    setRegistrantsModalOpen(true);
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">{title}</h2>
          <p className="text-sm text-slate-500 mt-1">
            Manage upcoming and past {eventType}, and view registered users.
          </p>
        </div>
        <button
          onClick={openAddModal}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#E8A33D] text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-sm"
        >
          <Plus className="h-4 w-4" />
          Add Event
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
            placeholder="Search events by title or location..."
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
            <option value="Upcoming">Upcoming</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Past">Past</option>
          </select>
        </div>
      </div>

      {/* Events Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-slate-50/50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Date & Time</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Registrants</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredEvents.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-sm text-slate-400">
                    No events found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredEvents.map((ev) => (
                  <tr key={ev.id} className="hover:bg-slate-50 transition-colors bg-white group">
                    <td className="px-6 py-4">
                      <p className="font-semibold text-slate-900">{ev.title}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <span>{ev.date} • {ev.time}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        <span>{ev.location}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-lg border ${STATUS_STYLES[ev.status]}`}>
                        {ev.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button 
                        onClick={() => openRegistrantsModal(ev)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 font-medium text-sm border border-slate-200 hover:bg-slate-100 transition-colors"
                      >
                        <Users className="h-4 w-4 text-slate-400" />
                        {ev.registrants.toLocaleString()}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => openEditModal(ev)}
                          className="p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                          title="Edit Event"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => setConfirmDeleteId(ev.id)}
                          className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Delete Event"
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

      {/* Add / Edit Event Modal */}
      {eventModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={closeEventModal} />
          <form
            onSubmit={handleSave}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white shrink-0">
              <h3 className="font-bold text-slate-900">
                {editingId ? "Edit Event" : "Add Event"}
              </h3>
              <button type="button" onClick={closeEventModal} className="text-slate-400 hover:text-slate-700">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 overflow-y-auto bg-slate-50/50 flex-1">
              <Field label="Event Title">
                <input
                  required
                  value={form.title}
                  onChange={(e) => handleFormChange("title", e.target.value)}
                  className="input"
                  placeholder={`e.g. Annual ${title} 2026`}
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Date">
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => handleFormChange("date", e.target.value)}
                    className="input"
                  />
                </Field>
                <Field label="Time">
                  <input
                    type="time"
                    required
                    value={form.time}
                    onChange={(e) => handleFormChange("time", e.target.value)}
                    className="input"
                  />
                </Field>
              </div>

              <Field label="Location">
                <input
                  required
                  value={form.location}
                  onChange={(e) => handleFormChange("location", e.target.value)}
                  className="input"
                  placeholder="e.g. Virtual, Mumbai, etc."
                />
              </Field>

              <Field label="Status">
                <select
                  value={form.status}
                  onChange={(e) => handleFormChange("status", e.target.value)}
                  className="input"
                >
                  <option value="Upcoming">Upcoming</option>
                  <option value="Ongoing">Ongoing</option>
                  <option value="Past">Past</option>
                </select>
              </Field>
            </div>

            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-200 bg-white shrink-0">
              <button
                type="button"
                onClick={closeEventModal}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#E8A33D] text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors"
              >
                {editingId ? "Save Changes" : "Create Event"}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* View Registrants Modal */}
      {registrantsModalOpen && selectedEventForRegistrants && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setRegistrantsModalOpen(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-white">
              <div>
                <h3 className="font-bold text-slate-900">Registered Users</h3>
                <p className="text-sm text-slate-500 mt-0.5">{selectedEventForRegistrants.title}</p>
              </div>
              <button type="button" onClick={() => setRegistrantsModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto bg-slate-50/50 p-6">
              <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead className="bg-slate-50/50 border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">Company</th>
                        <th className="px-6 py-4">Email</th>
                        <th className="px-6 py-4 text-right">Registered On</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {MOCK_REGISTRANTS.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="px-6 py-12 text-center text-sm text-slate-400">
                            No users registered yet.
                          </td>
                        </tr>
                      ) : (
                        MOCK_REGISTRANTS.map((user) => (
                          <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="h-8 w-8 rounded-full bg-slate-100 text-slate-600 font-bold text-xs flex items-center justify-center">
                                  {user.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                                </div>
                                <div>
                                  <p className="font-semibold text-slate-900 text-sm">{user.name}</p>
                                  <p className="text-xs text-slate-500">{user.title}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                              {user.company}
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-600">
                              {user.email}
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-500 text-right">
                              {user.registeredAt}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 border-t border-slate-200 bg-white flex justify-end">
               <button
                onClick={() => setRegistrantsModalOpen(false)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
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
            <h3 className="font-bold text-slate-900 mb-1">Delete this event?</h3>
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
