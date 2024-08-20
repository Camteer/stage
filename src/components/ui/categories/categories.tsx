import { FC } from "react";
import { TCategoriesUI } from "./type";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, Input } from "../index";
import Image from "next/image";

export const CategoriesUI: FC<TCategoriesUI> = ({ categories }) => (
  <>
    <div className={cn("w-[1110px] flex justify-between mt-9 items-center")}>
      <div className={cn("flex")}>
        {categories.map((e, index) => (
          <Link
            className={cn(" text-2xl mr-[25px] leading-7 hover:text-[--hover-color-text] transition-colors ease-linear active:text-[--hover-color-text]")}
            key={index}
            href={"/12"}
          >{`${e}`}</Link>
        ))}
      </div>
      <div>
        <div className="flex w-full max-w-sm ">
          <Input className={'hover:border-black transition-hover focus:border-black ease-in-out'} type="" placeholder="Поиск" />
          <Button variant={"search"} type="submit">
            <Image width={20} height={20} src={"./svg/search.svg"} alt={""} />
          </Button>
        </div>
      </div>
    </div>
  </>
);
