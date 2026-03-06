import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-server";
import { eventsSchema } from "@/lib/schemas";

export async function POST(request: Request) {
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

    const { error } = await getSupabaseAdmin().from("events").insert(
      events.map((event) => ({
        session_id: event.session_id,
        variant: event.variant,
        event_type: event.event_type,
        event_data: event.event_data || {},
      }))
    );

    if (error) {
      console.error("Events insert error:", error);
      return NextResponse.json(
        { error: "Failed to record events" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
