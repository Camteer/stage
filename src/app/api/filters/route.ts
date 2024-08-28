import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

export async function GET(req: NextRequest) {
  const sizes = await prisma.size.findMany();
  const types = await prisma.type.findMany();
  const brands = await prisma.brand.findMany();
  const seasons = await prisma.season.findMany();
  const colors = await prisma.color.findMany();

  const filters = {
    sizes: sizes,
    types: types,
    brands: brands,
    seasons: seasons,
    colors: colors,
  };

  return NextResponse.json(filters);
}
