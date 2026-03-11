import { FDADisclaimer } from "@/components/shared/FDADisclaimer";

export function MetosFooter() {
  return (
    <footer className="bg-abyss pt-[72px] pb-10 px-6 md:px-10 relative">
      <div className="absolute top-0 left-0 right-0 section-divider-teal" />
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-12">
        <div>
          <h3 className="text-[26px] font-bold tracking-tight mb-4">
            met<span className="text-teal">OS</span>
          </h3>
          <p className="text-sm text-text-dim leading-relaxed max-w-[280px]">
            The metabolic support system for men on GLP-1.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs font-medium tracking-[2px] uppercase text-text-muted mb-5">
            System
          </h4>
          <ul className="space-y-3.5">
            <li><a href="#modules" className="text-sm text-text-dim hover:text-teal transition-colors">Modules</a></li>
            <li><a href="#how-it-works" className="text-sm text-text-dim hover:text-teal transition-colors">Protocols</a></li>
          </ul>
        </div>
      </div>

      <FDADisclaimer />

      <div className="max-w-[1200px] mx-auto mt-8 pt-7 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-[13px] text-text-dim">&copy; 2026 metOS. All rights reserved.</p>
      </div>
    </footer>
  );
}
