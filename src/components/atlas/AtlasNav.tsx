"use client";

import { useAnalytics } from "@/hooks/useAnalytics";

export function AtlasNav() {
  const { trackCTA } = useAnalytics();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-abyss/80 backdrop-blur-2xl border-b border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex items-center justify-between h-[72px]">
        <div className="text-[26px] font-bold tracking-tight text-text">
          Atlas<span className="text-sage">.</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#how-it-works" className="hidden md:inline text-text-muted text-sm font-medium hover:text-text transition-colors">
            How it Works
          </a>
          <a href="#features" className="hidden md:inline text-text-muted text-sm font-medium hover:text-text transition-colors">
            Features
          </a>
          <button
            onClick={() => {
              trackCTA("nav_get_early_access");
              document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-sage text-abyss px-[22px] py-2.5 rounded-lg text-sm font-semibold hover:bg-sage-hover hover:-translate-y-px transition-all"
          >
            Get Early Access
          </button>
        </div>
      </div>
    </nav>
  );
}
