"use client";
import type { Metadata } from "next";

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import useParallaxScroll from "../utils/useParallaxScroll";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useParallaxScroll();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="bg-white min-h-screen flex flex-col animate-royal-fade">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
