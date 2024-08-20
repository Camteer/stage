import { Title } from "@/components";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { FC } from "react";

export const FaqUI: FC = () => {
  return (
    <>
      <div className={cn("flex justify-between w-full")}>
        <div className={cn("flex flex-col justify-center items-center")}>
          <div
            className={cn(
              "w-[144px] h-[144px] bg-[#B3C0D2] rounded-full flex justify-center items-center"
            )}
          >
            <Image width={80} height={80} src={"/svg/finger.svg"} alt={"1"} />
          </div>
          <Title
            title={"Гарантируем качество товара"}
            className="max-w-[280px] font-bold text-[36px] leading-[43.88px] mt-[50px] text-center"
          />
        </div>

        <div className={cn("flex flex-col justify-center items-center")}>
          <div
            className={cn(
              "w-[144px] h-[144px] bg-[#CFEBC6] rounded-full flex justify-center items-center"
            )}
          >
            <Image width={105} height={105} src={"/svg/faq.svg"} alt={"2"} />
          </div>
          <Title
            title={"Поможем  подобрать размер"}
            className="max-w-[280px] font-bold text-[36px] leading-[43.88px] mt-[50px] text-center"
          />
        </div>

        <div className={cn("flex flex-col justify-center items-center")}>
          <div
            className={cn(
              "w-[144px] h-[144px] bg-[#FFE1E1] rounded-full flex justify-center items-center"
            )}
          >
            <Image width={85} height={85} src={"/svg/box.svg"} alt={"3"} />
          </div>
          <Title
            title={"Быстро доставим покупку"}
            className="max-w-[280px] font-bold text-[36px] leading-[43.88px] mt-[50px] text-center"
          />
        </div>
      </div>
    </>
  );
};
