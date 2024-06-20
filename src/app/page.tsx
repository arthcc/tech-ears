"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MenuTheme from "@/components/menuTheme/menuTheme";
import Header from "@/components/header/Header";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function HomePage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col min-h-screen">
      <GoogleAnalytics gaId="G-R5SCDC4C8D" />
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow p-6 bg-gray-100 dark:bg-gray-900 pt-24">
        <div className="hero-background w-full h-full absolute top-0 left-0 z-0"></div>
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6 relative z-10">
          The
          <span className="text-mirage-500 dark:text-blue-400">
            {" "}
            newest way{" "}
          </span>
          to Learn English
        </h1>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-mirage-600 dark:text-blue-400 mb-6 relative z-10">
          <span> Improve your listening with just a few minutes per day!</span>
        </h3>
        <div className="flex items-center space-x-4 relative z-10">
          <Link href="/player-pages">
            <Button className="btn-primary">Get Started</Button>
          </Link>
          <MenuTheme />
        </div>
      </main>
      <footer className="bg-gray-700 dark:bg-gray-900 py-6 text-white">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Tech Ears.</p>
          <div className="flex justify-center space-x-4 mt-4">
          </div>
        </div>
      </footer>
      
    </div>
  );
}
