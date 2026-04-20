import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Proves middleware runs on Akash — stamps a header on /middleware-test responses.
export function middleware(request: NextRequest) {
  const res = NextResponse.next();
  if (request.nextUrl.pathname === "/middleware-test") {
    res.headers.set("X-Varity-Middleware", "ok");
  }
  res.headers.set("X-Varity-Dx-Validator", "1");
  return res;
}

export const config = {
  matcher: ["/middleware-test", "/", "/api/:path*"],
};
