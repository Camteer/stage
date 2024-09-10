"use client";

import { FC } from "react";
import { Container } from "../container";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formRegisterSchema, TFormRegisterValues } from "@/lib/shema-form";
import { signOut } from "next-auth/react";
import { Button } from "../ui";
import { FormInput } from "../form-input";
import { updateUserInfo } from "@/app/actions";
import { deleteCookie } from 'cookies-next';
import { User } from "@prisma/client";

interface Props {
  data: User;
}
export const ProfileUI: FC<Props> = ({ data }) => {
  
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
    } catch (error) {
    } 
  };

  const onClickSignOut = () => {
    signOut({
      callbackUrl: "/",
      
    });
    deleteCookie("cartToken")
  };
  return (
    <>
      <Container className="">
        <div>
          <FormProvider {...form}>
            <form
              className="flex flex-col gap-5 w-96 mt-10"
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
        <div className="w-4 h-4 bg-red-500"></div>
      </Container>
    </>
  );
};
