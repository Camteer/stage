"use client";

import React, { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { registerUser } from "@/app/actions";

import { formRegisterSchema, TFormRegisterValues } from "@/lib/shema-form";
import { FormInput } from "../form-input";
import { Button } from "../ui";
import { useRouter } from "next/navigation";
import { Title } from "../title";

export const RegisterForm: FC = () => {
  const router = useRouter();
  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });
      router.replace("/profile");
    } catch (error) {}
  };

  return (
    <FormProvider {...form}>
      <Title title="Регистрация" className="font-bold mb-4" />
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormInput name="email" label="E-Mail" required />
        <FormInput name="fullName" label="Полное имя" required />
        <FormInput name="password" label="Пароль" type="password" required />
        <FormInput
          name="confirmPassword"
          label="Подтвердите пароль"
          type="password"
          required
        />

        <Button className="h-12 text-base" type="submit">
          Зарегистрироваться
        </Button>
      </form>
    </FormProvider>
  );
};
