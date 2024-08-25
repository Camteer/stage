"use client";

import React from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

type Item = FilterChecboxProps;

interface Props {
  items: Item[];
  defaultItems?: Item[];
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
  defaultItems,
  limit = 6,
  className,
  loading,
  onClickCheckbox,
  selected,
  name,
}) => {
  const [showAll, setShowAll] = React.useState(false);

  const list = showAll
    ? items.filter((item) => item.text.toLowerCase())
    : (defaultItems || items).slice(0, limit);

  return (
    <div className={``}>
      <div className={cn("flex flex-col gap-4 max-h-96 pr-2 overflow-auto ", className)}>
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={selected?.has(item.value)}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
          />
        ))}
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
