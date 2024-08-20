import { FC } from "react";
import { TitleUI } from "@ui";
import { TTitleUI } from "../ui/title/type";

export const Title: FC<TTitleUI> = ({ title, weight, className }) => {
  return <TitleUI title={title} weight={weight} className={className} />;
};
