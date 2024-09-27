import { useSearchParams } from "next/navigation";
import { useSet } from "react-use";
import React, { useCallback, useMemo } from "react";

interface PriceProps {
  priceFrom?: number;
  priceTo?: number;

}

interface TakeProps {
  take?: number;
  page?:number;
}

interface QueryFilters extends PriceProps, TakeProps {
  sizes: string;
  season: string;
  colors: string;
  type: string;
  brands: string;
  sale: string;
}

export interface Filters {
  sizes: Set<string>;
  season: Set<string>;
  colors: Set<string>;
  type: Set<string>;
  brands: Set<string>;
  sale: Set<string>;
  take: TakeProps;
  prices: PriceProps;
}

export interface ReturnProps extends Filters {
  setSizes: (value: string) => void;
  setSeason: (value: string) => void;
  setColors: (value: string) => void;
  setType: (value: string) => void;
  setBrand: (value: string) => void;
  setSale: (value: string) => void;
  clearFilters: () => void;
  setTake: (name: keyof TakeProps, value: number) => void;
  setPrices: (name: keyof PriceProps, value: number) => void;
}

export const useFilters = (): ReturnProps => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;

  const [sizes, { toggle: toggleSizes, clear: clearSizes }] = useSet(
    new Set<string>(
      searchParams.has("sizes") ? searchParams.get("sizes")?.split(",") : []
    )
  );

  const [season, { toggle: toggleSeason, clear: clearSeason }] = useSet(
    new Set<string>(
      searchParams.has("season") ? searchParams.get("season")?.split(",") : []
    )
  );

  const [colors, { toggle: toggleColors, clear: clearColors }] = useSet(
    new Set<string>(
      searchParams.has("colors") ? searchParams.get("colors")?.split(",") : []
    )
  );
  const [type, { toggle: toggleType, clear: clearType }] = useSet(
    new Set<string>(
      searchParams.has("type") ? searchParams.get("type")?.split(",") : []
    )
  );

  const [brands, { toggle: toggleBrand, clear: clearBrand }] = useSet(
    new Set<string>(
      searchParams.has("brands") ? searchParams.get("brands")?.split(",") : []
    )
  );

  const [sale, { toggle: toggleSale, clear: clearSale }] = useSet(
    new Set<string>(
      searchParams.has("sale") ? searchParams.get("sale")?.split(",") : []
    )
  );

  const [take, setTake] = React.useState<TakeProps>({
    take: Number(searchParams.get("take")) || undefined,
    page: Number(searchParams.get("page")) || undefined,
  });

  const updateTake = useCallback(
    (name: keyof TakeProps, value: number | undefined) => {
      setTake((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const [prices, setPrices] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || undefined,
    priceTo: Number(searchParams.get("priceTo")) || undefined,
  });

  const updatePrice = useCallback(
    (name: keyof PriceProps, value: number | undefined) => {
      setPrices((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const clearFilters = () => {
    clearSale();
    clearSizes();
    clearBrand();
    clearColors();
    clearSeason();
    clearType();
    updateTake("take", undefined);
    updateTake("page", undefined);
    updatePrice("priceFrom", undefined);
    updatePrice("priceTo", undefined);
  };

  return useMemo(
    () => ({
      sizes,
      season,
      colors,
      type,
      brands,
      take,
      sale,
      prices,
      setTake: updateTake,
      setPrices: updatePrice,
      setSizes: toggleSizes,
      setBrand: toggleBrand,
      setColors: toggleColors,
      setSeason: toggleSeason,
      setSale: toggleSale,
      setType: toggleType,
      clearFilters,
    }),
    [take, sizes, season, colors, type, brands, sale, prices]
  );
};
