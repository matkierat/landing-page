import type { Metadata } from "next";
import { Manrope, Raleway } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin", "latin-ext"],
  variable: "--font-raleway",
  display: "swap",
});

const title = "Mateusz Kierat – Trening motoryczny i rehabilitacja";
const description =
  "Trening motoryczny i rehabilitacja online pod opieką trenera i fizjoterapeuty w jednym. Zbuduj ciało odporne na kontuzje.";

export const metadata: Metadata = {
  metadataBase: new URL("https://landing-page-blush-zeta-99.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Mateusz Kierat",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${manrope.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
