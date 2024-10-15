import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dante Rivarola",
  description: "Get in touch with Dante Rivarola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-950 text-neutral-200 max-w-screen">
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
