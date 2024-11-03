import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { RouteProviders } from "@/components/providers/route-providers";

export const metadata: Metadata = {
  title: "Personal Finance App",
  description: "A personal finance app built with Next.js",
};

const publicSans = Public_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={publicSans.className}>
        <RouteProviders>{children}</RouteProviders>
      </body>
    </html>
  );
}
