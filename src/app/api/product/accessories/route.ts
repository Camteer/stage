import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../../prisma/prisma-client';

export async function GET(req: NextRequest) {
  

  const product = await prisma.product.findMany({
    where: {
      categoryId: 3
    }
  });

  return NextResponse.json(product);
}

