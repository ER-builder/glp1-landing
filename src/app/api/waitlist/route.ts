import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
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
    const sql = getDb();

    await sql`
      INSERT INTO waitlist (email, variant, source, medium, campaign, referrer)
      VALUES (${email}, ${variant}, ${source || null}, ${medium || null}, ${campaign || null}, ${referrer || null})
    `;

    return NextResponse.json(
      { message: "You're on the list!" },
      { status: 201 }
    );
  } catch (err: unknown) {
    // Handle duplicate email (Postgres unique violation)
    if (err instanceof Error && "code" in err && (err as { code: string }).code === "23505") {
      return NextResponse.json(
        { message: "You're already on the waitlist!" },
        { status: 200 }
      );
    }
    console.error("Waitlist insert error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
