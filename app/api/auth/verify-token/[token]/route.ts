import { NextResponse, type NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/dbConnect";
import AdminModel from "@/models/AdminModel";
import { isLoggedOut } from "@/helper/isLoggedout";

interface TokenPayload extends jwt.JwtPayload {
  userId: string;
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ token: string }> },
) {
  try {
    // Checked user logged out
    await isLoggedOut(req);

    const { token } = await params;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Token is missing",
        },
        { status: 400 },
      );
    }

    // Verify token
    try {
      const decoded = jwt.verify(token, process.env.VERIFY_EMAIL_KEY as string);
      const payload = decoded as TokenPayload;
      const userId = payload.userId;

      await dbConnect();

      const isExist = await AdminModel.exists({ email: userId });
      if (!isExist) {
        return NextResponse.json(
          {
            success: false,
            message: "User not found",
          },
          { status: 404 },
        );
      }
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid token",
        },
        { status: 401 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Token verified successfully.",
    });
  } catch (error) {
    console.log("Something went wrong", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
