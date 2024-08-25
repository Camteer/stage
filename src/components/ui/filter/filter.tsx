"use client";

import { Title } from "@/components/title";
import { cn } from "@/lib/utils";
import React, { FC, useEffect, useState } from "react";
import style from "./filter.module.scss";
import { CheckboxFiltersGroup } from "../chekbox-group";
import { Button } from "../button";

import { RangeSlider } from "../range-slider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const FilterUI: FC<{
  type: "sneakers" | "accessories" | "clothes";
}> = ({ type }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  // Локальное состояние фильтров
  const [filters, setFilters] = useState({
    sort_by: 'price', // значение по умолчанию
    sort_order: 'asc', // значение по умолчанию
    sizes: [], // пустой массив по умолчанию
  });

  // Обновление состояния при изменении URL параметров
  useEffect(() => {
    const sort_by = searchParams.get('sort_by') || 'price';
    const sort_order = searchParams.get('sort_order') || 'asc';
    const sizes = searchParams.getAll('sizes') ;

    setFilters({
      sort_by,
      sort_order,
      sizes,
    });
  }, [searchParams]);

  // Обработчик для изменения сортировки
  const handleSortChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sort_by: e.target.value,
    }));
  };

  // Обработчик для изменения порядка сортировки
  const handleOrderChange = (e) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sort_order: e.target.value,
    }));
  };

  // Обработчик для изменения выбора размера
  const handleSizeChange = (e) => {
    const { value, checked } = e.target;
    setFilters((prevFilters) => {
      const sizes = checked
        ? [...prevFilters.sizes, value]
        : prevFilters.sizes.filter((size) => size !== value);
      return {
        ...prevFilters,
        sizes,
      };
    });
  };

  // Применение фильтров (обновление URL)
  const applyFilters = () => {
    const query = new URLSearchParams();

    if (filters.sort_by) query.set('sort_by', filters.sort_by);
    if (filters.sort_order) query.set('sort_order', filters.sort_order);
    filters.sizes.forEach((size) => query.append('sizes', size));

    router.push(`/sort?${query.toString()}`);
  };

  // Сброс фильтров
  const resetFilters = () => {
    setFilters({
      sort_by: 'price',
      sort_order: 'asc',
      sizes: [],
    });

    // Очищаем URL параметры
    router.push(pathname);
  };


  const [range, setRange] = useState<{ from: number; to: number }>({
    from: 100,
    to: 10000,
  });

  const updatePrices = (prices: number[]) => {
    console.log(prices, 999);
    setRange({ ...range, from: Number(prices[0]) });
    setRange({ ...range, to: Number(prices[1]) });
  };

  return (
    <>
      <div className={cn("flex flex-col gap-16 w-[210px]")}>
        <div className={cn()}>
          <Title
            title={"Сезон"}
            className={cn(
              "mb-[40px] font-bold text-2xl leading-7 text-[#002C6A]"
            )}
          />
          <CheckboxFiltersGroup
            name="sizes"
            className={cn("", style.categories)}
            onClickCheckbox={() => {
              console.log("sizes");
            }}
            items={[
              { text: "ds", value: "all" },
              { text: "Зима", value: "winter" },
              { text: "Лето", value: "summer" },
            ]}
          />
        </div>
        <div>
          <Title
            title={"Цена"}
            className={cn(
              " mb-[40px]  font-bold text-2xl leading-7 text-[#002C6A]"
            )}
          />
          <div className="">
            <RangeSlider
              min={100}
              max={10000}
              step={100}
              value={[range.from, range.to]}
              onValueChange={updatePrices}
            />
          </div>
        </div>
        <div>
          <Title
            title={"Цвет"}
            className={cn(
              "mb-[40px]  font-bold text-2xl leading-7 text-[#002C6A]"
            )}
          />
        </div>
        {type == "sneakers" ? (
          <div>
            <Title
              title={"Категория"}
              className={cn(
                "mb-[40px] font-bold text-2xl leading-7 text-[#002C6A]"
              )}
            />
            <CheckboxFiltersGroup
              name="categories"
              className={cn("", style.categories)}
              onClickCheckbox={() => {
                console.log("categories");
              }}
              items={[
                { text: "Баскетhxb", value: "11" },
                { text: "Бег", value: "12" },
                { text: "Ботинки", value: "13" },
                { text: "Баскетбол", value: "14" },
                { text: "Бег", value: "15" },
                { text: "Ботинки", value: "16" },
                { text: "Баскетбол", value: "17" },
                { text: "Бег", value: "18" },
                { text: "Ботинки", value: "19" },
                { text: "Баскетбол", value: "20" },
                { text: "Бег", value: "21" },
                { text: "Ботинки", value: "22" },
              ]}
            />
          </div>
        ) : (
          ""
        )}
        {type == "accessories" || type == "sneakers" ? (
          <div>
            <Title
              title={"Бранд"}
              className={cn(
                "mb-[40px] font-bold text-2xl leading-7 text-[#002C6A]"
              )}
            />
            <CheckboxFiltersGroup
              name="brand"
              className={cn("", style.categories)}
              onClickCheckbox={() => {
                console.log("brand");
              }}
              items={[
                { text: "Баскетhxb", value: "21" },
                { text: "Бег", value: "22" },
                { text: "Ботинки", value: "23" },
                { text: "Баскетбол", value: "24" },
                { text: "Бег", value: "25" },
                { text: "Ботинки", value: "26" },
                { text: "Баскетбол", value: "37" },
                { text: "Бег", value: "28" },
                { text: "Ботинки", value: "29" },
                { text: "Баскетбол", value: "210" },
                { text: "Бег", value: "211" },
                { text: "Ботинки", value: "212" },
              ]}
            />
          </div>
        ) : (
          ""
        )}
        <div className="flex">
          <CheckboxFiltersGroup
            name="sale"
            className={cn("mt-0", style.categories)}
            onClickCheckbox={() => {
              console.log("sale");
            }}
            items={[{ text: "", value: "sale" }]}
          />
          <Title
            title={"Sale"}
            className={cn("font-bold pt-1 text-2xl leading-7 text-[#002C6A]")}
          />
        </div>
        <Button className="h-[56px] rounded-[50px] bg-[red] text-white text-[18px] font-bold landing-[21px]">
          Применить
        </Button>
        <Button
          disabled={searchParams.size ? false : true}
          onClick={resetFilters}
          className="h-[56px] rounded-[50px] bg-[red] text-white text-[18px] font-bold landing-[21px] disabled:bg-[#B3C0D2]"
        >
          Отменить
        </Button>
      </div>
    </>
  );
};
