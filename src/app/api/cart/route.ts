import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { updateCartTotalAmount } from "../../../lib/update-cart-total-amount";
import { prisma } from "../../../../prisma/prisma-client";
import { CreateCartItemValues } from "@/lib/types";
import { getUserSession } from "@/lib/get-user-session";

export async function GET(req: NextRequest) {
  try {
    const userSession = await getUserSession();
    const userToken = await prisma.user.findFirst({
      where: {
        id: userSession?.id,
      },
      include: {
        cart: {},
      },
    });

    let token = req.cookies.get("cartToken")?.value || userToken?.cart?.token;
    if (userToken?.cart?.token)
      if (req.cookies.get("cartToken")?.value != userToken?.cart?.token) {
        token = userToken?.cart?.token;
      }
    if (!token) {
      return NextResponse.json({ totalAmount: 0, items: [] });
    }

    const userCart = await prisma.cart.findFirst({
      where: {
        OR: [
          {
            token,
          },
        ],
      },
      include: {
        items: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            productItem: true,
          },
        },
      },
    });
    const resp = NextResponse.json(userCart);
    resp.cookies.set("cartToken", token);
    return resp;
  } catch (error) {
    console.log("[CART_GET] Server error", error);
    return NextResponse.json(
      { message: "Не удалось получить корзину" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest<CreateCartItemValues>) {
  try {
    const userSession = await getUserSession();
    const userToken = await prisma.user.findFirst({
      where: {
        id: userSession?.id,
      },
      include: {
        cart: {},
      },
    });

    let token = req.cookies.get("cartToken")?.value || userToken?.cart?.token;

    if (userToken?.cart?.token)
      if (req.cookies.get("cartToken")?.value != userToken?.cart?.token) {
        token = userToken?.cart?.token;
      }

    if (!token) {
      token = crypto.randomUUID();
    }

    let userCart = await prisma.cart.findFirst({
      where: {
        token,
      },
    });

    if (!userCart) {
      userCart = await prisma.cart.create({
        data: {
          token,
        },
      });
    }

    const data = await req.json();

    const findCartItem = await prisma.cartItem.findFirst({
      where: {
        cartId: userCart.id,
        productItemId: data.productItemId,
        size: data.size,
      },
    });

    // Если товар был найден, делаем +1
    if (findCartItem) {
      await prisma.cartItem.update({
        where: {
          id: findCartItem.id,
        },
        data: {
          quantity: findCartItem.quantity + 1,
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: userCart.id,
          productItemId: data.productItemId,
          quantity: 1,
          size: data.size,
        },
      });
    }

    const updatedUserCart = await updateCartTotalAmount(token);

    const resp = NextResponse.json(updatedUserCart);
    resp.cookies.set("cartToken", token);
    return resp;
  } catch (error) {
    console.log("[CART_POST] Server error", error);
    return NextResponse.json(
      { message: "Не удалось создать корзину" },
      { status: 500 }
    );
  }
}
