import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";
import { getUserSession } from "@/lib/get-user-session";

export async function GET(req: NextRequest) {
  const userSession = await getUserSession();
  try {
    
    if (!userSession) {
      return NextResponse.json(
        { message: "Не удалось получить пользователя" },
        { status: 500 }
      );
    }
    const userOrders = await prisma.user.findFirst({
      where: {
        id: userSession?.id,
      },
      include: {
        orders: true,
      },
    });

    return NextResponse.json({ orders: userOrders?.orders });
  } catch (error) {
    console.log("[CART_GET] Server error", error);
    return NextResponse.json(
      { message: "Не удалось получить ордеры" },
      { status: 500 }
    );
  }
}
