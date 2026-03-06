"use client";

import { WaitlistForm } from "@/components/shared/WaitlistForm";

export function AtlasCTA() {
  return (
    <section
      id="waitlist"
      className="bg-gradient-to-br from-sage to-teal py-20 md:py-[100px] px-6 md:px-10 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_60%)] pointer-events-none" />
      <div className="relative">
        <h2 className="text-4xl md:text-[48px] font-bold tracking-tight mb-4 text-abyss">
          Ready to join the waitlist?
        </h2>
        <p className="text-lg text-abyss/70 mb-9 max-w-[520px] mx-auto">
          Be the first to know when Atlas. launches. Early access and exclusive pricing for founding members.
        </p>
        <WaitlistForm variant="a" buttonLabel="Get Early Access" />
      </div>
    </section>
  );
}
