import SignupForm from "@/components/signup-form";
import Image from "next/image";

export default function SignupPage() {
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
            className="object-cover scale-110 rotate-180"
            priority
          />
        </div>
        
        {/* Decorative Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#053560]/90 via-[#053560]/40 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 px-16 text-white space-y-8 max-w-2xl">
          <div className="space-y-4">
            <h2 className="text-5xl font-heading font-bold leading-tight tracking-tight">
              Build a <span className="text-[#C8102E]">Better</span> Future for <span className="text-[#F3F1E3]">Families</span>.
            </h2>
            <p className="text-xl text-[#C8D7E7] font-sans leading-relaxed">
              Join the administration team and help us moderate, verify, and support thousands of couples on their journey to marriage.
            </p>
          </div>
          
          <ul className="space-y-4 pt-4">
             {[
               "Sophisticated verification tools",
               "Real-time moderation dashboard",
               "Comprehensive analytics suite"
             ].map((feature, i) => (
               <li key={i} className="flex items-center gap-3 text-lg text-[#F3F1E3]/90 font-medium">
                 <div className="w-6 h-6 rounded-full bg-[#C8102E] flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                 </div>
                 {feature}
               </li>
             ))}
          </ul>
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
        
        <div className="w-full max-w-md animate-in fade-in slide-in-from-right-4 duration-700">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
