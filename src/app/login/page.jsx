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
  Building2,
  Shield,
  Users,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!password) {
      tempErrors.password = "Password is required";
    } else if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2 min-h-[520px] border border-gray-100">

        {/* ── Left Panel (White Background) ── */}
        <div className="relative hidden md:flex flex-col justify-between p-9 text-slate-800 bg-white overflow-hidden border-r border-slate-100">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80"
              alt="Office skyscraper"
              className="w-full h-full object-cover opacity-5"
            />
          </div>

          {/* Desktop Logo Placement - Maximized and Centered */}
          <div className="relative z-10 flex justify-center w-full pt-4">
            <Link href="/" className="block select-none transform scale-125 transition-transform">
              <img
                src="/Real_Estate_Professionals_Community_Logo-removebg-preview.png"
                alt="Logo"
                className="h-28 w-auto object-contain mx-auto max-w-[280px]"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </Link>
          </div>

          <div className="relative z-10 my-auto py-6">
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-[#0B1F3A]">
              India's Premier <br />
              <span className="text-[#E8A33D]">Real Estate</span> Network
            </h2>
            <div className="h-1 w-12 bg-[#E8A33D] my-4 rounded-full" />

            <div className="space-y-4">
              {[
                {
                  icon: <Users className="h-4 w-4 text-[#E8A33D]" />,
                  title: "25,000+ Verified Members",
                  desc: "Connect with developers, brokers, investors and corporate occupiers.",
                },
                {
                  icon: <Building2 className="h-4 w-4 text-[#E8A33D]" />,
                  title: "Exclusive Listings & Dealflow",
                  desc: "Off-market deals across 120+ cities.",
                },
                {
                  icon: <Shield className="h-4 w-4 text-[#E8A33D]" />,
                  title: "Verified Professional Standing",
                  desc: "Credibility through peer recommendations and portfolio.",
                },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-xs">{f.title}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="relative z-10 text-[10px] text-slate-400 text-center">
            &copy; {new Date().getFullYear()} Real Estate Professionals Community. All rights reserved.
          </p>
        </div>

        {/* ── Right Panel (Dark Blue Background) ── */}
        <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-center bg-[#0B1F3A] text-white">
          <div className="w-full max-w-sm mx-auto">

            {/* Mobile Logo Placement - Maximized and Centered */}
            <div className="md:hidden flex justify-center mb-6">
              <Link href="/" className="block transform scale-110">
                <img
                  src="/Real_Estate_Professionals_Community_Logo-removebg-preview.png"
                  alt="Logo"
                  className="h-20 w-auto object-contain mx-auto brightness-0 invert"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </Link>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-extrabold text-white tracking-tight">Welcome Back</h3>
              <p className="text-xs text-slate-300 mt-1.5">
                Enter your credentials to access your commercial network dashboard.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300 block">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail className="h-4 w-4" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="name@company.com"
                    className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${errors.email
                      ? "border-red-500 focus:ring-red-100"
                      : "border-slate-700 bg-white focus:border-[#E8A33D] focus:ring-slate-800"
                      }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-[11px] text-red-400 font-medium">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-[11px] font-semibold text-[#E8A33D] hover:underline">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="h-4 w-4" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors({ ...errors, password: null });
                    }}
                    placeholder="••••••••"
                    className={`w-full pl-9 pr-9 py-2.5 rounded-xl border text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${errors.password
                      ? "border-red-500 focus:ring-red-100"
                      : "border-slate-700 bg-white focus:border-[#E8A33D] focus:ring-slate-800"
                      }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-[11px] text-red-400 font-medium">{errors.password}</p>
                )}
              </div>

              {/* Remember me */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-3.5 w-3.5 text-[#E8A33D] focus:ring-[#E8A33D] border-slate-600 bg-transparent rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 text-[11px] font-semibold text-slate-300 cursor-pointer select-none">
                  Keep me signed in on this device
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-xl text-slate-900 font-bold text-sm shadow hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${isLoading ? "bg-slate-500 text-white cursor-not-allowed" : "bg-[#E8A33D] hover:bg-[#d49230]"
                  }`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-slate-900" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Signing you in...
                  </>
                ) : (
                  <>
                    Sign In <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            {/* Social Connectors */}
            <div className="mt-6">
              <div className="relative flex items-center justify-center my-5">
                <div className="border-t border-slate-700 w-full" />
                <span className="bg-[#0B1F3A] px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 absolute">
                  Or Connect With
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleLogin}
                  className="flex items-center justify-center gap-2 py-2.5 bg-white border border-transparent rounded-xl hover:bg-slate-50 transition-colors text-xs font-semibold text-slate-800 cursor-pointer"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M12 5.04c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 1.74 14.96 1 12 1 7.35 1 3.4 3.65 1.49 7.5l3.86 3C6.27 7.34 8.91 5.04 12 5.04z" />
                    <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.47h6.44c-.28 1.48-1.12 2.73-2.38 3.58l3.7 2.87c2.16-2 3.73-4.94 3.73-8.56z" />
                    <path fill="#FBBC05" d="M5.35 14.82c-.25-.74-.39-1.53-.39-2.35s.14-1.61.39-2.35L1.49 7.12C.54 9.03 0 11.16 0 13.4s.54 4.37 1.49 6.28l3.86-3z" />
                    <path fill="#34A853" d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.7-2.87c-1.11.75-2.52 1.19-4.26 1.19-3.09 0-5.73-2.3-6.65-5.46L1.49 15.9C3.4 19.75 7.35 22.4 12 22.4z" />
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  onClick={handleLogin}
                  className="flex items-center justify-center gap-2 py-2.5 bg-white border border-transparent rounded-xl hover:bg-slate-50 transition-colors text-xs font-semibold text-slate-800 cursor-pointer"
                >
                  <svg className="h-4 w-4 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </button>
              </div>
            </div>

            <p className="mt-6 text-center text-[11px] font-semibold text-slate-300">
              New here?{" "}
              <Link href="/register" className="text-[#E8A33D] hover:underline font-bold">
                Create an account
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}