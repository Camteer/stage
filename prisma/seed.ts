import {
  brands,
  categories,
  colors,
  products,
  seasons,
  sizes,
  types,
} from "./const";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

async function createRandomProducts(
  types: any[],
  colors: any[],
  sizes: any[],
  count: number
) {
  const products: any[] = [];

  for (let i = 0; i < count; i++) {
    products.push({
      ...{
        name: "БОТИНКИ TIMBERLAND PREMIUM",
        description:
          "Ботинки Timberland Premium – это классическая обувь, которая идеально подходит для холодной погоды. Изготовлены из высококачественной натуральной кожи с водоотталкивающей обработкой. Прочная подошва обеспечивает отличное сцепление с любой поверхностью.",
        price: Math.floor(Math.random() * 10000),
        brandId: 3,
        seasonId: 2,
        categoryId: 1,
        image: [
          "https://dummyimage.com/600x400/cc0ecc/00ff95",
          "https://dummyimage.com/600x400/cc0ecc/00ff95",
        ],
      },
      id: i + 4,
    });

    const randomTypesStartIndex = Math.floor(
      Math.random() * (types.length - 2)
    );
    const randomColorsStartIndex = Math.floor(
      Math.random() * (colors.length - 2)
    );
    const randomSizesStartIndex = Math.floor(
      Math.random() * (sizes.length - 4)
    );

    await prisma.product.create({
      data: {
        ...products[i],
        type: {
          connect: types.slice(
            randomTypesStartIndex,
            randomTypesStartIndex + 2
          ),
        },
        color: {
          connect: colors.slice(
            randomColorsStartIndex,
            randomColorsStartIndex + 2
          ),
        },
        size: {
          connect: sizes.slice(
            randomSizesStartIndex,
            randomSizesStartIndex + 4
          ),
        },
      },
    });
  }
}

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User Test",
        email: "user@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin Admin",
        email: "admin@test.ru",
        password: hashSync("111111", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });
  await prisma.brand.createMany({
    data: brands,
  });

  await prisma.type.createMany({
    data: types,
  });
  await prisma.size.createMany({
    data: sizes,
  });
  await prisma.season.createMany({
    data: seasons,
  });
  await prisma.color.createMany({
    data: colors,
  });

  await prisma.product.create({
    data: {
      ...products[0],
      type: { connect: types.slice(0, 3) },
      color: { connect: colors.slice(2, 6) },
      size: { connect: sizes.slice(2, 6) },
    },
  });
  await prisma.product.create({
    data: {
      ...products[1],
      type: { connect: types.slice(1, 6) },
      color: { connect: colors.slice(3) },
      size: { connect: sizes.slice(5, 6) },
    },
  });
  await prisma.product.create({
    data: {
      ...products[2],
      type: { connect: types.slice(1, 3) },
      color: { connect: colors.slice(0, 2) },
      size: { connect: sizes.slice(5, 9) },
    },
  });
  createRandomProducts(types, colors, sizes, 360);
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Brand" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Type" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Size" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Season" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Color" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.log(e);
  }
}

main().then(async () => {
  await prisma.$disconnect;
});
