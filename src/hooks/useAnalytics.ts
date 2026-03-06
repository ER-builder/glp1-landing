"use client";

import { useCallback, useEffect, useRef } from "react";

function getSessionId(): string {
  if (typeof window === "undefined") return "";
  let id = sessionStorage.getItem("session_id");
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem("session_id", id);
  }
  return id;
}

function getVariantFromCookie(): "a" | "b" {
  if (typeof document === "undefined") return "a";
  const match = document.cookie.match(/(?:^|; )variant=([ab])/);
  return (match?.[1] as "a" | "b") || "a";
}

function getUTMParams() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    source: params.get("utm_source") || undefined,
    medium: params.get("utm_medium") || undefined,
    campaign: params.get("utm_campaign") || undefined,
  };
}

export function useAnalytics() {
  const queue = useRef<Array<{
    session_id: string;
    variant: "a" | "b";
    event_type: string;
    event_data?: Record<string, unknown>;
  }>>([]);
  const flushTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const pageLoadTime = useRef<number>(Date.now());

  const flush = useCallback(() => {
    if (queue.current.length === 0) return;
    const events = [...queue.current];
    queue.current = [];

    const blob = new Blob([JSON.stringify({ events })], {
      type: "application/json",
    });

    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/events", blob);
    } else {
      fetch("/api/events", {
        method: "POST",
        body: JSON.stringify({ events }),
        headers: { "Content-Type": "application/json" },
        keepalive: true,
      }).catch(() => {});
    }
  }, []);

  const track = useCallback(
    (eventType: string, eventData?: Record<string, unknown>) => {
      queue.current.push({
        session_id: getSessionId(),
        variant: getVariantFromCookie(),
        event_type: eventType,
        event_data: eventData,
      });

      if (flushTimer.current) clearTimeout(flushTimer.current);
      flushTimer.current = setTimeout(flush, 2000);
    },
    [flush]
  );

  const trackCTA = useCallback(
    (label: string) => {
      track("cta_click", { label });
    },
    [track]
  );

  // Track page view on mount
  useEffect(() => {
    track("page_view", {
      url: window.location.href,
      referrer: document.referrer || undefined,
    });
  }, [track]);

  // Track time on page on visibility change / unload
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        const seconds = Math.round((Date.now() - pageLoadTime.current) / 1000);
        track("time_on_page", { seconds });
        flush();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      flush();
    };
  }, [track, flush]);

  return { track, trackCTA, getUTMParams, getSessionId, getVariantFromCookie };
}
