import { AppHeader, Categories, Footer } from "@/components";
import { cn } from "@/lib/utils";

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <>
      <header className={cn("mt-6 header")}>
        <AppHeader />
        <Categories />
      </header>
      <main className="main">{children}</main>
      <Footer></Footer>
      {modal}
    </>
  );
}
