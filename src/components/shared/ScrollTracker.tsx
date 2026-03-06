"use client";

import { useEffect, useRef } from "react";
import { useAnalytics } from "@/hooks/useAnalytics";

export function ScrollTracker() {
  const { track } = useAnalytics();
  const tracked = useRef<Set<string>>(new Set());

  useEffect(() => {
    const thresholds = [
      { id: "scroll_25", ratio: 0.25 },
      { id: "scroll_50", ratio: 0.5 },
      { id: "scroll_75", ratio: 0.75 },
      { id: "scroll_100", ratio: 0.95 },
    ];

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const scrollRatio = scrollTop / docHeight;

      for (const t of thresholds) {
        if (scrollRatio >= t.ratio && !tracked.current.has(t.id)) {
          tracked.current.add(t.id);
          track(t.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [track]);

  return null;
}
