"use client";

import { FC } from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, Input } from "../index";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

export const CategoriesUI: FC = () => {
  const pathname = usePathname();

  return (
    <>
      <div className={cn("w-[1110px] flex justify-between mt-9 items-center")}>
        <div className={cn("flex")}>
          <Link
            className={cn(
              " text-2xl mr-[25px] leading-7 hover:text-[--hover-color-text] font-bold transition-colors ease-linear active:text-[--hover-color-text]",
              `${pathname.slice(9, 17) == "sneakers" ? "text-[#FF1818]" : ""}`
            )}
            href={"/catalog/sneakers"}
          >
            Кросовки
          </Link>
          <Link
            className={cn(
              " text-2xl mr-[25px] leading-7 hover:text-[--hover-color-text] font-bold transition-colors ease-linear active:text-[--hover-color-text]",
              `${pathname.slice(9, 16) == "clothes" ? "text-[#FF1818]" : ""}`
            )}
            href={"/catalog/clothes"}
          >
            Одежда
          </Link>
          <Link
            className={cn(
              " text-2xl mr-[25px] leading-7 hover:text-[--hover-color-text] font-bold transition-colors ease-linear active:text-[--hover-color-text]",
              `${
                pathname.slice(9, 20) == "accessories" ? "text-[#FF1818]" : ""
              }`
            )}
            href={"/catalog/accessories"}
          >
            Аксессуары
          </Link>
          <Link
            className={cn(
              " text-2xl mr-[25px] leading-7 hover:text-[--hover-color-text] font-bold transition-colors ease-linear active:text-[--hover-color-text]",
              `${pathname.slice(1, 5) == "blog" ? "text-[#FF1818]" : ""}`
            )}
            href={"/blog"}
          >
            Блог
          </Link>
          <Link
            className={cn(
              " text-2xl mr-[25px] leading-7 hover:text-[--hover-color-text] font-bold transition-colors ease-linear active:text-[--hover-color-text]",
              `${pathname.slice(1, 8) == "reviews" ? "text-[#FF1818]" : ""}`
            )}
            href={"/reviews"}
          >
            Отзывы
          </Link>
        </div>
        <div>
          <div className="flex w-full max-w-sm ">
            <Input
              className={
                "hover:border-black transition-hover focus:border-black ease-in-out border"
              }
              type=""
              placeholder="Поиск"
            />
            <Button variant={"search"} type="submit"><Search /></Button>
          </div>
        </div>
      </div>
    </>
  );
};
