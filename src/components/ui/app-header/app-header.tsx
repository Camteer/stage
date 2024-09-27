import { FC } from "react";
import { TAppHeaderUIProps } from "./type";
import { cn } from "@/lib/utils";
import style from "./app-header.module.scss";
import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { ButtonCart } from "../batton-cart";
import { ProfileButton } from "../profile-button/profile-button";

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({}) => (
  <div
    className={cn(
      "w-[1110px] flex justify-between align-center",
      style.headerContainer
    )}
  >
    <address className={cn("flex flex-col justify-center gap-2")}>
      <span className={cn("flex gap-3")}>
        <a className={cn("no-underline")} href="tel:+79519992834">
          <Phone stroke="white" fill="#002C6A" size={24} />
        </a>
        <a className={cn("no-underline")} href="tel:+79519992834">
          +7 951 999 28 34
        </a>
      </span>
      <span className={cn("flex gap-3")}>
        <a className={cn("no-underline")} href="mailto:info@stageboxbrand.ru">
          <Mail stroke="white" fill="#002C6A" size={24} />
        </a>
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
          src={"/logo.svg"}
          alt={"Logo"}
          className=""
        />
      </Link>
    </div>
    <nav
      className={cn(
        "flex justify-between items-center w-[170px]",
        style.headerNav
      )}
    >
      <ButtonCart></ButtonCart>
      <ProfileButton></ProfileButton>
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
