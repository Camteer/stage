"use client";

import React from "react";
import { FilterCheckbox } from "./filter-checkbox";

import { cn } from "@/lib/utils";
import { TFiltersResponse } from "@/lib/types";

import { Skeleton } from "./skeleton";
import { Title } from "../title";

interface Props {
  items: TFiltersResponse[keyof TFiltersResponse];
  title: string;
  limit?: number;
  loading?: boolean;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selected?: Set<string>;
  className?: string;
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  items,
  limit = 6,
  className,
  loading,
  onClickCheckbox,
  selected,
  name,
  title,
}) => {
  const [showAll, setShowAll] = React.useState(false);

  const list = showAll ? items : items.slice(0, limit);

  if (loading) {
    return (
      <div className={className}>
        <Title
          title={title}
          className={cn(
            "mb-[40px] font-bold text-2xl leading-7 text-[#002C6A]"
          )}
        />

        <Skeleton className="w-[163px] h-[278px] mb-4 rounded-[8px]" />

        <Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />
      </div>
    );
  }

  return (
    <div className={``}>
      <Title
        title={title}
        className={cn("mb-[40px] font-bold text-2xl leading-7 text-[#002C6A]")}
      />
      <div
        className={cn(
          "flex flex-col gap-4 max-h-96 pr-2 overflow-auto ",
          className
        )}
      >
        {list.map((item, index) => {
          return (
            <FilterCheckbox
              key={index}
              text={item.name}
              value={item.id}
              checked={selected?.has(String(item.id))}
              onCheckedChange={() => onClickCheckbox?.(String(item.id))}
              name={name}
            />
          );
        })}
      </div>

      {items.length > limit && (
        <div className={showAll ? " mt-4" : " "}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
