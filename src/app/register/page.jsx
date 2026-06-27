"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  User,
  Phone,
  Briefcase,
  Award,
  TrendingUp,
  Network,
} from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.email) {
      e.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      e.email = "Please enter a valid email address";
    }
    if (!form.phone.trim()) {
      e.phone = "Phone number is required";
    } else if (!/^[+\d][\d\s\-()]{7,}$/.test(form.phone.trim())) {
      e.phone = "Enter a valid phone number";
    }
    if (!form.role) e.role = "Please select your role";
    if (!form.password) {
      e.password = "Password is required";
    } else if (form.password.length < 8) {
      e.password = "Password must be at least 8 characters";
    }
    if (!form.confirmPassword) {
      e.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      e.confirmPassword = "Passwords do not match";
    }
    if (!agreeTerms) e.terms = "You must accept the Terms of Service";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 1800);
  };

  const inputClass = (field) =>
    `w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
      errors[field]
        ? "border-red-500 focus:ring-red-100"
        : "border-slate-200 focus:border-[#0B1F3A] focus:ring-slate-100"
    }`;

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2 border border-gray-100">

        {/* ── Left Panel ── */}
        <div className="relative hidden md:flex flex-col justify-between p-9 text-white bg-[#0B1F3A] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80"
              alt="Office building"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/90 to-[#0B1F3A]/70" />
          </div>

          <div className="relative z-10">
            <Link href="/" className="inline-flex flex-col leading-none select-none">
              <span className="text-2xl font-black tracking-tight text-[#E8A33D]">REPC</span>
              <span className="text-[8px] tracking-[0.25em] text-slate-300 font-semibold uppercase mt-0.5">
                Connect · Collaborate · Grow
              </span>
            </Link>
          </div>

          <div className="relative z-10 my-auto py-6">
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight">
              Join <span className="text-[#E8A33D]">India's #1</span><br />
              Commercial RE Network
            </h2>
            <div className="h-1 w-12 bg-[#E8A33D] my-4 rounded-full" />

            <div className="space-y-4">
              {[
                {
                  icon: <Award className="h-4 w-4 text-[#E8A33D]" />,
                  title: "Free Membership",
                  desc: "Start for free. Upgrade to unlock premium dealflow and analytics.",
                },
                {
                  icon: <TrendingUp className="h-4 w-4 text-[#E8A33D]" />,
                  title: "Market Intelligence",
                  desc: "Quarterly reports, rent indices and vacancy data across India.",
                },
                {
                  icon: <Network className="h-4 w-4 text-[#E8A33D]" />,
                  title: "Grow Your Network",
                  desc: "Direct intros to verified decision-makers in CRE.",
                },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-bold text-slate-100 text-xs">{f.title}</p>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="relative z-10 text-[10px] text-slate-400">
            &copy; {new Date().getFullYear()} REPC India. All rights reserved.
          </p>
        </div>

        {/* ── Right Panel ── */}
        <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-center bg-white">
          <div className="w-full max-w-sm mx-auto">

            {/* Mobile logo */}
            <div className="md:hidden mb-5">
              <Link href="/" className="inline-flex flex-col leading-none">
                <span className="text-xl font-black tracking-tight text-[#0B1F3A]">REPC</span>
                <span className="text-[7px] tracking-[0.22em] text-[#E8A33D] font-semibold uppercase mt-0.5">
                  Connect · Collaborate · Grow
                </span>
              </Link>
            </div>

            <div className="mb-5">
              <h3 className="text-xl font-extrabold text-[#0B1F3A] tracking-tight">Create Your Account</h3>
              <p className="text-xs text-slate-500 mt-1.5">
                Join 25,000+ professionals on India's premier CRE network.
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-3.5">

              {/* First & Last Name */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    First Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User className="h-3.5 w-3.5" />
                    </div>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) => update("firstName", e.target.value)}
                      placeholder="Raj"
                      className={inputClass("firstName")}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-[10px] text-red-500 font-medium">{errors.firstName}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Last Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User className="h-3.5 w-3.5" />
                    </div>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(e) => update("lastName", e.target.value)}
                      placeholder="Sharma"
                      className={inputClass("lastName")}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-[10px] text-red-500 font-medium">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail className="h-3.5 w-3.5" />
                  </div>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="name@company.com"
                    className={inputClass("email")}
                  />
                </div>
                {errors.email && (
                  <p className="text-[10px] text-red-500 font-medium">{errors.email}</p>
                )}
              </div>

              {/* Phone & Role */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Phone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Phone className="h-3.5 w-3.5" />
                    </div>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      className={inputClass("phone")}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[10px] text-red-500 font-medium">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    Role
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Briefcase className="h-3.5 w-3.5" />
                    </div>
                    <select
                      value={form.role}
                      onChange={(e) => update("role", e.target.value)}
                      className={`${inputClass("role")} appearance-none`}
                    >
                      <option value="">Select role</option>
                      <option value="developer">Developer</option>
                      <option value="broker">Broker / Agent</option>
                      <option value="investor">Investor</option>
                      <option value="corporate">Corporate Occupier</option>
                      <option value="consultant">Consultant</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  {errors.role && (
                    <p className="text-[10px] text-red-500 font-medium">{errors.role}</p>
                  )}
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="h-3.5 w-3.5" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={(e) => update("password", e.target.value)}
                    placeholder="Min. 8 characters"
                    className={`${inputClass("password")} pr-9`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-[10px] text-red-500 font-medium">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="h-3.5 w-3.5" />
                  </div>
                  <input
                    type={showConfirm ? "text" : "password"}
                    value={form.confirmPassword}
                    onChange={(e) => update("confirmPassword", e.target.value)}
                    placeholder="Re-enter password"
                    className={`${inputClass("confirmPassword")} pr-9`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showConfirm ? <EyeOff className="h-3.5 w-3.5" /> : <Eye className="h-3.5 w-3.5" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-[10px] text-red-500 font-medium">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Terms */}
              <div>
                <div className="flex items-start gap-2">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => {
                      setAgreeTerms(e.target.checked);
                      if (errors.terms) setErrors((prev) => ({ ...prev, terms: null }));
                    }}
                    className="mt-0.5 h-3.5 w-3.5 text-[#0B1F3A] focus:ring-[#0B1F3A] border-slate-300 rounded cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-[11px] text-slate-500 leading-relaxed cursor-pointer">
                    I agree to the{" "}
                    <Link href="/terms" className="text-[#E8A33D] font-semibold hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-[#E8A33D] font-semibold hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    of REPC India.
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-[10px] text-red-500 font-medium mt-1">{errors.terms}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-xl text-white font-bold text-sm shadow hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                  isLoading ? "bg-slate-400 cursor-not-allowed" : "bg-[#0B1F3A] hover:bg-[#152e50]"
                }`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Creating your account...
                  </>
                ) : (
                  <>
                    Create Account <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-5 text-center text-[11px] font-semibold text-slate-500">
              Already have an account?{" "}
              <Link href="/login" className="text-[#E8A33D] hover:underline font-bold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}