import { FDADisclaimer } from "@/components/shared/FDADisclaimer";

export function AtlasFooter() {
  return (
    <footer className="bg-abyss border-t border-white/[0.06] pt-16 pb-10 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 md:gap-12">
        <div>
          <h3 className="text-2xl font-bold tracking-tight mb-3.5">
            Atlas<span className="text-sage">.</span>
          </h3>
          <p className="text-sm text-text-dim leading-relaxed max-w-[280px]">
            The precision metabolic stack for men on GLP-1. Built to preserve.
            Engineered to perform.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-[11px] font-medium tracking-[2px] uppercase text-text-muted mb-4">
            Product
          </h4>
          <ul className="space-y-3">
            <li><a href="#features" className="text-sm text-text-dim hover:text-sage transition-colors">Features</a></li>
            <li><a href="#how-it-works" className="text-sm text-text-dim hover:text-sage transition-colors">How it Works</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] font-medium tracking-[2px] uppercase text-text-muted mb-4">
            Company
          </h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm text-text-dim hover:text-sage transition-colors">About</a></li>
            <li><a href="#" className="text-sm text-text-dim hover:text-sage transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[11px] font-medium tracking-[2px] uppercase text-text-muted mb-4">
            Legal
          </h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm text-text-dim hover:text-sage transition-colors">Privacy</a></li>
            <li><a href="#" className="text-sm text-text-dim hover:text-sage transition-colors">Terms</a></li>
          </ul>
        </div>
      </div>

      <FDADisclaimer />

      <div className="max-w-[1200px] mx-auto mt-8 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-[13px] text-text-dim">&copy; 2026 Atlas. All rights reserved.</p>
      </div>
    </footer>
  );
}
