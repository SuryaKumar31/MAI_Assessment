import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import LayoutClient from "./components/LayoutClient";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Find Trusted Stones & Masons in UK | Myproject.ai",
  description: "MAI Homepage Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} min-h-full flex flex-col`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
