"use client";

import { useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  X,
  GripVertical,
  Save
} from "lucide-react";

/**
 * /admin/community/survey
 * Content manager for the public Surveys page (SurveysPage.jsx).
 * Every section on that page is editable here: array sections get an
 * add/edit/delete list, singleton sections (Hero, Featured Report,
 * Suggest-a-Topic banner) get a single settings form.
 *
 * Wire SECTIONS[x].data up to real API calls (fetch/save/delete) when
 * your backend is ready — everything here runs on local state.
 */

// ---------------- ICON OPTIONS (stored as string, rendered as label) ----------------
const ICON_OPTIONS = [
  "ClipboardList", "Users", "Globe", "Lightbulb", "ShieldCheck",
  "Building2", "BarChart3", "Award", "Clock", "Calendar", "Download", "Quote"
];

const STATUS_OPTIONS = ["ACTIVE", "UPCOMING", "COMPLETED"];
const CTA_STYLE_OPTIONS = ["primary", "secondary"];

// ---------------- FIELD SCHEMAS PER SECTION ----------------

const SECTIONS = [
  {
    id: "hero",
    label: "Hero Banner",
    kind: "singleton",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "textarea" },
      { key: "subtext", label: "Subtext", type: "textarea" },
      { key: "bgImage", label: "Background Image URL", type: "text" }
    ],
    initial: {
      eyebrow: "Surveys",
      heading: "Surveys & Results.\nData-Driven Insights.\nShaping Strategic Decisions.",
      subtext:
        "Search, connect, and collaborate with verified real estate professionals across India and grow your network.",
      bgImage: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1600&h=500&fit=crop"
    }
  },
  {
    id: "stats",
    label: "Stats Bar",
    kind: "list",
    itemLabel: (i) => `${i.value} — ${i.label}`,
    fields: [
      { key: "icon", label: "Icon", type: "select", options: ICON_OPTIONS },
      { key: "value", label: "Value", type: "text", placeholder: "e.g. 25+" },
      { key: "label", label: "Label", type: "text", placeholder: "e.g. Surveys Conducted" }
    ],
    initial: [
      { id: 1, icon: "ClipboardList", value: "25+", label: "Surveys Conducted" },
      { id: 2, icon: "Users", value: "8,500+", label: "Participants" },
      { id: 3, icon: "Globe", value: "30+", label: "Cities Covered" },
      { id: 4, icon: "Lightbulb", value: "15+", label: "Industry Segments" }
    ]
  },
  {
    id: "surveys",
    label: "Survey Cards",
    kind: "list",
    itemLabel: (i) => `[${i.status}] ${i.title}`,
    fields: [
      { key: "status", label: "Status", type: "select", options: STATUS_OPTIONS },
      { key: "img", label: "Image URL", type: "text" },
      { key: "title", label: "Title", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "metaText", label: "Duration (e.g. 10 min)", type: "text" },
      { key: "meta2Text", label: "Closes / Opens text", type: "text" },
      { key: "cta", label: "Button Label", type: "text" },
      { key: "ctaStyle", label: "Button Style", type: "select", options: CTA_STYLE_OPTIONS }
    ],
    initial: [
      {
        id: 1, status: "ACTIVE",
        img: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=500&h=300&fit=crop",
        title: "India Office Market Outlook Survey 2024",
        description: "Share your perspective on office market trends, demand, and future outlook.",
        metaText: "10 min", meta2Text: "Closes on 30 Jun 2024",
        cta: "Participate Now", ctaStyle: "primary"
      },
      {
        id: 2, status: "UPCOMING",
        img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=300&fit=crop",
        title: "Sustainability in Real Estate Survey 2024",
        description: "Your insights on sustainable practices and green building adoption.",
        metaText: "7 min", meta2Text: "Opens on 05 Jul 2024",
        cta: "Notify Me", ctaStyle: "secondary"
      },
      {
        id: 3, status: "COMPLETED",
        img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=500&h=300&fit=crop",
        title: "Logistics & Industrial Real Estate Survey 2023",
        description: "Thank you to all participants for sharing valuable insights.",
        metaText: "", meta2Text: "",
        cta: "View Results", ctaStyle: "secondary"
      }
    ]
  },
  {
    id: "whyParticipate",
    label: "Why Participate",
    kind: "list",
    itemLabel: (i) => i.title,
    fields: [
      { key: "icon", label: "Icon", type: "select", options: ICON_OPTIONS },
      { key: "title", label: "Title", type: "text" },
      { key: "description", label: "Description", type: "textarea" }
    ],
    initial: [
      { id: 1, icon: "ClipboardList", title: "Contribute to Industry Insights", description: "Your input helps build comprehensive industry reports." },
      { id: 2, icon: "BarChart3", title: "Benchmark Your Perspective", description: "See how your views compare with industry peers." },
      { id: 3, icon: "Lightbulb", title: "Drive Meaningful Change", description: "Help identify opportunities and challenges that matter." },
      { id: 4, icon: "Award", title: "Be Recognized", description: "Top contributors will be featured in our insights reports." }
    ]
  },
  {
    id: "featuredReport",
    label: "Featured Report",
    kind: "singleton",
    fields: [
      { key: "img", label: "Image URL", type: "text" },
      { key: "badge", label: "Badge Text", type: "text" },
      { key: "title", label: "Title", type: "text" },
      { key: "description", label: "Description", type: "textarea" },
      { key: "surveyPeriod", label: "Survey Period", type: "text" },
      { key: "participants", label: "Participants", type: "text" },
      { key: "downloadUrl", label: "Download File URL", type: "text" }
    ],
    initial: {
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
      badge: "FEATURED REPORT",
      title: "India Office Market Outlook Survey Results 2024",
      description: "A comprehensive analysis of current market sentiment, key trends, and future outlook.",
      surveyPeriod: "Apr 15 – May 15, 2024",
      participants: "1,250+ Professionals",
      downloadUrl: ""
    }
  },
  {
    id: "highlights",
    label: "Key Highlights",
    kind: "list",
    itemLabel: (i) => `${i.value} — ${i.description}`,
    fields: [
      { key: "value", label: "Value", type: "text", placeholder: "e.g. 85%" },
      { key: "description", label: "Description", type: "textarea" }
    ],
    initial: [
      { id: 1, value: "85%", description: "Respondents expect positive growth in the office market in 2024" },
      { id: 2, value: "62%", description: "Plan to increase investments in office real estate" },
      { id: 3, value: "56%", description: "Identify flexibility & hybrid work as the top factor shaping demand" },
      { id: 4, value: "48%", description: "Consider sustainability as a key decision-making criteria" }
    ]
  },
  {
    id: "marketOutlook",
    label: "Market Outlook (Donut)",
    kind: "list",
    itemLabel: (i) => `${i.label} — ${i.value}%`,
    fields: [
      { key: "label", label: "Label", type: "text" },
      { key: "value", label: "Value (%)", type: "number" },
      { key: "color", label: "Color (hex)", type: "color" }
    ],
    initial: [
      { id: 1, label: "Very Positive", value: 35, color: "#1e40af" },
      { id: 2, label: "Positive", value: 50, color: "#16a34a" },
      { id: 3, label: "Neutral", value: 10, color: "#f59e0b" },
      { id: 4, label: "Negative", value: 4, color: "#ea580c" },
      { id: 5, label: "Very Negative", value: 1, color: "#dc2626" }
    ]
  },
  {
    id: "topFactors",
    label: "Top Factors (Bar Chart)",
    kind: "list",
    itemLabel: (i) => `${i.label} — ${i.value}%`,
    fields: [
      { key: "label", label: "Label", type: "text" },
      { key: "value", label: "Value (%)", type: "number" }
    ],
    initial: [
      { id: 1, label: "Flexibility & Hybrid Work", value: 56 },
      { id: 2, label: "Location & Accessibility", value: 48 },
      { id: 3, label: "Cost Optimization", value: 42 },
      { id: 4, label: "Sustainability", value: 35 },
      { id: 5, label: "Employee Well-being", value: 28 }
    ]
  },
  {
    id: "testimonials",
    label: "Testimonials",
    kind: "list",
    itemLabel: (i) => i.name,
    fields: [
      { key: "quote", label: "Quote", type: "textarea" },
      { key: "name", label: "Name", type: "text" },
      { key: "role", label: "Role / Company", type: "text" },
      { key: "img", label: "Photo URL", type: "text" }
    ],
    initial: [
      { id: 1, quote: "The survey gave us a platform to voice our perspectives and see how the industry is evolving.", name: "Arvind Nandan", role: "Head – Leasing, Phoenix Mills Ltd.", img: "https://i.pravatar.cc/100?img=15" },
      { id: 2, quote: "It's encouraging to see a data-driven approach to understanding real estate trends.", name: "Neha Iyer", role: "Senior Architect, Morphogenesis", img: "https://i.pravatar.cc/100?img=47" },
      { id: 3, quote: "Participating in CREPNET surveys helps shape meaningful conversations across our industry.", name: "Vikram Kapoor", role: "CEO, Assetz Property Group", img: "https://i.pravatar.cc/100?img=33" }
    ]
  },
  {
    id: "trustPoints",
    label: "Trust Points",
    kind: "list",
    itemLabel: (i) => i.title,
    fields: [
      { key: "icon", label: "Icon", type: "select", options: ICON_OPTIONS },
      { key: "title", label: "Title", type: "text" },
      { key: "description", label: "Description", type: "textarea" }
    ],
    initial: [
      { id: 1, icon: "ShieldCheck", title: "Data You Can Trust", description: "Surveys designed and analyzed by industry experts." },
      { id: 2, icon: "Building2", title: "Wide Industry Participation", description: "Insights from a diverse network of real estate professionals." },
      { id: 3, icon: "BarChart3", title: "Actionable Insights", description: "Turn data into decisions with expert analysis and reports." },
      { id: 4, icon: "Users", title: "Secure & Confidential", description: "Your responses are secure and anonymity is always protected." }
    ]
  },
  {
    id: "suggestBanner",
    label: "Suggest-a-Topic Banner",
    kind: "singleton",
    fields: [
      { key: "heading", label: "Heading", type: "text" },
      { key: "subtext", label: "Subtext", type: "textarea" },
      { key: "ctaLabel", label: "Button Label", type: "text" }
    ],
    initial: {
      heading: "Have a Topic in Mind?",
      subtext: "Suggest a survey topic you'd like to see covered in our upcoming reports.",
      ctaLabel: "Suggest a Topic"
    }
  },
  {
    id: "filterOptions",
    label: "Filter Dropdown Options",
    kind: "filters",
    initial: {
      survey: ["All Surveys", "India Office Market Outlook Survey 2024", "Retail Real Estate Trends Survey 2024", "Sustainability in Real Estate Survey 2024", "Logistics & Industrial Real Estate Survey 2023"],
      year: ["All Years", "2024", "2023", "2022"],
      city: ["All Cities", "Mumbai", "Bengaluru", "Delhi NCR", "Pune", "Hyderabad"],
      segment: ["All Segments", "Developer", "Consultant", "Broker", "Investor", "Architect", "Retailer"]
    }
  }
];

