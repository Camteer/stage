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
import { redirect, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "@/store/store";
import { fetchBrands, getBrands } from "@/store/slices/filtersSlice";

export function Brands() {
  const brands: string[] = [];
  const brandsData = useSelector(getBrands)
  brandsData.forEach((item => {
    brands.push(item.name)
  }))
  console.log(brands)
  const dispatch = useDispatch()
  React.useEffect(()=> {
    dispatch(fetchBrands())
  }, [])
  const router = useRouter();
  return (
    <Container className="max-w-[1320px] flex-col">
      <Title title="Бренды" weight="900" className="pl-[105px] mb-11" />
      <Carousel className="w-full pr-[120px] pl-[120px] mb-5">
        <CarouselContent className="max-w-[1110px] px-3 ">
          {brands.map((type, index) => (
            <CarouselItem
              key={index}
              onClick={() => {
                router.replace(`/catalog/sneakers?brands=${index + 1}`);
              }}
              className="pl-1 md:basis-[20%] lg:basis-[20%] cursor-pointer"
            >
              <BrandsSvgUI type={type}></BrandsSvgUI>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
}
