import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
