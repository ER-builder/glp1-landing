import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COOKIE_NAME = "variant";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Only handle the root path
  if (pathname !== "/") {
    return NextResponse.next();
  }

  // Check for debug override
  const forceVariant = searchParams.get("variant");
  if (forceVariant === "a" || forceVariant === "b") {
    const url = request.nextUrl.clone();
    url.pathname = `/${forceVariant}`;
    url.searchParams.delete("variant");
    const response = NextResponse.rewrite(url);
    response.cookies.set(COOKIE_NAME, forceVariant, {
      maxAge: COOKIE_MAX_AGE,
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  // Check for existing cookie
  const existingVariant = request.cookies.get(COOKIE_NAME)?.value;
  if (existingVariant === "a" || existingVariant === "b") {
    const url = request.nextUrl.clone();
    url.pathname = `/${existingVariant}`;
    return NextResponse.rewrite(url);
  }

  // Random 50/50 assignment
  const variant = Math.random() < 0.5 ? "a" : "b";
  const url = request.nextUrl.clone();
  url.pathname = `/${variant}`;
  const response = NextResponse.rewrite(url);
  response.cookies.set(COOKIE_NAME, variant, {
    maxAge: COOKIE_MAX_AGE,
    path: "/",
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: "/",
};
