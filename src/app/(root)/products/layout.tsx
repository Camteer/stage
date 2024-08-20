import { AppHeader, Categories } from "@/components";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stage",
  description: "choose store",
};

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <header className={cn("mt-6 header")}>
        <AppHeader />
        <Categories />
      </header>
      {children}
      {modal}
    </main>
  );
}
