import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";

export async function GET(req: NextRequest) {
  console.log(req.nextUrl.searchParams);

  const product = await prisma.product.findFirst({
    take: 1,
  });

  return NextResponse.json(product);
}
