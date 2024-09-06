"use client";
import { FC, useEffect } from "react";
import { CartItemUI } from "../ui/cart-item";
import { cn } from "@/lib/utils";
import { Container } from "../container";
import { useDispatch, useSelector } from "@/store/store";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  fetchCart,
  fetchChangeCartItemCountApi,
  fetchDeleteCartItemCountApi,
  getCartItems,
  getIsLoading,
} from "@/store/slices/cartSlice";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CheckoutPersonalForm } from "../cart-form/checkout-personal-form";
import { Button } from "../ui";
import { checkoutFormSchema, CheckoutFormValues } from "@/lib/shema-form";
import { Skeleton } from "../ui/skeleton";

export const Cart: FC = ({}) => {
  const [submitting, setSubmitting] = React.useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);
  const loading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  const handelChange = (data: { id: number; quantity: number }) => {
    dispatch(fetchChangeCartItemCountApi(data));
  };

  const handelDelete = (id: number) => {
    dispatch(fetchDeleteCartItemCountApi(id));
  };

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      surname: "",
      email: "",
      phone: "",
      address: "",
      comment: "",
      region: "",
      locality: "",
      street: "",
      house: "",
      frame: "",
      apartment: "",
      index: "",
    },
  });

  const onSubmit = (data: CheckoutFormValues) => {
    console.log(data);
  };
  return (
    <Container className={cn("flex-col")}>
      <div className="flex flex-col gap-6">
        {loading
          ? Array(2)
              .fill(0)
              .map((_, key) => (
                <Skeleton key={key} className="w-[1110px] h-[310px] rounded-[20px]"></Skeleton>
              ))
          : cartItems.items?.map((item) => (
              <CartItemUI
                key={item.productItem.id}
                id={item.id}
                loading={loading}
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
        <span
          className={cn(
            "text-[48px] leading-[54.5px] font-normal mt-10 flex justify-between"
          )}
        >
          <p>Сумма к оплате:</p>{" "}
          <p className={cn("text-[#002C6A] font-bold")}>
            {cartItems.totalAmount} ₽
          </p>
        </span>
      </div>
      <div>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-10">
              <div className="flex flex-col gap-10 flex-1 mt-20">
                <CheckoutPersonalForm
                  className={loading ? "opacity-40 pointer-events-none" : ""}
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full h-14 rounded-2xl mt-10 text-base font-bold "
            >
              Перейти к оплате
            </Button>
          </form>
        </FormProvider>
      </div>
    </Container>
  );
};
