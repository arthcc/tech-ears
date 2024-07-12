import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "@/providers/ThemeProviders";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { GeistSans } from "geist/font/sans";
import Footer from "@/components/Footer/Footer";
import GoogleAnalytics from "@/components/googleAnalytics/Analytics";

export const metadata: Metadata = {
  title: "TechEars",
  description: "From developers to developers: Learn English by Listening"
};

interface RootLayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <GoogleAnalytics />
        <head />

        <title>TechEars </title>

        <meta name="title" content="TechEars " />
        <meta
          name="description"
          content="Improve your listening with just a few minutes per day!"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://i.ibb.co/0s4Jnmr/Whats-App-Image-2024-07-10-at-22-18-27.jpg"
        />
        <meta property="og:title" content="TechEars " />
        <meta
          property="og:description"
          content="Improve your listening with just a few minutes per day!"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/0s4Jnmr/Whats-App-Image-2024-07-10-at-22-18-27.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://i.ibb.co/0s4Jnmr/Whats-App-Image-2024-07-10-at-22-18-27.jpg"
        />
        <meta property="twitter:title" content="TechEars " />
        <meta
          property="twitter:description"
          content="Improve your listening with just a few minutes per day!"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/0s4Jnmr/Whats-App-Image-2024-07-10-at-22-18-27.jpg"
        />

        <body className={GeistSans.className}>
          <SpeedInsights />
          <Analytics />
          <Providers>
            <div className=" flex flex-col justify-between bg-white  h-svh md:h-screen">
              {children}
              <Footer />
            </div>
          </Providers>
        </body>
      </html>
    </>
  );
}
