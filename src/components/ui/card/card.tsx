import Link from "next/link";
import Image from "next/image";
import React from "react";
import {} from "@ui";
import { Button } from "@ui";
import { Heart } from "lucide-react";
import style from "./card.module.scss";
import { Title } from "@/components";
import { cn } from "@/lib/utils";
import { TCardUIProps } from "./type";

export const CardUI: React.FC<TCardUIProps> = ({
  id,
  imageUrl,
  title,
  article,
  price,
  size,
  showSizes,
  onMouseEnter,
  onMouseLeave,
  onSizeEnter
}) => {
  return (
    <div
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      className={cn(
        "rounded-[20px] w-[255px] min-h-[325px] relative bg-white shadow",
        style.card,
        showSizes ? style.cardExpanded : ""
      )}
    >
      <div className="flex justify-center  rounded-t-[20px] bg-secondary  h-[188px] bg-cover bg-center">
        <Link href={`/products/${id}`}>
          <Image
            className={"bg-cover rounded-t-[20px] bg-center w-full h-full"}
            width={256}
            height={190}
            src={imageUrl}
            alt={`${title}`}
          />
        </Link>
      </div>

      <div className="pt-[20px] relative  pr-[26px]  pl-[24px]">
        <div className="relative">
          <Title
            title={title}
            className=" font-bold text-[14px] leading-[17px]"
          />
          <p className="text-[12px] font-normal">article {article}</p>
          <div className="flex justify-between items-center ">
            <span className="text-[24px] leading-[29px] font-bold ">
              {price} ₽
            </span>

            <Button variant={"like"} className="bg-transparent p-0 ">
              <Heart size={25} className={cn("fill-red-400", style.heart)} />
            </Button>
          </div>
        </div>
        <div className={cn("relative ")}>
          <div
            className={cn(
              "grid gap grid-cols-3",
              style.cardSizes,
              showSizes ? style.cardSizesVis : ""
            )}
          >
            {size.map((item, index) => (
              <Button
                variant={"size"}
                onClick={()=>{onSizeEnter? onSizeEnter(item.name): undefined}}
                key={index}
                className={cn("", style.size)}
              >{`${item.name} EUR`}</Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
