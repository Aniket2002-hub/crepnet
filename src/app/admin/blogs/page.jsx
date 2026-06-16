"use client";

import { useState, useEffect } from "react";
import {
  Plus,
  Search,
  Filter,
  Edit2,
  Trash2,
  X,
  FileText,
  Calendar,
  User,
  Clock,
  Tag
} from "lucide-react";

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
    content: "Real Estate Investment Trusts offer steady yields. Here is a breakdown of top performing commercial REITs..."
  },
  {
    id: "blog-2",
    title: "5 Design Principles for the Modern Post-Pandemic Workplace",
    author: "Neha Iyer",
    tags: "Workplace, Architecture, Design",
    readTime: 7,
    status: "Published",
    date: "2026-06-05",
    views: 1890,
    content: "Biophilic designs, private focus pods, and flexible assembly areas are shaping layout decisions..."
  },
  {
    id: "blog-3",
    title: "Is Hospitality Real Estate Recovering in Goa & Rajasthan?",
    author: "Vimal Nadar",
    tags: "Hospitality, Tourism",
    readTime: 4,
    status: "Draft",
    date: "2026-06-14",
    views: 0,
    content: "Resort demand is scaling, leading to major hotel brand signings..."
  }
];

export default function BlogsManagement() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("create"); // "create" | "edit"
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Form State
  const [formTitle, setFormTitle] = useState("");
  const [formAuthor, setFormAuthor] = useState("");
  const [formTags, setFormTags] = useState("");
  const [formReadTime, setFormReadTime] = useState(5);
  const [formStatus, setFormStatus] = useState("Draft");
  const [formDate, setFormDate] = useState("");
  const [formContent, setFormContent] = useState("");
  const [formViews, setFormViews] = useState(0);

  // Load data
  useEffect(() => {
    const stored = localStorage.getItem("repc_blogs");
    if (stored) {
      setBlogs(JSON.parse(stored));
    } else {
      localStorage.setItem("repc_blogs", JSON.stringify(DEFAULT_BLOGS));
      setBlogs(DEFAULT_BLOGS);
    }
  }, []);

  // Filter application
  useEffect(() => {
    let result = [...blogs];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        b =>
          b.title.toLowerCase().includes(query) ||
          b.author.toLowerCase().includes(query) ||
          b.tags.toLowerCase().includes(query)
      );
    }

    if (statusFilter !== "All") {
      result = result.filter(b => b.status === statusFilter);
    }

    setFilteredBlogs(result);
  }, [blogs, searchQuery, statusFilter]);

  // Open modal for Create
  const handleOpenCreate = () => {
    setModalType("create");
    setFormTitle("");
    setFormAuthor("Admin User");
    setFormTags("");
    setFormReadTime(5);
    setFormStatus("Draft");
    setFormDate(new Date().toISOString().split("T")[0]);
    setFormContent("");
    setFormViews(0);
    setSelectedBlog(null);
    setModalOpen(true);
  };

  // Open modal for Edit
  const handleOpenEdit = (blog) => {
    setModalType("edit");
    setSelectedBlog(blog);
    setFormTitle(blog.title);
    setFormAuthor(blog.author);
    setFormTags(blog.tags || "");
    setFormReadTime(blog.readTime || 5);
    setFormStatus(blog.status);
    setFormDate(blog.date);
    setFormContent(blog.content || "");
    setFormViews(blog.views || 0);
    setModalOpen(true);
  };

  // Save Modal (Create / Edit)
  const handleSaveBlog = (e) => {
    e.preventDefault();
    if (!formTitle.trim() || !formAuthor.trim() || !formContent.trim()) {
      alert("Please fill in the title, author, and content fields.");
      return;
    }

    let updatedBlogs = [];

    if (modalType === "create") {
      const newBlog = {
        id: `blog-${Date.now()}`,
        title: formTitle,
        author: formAuthor,
        tags: formTags,
        readTime: Number(formReadTime),
        status: formStatus,
        date: formDate,
        views: formViews,
        content: formContent
      };
      updatedBlogs = [newBlog, ...blogs];
    } else {
      updatedBlogs = blogs.map(b =>
        b.id === selectedBlog.id
          ? {
              ...b,
              title: formTitle,
              author: formAuthor,
              tags: formTags,
              readTime: Number(formReadTime),
              status: formStatus,
              date: formDate,
              views: formViews,
              content: formContent
            }
          : b
      );
    }

    setBlogs(updatedBlogs);
    localStorage.setItem("repc_blogs", JSON.stringify(updatedBlogs));
    setModalOpen(false);
    alert(modalType === "create" ? "Blog post created!" : "Blog post updated!");
  };

  // Delete Blog
  const handleDeleteBlog = (id) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;

    const updated = blogs.filter(b => b.id !== id);
    setBlogs(updated);
    localStorage.setItem("repc_blogs", JSON.stringify(updated));
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-white">Blogs Administration</h2>
          <p className="text-slate-500 text-xs mt-1">Write community posts, news summaries, and company updates.</p>
        </div>
        <button
          onClick={handleOpenCreate}
          className="flex items-center justify-center gap-1.5 px-4 py-3 bg-[#E8A33D] text-slate-950 font-bold text-sm rounded-xl shadow-md hover:bg-amber-500 transition-all cursor-pointer shrink-0"
        >
          <Plus className="h-4.5 w-4.5" />
          New Blog Post
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
            placeholder="Search blogs by title, tags, or author..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-slate-700 transition-colors"
          />
        </div>

        {/* Filters Row */}
        <div className="flex gap-3">
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
                <th className="px-6 py-4">Tags</th>
                <th className="px-6 py-4">Read Time</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Views</th>
                <th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-sm text-slate-300">
              {filteredBlogs.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center py-12 text-slate-500 font-medium">
                    No blogs found matching filters.
                  </td>
                </tr>
              ) : (
                filteredBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-slate-900/40 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-200">
                      <div className="max-w-xs sm:max-w-md truncate" title={blog.title}>
                        {blog.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <User className="h-3.5 w-3.5 text-slate-500" />
                        <span>{blog.author}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {blog.tags ? (
                          blog.tags.split(",").map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 text-[10px] rounded bg-slate-900 border border-slate-800 text-slate-400 font-medium flex items-center gap-0.5"
                            >
                              <Tag className="h-2.5 w-2.5 text-slate-600" />
                              {tag.trim()}
                            </span>
                          ))
                        ) : (
                          <span className="text-slate-600 text-xs">—</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-400 text-xs font-medium">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-slate-500" />
                        <span>{blog.readTime} min read</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wide ${
                        blog.status === "Published"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                      }`}>
                        {blog.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-slate-400 text-xs">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-slate-500" />
                        <span>{blog.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-slate-400 font-mono font-medium">
                      {blog.views.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleOpenEdit(blog)}
                          className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteBlog(blog.id)}
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
                {modalType === "create" ? "Create New Blog Post" : "Edit Blog Post"}
              </h3>
              <button className="text-slate-400 hover:text-white p-1 rounded-lg" onClick={() => setModalOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveBlog} className="flex-1 overflow-y-auto p-6 space-y-4">
              {/* Title */}
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1.5">Blog Title</label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="Enter a post title..."
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

              {/* Tags & Status & ReadTime Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1.5">Tags (Comma-separated)</label>
                  <input
                    type="text"
                    value={formTags}
                    onChange={(e) => setFormTags(e.target.value)}
                    placeholder="e.g. Design, REITs"
                    className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-slate-700"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1.5">Read Time (minutes)</label>
                  <input
                    type="number"
                    value={formReadTime}
                    onChange={(e) => setFormReadTime(Number(e.target.value))}
                    min="1"
                    className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-slate-700"
                  />
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
              </div>

              {/* Content */}
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1.5">Content Body</label>
                <textarea
                  value={formContent}
                  onChange={(e) => setFormContent(e.target.value)}
                  rows={6}
                  placeholder="Write the blog post content here..."
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
                  {modalType === "create" ? "Create Post" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
