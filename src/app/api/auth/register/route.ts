import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";
import { hashSync } from "bcrypt";
import { sendEmail } from "@/lib/send-email";
import { VerificationUserTemplate } from "@/components/send-email/verification";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { email: string; fullName: string, password: string };
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user) {
      if (!user.verified) {
        throw new Error('Почта не подтверждена');
      }

      throw new Error('Пользователь уже существует');
    }

    const createdUser = await prisma.user.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        password: hashSync(body.password, 10),
      },
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.verificationCode.create({
      data: {
        code,
        userId: createdUser.id,
      },
    });

    await sendEmail(
      createdUser.email,
      'Next Pizza / 📝 Подтверждение регистрации',
      VerificationUserTemplate({
        code,
      }),
    );
    return NextResponse.json([])
  } catch (err) {
    console.log('Error [CREATE_USER]', err);
    throw err;
  }
}