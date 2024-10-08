"use client";

import { SessionProvider } from "next-auth/react";
import store from "./store";
import { Provider } from "react-redux";

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <SessionProvider>{children}</SessionProvider>
    </Provider>
  );
};
