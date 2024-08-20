import Image from "next/image";
import React from "react";
import {} from "@ui";
import { Button } from "@ui";
import { Eye, Heart } from "lucide-react";
import style from "./card-blog.module.scss";
import { Title } from "@/components";
import { cn } from "@/lib/utils";

export const CardBlogUI: React.FC<TCardBlogUIProps> = ({
  id,
  imageUrl,
  title,
  description,
  date,
  view,
}) => {
  return (
    <div
      className={cn(
        "rounded-[20px] w-[540px] max-h-[175px] relative bg-white shadow",
        style.card
      )}
    >
      <div className="flex justify-center   bg-secondary  h-[188px] bg-cover bg-center overflow-hidden">
        <Image
          className={cn("bg-cover bg-center  ", style.cardImage)}
          width={192}
          height={170}
          src={imageUrl}
          alt={`${title}`}
        />
      </div>

      <div className="p-[15px] relative z-[3] pr-[33px] max-w-[348px] pb-[2px] min-w-[300px] pl-[24px]">
        <div className="relative z-[2] flex flex-col justify-between h-full ">
          <Title
            title={title}
            className=" font-bold text-[18px] leading-[22px] text-[#002C6A] "
          />

          <p
            className={cn(
              "text-[14px] leading-[17px] font-normal text-wrap max-w-[348px] min-w-[230px] h-auto"
            )}
          >
            {description}
          </p>
          <span className="flex justify-between w-full">
            <p className="font-normal text-[12px] leading-[15px] text-[#B3C0D2]">
              {date}
            </p>
            <span className="flex justify-between">
              <Eye width={20} height={12} stroke="#B3C0D2" />
              <p className="font-normal text-[12px] leading-[15px] pb-2 text-[#B3C0D2]">
                {view}
              </p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
