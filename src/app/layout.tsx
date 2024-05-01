import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { bodyFont } from "@/components/fonts";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          bodyFont.className
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
