import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";


export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const product = await prisma.product.findMany({
    where: { id: Number(context.params.id) },
    include: {
      season: { select: { id: true, name: true } },
      size: { select: { id: true, name: true } },
      brand: { select: { id: true, name: true } },
      type: { select: { id: true, name: true } },
      category: { select: { id: true, name: true } },
      color: { select: { id: true, name: true } },
    },
  });

  return NextResponse.json(product[0]);
}
