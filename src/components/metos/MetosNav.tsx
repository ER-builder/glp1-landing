"use client";

import { useAnalytics } from "@/hooks/useAnalytics";

export function MetosNav() {
  const { trackCTA } = useAnalytics();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-abyss/85 backdrop-blur-2xl border-b border-teal/[0.08]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 flex items-center justify-between h-[72px]">
        <div className="text-[26px] font-bold tracking-tight text-text">
          met<span className="text-teal">OS</span>
        </div>
        <div className="flex items-center gap-9">
          <a href="#modules" className="hidden md:inline text-text-muted text-sm font-medium hover:text-text transition-colors">
            Modules
          </a>
          <a href="#how-it-works" className="hidden md:inline text-text-muted text-sm font-medium hover:text-text transition-colors">
            How It Works
          </a>
          <button
            onClick={() => {
              trackCTA("nav_boot_system");
              document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-teal text-abyss px-[22px] py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-hover hover:-translate-y-px transition-all btn-glow-teal"
          >
            Boot Your System
          </button>
        </div>
      </div>
    </nav>
  );
}
