import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dante Rivarola",
  description: "Work with me!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-950 text-neutral-200 max-w-screen antialiased">
      <head>
        <meta property="og:image" content="/portfolio.png" />
      </head>
      <body
        className={inter.className}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <Analytics/>
      </body>
    </html>
  );
}
