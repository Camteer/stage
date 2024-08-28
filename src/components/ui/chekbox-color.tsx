"use client";

import React from "react";
import { FilterCheckbox } from "./filter-checkbox";

import { cn } from "@/lib/utils";
import { TFiltersResponse } from "@/lib/types";

import { Skeleton } from "./skeleton";
import { Title } from "../title";
import { Checkbox } from "@radix-ui/react-checkbox";

interface Props {
  items: TFiltersResponse[keyof TFiltersResponse];

  limit?: number;
  loading?: boolean;
  onClickCheckbox?: (id: number) => void;
  defaultValue?: string[];
  selected?: Set<number>;
  className?: string;
  name?: string;
}

export const CheckboxFiltersGroupColors: React.FC<Props> = ({
  items,

  className,
  loading,
  onClickCheckbox,
  selected,
  name,
}) => {
  if (loading) {
    return (
      <div className={className}>
        <Title
          title={"Цвет"}
          className={cn(
            "mb-[40px] font-bold text-2xl leading-7 text-[#002C6A]"
          )}
        />

        {...Array()
          .fill(0)
          .map((_, index) => (
            <Skeleton
              key={index}
              className="h-[33px] w-[156px] mb-4 rounded-[8px]"
            />
          ))}

        <Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />
      </div>
    );
  }
  return (
    <div className={``}>
      <Title
        title={"Цвет"}
        className={cn("mb-[40px] font-bold text-2xl leading-7 text-[#002C6A]")}
      />
      <div
        className={cn(
          "flex flex-col gap-4 max-h-96 pr-2 overflow-auto ",
          className
        )}
      >
        {items.map((item, index) => (
          <div className="flex items-center space-x-2">
            <Checkbox
              onCheckedChange={onCheckedChange}
              checked={checked}
              value={value}
              className="rounded-[5px] w-[33px] h-[33px]  border-[#B3C0D2] border-[3px] data-[state=checked]:bg-[red] data-[state=checked]:border-[red]"
              id={`checkbox-${String(name)}-${String(value)}`}
            />
            <label
              htmlFor={`checkbox-${String(name)}-${String(value)}`}
              className="leading-none cursor-pointer flex-1 text-wrap"
            >
              {text}
            </label>
            {endAdornment}
          </div>
        ))}
      </div>
    </div>
  );
};
