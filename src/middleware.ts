import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log("-----------------middleware running");

  return NextResponse.next();
}

export const config = {
  matcher: ["/test-middleware/:path*"],
};