function emptyItemFrom(fields) {
  const obj = {};
  fields.forEach((f) => {
    obj[f.key] = f.type === "number" ? 0 : "";
  });
  return obj;
}

// ---------------- GENERIC FIELD RENDERER ----------------

function FieldInput({ field, value, onChange }) {
  const common =
    "w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300";

  if (field.type === "textarea") {
    return (
      <textarea
        rows={3}
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholder}
        className={`${common} resize-none`}
      />
    );
  }
  if (field.type === "select") {
    return (
      <select value={value ?? ""} onChange={(e) => onChange(e.target.value)} className={common}>
        {field.options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    );
  }
  if (field.type === "number") {
    return (
      <input
        type="number"
        value={value ?? 0}
        onChange={(e) => onChange(Number(e.target.value))}
        className={common}
      />
    );
  }
  if (field.type === "color") {
    return (
      <div className="flex items-center gap-3">
        <input
          type="color"
          value={value || "#000000"}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-14 rounded-lg border border-slate-200 cursor-pointer"
        />
        <input
          type="text"
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className={common}
        />
      </div>
    );
  }
  return (
    <input
      type="text"
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value)}
      placeholder={field.placeholder}
      className={common}
    />
  );
}

// ---------------- LIST SECTION (add / edit / delete) ----------------

