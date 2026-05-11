import LoginForm from "@/components/login-form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full bg-[#FCFBF7]">
      {/* Left Side: Illustration & Branding (Hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#053560] items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-80 mix-blend-overlay">
          <Image
            src="/auth-bg.png"
            alt="Faith-Rooted Matchmaking"
            fill
            sizes="50vw"
            className="object-cover scale-110"
            priority
          />
        </div>
        
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#053560]/90 via-[#053560]/40 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 px-16 text-white space-y-8 max-w-2xl">
          <div className="space-y-4">
            <h2 className="text-5xl font-heading font-bold leading-tight tracking-tight">
              Connecting <span className="text-[#C8102E]">Hearts</span> Through <span className="text-[#F3F1E3]">Faith</span>.
            </h2>
            <p className="text-xl text-[#C8D7E7] font-sans leading-relaxed">
              CandidHeart Admin Console. Manage the ecosystem of faith-rooted matchmaking with precision and care.
            </p>
          </div>
          
          <div className="flex gap-12 pt-8">
            <div className="space-y-1">
              <p className="text-3xl font-bold text-[#F3F1E3]">2.4k+</p>
              <p className="text-sm text-[#C8D7E7] uppercase tracking-wider font-semibold">Active Matches</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-[#F3F1E3]">98%</p>
              <p className="text-sm text-[#C8D7E7] uppercase tracking-wider font-semibold">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Floating Logo */}
        <div className="absolute top-12 left-12">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 relative">
               <Image src="/logo.png" alt="Logo" fill sizes="40px" className="object-contain" />
             </div>
             <span className="text-2xl font-bold text-white tracking-tight">CandidHeart</span>
          </div>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-[#FCFBF7] relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
          style={{ backgroundImage: `radial-gradient(#053560 1px, transparent 1px)`, backgroundSize: '32px 32px' }} 
        />
        
        <div className="w-full max-w-md animate-in fade-in zoom-in duration-500">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
