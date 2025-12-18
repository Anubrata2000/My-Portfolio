import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ChatWidget from "@/components/ChatWidget";

// Load the Inter font from Google Fonts with Latin support
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Anubrata Chatterjee | Software Developer",
    template: "%s | Anubrata Chatterjee",
  },
  description:
    "Portfolio of Anubrata Chatterjee, a Software Developer specializing in robust backend systems, scalable architecture, and modern web applications using Laravel, Java, and Next.js.",
  keywords: [
    "Anubrata Chatterjee",
    "Software Developer",
    "Backend Engineer",
    "Full Stack Developer",
    "Laravel",
    "Java",
    "Next.js",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Anubrata Chatterjee" }],
  creator: "Anubrata Chatterjee",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anubratachatterjee.vercel.app",
    title: "Anubrata Chatterjee | Software Developer",
    description:
      "Expert Software Developer specializing in scalable backend systems and modern web technologies. View my portfolio/projects.",
    siteName: "Anubrata Chatterjee Portfolio",
    images: [
      {
        url: "https://anubratachatterjee.vercel.app/og-image.png", // Ensure you have an og-image.png in public folder or update this
        width: 1200,
        height: 630,
        alt: "Anubrata Chatterjee Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anubrata Chatterjee | Software Developer",
    description:
      "Building robust systems and scalable web applications. Check out my work.",
    images: ["https://anubratachatterjee.vercel.app/og-image.png"],
    creator: "@anubrata2000",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://anubratachatterjee.vercel.app",
  },
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
        <SpeedInsights />
      </body>
    </html>
  );
}
