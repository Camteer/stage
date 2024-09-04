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
  getProductCarousel,
} from "@/store/slices/productSlice";

export const CarouselBetter = () => {
  const cardData = [
    {
      _id: 67,
      id: "1",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
    {
      _id: 78,
      id: "2",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
    {
      _id: 78073,
      id: "3",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
    {
      _id: 890,
      id: "4",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
    {
      _id: 9680,
      id: "5",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
    {
      _id: 9580,
      id: "6",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
    {
      _id: 9480,
      id: "7",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
    {
      _id: 9380,
      id: "8",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
    {
      _id: 9280,
      id: "9",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
    {
      _id: 9180,
      id: "10",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y5qhi3TMhu7L3DyaJpPuxtqxVuRFpgqeaA&s",
      title: "КРОССОВКИ ADIDAS EQT SUPPORT ADV PK",
      article: 19666,
      price: 3290,
      size: [35, 36, 37, 38, 39, 40, 41, 42],
      StatusLike: false,
      season: "winter",
      color: "red",
      categories: "men",
      brand: "addidas",
      sale: false,
    },
  ];
  const cards = useSelector(getProductCarousel);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsCarosel("take=20&page=2"));
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
            {}
            {chunkedData.map((item, index) => (
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
            ))}
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
          {chunkedData.map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-[10px] h-[10px] rounded-full ",
                `${current == index ? "bg-[#FF1818]" : "bg-slate-500"}`
              )}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};
