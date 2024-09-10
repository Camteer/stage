import { CartItemDTO, PaymentCallbackData } from "@/lib/types";
import { OrderStatus } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";
import { sendEmail } from "@/lib/send-email";
import { OrderSuccessTemplate } from "@/components/send-email/order-successed";


export async function POST(req: NextRequest<PaymentCallbackData>) {
  try {
    const body = (await req.json())
    console.log(body)

    const order = await prisma.order.findFirst({
      where: {
        id: Number(body.object.metadata.order_id),
      },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" });
    }

    const isSucceeded = body.object.status === "succeeded";

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        status: isSucceeded ? OrderStatus.SUCCEEDED : OrderStatus.CANCELLED,
      },
    });

    const items = JSON.parse(order?.items as string) as CartItemDTO[];

    if (isSucceeded) {
      await sendEmail(
        order.email,
        "Stage/ Ваш заказ успешно оформлен 🎉",
        OrderSuccessTemplate({ orderId: order.id, items })
      );
    } else {
      // Письмо о неуспешной оплате
    }
  } catch (error) {
    console.log("[Checkout Callback] Error:", error);
    return NextResponse.json({ error: "Server error" });
  } 
}
