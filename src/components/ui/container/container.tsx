import { FC } from "react";
import { TContainerUIProps } from "./type";
import { cn } from "@/lib/utils";
import style from "./container.module.scss";

export const ContainerUI: FC<TContainerUIProps> = ({ children, className }) => (
  <div
    className={cn(
      `flex justify-between align-center mt-[50px] max-w-[1110px]`,
      style.Container,
      className
    )}
  >
    {children}
  </div>
);
