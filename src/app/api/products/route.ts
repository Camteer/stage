import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

interface IFilters {
  price: {
    to: number;
    from: number;
  };
  sizes: number[];
  season: number[];
  colors: number[];
}

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams;
  const sizes = query.has("sizes")
    ? query
        .get("sizes")
        ?.split(",")
        .map((id) => Number(id))
    : [];
  const season = query.has("season")
    ? query
        .get("season")
        ?.split(",")
        .map((id) => Number(id))
    : [];
  const colors = query.has("colors")
    ? query
        .get("colors")
        ?.split(",")
        .map((id) => Number(id))
    : [];
  const type = query.has("type")
    ? query
        .get("type")
        ?.split(",")
        .map((id) => Number(id))
    : [];
  const brand = query.has("brand")
    ? query
        .get("brand")
        ?.split(",")
        .map((id) => Number(id))
    : [];
  const sale = query.has("sale")
    ? query
        .get("sale")
        ?.split(",")
        .map((id) => (id ? true : false))[0]
    : false;
  const page = query.has("page")
    ? query
        .get("page")
        ?.split(",")
        .map((page) => Number(page))[0]
    : 1;
  let take = query.has("take")
    ? query
        .get("take")
        ?.split(",")
        .map((take) => Number(take))[0]
    : 18;

  if (take)
  if (take > 36 || take < 0) {
    take = 18
  }

  const priceTo = query.has("priceTo")
    ? query
        .get("priceTo")
        ?.split(",")
        .map((price) => Number(price))[0]
    : undefined;
  const priceFrom = query.has("priceFrom")
    ? query
        .get("priceFrom")
        ?.split(",")
        .map((price) => Number(price))[0]
    : undefined;

  const price = {
    gte: 100,
    lte: 10000,
  };

  const seasonFilters = season ? season.map((n) => n) : [];
  const brandFilters = brand ? brand.map((n) => n) : [];

  const sizeFilters = sizes ? sizes.map((n) => ({ id: n })) : [];
  const colorFilters = colors ? colors.map((n) => ({ id: n })) : [];
  const typeFilters = type ? type.map((n) => ({ id: n })) : [];

  if (priceTo && priceFrom) {
    price.gte = priceFrom;
    price.lte = priceTo;
  }

  const product = await prisma.product.findMany({
    where: {
      sale: sale,
      price,
      ...(seasonFilters.length > 0 && {
        seasonId: { in: seasonFilters },
      }),
      ...(brandFilters.length > 0 && {
        brandId: { in: brandFilters },
      }),
      ...(sizeFilters.length > 0 && {
        size: {
          some: {
            OR: sizeFilters,
          },
        },
      }),
      ...(colorFilters.length > 0 && {
        color: {
          some: {
            OR: colorFilters,
          },
        },
      }),
      ...(typeFilters.length > 0 && {
        type: {
          some: {
            OR: typeFilters,
          },
        },
      }),
    },
    include: {
      season: { select: { id: true, name: true } },
      size: { select: { id: true, name: true } },
      brand: { select: { id: true, name: true } },
      type: { select: { id: true, name: true } },
      category: { select: { id: true, name: true } },
      color: { select: { id: true, name: true } },
      
    },
    take: take,
    skip: page && take ? (page - 1) * take : 0,
    
    
  });
  
  const count = await prisma.product.count({
    where: {
      sale: sale,
      price,
      ...(seasonFilters.length > 0 && {
        seasonId: { in: seasonFilters },
      }),
      ...(brandFilters.length > 0 && {
        brandId: { in: brandFilters },
      }),
      ...(sizeFilters.length > 0 && {
        size: {
          some: {
            OR: sizeFilters,
          },
        },
      }),
      ...(colorFilters.length > 0 && {
        color: {
          some: {
            OR: colorFilters,
          },
        },
      }),
      ...(typeFilters.length > 0 && {
        type: {
          some: {
            OR: typeFilters,
          },
        },
      }),
    },
   
    
  });

  return NextResponse.json({product, count});
}
