import { FC } from "react";
import { ProductUI } from "../ui/product";
import { Container } from "../container";

export const Product: FC = () => {
  const productData: TProductUIProps = {
    title: "Кросовки Nike Air Presto",
    article: 19666,
    
    images: ["https://dummyimage.com/600x400/cc0ecc/00ff95",
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
  return (
    <>
      <Container className="">
        <ProductUI
          title={productData.title}
          article={productData.article}
          
          images={productData.images}
          prise={productData.prise}
          sizes={productData.sizes}
          categories={productData.categories}
          model={productData.model}
          season={productData.season}
          color={productData.color}
          description={productData.description}
          about={productData.about}
        ></ProductUI>
      </Container>
    </>
  );
};
