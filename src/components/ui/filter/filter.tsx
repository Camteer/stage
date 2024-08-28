"use client";

import { cn } from "@/lib/utils";
import React, { FC, useEffect, useState } from "react";
import style from "./filter.module.scss";

import { CheckboxFiltersGroup } from "../chekbox-group";
import { Button } from "../button";
import { RangeSlider } from "../range-slider";
import { Title } from "@/components/title";

import { useSearchParams } from "next/navigation";

import { useDispatch, useSelector } from "@/store/store";
import {
  fetchFilters,
  getFilters,
  getIsLoading,
} from "@/store/slices/filtersSlice";

export const FilterUI: FC<{
  type: "sneakers" | "accessories" | "clothes";
}> = ({ type }) => {
  const dispatch = useDispatch();
  const { seasons, sizes, brands, types, colors } = useSelector(getFilters);
  
  const loading = useSelector(getIsLoading);
  useEffect(() => {
    dispatch(fetchFilters());
  }, []);

  const searchParams = useSearchParams();

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
          <CheckboxFiltersGroup
            title="Сезон"
            name="sizes"
            loading={loading}
            className={cn("", style.categories)}
            onClickCheckbox={() => {
              console.log("sizes");
            }}
            items={seasons}
          />
        </div>

        <div>
          <CheckboxFiltersGroup
            title="Цвет"
            loading={loading}
            name="colors"
            className={cn("", style.categories)}
            onClickCheckbox={() => {
              console.log("colors");
            }}
            items={colors}
          />
        </div>

        {type == "sneakers" ? (
          <div>
            <CheckboxFiltersGroup
              title="Категории"
              loading={loading}
              name="categories"
              className={cn("", style.categories)}
              onClickCheckbox={() => {
                console.log("categories");
              }}
              items={types}
            />
          </div>
        ) : (
          ""
        )}
        {type == "accessories" || type == "sneakers" ? (
          <div>
            <CheckboxFiltersGroup
              title="Бренд"
              loading={loading}
              name="brand"
              className={cn("", style.categories)}
              onClickCheckbox={() => {
                console.log("brand");
              }}
              items={brands}
            />
          </div>
        ) : (
          ""
        )}
        <div className="flex">
          <CheckboxFiltersGroup
            title="Sale"
            name="sale"
            className={cn("mt-0", style.categories)}
            onClickCheckbox={() => {
              console.log("sale");
            }}
            items={[{ id: 1, name: "" }]}
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
        <Button className="h-[56px] rounded-[50px] bg-[red] text-white text-[18px] font-bold landing-[21px]">
          Применить
        </Button>
        <Button
          disabled={searchParams.size ? false : true}
          className="h-[56px] rounded-[50px] bg-[red] text-white text-[18px] font-bold landing-[21px] disabled:bg-[#B3C0D2]"
        >
          Отменить
        </Button>
      </div>
    </>
  );
};
