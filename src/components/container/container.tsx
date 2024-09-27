import { FC } from "react";

import { TContainerUIProps } from "../ui/container/type";
import { ContainerUI } from "../ui";

export const Container: FC<TContainerUIProps> = ({ children, className }) => (
  <ContainerUI className={className}>{children}</ContainerUI>
);
