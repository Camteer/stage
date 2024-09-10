import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import { ClientProvider } from "@/store/StoreProvider";

const inter = Montserrat({
  subsets: ["cyrillic"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Stage",
  description: "choose store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/STAGE.svg" />
      </head>

      <ClientProvider>
        <body className={inter.className} suppressHydrationWarning={true}>
          {children}
        </body>
      </ClientProvider>
    </html>
  );
}
