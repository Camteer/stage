import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";
import { compareSync, hashSync } from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { email: string; password: string };

    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (!user) {
      throw new Error("Неверный логин");
    }
    if (!compareSync(`${body.password}`, user.password)) {
      throw new Error("Неверный логин");
    }

    return NextResponse.json(user);
  } catch (err) {
    console.log("Error [CREATE_USER]", err);
    throw err;
  }
}