function ListSectionEditor({ section, items, setItems }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyItemFrom(section.fields));
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  function openAdd() {
    setEditingId(null);
    setForm(emptyItemFrom(section.fields));
    setModalOpen(true);
  }

  function openEdit(item) {
    setEditingId(item.id);
    setForm({ ...item });
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setEditingId(null);
  }

  function handleSave(e) {
    e.preventDefault();
    if (editingId) {
      setItems((prev) => prev.map((it) => (it.id === editingId ? { ...it, ...form } : it)));
    } else {
      setItems((prev) => [...prev, { id: Date.now(), ...form }]);
    }
    closeModal();
  }

  function handleDelete(id) {
    setItems((prev) => prev.filter((it) => it.id !== id));
    setConfirmDeleteId(null);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-bold text-slate-900">{section.label}</h3>
          <p className="text-xs text-slate-500 mt-0.5">{items.length} item{items.length !== 1 && "s"}</p>
        </div>
        <button
          onClick={openAdd}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#E8A33D] text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add
        </button>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-12 text-slate-400 text-sm bg-white border border-dashed border-slate-200 rounded-2xl">
          Nothing here yet — click Add to create one.
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3"
            >
              <GripVertical className="h-4 w-4 text-slate-300 shrink-0" />
              <span className="flex-1 text-sm text-slate-700 truncate">
                {section.itemLabel(item)}
              </span>
              <button
                onClick={() => openEdit(item)}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                <Pencil className="h-4 w-4" />
              </button>
              <button
                onClick={() => setConfirmDeleteId(item.id)}
                className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={closeModal} />
          <form
            onSubmit={handleSave}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 sticky top-0 bg-white rounded-t-2xl">
              <h3 className="font-bold text-slate-900">
                {editingId ? `Edit ${section.label}` : `Add ${section.label}`}
              </h3>
              <button type="button" onClick={closeModal} className="text-slate-400 hover:text-slate-700">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {section.fields.map((f) => (
                <label key={f.key} className="block">
                  <span className="block text-xs font-semibold text-slate-500 mb-1.5">{f.label}</span>
                  <FieldInput
                    field={f}
                    value={form[f.key]}
                    onChange={(v) => setForm((prev) => ({ ...prev, [f.key]: v }))}
                  />
                </label>
              ))}
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
                {editingId ? "Save Changes" : "Add"}
              </button>
            </div>
          </form>
        </div>
      )}

      {confirmDeleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setConfirmDeleteId(null)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6 text-center">
            <h3 className="font-bold text-slate-900 mb-1">Delete this item?</h3>
            <p className="text-sm text-slate-500 mb-6">This action can't be undone.</p>
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

// ---------------- SINGLETON SECTION (settings-style form) ----------------

function SingletonSectionEditor({ section, data, setData }) {
  const [form, setForm] = useState(data);
  const [saved, setSaved] = useState(false);

  function handleChange(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }

  function handleSave(e) {
    e.preventDefault();
    setData(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div>
      <h3 className="font-bold text-slate-900 mb-4">{section.label}</h3>
      <form onSubmit={handleSave} className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 max-w-3xl">
        {section.fields.map((f) => (
          <label key={f.key} className="block">
            <span className="block text-xs font-semibold text-slate-500 mb-1.5">{f.label}</span>
            <FieldInput field={f} value={form[f.key]} onChange={(v) => handleChange(f.key, v)} />
          </label>
        ))}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E8A33D] text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>
          {saved && <span className="text-sm text-emerald-600 font-medium">Saved</span>}
        </div>
      </form>
    </div>
  );
}

// ---------------- FILTER OPTIONS EDITOR ----------------

function FilterOptionsEditor({ data, setData }) {
  const [form, setForm] = useState(data);
  const [saved, setSaved] = useState(false);

  const groups = [
    { key: "survey", label: "Survey" },
    { key: "year", label: "Year" },
    { key: "city", label: "City" },
    { key: "segment", label: "Segment" }
  ];

  function handleSave(e) {
    e.preventDefault();
    setData(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div>
      <h3 className="font-bold text-slate-900 mb-1">Filter Dropdown Options</h3>
      <p className="text-xs text-slate-500 mb-4">One option per line. First line shows as the default ("All ...").</p>
      <form onSubmit={handleSave} className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5 max-w-3xl">
        {groups.map((g) => (
          <label key={g.key} className="block">
            <span className="block text-xs font-semibold text-slate-500 mb-1.5">{g.label} options</span>
            <textarea
              rows={4}
              value={form[g.key].join("\n")}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, [g.key]: e.target.value.split("\n") }))
              }
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300 resize-none font-mono"
            />
          </label>
        ))}
        <div className="flex items-center gap-3 pt-1">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E8A33D] text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>
          {saved && <span className="text-sm text-emerald-600 font-medium">Saved</span>}
        </div>
      </form>
    </div>
  );
}

