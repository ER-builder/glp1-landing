import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { eventsSchema } from "@/lib/schemas";
import { isRateLimited } from "@/lib/rate-limit";

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests" },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const result = eventsSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid event data" },
        { status: 400 }
      );
    }

    const { events } = result.data;
    const sql = getDb();

    // Insert all events in a single query
    for (const event of events) {
      await sql`
        INSERT INTO events (session_id, variant, event_type, event_data)
        VALUES (${event.session_id}, ${event.variant}, ${event.event_type}, ${JSON.stringify(event.event_data || {})})
      `;
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Events insert error:", err);
    return NextResponse.json(
      { error: "Failed to record events" },
      { status: 500 }
    );
  }
}
