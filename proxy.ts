import { NextResponse, type NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function proxy(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;
  const pathname = req.nextUrl.pathname;

  let isValidToken = false;

  //Verify Token
  if (token) {
    try {
      jwt.verify(token, process.env.ACCESS_TOKEN_KEY as string);
      isValidToken = true;
    } catch {
      isValidToken = false;
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Protect dashboard routes
  if (pathname.startsWith("/dashboard")) {
    if (!isValidToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Prevent logged-in users from accessing auth pages
  if (
    (pathname === "/login" ||
      pathname === "/forget-password" ||
      pathname.startsWith("/reset-password")) &&
    isValidToken
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/login",
    "/forget-password",
    "/reset-password",
    "/reset-password/:path*",
  ],
};
