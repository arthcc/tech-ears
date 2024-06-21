import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "@/app/_components/providers/providers";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "TechEars",
  description: "From developers to developers: Learn English by Listening"
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />

        <title>Tech Ears </title>
        <meta name="title" content="Tech Ears " />
        <meta
          name="description"
          content="Improve your listening with just a few minutes per day!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://i.ibb.co/Y8wQBy1/og.png" />
        <meta property="og:title" content="Tech Ears " />
        <meta
          property="og:description"
          content="Improve your listening with just a few minutes per day!"
        />
        <meta property="og:image" content="https://i.ibb.co/Y8wQBy1/og.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://i.ibb.co/Y8wQBy1/og.png" />
        <meta property="twitter:title" content="Tech Ears " />
        <meta
          property="twitter:description"
          content="Improve your listening with just a few minutes per day!"
        />
        <meta property="twitter:image" content="https://i.ibb.co/Y8wQBy1/og.png" />

        <body className={GeistSans.className}>
          <SpeedInsights />
          <Analytics />
          <Providers>{children}</Providers>
        </body>
        {/* eslint-disable prettier/prettier */}
        <GoogleAnalytics gaId="G-R5SCDC4C8D" />
      </html>
    </>
  );
}
