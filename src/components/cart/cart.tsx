"use client";
import { FC } from "react";
import { CartItemUI } from "../ui/cart-item";
import { cn } from "@/lib/utils";
import { Container } from "../container";

export const Cart: FC = ({}) => {
  return (
    <Container className={cn("flex-col")}>
      <div className="flex flex-col gap-6">
        <CartItemUI
          id={0}
          imageUrl={"https://dummyimage.com/600x400/cc0ecc/00ff95"}
          title={"КРОССОВКИ NIKE AIR PRESTO"}
          price={3490}
          size={35}
          article={12345}
          count={1}
        ></CartItemUI>
        <CartItemUI
          id={0}
          imageUrl={"https://dummyimage.com/600x400/cc0ecc/00ff95"}
          title={"КРОССОВКИ NIKE AIR PRESTO"}
          price={3490}
          size={35}
          article={12345}
          count={1}
        ></CartItemUI>
        <CartItemUI
          id={0}
          imageUrl={"https://dummyimage.com/600x400/cc0ecc/00ff95"}
          title={"КРОССОВКИ NIKE AIR PRESTO"}
          price={3490}
          size={35}
          article={12345}
          count={1}
        ></CartItemUI>
      </div>
      <div>Form userData?: </div>
    </Container>
  );
};
