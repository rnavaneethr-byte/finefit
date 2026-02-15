import type { Metadata } from "next";

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Finfit - Bespoke Tailoring",
  description: "Traditional craftsmanship and outstanding workmanship, tailored to perfection since 2008. Bespoke tailoring services in Bahrain with 46 years of expertise.",
  keywords: "bespoke tailoring, custom suits, Bahrain tailoring, luxury clothing, handcrafted suits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
