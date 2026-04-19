import dbConnect from "@/lib/dbConnect";
import AdminModel, { Admin } from "@/models/AdminModel";
import { AdminLoginSchema } from "@/schema/AdminSchema";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createToken } from "@/helper/createToken";

export async function POST(req: NextRequest) {
  // Parse body
  const body = await req.json();

  // Validate body
  const result = AdminLoginSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        message: result.error.issues[0].message,
      },
      { status: 400 },
    );
  }

  try {
    // DB connection
    await dbConnect();

    // Checking Admin
    const admin: Admin | null = await AdminModel.findOne({
      $or: [{ username: body.user }, { email: body.user }],
    });

    if (!admin) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid username or password",
        },
        { status: 401 },
      );
    }

    // Match password
    if (admin) {
      const comparedPassword = await bcrypt.compare(
        body.password,
        admin.password,
      );
      if (!comparedPassword) {
        return NextResponse.json(
          {
            success: false,
            message: "Invalid username or password",
          },
          { status: 401 },
        );
      }
    }

    // Response
    const response = NextResponse.json({
      success: true,
      message: "Logged in successfully.",
    },{status:201});

    // Create access token
    const accessToken: string = createToken(
      { userId: admin._id, role: admin.role },
      process.env.ACCESS_TOKEN_KEY as string,
      { expiresIn: "1d" },
    );

    response.cookies.set("accessToken",accessToken,{
      httpOnly:true,
      secure: process.env.NODE_ENV === "production",
      sameSite:"lax",
      path:"/",
      maxAge:60*60*24
    });

    return response;

  } catch (error) {
    console.log("Failed to login", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to login.",
      },
      { status: 500 },
    );
  }
}
