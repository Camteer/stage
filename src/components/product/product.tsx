"use client";
import { FC, useEffect } from "react";
import { ProductUI } from "../ui/product";
import { Container } from "../container";
import { useDispatch, useSelector } from "@/store/store";
import {
  fetchProductId,
  getIsLoading,
  getProductId,
  getProducts,
} from "@/store/slices/productSlice";
import { TProductUIProps } from "../ui/product/type";
import { useParams } from "next/navigation";

export const Product: FC = () => {
  
  const product = useSelector(getProductId)
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductId(Number(id)));
  }, []);
  console.log(product)
  const productData: TProductUIProps = {
    title: "Кросовки Nike Air Presto",
    article: 19666,

    images: [
      "https://dummyimage.com/600x400/cc0ecc/00ff95",
      "https://dummyimage.com/600x400/cc0ecc/00ff95",
      "https://dummyimage.com/600x400/cc0ecc/00ff95",
      "https://dummyimage.com/600x400/cc0ecc/00ff95",
    ],
    prise: 3490,
    sizes: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
    categories: "Спортивный стиль",
    model: "Air Presto",
    season: "Лето",
    color: "Разноцветный",
    description: `Кроссовки Nike Air Presto – обувь, которая создана с учетом максимальной вентиляции стопы и комфорта при ношении и занятиях спортом. Верхняя часть кроссовок изготовлена из материала, который обеспечивает идеальный микроклимат внутри обуви и комфорт при ношении. Подошва эластичная и в пяточной части имеет вставки «Air Sole» для лучшей амортизации. Глубокий рельеф протектора обеспечивает мягкость хода и удобство при ношении. Для фиксации стопы предусмотрена шнуровка через специальный каркас, который при затягивании образует жесткую и эластичную конструкцию.
- Комфортный микроклимат
- Легкий вес
- Амортизация стопы`,
    about: `Кроссовки Nike Air Presto – обувь, которая создана с учетом максимальной вентиляции стопы и комфорта при ношении и занятиях спортом. Верхняя часть кроссовок изготовлена из материала, который обеспечивает идеальный микроклимат внутри обуви и комфорт при ношении. Подошва эластичная и в пяточной части имеет вставки «Air Sole» для лучшей амортизации. Глубокий рельеф протектора обеспечивает мягкость хода и удобство при ношении. Для фиксации стопы предусмотрена шнуровка через специальный каркас, который при затягивании образует жесткую и эластичную конструкцию.
- Комфортный микроклимат
- Легкий вес
- Амортизация стопы`,
  };
  const sizes: number[] = []
  product.size.forEach(item => {
    sizes.push(item.name)
  })

  return (
    <>
      <Container className="">
        <ProductUI
          title={product.name}
          article={12345}
          images={product.image}
          prise={product.price}
          sizes={sizes}
          categories={product.type[0]?.name}
          model={product.brand.name}
          season={product.season.name}
          color={product.color[0]?.name}
          description={product.description}
          about={product.description}
        ></ProductUI>
      </Container>
    </>
  );
};
