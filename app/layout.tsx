import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ChatWidget from "@/components/ChatWidget";

// Load the Inter font from Google Fonts with Latin support
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anubrata Chatterjee | Portfolio",
  description: "A sleek portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <CustomCursor />
        <ChatWidget />
        {children}
      </body>
    </html>
  );
}