// ---------------- MAIN PAGE ----------------

export default function SurveyAdminPage() {
  const [activeTab, setActiveTab] = useState(SECTIONS[0].id);
  const [store, setStore] = useState(() => {
    const initialStore = {};
    SECTIONS.forEach((s) => {
      initialStore[s.id] = s.initial;
    });
    return initialStore;
  });

  const activeSection = SECTIONS.find((s) => s.id === activeTab);

  function setSectionData(id, data) {
    setStore((prev) => ({ ...prev, [id]: data }));
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">Survey Page Content</h2>
        <p className="text-sm text-slate-500 mt-1">
          Manage every section shown on the public Surveys page
        </p>
      </div>

      {/* Section nav — full-width straight bar, wraps instead of scrolling */}
      <nav className="bg-white border border-slate-200 rounded-2xl p-2 flex flex-wrap gap-1">
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveTab(s.id)}
            className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors ${
              activeTab === s.id
                ? "bg-[#E8A33D] text-slate-950"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {s.label}
          </button>
        ))}
      </nav>

      {/* Section content — full width, below the bar */}
      <div className="w-full">
        {activeSection.kind === "list" && (
          <ListSectionEditor
            section={activeSection}
            items={store[activeSection.id]}
            setItems={(updater) =>
              setSectionData(
                activeSection.id,
                typeof updater === "function" ? updater(store[activeSection.id]) : updater
              )
            }
          />
        )}

        {activeSection.kind === "singleton" && (
          <SingletonSectionEditor
            section={activeSection}
            data={store[activeSection.id]}
            setData={(data) => setSectionData(activeSection.id, data)}
          />
        )}

        {activeSection.kind === "filters" && (
          <FilterOptionsEditor
            data={store[activeSection.id]}
            setData={(data) => setSectionData(activeSection.id, data)}
          />
        )}
      </div>
    </div>
  );
}