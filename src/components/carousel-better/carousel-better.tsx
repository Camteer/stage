"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Title } from "../title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card } from "../card";
import { useDispatch, useSelector } from "@/store/store";
import {
  fetchProductsCarosel,
  getIsLoading,
  getProductCarousel,
} from "@/store/slices/productSlice";
import { Skeleton } from "../ui/skeleton";

export const CarouselBetter = () => {
  const cards = useSelector(getProductCarousel);
  const loading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsCarosel("take=20&page=2"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [current, setCurrent] = useState(0);

  useEffect(() => {}, [current]);

  const chunkedData = [];

  for (let i = 0; i < cards.length; i += 4) {
    chunkedData.push(cards.slice(i, i + 4));
  }

  return (
    <>
      <div
        className={cn(
          `w-[1320px] flex justify-between align-center flex-col mt-11`
        )}
      >
        <Title title="Лучшие из лучших" weight="900" className="pl-[105px]" />
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full "
        >
          <CarouselContent className=" h-[600px]">
            {loading ? (
              <CarouselItem className="flex justify-between pt-[107px] pl-[120px] pr-[100px]">
                {Array(4)
                  .fill(0)
                  .map((_, key) => (
                    <Skeleton key={key} className="rounded-[20px] w-[255px] h-[325px] relative shadow"></Skeleton>
                  ))}
              </CarouselItem>
            ) : (
              chunkedData.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-between pt-[107px] pl-[120px] pr-[100px]"
                >
                  {item.map((card, index) => (
                    <Card
                      key={index}
                      imageUrl={card.image[0]}
                      title={card.name}
                      article={12345}
                      price={card.price}
                      size={card.size}
                      StatusLike={false}
                      id={card.id}
                    />
                  ))}
                </CarouselItem>
              ))
            )}
          </CarouselContent>
          <CarouselPrevious
            onClickCapture={() => {
              setCurrent((prev) => prev - 1);
            }}
          />
          <CarouselNext
            onClickCapture={() => {
              setCurrent((prev) => prev + 1);
            }}
          />
        </Carousel>
        <div className="flex justify-center gap-[85px] ">
          {loading ? (
            <Skeleton className="rounded-[20px] w-[475px] h-[10px] relative shadow"></Skeleton>
          ) : (
            chunkedData.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-[10px] h-[10px] rounded-full ",
                  `${current == index ? "bg-[#FF1818]" : "bg-slate-500"}`
                )}
              ></div>
            ))
          )}
          {}
        </div>
      </div>
    </>
  );
};
