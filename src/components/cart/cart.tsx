"use client";
import { FC } from "react";
import { CartItemUI } from "../ui/cart-item";
import { cn } from "@/lib/utils";
import { Container } from "../container";
import { useDispatch, useSelector } from "@/store/store";
import {
  fetchCart,
  fetchChangeCartItemCountApi,
  fetchDeleteCartItemCountApi,
  getCartItems,
  getIsLoading,
} from "@/store/slices/cartSlice";
import React from "react";

export const Cart: FC = ({}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const loading = useSelector(getIsLoading);
  cartItems.items?.map((item) => {
    console.log(item.size);
  });
  React.useEffect(() => {
    dispatch(fetchCart());
  }, []);
  const handelChange = (data: {id: number, quantity: number}) => {
    dispatch(fetchChangeCartItemCountApi(data))
  }
  const handelDelete = (id: number) => {
    dispatch(fetchDeleteCartItemCountApi(id))
  }
  return (
    <Container className={cn("flex-col")}>
      <div className="flex flex-col gap-6">
        {cartItems.items?.map((item) => (
          <CartItemUI
            key={item.productItem.id}
            id={item.id}
            loading= {loading}
            imageUrl={item.productItem.image[0]}
            title={item.productItem.name}
            price={item.productItem.price}
            size={item.size ? item.size : 1}
            article={12345}
            count={item.quantity}
            increment={handelChange}
            decrement={handelChange}
            deleteItem={handelDelete}
          ></CartItemUI>
        ))}
        {cartItems.totalAmount}
      </div>
      <div>Form userData?: </div>
    </Container>
  );
};
