import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-server";
import { waitlistSchema } from "@/lib/schemas";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = waitlistSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0].message },
        { status: 400 }
      );
    }

    const { email, variant, source, medium, campaign, referrer } = result.data;

    const { error } = await getSupabaseAdmin().from("waitlist").insert({
      email,
      variant,
      source: source || null,
      medium: medium || null,
      campaign: campaign || null,
      referrer: referrer || null,
    });

    if (error) {
      // Handle duplicate email
      if (error.code === "23505") {
        return NextResponse.json(
          { message: "You're already on the waitlist!" },
          { status: 200 }
        );
      }
      console.error("Waitlist insert error:", error);
      return NextResponse.json(
        { error: "Something went wrong" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "You're on the list!" },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
