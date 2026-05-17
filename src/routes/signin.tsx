import React, { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff, Mail, Lock, Phone, User, ShieldCheck } from "lucide-react";
import { useCurrentUser } from "@/hooks/useAuth";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

type AuthMode = "signin" | "signup" | "forgot-password";

export const Route = createFileRoute("/signin")({
  head: () => ({ meta: [{ title: "Sign In — RUNSMSL" }] }),
  component: SignInPage,
});

export function SignInPage() {
  const navigate = useNavigate();
  const { user } = useCurrentUser();
  const loginMutation = useMutation(api.authLocal.login);
  const signupMutation = useMutation(api.authLocal.signup);
  const requestResetMutation = useMutation(api.authLocal.requestPasswordReset);
  const resetPasswordMutation = useMutation(api.authLocal.resetPassword);
  const [mode, setMode] = useState<AuthMode>("signin");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [resetMessage, setResetMessage] = useState<string | null>(null);

  const isSignUp = mode === "signup";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (mode === "signup") {
        if (password !== confirmPassword) throw new Error("Passwords do not match");
        if (password.length < 8) throw new Error("Password must be at least 8 characters");
        await signupMutation({ email, password, name: fullName, phone: phoneNumber });
      }

      const res = await loginMutation({ email, password });
      if (!res || !res.token) throw new Error("Login failed");
      localStorage.setItem("sessionToken", res.token);
      const params = new URLSearchParams(window.location.search);
      const redirect = params.get("redirect") || "/member";
      navigate({ to: redirect });
    } catch (err: any) {
      setError(err?.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const handleRequestReset = async () => {
    setResetMessage(null);
    try {
      const res = await requestResetMutation({ email: resetEmail });
      if (res && res.token) {
        setResetToken(res.token);
        setResetMessage("Password reset token generated (for testing). Check your email in production.");
      } else {
        setResetMessage("If an account exists, a reset link was issued.");
      }
    } catch (e: any) {
      setResetMessage(e?.message || "Failed to request reset");
    }
  };

  const handlePerformReset = async () => {
    setResetMessage(null);
    try {
      await resetPasswordMutation({ token: resetToken, password: password });
      setResetMessage("Password reset successful. You can now sign in.");
      setMode("signin");
    } catch (e: any) {
      setResetMessage(e?.message || "Failed to reset password");
    }
  };

  useEffect(() => {
    if (user) {
      const portal = user.role === "admin" ? "/admin" : user.role === "loan_officer" ? "/officer" : "/member";
      navigate({ to: portal });
    }
  }, [navigate, user]);

  return (
    <div className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-[#F0F4F8] overflow-hidden font-sans">
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#2E5AAC] opacity-15 rotate-45 pointer-events-none z-0" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#1B365D] rounded-full opacity-10 pointer-events-none z-0" />
      <div className="absolute top-20 left-20 w-16 h-16 border-4 border-[#1B365D]/5 rounded-xl rotate-12 z-0" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 border-2 border-[#2E5AAC]/10 rounded-full z-0" />

      <div className="scale-[0.75] transform z-10 flex items-center justify-center">
        {mode === "forgot-password" && (
          <div className="fixed inset-0 z-40 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={() => setMode("signin")}></div>
            <div className="relative z-50 w-[480px] bg-white rounded-xl p-6 shadow-xl">
              <h3 className="font-bold text-lg mb-2">Reset Your Password</h3>
              <p className="text-sm text-muted-foreground mb-4">Enter the email you use for your cooperative account to generate a reset token.</p>
              <div className="mb-3">
                <input value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-2 border rounded" />
              </div>
              <div className="flex gap-2">
                <button onClick={handleRequestReset} className="px-4 py-2 bg-primary text-white rounded">Send Reset Token</button>
                <button onClick={() => setMode("signin")} className="px-4 py-2 border rounded">Cancel</button>
              </div>
              {resetToken && (
                <div className="mt-4 p-3 rounded bg-green-50 border border-green-100 text-sm">
                  <p className="font-medium">Reset token for testing:</p>
                  <code className="break-all text-xs">{resetToken}</code>
                  <div className="mt-2">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New password" className="w-full px-3 py-2 border rounded mb-2" />
                    <button onClick={handlePerformReset} className="px-4 py-2 bg-green-600 text-white rounded">Apply Reset</button>
                  </div>
                </div>
              )}
              {resetMessage && <p className="mt-3 text-sm text-muted-foreground">{resetMessage}</p>}
            </div>
          </div>
        )}
        <div className="relative w-[850px] h-[600px] bg-white rounded-[32px] shadow-2xl overflow-hidden flex border border-white/20">

          <div className={`absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center p-12 transition-all duration-700 ease-in-out ${isSignUp ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10 pointer-events-none"}`}>
            <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-[320px] mx-auto text-center">
              <h1 className="text-3xl font-extrabold text-[#1B365D] mb-2">Create Your Account</h1>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold mb-6">Membership access for the cooperative portal</p>

              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Full Name" className="w-full pl-10 pr-4 py-3 bg-[#F8FAFC] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#2E5AAC] outline-none" required />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" className="w-full pl-10 pr-4 py-3 bg-[#F8FAFC] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#2E5AAC] outline-none" required />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full pl-10 pr-4 py-3 bg-[#F8FAFC] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#2E5AAC] outline-none" required />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full pl-10 pr-4 py-3 bg-[#F8FAFC] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#2E5AAC] outline-none" required />
              </div>

              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" className="w-full px-4 py-3 bg-[#F8FAFC] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#2E5AAC] outline-none" required />

              <button disabled={loading} className="w-full h-12 bg-[#2E5AAC] hover:bg-[#1B365D] rounded-full font-bold uppercase text-xs tracking-widest mt-4 shadow-lg transition-transform active:scale-95">
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>
          </div>

          <div className={`absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center p-12 transition-all duration-700 ease-in-out ${isSignUp ? "opacity-0 translate-x-10 pointer-events-none" : "opacity-100 translate-x-0"}`}>
            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-[300px] mx-auto text-center">
              <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-[#1B365D] mb-2">Member Sign In</h1>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Access your cooperative dashboard</p>
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-100 flex items-center gap-2 text-left">
                  <ShieldCheck className="w-4 h-4 text-red-500" />
                  <p className="text-[10px] text-red-600 font-bold">{error}</p>
                </div>
              )}

              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full pl-10 pr-4 py-3.5 bg-[#F8FAFC] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#2E5AAC] outline-none" required />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full pl-10 pr-12 py-3.5 bg-[#F8FAFC] border-none rounded-xl text-sm focus:ring-2 focus:ring-[#2E5AAC] outline-none" required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3.5 text-slate-400 hover:text-[#1B365D]">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              <button type="button" onClick={() => setMode("forgot-password")} className="text-xs text-slate-400 hover:text-[#2E5AAC] font-bold uppercase tracking-wider transition-colors">Forgot Password?</button>

              <button disabled={loading} className="w-full h-12 bg-[#2E5AAC] hover:bg-[#1B365D] rounded-full font-bold uppercase text-xs tracking-widest mt-2 shadow-lg transition-transform active:scale-95">{loading ? "Signing In..." : "Sign In"}</button>
            </form>
          </div>

          <div className={`absolute top-0 left-0 h-full w-1/2 bg-[#1B365D] text-white z-20 transition-transform duration-700 ease-in-out flex flex-col items-center justify-center p-12 text-center ${isSignUp ? "translate-x-full" : "translate-x-0"}`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2E5AAC] opacity-20 rotate-45 translate-x-16 -translate-y-16 pointer-events-none" />
            <div className="absolute bottom-10 left-10 w-12 h-12 border-4 border-white/10 rotate-12 pointer-events-none" />
            <div className="absolute top-1/4 right-8 w-4 h-4 bg-white/10 rounded-full pointer-events-none" />

            <div className="relative z-30">
              <h2 className="text-4xl font-extrabold mb-4">{isSignUp ? "Join the Cooperative" : "Welcome Back"}</h2>
              <p className="text-sm opacity-80 mb-10 leading-relaxed max-w-[260px] mx-auto">{isSignUp ? "Create your member account to access savings, loans, products, and updates." : "Sign in to view your dashboard, manage loans, and stay connected to the society."}</p>
              <button onClick={() => setMode(isSignUp ? "signin" : "signup")} className="px-12 py-3 border-2 border-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-[#1B365D] transition-all duration-300 active:scale-95">{isSignUp ? "Go to Sign In" : "Create Account"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
