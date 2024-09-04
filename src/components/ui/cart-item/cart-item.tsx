import Image from "next/image";
import React from "react";
import {} from "@ui";
import { Button } from "@ui";
import style from "./cart-item.module.scss";
import { Title } from "@/components";
import { cn } from "@/lib/utils";
import { TCartItemUIProps } from "./type";
import { X } from "lucide-react";

export const CartItemUI: React.FC<TCartItemUIProps> = ({
  id,
  imageUrl,
  title,
  article,
  loading,
  price,
  deleteItem,
  increment,
  decrement,

  size,
  count,
}) => {
  return (
    <div
      className={cn(
        "rounded-[20px] flex w-full min-h-[310px] relative bg-white shadow",
        style.card
      )}
    >
      <Button className="absolute top-3 right-3 rounded-full w-[34px] h-[34px]  hover:opacity-70 z-10"
      onClick={()=>{deleteItem(id)}}>
        <X width={18} height={18} className="rounded-full" />
      </Button>
      <div className="flex rounded-l-[20px] bg-secondary  w-[1100px] h-[321px] bg-cover bg-center">
        <Image
          className={"bg-cover rounded-l-[20px] bg-center w-full h-full"}
          width={800}
          height={800}
          src={imageUrl}
          alt={`${title}`}
        />
      </div>

      <div className="pt-[50px] relative w-full pr-[26px]  pl-[24px]">
        <div className="relative">
          <Title
            title={title}
            className=" font-bold text-[36px] leading-[43.88px]"
          />
          <p className="text-[18px] leading-[21.91px] mt-4 text-[#B3C0D2] font-normal">
            article {article}
          </p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-[18px] leading-[21.94px]">
              Размер: <b className="text-[#002C6A">{size} EUR</b>
            </span>
            <span className="text-[36px] leading-[43.88px] text-[#FF1818] font-bold mr-10">
              {price} ₽
            </span>
          </div>
          <div className="mt-4">
            <div
              className={cn(
                "w-[160px] h-[40px] flex justify-between items-center  rounded-2xl overflow-hidden",
                style.counter
              )}
            >
              <Button
                disabled={count == 1 ? true : false}
                className="w-[44px] bg-[#FF1818] text-[white] hover:bg-[#913420] hover:text-[white] disabled:text-[#e4dfdf] disabled:bg-[white] disabled:opacity-100"
                onClick={() => {
                  if (!loading) decrement({ id, quantity: -1 });
                }}
              >
                -
              </Button>
              <p>{count}</p>
              <Button
                onClick={() => {
                  increment({ id, quantity: 1 });
                }}
                className="w-[44px] bg-[#FF1818] text-[white] hover:bg-[#913420] hover:text-[white] disabled:text-[#e4dfdf] disabled:bg-[white] disabled:opacity-100"
              >
                +
              </Button>
            </div>
          </div>
        </div>
        <div className={cn("relative ")}></div>
      </div>
    </div>
  );
};
