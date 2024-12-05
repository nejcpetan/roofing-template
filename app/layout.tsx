import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strešne Mojstrovine | Profesionalne Strešne Rešitve",
  description:
    "Vrhunske strešne storitve za vaš dom in poslovne objekte. Več kot 15 let izkušenj v strešnih delih.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl">
      <body className={inter.className}>
        <Navbar companyName="Strešne Mojstrovine" />
        {children}
        <Footer companyName="Strešne Mojstrovine" />
      </body>
    </html>
  );
}
