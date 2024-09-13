"use server";

import { CheckoutFormValues } from "@/lib/shema-form";
import { prisma } from "../../prisma/prisma-client";
import { cookies } from "next/headers";
import { OrderStatus, Prisma } from "@prisma/client";
import { sendEmail } from "@/lib/send-email";
import { PayOrderTemplate } from "@/components/send-email/pay-order";
import { createPayment } from "@/lib/create-payment";
import { hashSync } from "bcrypt";
import { VerificationUserTemplate } from "@/components/send-email/verification";
import { getUserSession } from "@/lib/get-user-session";
import { SendMailNode } from "@/lib/send-email-nodemail";

export async function createOrder(data: CheckoutFormValues) {
  try {
    const cookieStore = cookies();
    const cartToken = cookieStore.get("cartToken")?.value;

    if (!cartToken) {
      throw new Error("Cart token not found");
    }

    /* Находим корзину по токену */
    const userCart = await prisma.cart.findFirst({
      include: {
        user: true,
        items: {
          include: {
            productItem: true,
          },
        },
      },
      where: {
        token: cartToken,
      },
    });

    if (!userCart) {
      throw new Error("Cart not found");
    }

    if (userCart?.totalAmount === 0) {
      throw new Error("Cart is empty");
    }

    const order = await prisma.order.create({
      data: {
        token: cartToken,
        fullName: data.lastName + " " + data.firstName + " " + data.surname,
        email: data.email,
        phone: data.phone,
        address: data.locality + " " + data.index,
        comment: data.comment,
        totalAmount: userCart.totalAmount,
        status: OrderStatus.PENDING,
        items: JSON.stringify(userCart.items),
      },
    });
    const paymentData = await createPayment({
      amount: order.totalAmount,
      orderId: order.id,
      description: "Оплата заказа #" + order.id,
    });

    if (!paymentData) {
      throw new Error("Payment data not found");
    }

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        paymentId: paymentData.id,
      },
    });

    const paymentUrl = paymentData.confirmation.confirmation_url;

    await prisma.cart.update({
      where: {
        id: userCart.id,
      },
      data: {
        totalAmount: 0,
      },
    });

    await prisma.cartItem.deleteMany({
      where: {
        cartId: userCart.id,
      },
    });

    // await sendEmail(
    //   data.email,
    //   "Stage / Оплатите заказ #" + order.id,
    //   PayOrderTemplate({
    //     orderId: order.id,
    //     totalAmount: order.totalAmount,
    //     paymentUrl: "https://resend.com/docs/send-with-nextjs",
    //   })
    // );

    await SendMailNode(
      data.email,
      PayOrderTemplate(
        order.id,
        order.totalAmount,
        "https://resend.com/docs/send-with-nextjs"
      ),
      data.comment,
      data.lastName
    );
    const userSession = await getUserSession();

    if (userSession) {
      await prisma.user.update({
        where: {
          id: userSession.id,
        },
        data: {
          orders: {
            connect: { id: order.id },
          },
        },
      });
    }

    return paymentUrl;
  } catch (err) {
    console.log("[CreateOrder] Server error", err);
  }
}

export async function updateUserInfo(body: Prisma.UserUpdateInput) {
  try {
    const currentUser = await getUserSession();

    if (!currentUser) {
      throw new Error("Пользователь не найден");
    }

    const findUser = await prisma.user.findFirst({
      where: {
        id: currentUser.id,
      },
    });

    await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        fullName: body.fullName,
        email: body.email,
        password: body.password
          ? hashSync(body.password as string, 10)
          : findUser?.password,
      },
    });
  } catch (err) {
    console.log("Error [UPDATE_USER]", err);
    throw err;
  }
}

export async function registerUser(body: Prisma.UserCreateInput) {
  try {
    const cookieStore = cookies();
    let cartToken = cookieStore.get("cartToken")?.value;

    if (!cartToken) {
      cartToken = crypto.randomUUID();
    }

    let userCart = await prisma.cart.findFirst({
      where: {
        token: cartToken,
      },
    });

    if (!userCart) {
      userCart = await prisma.cart.create({
        data: {
          token: cartToken,
        },
      });
    }

    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user) {
      if (!user.verified) {
        throw new Error("Почта не подтверждена");
      }

      throw new Error("Пользователь уже существует");
    }

    const createdUser = await prisma.user.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        password: hashSync(body.password, 10),
        cart: { connect: { id: userCart.id } },
      },
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await prisma.verificationCode.create({
      data: {
        code,
        userId: createdUser.id,
      },
    });

    await SendMailNode(
      createdUser.email,
      VerificationUserTemplate(code)
    );
  } catch (err) {
    console.log("Error [CREATE_USER]", err);
    throw err;
  }
}
