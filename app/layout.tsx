import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load the Inter font from Google Fonts with Latin support
const inter = Inter({ subsets: ["latin"] });

// Metadata controls the SEO tags like <title> and <meta description>
export const metadata: Metadata = {
  title: "My Modern Portfolio",
  description: "A sleek portfolio built with Next.js and Tailwind CSS",
};

/*
  RootLayout is the main wrapper for your entire application.
  Every page content (children) is rendered inside the <body> tag here.
  This is where you set global fonts and the <html lang="en"> tag.
*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      {/* className={inter.className} applies the font globally */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
