import React, { FC } from "react";
import { TTitleUI } from "./type";
import { cn } from "@/lib/utils";

export const TitleUI: FC<TTitleUI> = ({ title, weight, className }) => (
  <h2 className={cn(`font-bold text-5xl`, className)}>{title}</h2>
);
