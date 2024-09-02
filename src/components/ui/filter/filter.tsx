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
import { useFilters } from "@/hooks/use-filters";
import { useQuery, useQueryFilters } from "@/hooks/use-query";
import { fetchProducts } from "@/store/slices/productSlice";


interface IPriceProps {
  priceFrom: number;
  priceTo: number;
}

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

  const filters = useFilters();

  useQueryFilters(filters);

  const updatePrices = (prices: number[]) => {
    filters.setPrices("priceFrom", prices[0]);
    filters.setPrices("priceTo", prices[1]);
  };

  const handleFilters = () => {
    dispatch(fetchProducts(useQuery(filters)));
  };

  return (
    <>
      <div className={cn("flex flex-col gap-16 w-[210px]")}>
        <div className={cn()}>
          <CheckboxFiltersGroup
            title="Размеры"
            name="sizes"
            loading={loading}
            className={cn("", style.categories)}
            onClickCheckbox={filters.setSizes}
            selected={filters.sizes}
            items={sizes}
          />
        </div>
        <div className={cn()}>
          <CheckboxFiltersGroup
            title="Сезон"
            name="season"
            loading={loading}
            className={cn("", style.categories)}
            onClickCheckbox={filters.setSeason}
            selected={filters.season}
            items={seasons}
          />
        </div>

        <div>
          <CheckboxFiltersGroup
            title="Цвет"
            loading={loading}
            name="colors"
            className={cn("", style.categories)}
            onClickCheckbox={filters.setColors}
            selected={filters.colors}
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
              onClickCheckbox={filters.setType}
              selected={filters.type}
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
              onClickCheckbox={filters.setBrand}
              selected={filters.brands}
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
            onClickCheckbox={filters.setSale}
            selected={filters.sale}
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
              value={[
                filters.prices.priceFrom || 100,
                filters.prices.priceTo || 10000,
              ]}
              onValueChange={updatePrices}
            />
          </div>
        </div>
        <Button
          className="h-[56px] rounded-[50px] bg-[red] text-white text-[18px] font-bold landing-[21px]"
          onClick={handleFilters}
        >
          Применить
        </Button>
        <Button
          disabled={searchParams.size ? false : true}
          onClick={() => {
            filters.clearFilters();
          }}
          className="h-[56px] rounded-[50px] bg-[red] text-white text-[18px] font-bold landing-[21px] disabled:bg-[#B3C0D2]"
        >
          Отменить
        </Button>
      </div>
    </>
  );
};
