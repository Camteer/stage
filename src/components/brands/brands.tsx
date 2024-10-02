"use client";
import * as React from "react";

import {} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BrandsSvgUI } from "../ui/brands/brands";
import { Container } from "../container";
import { Title } from "../title";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "@/store/store";
import {
  fetchBrands,
  getBrands,
  getBrandsLoading,
} from "@/store/slices/filtersSlice";
import { useEffect } from "react";
import { Skeleton } from "../ui/skeleton";
import { cn } from "@/lib/utils";

export function Brands() {
  const brandsData = useSelector(getBrands);
  const loading = useSelector(getBrandsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBrands());
  }, []);
  const router = useRouter();
  return (
    <Container className="max-w-[1320px] flex-col">
      <Title title="Бренды" weight="900" className="pl-[105px] mb-11" />
      <Carousel className="w-full pr-[120px] pl-[120px] mb-5">
        <CarouselContent className="max-w-[1110px] px-3 ">
          {loading
            ? Array(9)
                .fill(0)
                .map((_, key) => (
                  <CarouselItem
                    key={key}
                    className="pl-1 md:basis-[20%] lg:basis-[20%] cursor-pointer"
                  >
                    <Skeleton key={key} className={cn("w-[190px] h-[190px]")}></Skeleton>
                  </CarouselItem>
                ))
            : brandsData.map((type, index) => (
                <CarouselItem
                  key={index}
                  onClick={() => {
                    router.push(`/catalog/sneakers?brands=${index + 1}`);
                  }}
                  className="pl-1 md:basis-[20%] lg:basis-[20%] cursor-pointer"
                >
                  <BrandsSvgUI type={type.name}></BrandsSvgUI>
                </CarouselItem>
              ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
}
