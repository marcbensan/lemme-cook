import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const token = request.cookies.get("accessToken");
  const isAuthenticated = !!token;

  console.log(isAuthenticated);

  if (!isAuthenticated && !url.pathname.startsWith("/signin")) {
    url.pathname = "/signin";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|signin|signup).*)",
  ],
};
