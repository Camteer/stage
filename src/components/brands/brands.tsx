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

export function Brands() {
  const brands = [
    "Porsche",
    "Newbalance",
    "Nike",
    "Porsche",
    "Newbalance",
    "Nike",
    "Porsche",
    "Newbalance",
    "Nike",
    "Vans",
    
  ];

  return (
    <Container className="max-w-[1320px] flex-col">
      <Title title="Бренды" weight="900" className="pl-[105px] mb-11" />
      <Carousel className="w-full pr-[120px] pl-[120px] mb-5">
        <CarouselContent className="max-w-[1110px]  ">
          {brands.map((type, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-[20%] lg:basis-[20%]"
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
