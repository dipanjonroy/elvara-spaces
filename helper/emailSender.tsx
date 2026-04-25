import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const emailSender = async (to: string, subject: string, html: string) => {
  try {
    const emailOptions = {
      from: process.env.SMTP_USERNAME as string,
      to,
      subject,
      html,
    };

    await transporter.sendMail(emailOptions);
    return {
      success: true,
      messaage: "Verification email has been sent.",
    };
  } catch {
    return {
      success: false,
      message: "Failed to send email.",
    };
  }
};
