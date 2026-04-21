import { NextResponse, type NextRequest } from "next/server";

export function isLoggedOut(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;

  if (token) {
    return NextResponse.json({
      success: false,
      message: "Already logged in.",
    });
  }

  return null;
}
