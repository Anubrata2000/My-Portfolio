import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Anubrata Chatterjee",
              "url": "https://anubratachatterjee.vercel.app",
              "jobTitle": "Software Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Appycodes"
              },
              "sameAs": [
                "https://linkedin.com/in/anubrata-chatterjee-9a588b246",
                "https://github.com/Anubrata2000",
                "https://x.com/anubrata2000"
              ],
              "description": "Software Developer specialized in building scalable backend systems and high-performance web applications."
            })
          }}
        />
      </body>
    </html>
  );
}
