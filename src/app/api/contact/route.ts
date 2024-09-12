import { PayOrderTemplate } from "@/components/send-email/pay-order";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
const user = process.env.EMAIL_KEY;
const pass = process.env.PASSWORD_EMAIL;


export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    console.log(user)
    const transporter = nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: user,
      to: email,
      subject: "New message from your-website",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    return new NextResponse("Failed to send message.", { status: 500 })
  }
}