"use client";

import { Title } from "@/components";
import { FC, useState } from "react";
import Image from "next/image";
import { Button } from "../button";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import style from "./product.module.scss";
import Link from "next/link";
import { TProductUIProps } from "./type";
import { useRouter, useSearchParams } from "next/navigation";
import { Skeleton } from "../skeleton";
export const ProductUI: FC<TProductUIProps> = ({
  title,
  id,
  article,
  images,
  prise,
  addItem,
  sizes,
  categories,
  model,
  season,
  color,
  description,
  about,
  loading,
}) => {
  const query = useSearchParams();

  const [selectedSize, setSize] = useState(
    query.has("size") ? Number(query.get("size")) : 0
  );

  const router = useRouter();
  const [stateActiveNav, setStateActiveNav] = useState("Описание");
  const allSizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
  return (
    <>
      <div>
        <div>
          {!title || loading ? (
            <Skeleton className="w-[729px] h-[48px] rounded-[20px]"></Skeleton>
          ) : (
            <Title title={title} className={cn("uppercase")}></Title>
          )}

          <p className={cn("text-[#B3C0D2] pt-5 font-normal")}>
            Артикул {article}
          </p>
        </div>
        <div className={cn("mt-4 flex w-full justify-between  min-w-[1110px]")}>
          <div className="w-[729px] relative">
            {!images[0] || loading ? (
              <Skeleton className="w-[729px] h-[486px]"></Skeleton>
            ) : (
              <Image
                height={540}
                width={729}
                className={cn("rounded-[20px]")}
                src={images[0]}
                alt={"imagePre"}
              ></Image>
            )}
            {/* <span className="absolute top-[15px] right-[15px] rounded-[20px]">
              <Heart size={45} className={cn("", style.heart)} />
            </span> */}
            <div className={cn("flex w-full justify-between mt-5")}>
              {!images.length || loading
                ? Array(4)
                    .fill(0)
                    .map((_, key) => (
                      <Skeleton
                        key={key}
                        className="w-[160px] h-[118px] rounded-[20px]"
                      ></Skeleton>
                    ))
                : images
                    .slice(1)
                    .map((image, index) => (
                      <Image
                        key={index}
                        height={118}
                        width={160}
                        src={image}
                        className={cn("rounded-[20px]")}
                        alt={"imagePre "}
                      ></Image>
                    ))}
            </div>
          </div>

          <div
            className={cn(
              "w-[481px] flex flex-col justify-between items-center"
            )}
          >
            <span
              className={cn(
                "font-bold text-[48px] leading-[58px] text-[#FF1818]"
              )}
            >
              {prise}₽
            </span>
            <div
              className={cn(
                " rounded-[20px] w-full h-[282px]  flex justify-center relative",
                style.sizeContainer
              )}
            >
              <div className="flex flex-col items-center">
                <Title
                  title={"Выберите размер"}
                  className="w-[265px] font-black text-[24px] leading-[29.26px] mt-5"
                ></Title>
                <div className="flex flex-wrap gap-x-[20px] gap-y-[20px] w-[385px] m-5 relative">
                  {allSizes.map((item, index) => (
                    <Button
                      variant={"size"}
                      onClick={() => {
                        setSize(item);
                      }}
                      key={index}
                      disabled={sizes.includes(item) ? false : true}
                      className={cn(
                        "text-[#002C6A] font-bold w-20 text-[18px] leading-[21.94px] text-center",
                        style.size,
                        `${
                          selectedSize == item && sizes.includes(selectedSize)
                            ? "bg-[#ff1818] text-white"
                            : ""
                        }`
                      )}
                    >
                      {`${item} EUR`}
                    </Button>
                  ))}
                </div>
                <span className="absolute bottom-[-33px] w-[324px] h-[65px] rounded-full text-center flex justify-center items-center bg-white border-[1px] border-solid border-black">
                  <Link
                    href={"/"}
                    className="font-bold text-[16px] leading-[20px]"
                  >
                    Как определить размер?
                  </Link>
                </span>
              </div>
            </div>
            <div className="  flex flex-col gap-5">
              <Button
                className="h-[56px] w-[296px] rounded-[50px] bg-[red] text-white text-[18px] font-bold landing-[21px] "
                disabled={
                  selectedSize && sizes.includes(selectedSize) ? false : true
                }
                onClick={() => {
                  addItem({ productItemId: id, size: selectedSize });
                }}
              >
                В корзину
              </Button>
              <Button
                className="h-[56px]   w-[296px] rounded-[50px] bg-[#002C6A] text-white text-[18px] font-bold landing-[21px] "
                disabled={
                  selectedSize && sizes.includes(selectedSize) ? false : true
                }
                onClick={() => {
                  addItem({ productItemId: id, size: selectedSize });
                  router.push("/cart");
                }}
              >
                Купить сейчас
              </Button>
            </div>
          </div>
        </div>
        <div>
          <nav className={cn("flex w-full justify-between mt-5 h-[40px]")}>
            <p
              onClick={() => {
                setStateActiveNav("Описание");
              }}
              className={cn(
                "font-bold text-[24px] h-[30px] leading-[30px] cursor-pointer hover:text-[#FF4218] hover:border-[#FF4218]  transition-colors border-b-4 border-[transparent]",
                `${
                  stateActiveNav == "Описание"
                    ? "text-[#FF1818] border-[#FF1818] "
                    : ""
                }`
              )}
            >
              Описание
            </p>
            <p
              onClick={() => {
                setStateActiveNav("Оплата и доставка");
              }}
              className={cn(
                "font-bold text-[24px] h-[30px] leading-[30px] cursor-pointer hover:text-[#FF4218] hover:border-[#FF4218]  transition-colors border-b-4 border-[transparent]",
                `${
                  stateActiveNav == "Оплата и доставка"
                    ? "text-[#FF1818] border-[#FF1818] "
                    : ""
                }`
              )}
            >
              Оплата и доставка
            </p>
            <p
              onClick={() => {
                setStateActiveNav("Обмен и возврат");
              }}
              className={cn(
                "font-bold text-[24px] h-[30px] leading-[30px] cursor-pointer hover:text-[#FF4218] hover:border-[#FF4218]  transition-colors border-b-4 border-[transparent]",
                `${
                  stateActiveNav == "Обмен и возврат"
                    ? "text-[#FF1818] border-[#FF1818] "
                    : ""
                }`
              )}
            >
              Обмен и возврат
            </p>
            <p
              onClick={() => {
                setStateActiveNav("Гарантии");
              }}
              className={cn(
                "font-bold text-[24px] h-[30px] leading-[30px] cursor-pointer hover:text-[#FF4218] hover:border-[#FF4218]  transition-colors border-b-4 border-[transparent]",
                `${
                  stateActiveNav == "Гарантии"
                    ? "text-[#FF1818] border-[#FF1818] "
                    : ""
                }`
              )}
            >
              Гарантии
            </p>
            <p
              onClick={() => {
                setStateActiveNav("О товаре");
              }}
              className={cn(
                "font-bold text-[24px] h-[30px] leading-[30px] cursor-pointer hover:text-[#FF4218] hover:border-[#FF4218]  transition-colors border-b-4 border-[transparent]",
                `${
                  stateActiveNav == "О товаре"
                    ? "text-[#FF1818] border-[#FF1818] "
                    : ""
                }`
              )}
            >
              О товаре
            </p>
          </nav>

          <div className="flex justify-between mt-[50px]">
            <div className="w-[820px] text-[18px] landing-[22px] font-normal">
              {stateActiveNav == "Описание" && description && !loading ? (
                description
              ) : stateActiveNav == "Оплата и доставка" ? (
                "Мы принимаем оплату всеми популярными способами: банковские карты, электронные кошельки и перевод по реквизитам. Доставка осуществляется по всей территории страны с возможностью выбора удобного курьера или пункта самовывоза. Сроки доставки зависят от региона и составляют от 2 до 7 рабочих дней."
              ) : stateActiveNav == "Обмен и возврат" ? (
                "Вы можете вернуть или обменять товар в течение 14 дней с момента получения, при условии сохранения товарного вида и упаковки. Обработка заявок на возврат или обмен занимает до 5 рабочих дней. Мы обеспечим удобный процесс возврата через курьера или почтовую службу."
              ) : stateActiveNav == "Гарантии" ? (
                "На все наши товары предоставляется гарантия качества от производителя сроком от 6 месяцев до 2 лет в зависимости от категории. В случае заводского брака мы бесплатно заменим товар или вернем его стоимость."
              ) : stateActiveNav == "О товаре" ? (
                about
              ) : (
                <Skeleton className="w-[820px] h-[135px]"></Skeleton>
              )}
            </div>
            <span className="w-[349px] text-[#002C6A] text-[20px] leading-[24.38px] flex flex-col gap-2">
              <div className="flex justify-between">
                <p className="text-end w-[100px]">Категории </p>
                {categories ? (
                  <p className="text-start  min-w-[200px] font-bold">
                    {categories}
                  </p>
                ) : (
                  <Skeleton className="w-[200px] h-[24.375px]"></Skeleton>
                )}
              </div>
              <div className="flex justify-between">
                <p className="text-end w-[100px]">Модель </p>
                {model ? (
                  <p className="text-start  min-w-[200px] font-bold">{model}</p>
                ) : (
                  <Skeleton className="w-[200px] h-[24.375px]"></Skeleton>
                )}
              </div>
              <div className="flex justify-between">
                <p className="text-end w-[100px]">Сезон </p>
                {season ? (
                  <p className="text-start  min-w-[200px] font-bold">
                    {season}
                  </p>
                ) : (
                  <Skeleton className="w-[200px] h-[24.375px]"></Skeleton>
                )}
              </div>
              <div className="flex justify-between">
                <p className="text-end w-[100px]">Цвет </p>
                {color ? (
                  <p className="text-start  min-w-[200px] font-bold">{color}</p>
                ) : (
                  <Skeleton className="w-[200px] h-[24.375px]"></Skeleton>
                )}
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
