import React from "react";
import { FooterUI } from "../ui";
import { Container } from "../container";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Footer = () => {
  return (
    <FooterUI>
      <Container className="flex justify-between h-[190px]">
        <div className={cn("pl-6")}>
          <Image
            width={190}
            height={190}
            src={"/logo.svg"}
            alt={"Logo"}
            className=""
          />
        </div>
        <address className={cn("flex flex-col justify-center gap-2 mt-6")}>
          <div className="flex justify-between mb-5">
            <a href="https://www.instagram.com/" target="blank">
              <Image
                width={35}
                height={35}
                src={"/svg/instagram.svg"}
                alt={"inst"}
                className="rounded-full"
              ></Image>
            </a>
            <a href="https://vk.com/" target="blank">
              <Image
                width={35}
                height={35}
                src={"/svg/vk.svg"}
                alt={"inst"}
                className="rounded-full"
              ></Image>
            </a>
            <a href="https://www.whatsapp.com/" target="blank">
              <Image
                width={35}
                height={35}
                src={"/svg/whatsapp.svg"}
                alt={"inst"}
                className="rounded-full"
              ></Image>
            </a>
          </div>
          <div className="flex flex-col h-[60px] justify-between">
            <span className={cn("flex gap-3")}>
              <Image
                className={cn("w-auto h-auto")}
                width={20}
                height={20}
                src={"/svg/phone.svg"}
                alt={""}
              />
              <a
                className={cn("no-underline text-[#B3C0D2")}
                href="tel:+79519992834"
              >
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
              <a
                className={cn("no-underline text-[#B3C0D2")}
                href="mailto:info@stageboxbrand.ru"
              >
                info@stageboxbrand.ru
              </a>
            </span>
          </div>
        </address>
        <div>
          <nav className="h-full ">
            <ul className="flex flex-col justify-between h-[90%] mt-3 ">
              <li className="hover:text-white transition-colors duration-300">
                Доставка
              </li>
              <li className="hover:text-white transition-colors duration-300">
                Гарантии
              </li>
              <li className="hover:text-white transition-colors duration-300">
                Таблица размеров
              </li>
              <li className="hover:text-white transition-colors duration-300">
                Обмен и возврат
              </li>
              <li className="hover:text-white transition-colors duration-300">
                Вопросы и ответы
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </FooterUI>
  );
};
