import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin", "latin-ext"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mateusz Kierat – Trening motoryczny i rehabilitacja",
  description:
    "Trening motoryczny i rehabilitacja online pod opieką trenera i fizjoterapeuty w jednym. Zbuduj ciało odporne na kontuzje.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
