"use client";
import * as React from "react";
import { Title } from "../title";
import { Container } from "../container";
import { Button } from "../ui";
import Image from "next/image";
import { useRouter } from "next/navigation";
import style from "./best-product.module.scss";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
export function BestProducts() {
  const router = useRouter();
  const data = [
    {
      brand: "Adidas",
      name: "Nite Jogger",
      image: "/svg/Nite.svg",
    },
    {
      brand: "Adidas",
      name: "Yeezy Boost ",
      image: "/svg/Yeezy.svg",
    },
    {
      brand: "Nike",
      name: "Air Max",
      image: "/svg/Air.svg",
    },
  ];
  const [current, setCurrent] = useState(data[0]);

  return (
    <>
      <Container className="mb-5">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-5">
            <Title
              title={current.brand}
              className="font-extrabold text-[#002C6A] text-[72px] leading-[88px]"
            ></Title>
            <Title
              title={current.name}
              className="font-extrabold text-[#002C6A] text-[72px] leading-[88px]"
            ></Title>
            <p className="text-[36px] leading-[43.81px] w-[445px]">
              Городские кроссовки в ярком стиле 80-х
            </p>
            <Button
              onClick={() => router.push("/catalog/sneakers")}
              className="h-[65px] w-[282px] rounded-[50px] bg-[red] text-white text-[18px] font-bold landing-[21px] disabled:bg-[#B3C0D2]"
            >
              Смотреть все
            </Button>
          </div>
          <div className="relative  overflow-hidden w-[600px] h-[500px]">
            <Image
              width={549}
              height={447}
              src={current.image}
              alt={"Кросовки"}
              className="z-10 absolute right-1"
            />
            <div className="w-[857px] h-[332px] bg-[#002C6A] rounded-full absolute top-[60px] right-[-260px] z-[-1] rotate-[-12deg]"></div>
          </div>
        </div>
      </Container>
      <Container className="mt-3">
        <div className="flex w-full justify-center gap-[100px] ">
          {data
            .filter((item) => item.image != current.image)
            .map((item, key) => (
              <div
                key={key}
                className={cn(
                  "w-[282px] h-[86px]  rounded-full flex flex-col items-end relative pr-8 pt-5 gap-2 ",
                  style.card
                )}
              >
                {" "}
                <Button
                  onClick={() => router.push("/catalog/sneakers")}
                  className="h-[50px] w-[50px] rounded-[50px] bg-[red] absolute top-[-30%] right-[-10px]"
                >
                  <ArrowRight />
                </Button>
                <Image
                  width={149}
                  height={121}
                  onClick={() => {
                    setCurrent(item);
                  }}
                  src={item.image}
                  alt={"Кросовки"}
                  className="z-10 absolute left-[-30px] top-[-30px] cursor-pointer"
                />
                <Title
                  title={item.brand}
                  className="font-extrabold text-[#29292D] text-[18px] leading-[21.94px] "
                ></Title>
                <Title
                  title={item.name}
                  className="font-extrabold text-[#29292D] text-[18px] leading-[21.94px]"
                ></Title>
              </div>
            ))}
        </div>
      </Container>
    </>
  );
}
