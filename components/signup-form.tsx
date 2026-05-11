"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSignup } from "@/hooks/use-auth-api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Mail, Lock, AlertCircle, ShieldCheck, ArrowRight } from "lucide-react";

export default function SignupForm() {
  const router = useRouter();
  const signupMutation = useSignup();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    try {
      await signupMutation.mutateAsync({ email, password });
      router.push("/");
    } catch (err: any) {
      setError(err?.message || "Signup failed. Please try again.");
    }
  };

  return (
    <div className="w-full">
      <div className="space-y-2 mb-8">
        <div className="lg:hidden w-16 h-16 relative mb-4 mx-auto">
          <Image
            src="/logo.png"
            alt="CandidHeart Logo"
            fill
            sizes="64px"
            className="object-contain"
            priority
          />
        </div>
        <h2 className="text-4xl font-heading font-bold text-[#053560] tracking-tight">
          Create Account
        </h2>
        <p className="text-lg text-[#6F6457]">
          Join the CandidHeart administration team.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-5">
          {error && (
            <div className="bg-destructive/10 border border-destructive/20 text-destructive text-sm p-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-1">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="font-medium">{error}</p>
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[15px] font-semibold text-[#053560] ml-1">Work Email</Label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-[#C8102E] transition-colors">
                <Mail className="w-full h-full" />
              </div>
              <Input
                id="email"
                type="email"
                placeholder="admin@candidheart.com"
                className="pl-12 h-13 text-md rounded-[18px] border-[#E5E7EB] bg-white focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/5 transition-all outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={signupMutation.isPending}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-[15px] font-semibold text-[#053560] ml-1">Password</Label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-[#C8102E] transition-colors">
                <Lock className="w-full h-full" />
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="pl-12 h-13 text-md rounded-[18px] border-[#E5E7EB] bg-white focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/5 transition-all outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={signupMutation.isPending}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-[15px] font-semibold text-[#053560] ml-1">Confirm Password</Label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-[#C8102E] transition-colors">
                <ShieldCheck className="w-full h-full" />
              </div>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="pl-12 h-13 text-md rounded-[18px] border-[#E5E7EB] bg-white focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/5 transition-all outline-none"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={signupMutation.isPending}
              />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col space-y-6 mt-8">
          <Button 
            type="submit" 
            className="w-full h-13 text-lg font-bold bg-[#053560] hover:bg-[#07467d] text-[#F3F1E3] rounded-[18px] shadow-xl shadow-[#053560]/10 transition-all flex items-center justify-center gap-2 group" 
            disabled={signupMutation.isPending}
          >
            {signupMutation.isPending ? (
              <Loader2 className="h-6 w-6 animate-spin" />
            ) : (
              <>
                Create Account
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </Button>
          
          <div className="text-[15px] text-center text-[#6F6457] font-medium">
            Already have an account?{" "}
            <Link href="/login" className="text-[#C8102E] hover:underline decoration-2 underline-offset-4 font-bold transition-all">
              Sign in
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
