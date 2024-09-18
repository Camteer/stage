import style from "./footer.module.scss";
import React, { FC } from "react";
import { cn } from "@/lib/utils";



export const FooterUI: FC<TFooterUI> = ({ children }) => {
  return <footer className={cn("", style.footer)}>{children}</footer>;
};
