import { FC } from "react";
import { CategoriesUI } from "@ui";
import { TCategories } from "../ui/categories/type";

export const Categories: FC = () => {
  const categories: TCategories[] = ["Кросовки", "Одежда", "Аксессуары", "Блог", "Отзывы"];
  return <CategoriesUI categories={categories} />;
};
