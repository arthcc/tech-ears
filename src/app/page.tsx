"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import MenuTheme from "@/app/_components/menuTheme/menuTheme";
import Header from "@/app/_components/header/Header";
import { GoogleAnalytics } from "@next/third-parties/google";
export default function HomePage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col min-h-screen">
      <GoogleAnalytics gaId="G-R5SCDC4C8D" />
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow p-6 bg-gray-100 dark:bg-gray-900 pt-24">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
          The
          <span className="text-blue-h1 dark:text-blue-400"> newest way </span>
          to Learn English
        </h1>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-blue-h1 dark:text-blue-400 mb-6">
          Improve your listening with just a few minutes per day!
        </h3>
        <div className="flex items-center space-x-4">
          <Link href="/player-pages" className="flex items-center space-x-4">
            <Button>Get Started</Button>
          </Link>
          <div className="flex items-center space-x-4">
            <MenuTheme />
          </div>
        </div>
      </main>
    </div>
  );
}
