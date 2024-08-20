import { FC } from "react";
import { TAppHeaderUIProps } from "./type";
import { cn } from "@/lib/utils";
import style from "./app-header.module.scss";
import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({}) => (
  <div
    className={cn(
      "w-[1110px] flex justify-between align-center",
      style.headerContainer
    )}
  >
    <address className={cn("flex flex-col justify-center gap-2")}>
      <span className={cn("flex gap-3")}>
        <Image
          className={cn("w-auto h-auto")}
          width={20}
          height={20}
          src={"/svg/phone.svg"}
          alt={""}
        />
        <a className={cn("no-underline")} href="tel:+79519992834">
          +7 951 999 28 34
        </a>
      </span>
      <span className={cn("flex gap-3")}>
        <Image
          className={cn("w-auto h-auto")}
          width={20}
          height={20}
          src={"/svg/email.svg"}
          alt={""}
        />
        <a className={cn("no-underline")} href="mailto:info@stageboxbrand.ru">
          info@stageboxbrand.ru
        </a>
      </span>
    </address>
    <div className={cn("pl-6")}>
      <Link href={"/"}>
        <Image
          width={95}
          height={95}
          src={"/logo.png"}
          alt={"Logo"}
          className="w-auto h-auto"
        />
      </Link>
    </div>
    <nav
      className={cn(
        "flex justify-between items-center w-[170px]",
        style.headerNav
      )}
    >
      <Button variant={"circle"} size={"icon"}>
        <Image
          className={cn("w-auto h-auto")}
          width={19}
          height={19}
          src={"/svg/bag.svg"}
          alt={"1"}
        />
      </Button>
      <Button variant={"circle"} size={"icon"}>
        <Image
          className={cn("w-auto h-auto")}
          width={19}
          height={19}
          src={"/svg/user.svg"}
          alt={"1"}
        />
      </Button>
      <Button variant={"circle"} size={"icon"}>
        <Image
          className={cn("w-auto h-auto")}
          width={19}
          height={19}
          src={"/svg/like.svg"}
          alt={"1"}
        />
      </Button>
    </nav>
  </div>
);
