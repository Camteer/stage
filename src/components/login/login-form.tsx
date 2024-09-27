import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { signIn } from "next-auth/react";
import { formLoginSchema, TFormLoginValues } from "@/lib/shema-form";
import { Title } from "../title";
import { FormInput } from "../form-input";
import { Button } from "../ui";
import { useRouter } from "next/navigation";

export const LoginForm: FC = () => {
  const router = useRouter()
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const resp = await signIn("credentials", {
        ...data,
        redirect: true,
        callbackUrl: '/profile'
      });

      if (!resp?.ok) {
        throw Error();
      }

     
    } catch (error) {
      console.error("Error [LOGIN]", error);
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center">
          <div className="mr-2">
            <Title title="Вход в аккаунт" className="font-bold mb-4"/>
            <p className="text-gray-400">
              Введите свою почту, чтобы войти в свой аккаунт
            </p>
          </div>
        </div>

        <FormInput name="email" label="E-Mail" required />
        <FormInput name="password" label="Пароль" type="password" required />

        <Button className="h-12 text-base" type="submit">
          Войти
        </Button>
      </form>
    </FormProvider>
  );
};
