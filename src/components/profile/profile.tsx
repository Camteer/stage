"use client";

import { FC, useEffect } from "react";
import { Container } from "../container";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formRegisterSchema, TFormRegisterValues } from "@/lib/shema-form";
import { signOut } from "next-auth/react";
import { Button } from "../ui";
import { FormInput } from "../form-input";
import { updateUserInfo } from "@/app/actions";
import { deleteCookie } from "cookies-next";
import { User } from "@prisma/client";

import { useDispatch, useSelector } from "@/store/store";
import { fetchOrders, getOrders } from "@/store/slices/ordersSlice";
import { Title } from "../title";
import { cn } from "@/lib/utils";
import { OrdersUI } from "../ui/orders";

interface Props {
  data: User;
}
export const ProfileUI: FC<Props> = ({ data }) => {
  const dispatch = useDispatch();
  const userOrders = useSelector(getOrders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);
  console.log(userOrders);
  const form = useForm({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      fullName: data.fullName,
      email: data.email,
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await updateUserInfo({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });
    } catch (error) {}
  };

  function formatDate(dateString: string) {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat("ru-RU").format(date);
  }

  const onClickSignOut = () => {
    signOut({
      callbackUrl: "/",
    });
    deleteCookie("cartToken");
  };
  return (
    <>
      <Container className="">
        <div>
          <FormProvider {...form}>
            <form
              className="flex flex-col gap-5 w-96 "
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormInput name="email" label="E-Mail" required />
              <FormInput name="fullName" label="Полное имя" required />

              <FormInput
                type="password"
                name="password"
                label="Новый пароль"
                required
              />
              <FormInput
                type="password"
                name="confirmPassword"
                label="Повторите пароль"
                required
              />

              <Button
                disabled={form.formState.isSubmitting}
                className="text-base mt-10"
                type="submit"
              >
                Сохранить
              </Button>

              <Button
                onClick={onClickSignOut}
                variant="secondary"
                disabled={form.formState.isSubmitting}
                className="text-base"
                type="button"
              >
                Выйти
              </Button>
            </form>
          </FormProvider>
        </div>
        <div className="ml-5 w-full  ">
          <div className="flex justify-between px-5">
            <Title
              title={"Номер заказа"}
              className={cn(
                "font-bold text-[18px] leading-[21.94px] text-[#002C6A] w-[85px]"
              )}
            ></Title>
            <Title
              title={"Дата"}
              className={cn(
                "font-bold text-[18px] leading-[21.94px] text-[#002C6A]  w-[60px]"
              )}
            ></Title>
            <Title
              title={"Предметов"}
              className={cn(
                "font-bold text-[18px] leading-[21.94px] text-[#002C6A] w-[60px]"
              )}
            ></Title>
            <Title
              title={"Сумма"}
              className={cn(
                "font-bold text-[18px] leading-[21.94px] text-[#002C6A] w-[54px]"
              )}
            ></Title>
            <Title
              title={"Оплачено"}
              className={cn(
                "font-bold text-[18px] leading-[21.94px] text-[#002C6A] w-[63px]"
              )}
            ></Title>
          </div>
          <div className="flex flex-col gap-4 mt-5">
            {userOrders.orders.map((item, key) => (
              <OrdersUI
                key={key}
                id={item.paymentId.slice(0, 8)}
                data={formatDate(item.updatedAt)}
                count={item.items.length}
                total={item.totalAmount}
                pending={item.status == "SUCCEEDED" ? true : false}
              ></OrdersUI>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};
