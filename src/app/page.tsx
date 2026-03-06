import { redirect } from "next/navigation";

export default function Home() {
  // Middleware handles the A/B rewrite at the edge, so this page should rarely render.
  // If it does (e.g., during build), redirect to variant A as fallback.
  redirect("/a");
}
