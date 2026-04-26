import { createToken } from "@/helper/createToken";
import { emailSender } from "@/helper/emailSender";
import dbConnect from "@/lib/dbConnect";
import AdminModel from "@/models/AdminModel";
import { EmailSchema } from "@/schema/AuthSchema";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  // Validate email
  const result = EmailSchema.safeParse(email);
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
    await dbConnect();

    // Checking existing user
    const user = await AdminModel.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 },
      );
    }

    const verificationToken = createToken(
      { userId: user.email },
      process.env.VERIFY_EMAIL_KEY as string,
      { expiresIn: "30m" },
    );
    const verificationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${verificationToken}`;

    const html = `
<!DOCTYPE html>
<html>
<body style="margin:0; padding:0; background:#f4f4f4; font-family: Arial, sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td align="center">

      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; padding:30px; border-radius:10px;">

        <tr>
          <td align="center">
            <img src="https://your-domain.com/Elvara-logo-black.png" 
                 alt="Elvara Logo" 
                 width="120" 
                 style="margin-bottom:20px;" />
          </td>
        </tr>

        <tr>
          <td align="center">
            <h2 style="margin-bottom:10px;">Please verify your email</h2>
            <p style="color:#555;">
              You are almost ready. Verify your email to reset your password.
            </p>
          </td>
        </tr>

        <tr>
          <td align="center" style="padding:20px;">
            <a href="${verificationLink}"
               style="background:#2a2a2a; color:#faf8f5; padding:12px 20px; text-decoration:none; border-radius:5px; display:inline-block;">
               Verify Now
            </a>
          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>

</body>
</html>
`;

    const sendEmailResult = await emailSender(
      user.email,
      "Reset password email verification",
      html,
    );
    if (!sendEmailResult.success) {
      return NextResponse.json(sendEmailResult, { status: 500 });
    }

    return NextResponse.json(sendEmailResult, { status: 201 });
  } catch {
    return NextResponse.json({
      success: false,
      message: "Failed to send email",
    });
  }
}
