"use client";

import { FC, useState } from "react";

import { cn } from "@/lib/utils";
import style from "./catalog-container.module.scss";
import { Button } from "../button";

export const CataloContainerUI: FC<TCataloContainerUIProps> = ({
  children,
  className,
}) => {
  const [stateSize, setStateSize] = useState("type-18");

  const handleSetSize = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const size = e.currentTarget.id;
    let row;
    let col;
    console.log(size, "нажал");
    switch (size) {
      case "type-18":
        setStateSize("type-18");
        break;
      case "type-30":
        setStateSize("type-30");
        break;
      case "type-60":
        setStateSize("type-60");
        break;
      default:
        setStateSize("type-18");
        break;
    }
    console.log(stateSize , "стфло");
  };
  return (
    <div className={cn(``, style.Container, className)}>
      <div className="flex justify-between ">
        <div className={cn("flex min-w-[300px] justify-between p-5")}>
          <p
            className={cn(
              "text-[18px] font-normal leading-[20px] pt-2 pr-2 text-[#B3C0D2]"
            )}
          >
            Сортировка
          </p>
        </div>
        <div className={cn("flex min-w-[300px] justify-between p-5")}>
          <p
            className={cn(
              "text-[18px] font-normal leading-[20px] pt-2 pr-2 text-[#B3C0D2]"
            )}
          >
            Количество
          </p>

          <div className="flex justify-between w-[130px]">
            <Button
              id={"type-18"}
              disabled={stateSize == "type-18" ? true : false}
              className="size-[40px] rounded-full bg-[#FFFFFF] text-[#29292D] hover:bg-[#FF4218] hover:text-[#e4dfdf] disabled:text-white disabled:bg-[#FF1818] disabled:opacity-100"
              onClick={handleSetSize}
            >
              18
            </Button>
            <Button
              id={"type-30"}
              disabled={stateSize == "type-30" ? true : false}
              className="size-[40px] rounded-full bg-[#FFFFFF] text-[#29292D] hover:bg-[#FF4218] hover:text-[#e4dfdf] disabled:text-white disabled:bg-[#FF1818] disabled:opacity-100"
              onClick={handleSetSize}
            >
              30
            </Button>
            <Button
              id={"type-60"}
              disabled={stateSize == "type-60" ? true : false}
              className="size-[40px] rounded-full bg-[#FFFFFF] text-[#29292D] hover:bg-[#FF4218] hover:text-[#e4dfdf] disabled:text-white disabled:bg-[#FF1818] disabled:opacity-100"
              onClick={handleSetSize}
            >
              36
            </Button>
          </div>
        </div>
      </div>
      <div
        className={cn(
          ` grid justify-items-center items-center gap-x-[30px] gap-y-14 mt-16 ${
            stateSize == "type-18"
              ? "grid-rows-6 grid-cols-3 h-[2256px]"
              : stateSize == "type-30"
              ? "grid-rows-10 grid-cols-3 h-[3760px]"
              : stateSize == "type-60"
              ? "grid-rows-12 grid-cols-3 h-[4512px]":
              ''
          }`
        )}
      >
        {children}
      </div>
    </div>
  );
};
