"use client";

import React, { FC } from "react";

import { Button } from "../ui";
import { LoginForm } from "./login-form";
import { RegisterForm } from "./register-form";

export const AuthPage: FC = () => {
  const [type, setType] = React.useState<"login" | "register">("login");

  const onSwitchType = () => {
    setType(type === "login" ? "register" : "login");
  };

  return (
    <>
      <div className="mt-8">
        {type === "login" ? <LoginForm /> : <RegisterForm />}

        <div className="flex gap-2"></div>

        <Button
          variant="outline"
          onClick={onSwitchType}
          type="button"
          className="h-12 mt-4 w-full"
        >
          {type !== "login" ? "Войти" : "Регистрация"}
        </Button>
      </div>
    </>
  );
};
