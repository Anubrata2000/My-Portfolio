import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ChatWidget from "@/components/ChatWidget";

// Load the Inter font from Google Fonts with Latin support
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anubrata Chatterjee | Software Developer",
  description: "Portfolio of Anubrata Chatterjee, a Software Developer specializing in robust backend systems, scalable architecture, and modern web applications using Laravel, Java, and Next.js.",
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
        <SpeedInsights />
      </body>
    </html>
  );
}
