import { createToken } from "@/helper/createToken";
import { emailSender } from "@/helper/emailSender";
import dbConnect from "@/lib/dbConnect";
import AdminModel from "@/models/AdminModel";
import { EmailSchema } from "@/schema/AuthSchema";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const email = searchParams.get("email");

  // Validate email
  const result = EmailSchema.safeParse(email);
  if (!result.success) {
    return NextResponse.json({
      success: false,
      message: result.error.issues[0].message,
    });
  }

  try {
    await dbConnect();

    // Checking existing user
    const user = await AdminModel.findOne({ email });
    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }

    const verificationToken = createToken(
      { userId: user.email },
      process.env.VERIFY_EMAIL_KEY as string,
      { expiresIn: "30m" },
    );
    const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/verify-email?token=${verificationToken}`;

    const sendEmailResult = await emailSender(
      "dipanjon95@gmail.com",
      "Verification",
      verificationLink,
    );
    if (!sendEmailResult.success) {
      return NextResponse.json(sendEmailResult, { status: 500 });
    }

    return NextResponse.json(sendEmailResult, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
