import { FC } from "react";

import { cn } from "@/lib/utils";
import style from "./catalog-container.module.scss";
import { Button } from "../button";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Skeleton } from "../skeleton";

export const CataloContainerUI: FC<TCataloContainerUIProps> = ({
  children,
  className,
  onClickSize,
  onClickPage,
  page,
  loading,
  size,
  total,
}) => {
  size = size ? size : 18;
  page = page ? page : 1;
  return (
    <div className={cn(``, style.Container, className)}>
      <div className="flex justify-between ">
        <div className={cn("flex min-w-[300px] justify-between p-5")}>
          <p
            className={cn(
              "text-[18px] font-normal leading-[20px] pt-2 pr-2 text-[#B3C0D2]"
            )}
          ></p>
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
              id={"18"}
              disabled={size == 18 ? true : false}
              className="size-[40px] rounded-full bg-[#FFFFFF] text-[#29292D] hover:bg-[#FF4218] hover:text-[#e4dfdf] disabled:text-white disabled:bg-[#FF1818] disabled:opacity-100"
              onClick={() => {
                onClickSize(18);
              }}
            >
              18
            </Button>
            <Button
              id={"30"}
              disabled={size == 30 ? true : false}
              className="size-[40px] rounded-full bg-[#FFFFFF] text-[#29292D] hover:bg-[#FF4218] hover:text-[#e4dfdf] disabled:text-white disabled:bg-[#FF1818] disabled:opacity-100"
              onClick={() => {
                onClickSize(30);
              }}
            >
              30
            </Button>
            <Button
              id={"36"}
              disabled={size == 36 ? true : false}
              className="size-[40px] rounded-full bg-[#FFFFFF] text-[#29292D] hover:bg-[#FF4218] hover:text-[#e4dfdf] disabled:text-white disabled:bg-[#FF1818] disabled:opacity-100"
              onClick={() => {
                onClickSize(36);
              }}
            >
              36
            </Button>
          </div>
        </div>
      </div>
      <div
        className={cn(
          ` grid justify-items-center items-center gap-x-[30px] gap-y-14 mt-16 ${
            size == 18
              ? "grid-rows-6 grid-cols-3 h-[2256px]"
              : size == 30
              ? "grid-rows-10 grid-cols-3 h-[3760px]"
              : size == 36
              ? "grid-rows-12 grid-cols-3 h-[4512px]"
              : ""
          }`
        )}
      >
        {loading
          ? Array(size)
              .fill(0)
              .map((_, index) => (
                <Skeleton
                  key={index}
                  className={cn(
                    "rounded-[20px] w-[255px] min-h-[325px] relative shadow"
                  )}
                >
                  {" "}
                </Skeleton>
              ))
          : children}
      </div>
      {Math.ceil(total / size) <= 6 ? (
        <Pagination className="mt-[100px]">
          <PaginationContent className="flex gap-[60px]">
            {page == 1 ? (
              <></>
            ) : (
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => {
                    onClickPage(page - 1);
                  }}
                />
              </PaginationItem>
            )}

            {Array(Math.ceil(total / size))
              .fill(0)
              .map((_, key) => (
                <PaginationItem key={key}>
                  <PaginationLink
                    className="hover:text-black transition-colors"
                    href="#"
                    onClick={() => {
                      onClickPage(key+1);
                    }}
                  >
                    {key+1}
                  </PaginationLink>
                </PaginationItem>
              ))}

            {page == Math.ceil(total / size) ? (
              <></>
            ) : (
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => {
                    onClickPage(page + 1);
                  }}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      ) : !(Math.ceil(total / size) == page && Math.ceil(total / size) < 7)  ? (
        <Pagination className="mt-[100px]">
          <PaginationContent className="flex gap-[60px]">
            {page == 1 ? (
              <></>
            ) : (
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => {
                    onClickPage(page - 1);
                  }}
                />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink
                className="hover:text-black transition-colors"
                href="#"
                onClick={() => {
                  onClickPage(1);
                }}
              >
                1
              </PaginationLink>
            </PaginationItem>
            {page && page > 3 ? (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <></>
            )}

            {Array(5)
              .fill(0)
              .map((_, key) => {
                if (page <= 3) {
                  return (
                    <PaginationItem key={key}>
                      <PaginationLink
                        href="#"
                        className="hover:text-black transition-colors "
                        onClick={() => {
                          onClickPage(key + 2);
                        }}
                      >
                        {key + 2}
                      </PaginationLink>
                    </PaginationItem>
                  );
                } else if (Math.ceil(total / size) - page > 5) {
                  return (
                    <PaginationItem key={key}> 
                      <PaginationLink
                        className="hover:text-black transition-colors "
                        href="#"
                        onClick={() => {
                          onClickPage(page + key - 2);
                        }}
                      >
                        {page + key - 2}
                      </PaginationLink>
                    </PaginationItem>
                  );
                } else if (Math.ceil(total / size) - page <= 3) {
                  return (
                    <PaginationItem key={key}>
                      <PaginationLink
                        className="hover:text-black transition-color"
                        href="#"
                        onClick={() => {
                          onClickPage(Math.ceil(total / size) - 5 + key);
                        }}
                      >
                        {Math.ceil(total / size) - 5 + key}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
                return (
                  <PaginationItem key={key}>
                    <PaginationLink
                      className="hover:text-black transition-colors"
                      href="#"
                      onClick={() => {
                        onClickPage(page + key - 2);
                      }}
                    >
                      {page + key - 2}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
            {page && Math.ceil(total / size) - page > 3 ? (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <></>
            )}
            <PaginationItem>
              <PaginationLink
                className="hover:text-black transition-colors"
                href="#"
                onClick={() => {
                  onClickPage(Math.ceil(total / size));
                }}
              >
                {Math.ceil(total / size)}
              </PaginationLink>
            </PaginationItem>
            {page == Math.ceil(total / size) ? (
              <></>
            ) : (
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => {
                    onClickPage(page + 1);
                  }}
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      ) : (
        <></>
      )}
    </div>
  );
};
