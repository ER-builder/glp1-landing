"use client";

import { useState, FormEvent } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

interface WaitlistFormProps {
  variant: "a" | "b";
  buttonLabel?: string;
  className?: string;
}

export function WaitlistForm({
  variant,
  buttonLabel = "Join the Waitlist",
  className = "",
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const { trackCTA, getUTMParams } = useAnalytics();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    trackCTA("email_submit");

    try {
      const utm = getUTMParams();
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          variant,
          source: utm.source,
          medium: utm.medium,
          campaign: utm.campaign,
          referrer: document.referrer || undefined,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    const successClasses = variant === "a"
      ? "bg-sage/10 border-sage/25 text-sage"
      : "bg-teal/10 border-teal/25 text-teal";

    return (
      <div className={`text-center ${className}`}>
        <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl ${successClasses}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-medium">{message}</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`relative flex flex-col sm:flex-row gap-3 max-w-md mx-auto ${className}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        placeholder="Enter your email"
        required
        aria-label="Email address"
        className="flex-1 px-4 py-3 sm:py-4 rounded-xl bg-navy border border-white/10 text-text placeholder:text-text-dim focus:outline-none focus:border-white/25 text-[15px]"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={`px-6 py-3 sm:py-4 rounded-xl font-semibold text-[15px] transition-all duration-200 whitespace-nowrap
          ${variant === "a"
            ? "bg-sage text-abyss hover:bg-sage-hover"
            : "bg-teal text-abyss hover:bg-teal-hover"
          }
          ${status === "loading" ? "opacity-70 cursor-wait" : "hover:-translate-y-0.5"}
        `}
      >
        {status === "loading" ? "Joining..." : buttonLabel}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm mt-1 sm:absolute sm:bottom-0 sm:translate-y-full">{message}</p>
      )}
    </form>
  );
}
