"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { GoogleAnalytics } from '@next/third-parties/google'
import Header from "./_components/header/Header";
import { Button } from "./_components/ui/button";
import MenuTheme from "./_components/menuTheme/menuTheme";


export default function HomePage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col min-h-screen">
      <GoogleAnalytics gaId="G-R5SCDC4C8D" />
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow p-6 bg-gray-100 dark:bg-gray-900 pt-20 lg:pt-24 space-y-8">
        <div className="hero-background w-full h-full absolute top-0 left-0 z-0"></div>
        <h1 className="text-4xl font-bold tracking-tight text-center lg:text-left lg:text-5xl relative z-10">
          The
          <span className="text-mirage-500 dark:text-blue-400">
            {" "}
            newest way{" "}
          </span>
          to Learn English
        </h1>

        <h3 className="mt-4 text-2xl text-center lg:text-left font-semibold tracking-tight text-mirage-600 dark:text-blue-400 mb-6 relative z-10">
          Improve your listening with just a few minutes per day!
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
