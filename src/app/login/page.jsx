"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Building2, Shield, Users, Award } from "lucide-react";

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

    // Simulate authentication call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to home page
      router.push("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2 min-h-[600px] border border-gray-100">

        {/* Left Column - Branding and Context */}
        <div className="relative hidden md:flex flex-col justify-between p-12 text-white bg-[#0B1F3A] overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80"
              alt="Premium office skyscraper"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/90 to-[#0B1F3A]/70" />
          </div>

          <div className="relative z-10">
            {/* Logo */}
            <Link href="/" className="inline-flex flex-col leading-none select-none">
              <span className="text-3xl font-black tracking-tight text-[#E8A33D]">
                REPC
              </span>
              <span className="text-[9px] tracking-[0.25em] text-slate-300 font-semibold uppercase mt-0.5">
                Connect · Collaborate · Grow
              </span>
            </Link>
          </div>

          <div className="relative z-10 my-auto py-8">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight">
              India's Premier <br />
              <span className="text-[#E8A33D]">Commercial Real Estate</span> Network
            </h2>
            <div className="h-1 w-16 bg-[#E8A33D] my-6 rounded-full" />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 shrink-0">
                  <Users className="h-5 w-5 text-[#E8A33D]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100 text-sm">25,000+ Verified Members</h4>
                  <p className="text-xs text-slate-300 mt-1">Connect directly with developers, brokers, investors and corporate occupiers.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 shrink-0">
                  <Building2 className="h-5 w-5 text-[#E8A33D]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100 text-sm">Exclusive Listings & Dealflow</h4>
                  <p className="text-xs text-slate-300 mt-1">Access off-market office, retail, warehouse spaces and land deals across 120+ cities.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 shrink-0">
                  <Shield className="h-5 w-5 text-[#E8A33D]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100 text-sm">Verified Professional Standing</h4>
                  <p className="text-xs text-slate-300 mt-1">Establish credibility, receive peer recommendations and show your verified portfolio.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 text-xs text-slate-400">
            &copy; {new Date().getFullYear()} REPC India. All rights reserved.
          </div>
        </div>

        {/* Right Column - Login Form */}
        <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-white">
          <div className="w-full max-w-md mx-auto">
            {/* Header / Intro */}
            <div className="mb-8">
              <div className="md:hidden mb-6">
                <Link href="/" className="inline-flex flex-col leading-none">
                  <span className="text-2xl font-black tracking-tight text-[#0B1F3A]">
                    REPC
                  </span>
                  <span className="text-[8px] tracking-[0.22em] text-[#E8A33D] font-semibold uppercase mt-0.5">
                    Connect · Collaborate · Grow
                  </span>
                </Link>
              </div>
              <h3 className="text-2xl font-extrabold text-[#0B1F3A] tracking-tight">
                Welcome Back
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                Enter your credentials to access your commercial network dashboard.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="h-4.5 w-4.5" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="name@company.com"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${errors.email
                        ? "border-red-500 focus:ring-red-100"
                        : "border-slate-200 focus:border-[#0B1F3A] focus:ring-slate-100"
                      }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-500 font-medium">{errors.email}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-xs font-semibold text-[#E8A33D] hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="h-4.5 w-4.5" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (errors.password) setErrors({ ...errors, password: null });
                    }}
                    placeholder="••••••••"
                    className={`w-full pl-10 pr-10 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${errors.password
                        ? "border-red-500 focus:ring-red-100"
                        : "border-slate-200 focus:border-[#0B1F3A] focus:ring-slate-100"
                      }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4.5 w-4.5" />
                    ) : (
                      <Eye className="h-4.5 w-4.5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-xs text-red-500 font-medium">{errors.password}</p>
                )}
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#0B1F3A] focus:ring-[#0B1F3A] border-slate-300 rounded cursor-pointer"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-xs font-semibold text-slate-500 cursor-pointer select-none"
                >
                  Keep me signed in on this device
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3.5 px-4 rounded-xl text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${isLoading
                    ? "bg-slate-400 cursor-not-allowed"
                    : "bg-[#0B1F3A] hover:bg-[#152e50]"
                  }`}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Signing you in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            {/* Social Logins */}
            <div className="mt-8">
              <div className="relative flex items-center justify-center my-6">
                <div className="border-t border-slate-200 w-full" />
                <span className="bg-white px-3.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 absolute">
                  Or Connect With
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={handleLogin}
                  className="flex items-center justify-center gap-2.5 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-sm font-semibold text-slate-700 cursor-pointer"
                >
                  <svg className="h-4.5 w-4.5" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M12 5.04c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 1.74 14.96 1 12 1 7.35 1 3.4 3.65 1.49 7.5l3.86 3C6.27 7.34 8.91 5.04 12 5.04z"
                    />
                    <path
                      fill="#4285F4"
                      d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.47h6.44c-.28 1.48-1.12 2.73-2.38 3.58l3.7 2.87c2.16-2 3.73-4.94 3.73-8.56z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.35 14.82c-.25-.74-.39-1.53-.39-2.35s.14-1.61.39-2.35L1.49 7.12C.54 9.03 0 11.16 0 13.4s.54 4.37 1.49 6.28l3.86-3z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c3.24 0 5.97-1.07 7.96-2.91l-3.7-2.87c-1.11.75-2.52 1.19-4.26 1.19-3.09 0-5.73-2.3-6.65-5.46L1.49 15.9C3.4 19.75 7.35 22.4 12 22.4z"
                    />
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  onClick={handleLogin}
                  className="flex items-center justify-center gap-2.5 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-sm font-semibold text-slate-700 cursor-pointer"
                >
                  <svg className="h-4.5 w-4.5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </button>
              </div>
            </div>

            {/* Signup Link */}
            <div className="mt-8 text-center text-xs font-semibold text-slate-500">
              New to REPC?{" "}
              <Link href="/join" className="text-[#E8A33D] hover:underline font-bold">
                Create an account
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
