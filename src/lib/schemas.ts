import { z } from "zod";

export const waitlistSchema = z.object({
  email: z.string().email("Invalid email address"),
  variant: z.enum(["a", "b"]),
  source: z.string().optional(),
  medium: z.string().optional(),
  campaign: z.string().optional(),
  referrer: z.string().optional(),
});

export const eventSchema = z.object({
  session_id: z.string(),
  variant: z.enum(["a", "b"]),
  event_type: z.enum([
    "page_view",
    "scroll_25",
    "scroll_50",
    "scroll_75",
    "scroll_100",
    "cta_click",
    "time_on_page",
    "email_submit",
  ]),
  event_data: z.record(z.string(), z.unknown()).optional(),
});

export const eventsSchema = z.object({
  events: z.array(eventSchema).min(1).max(50),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
export type EventInput = z.infer<typeof eventSchema>;
