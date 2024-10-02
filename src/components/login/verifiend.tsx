"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { VerifiendUserApi } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Пароль должен содеражть 6 цифр",
  }),
});

export function Verifiend() {
  const router = useRouter();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await VerifiendUserApi(data.pin).then((res) => {
      if (res.ok) {
        router.push("/login");
      } else {
        form.reset({ pin: "" });
      }
    });
  }

  useEffect(() => {}, [form]);
  return (
    <div className="mt-[114px] min-h-full mb-[100px]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Разовый пароль</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription>Введите код с почты</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <></>
          <Button type="submit" className="h-12 mt-4 w-full">
            Подтвердить
          </Button>
        </form>
      </Form>
    </div>
  );
}
