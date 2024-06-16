"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import newTabIcon from "@/components/svg/new-tab-light.png";
import MenuTheme from "@/components/menuTheme/menuTheme";

export default function HomePage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-100 dark:bg-gray-900 w-full fixed top-0 z-10">
        <div className="container mx-auto flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
              TechEars
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/about-me"
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 flex items-center"
            >
              <Button
                variant="link"
                className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
              >
                About Me
              </Button>
            </Link>
            <Link
              href="/how-to-play"
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
            >
              <Button
                variant="link"
                className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
              >
                How to Play?
              </Button>
            </Link>
            <Link
              href="https://pixmeacoffee.vercel.app/techears"
              target="_blank"
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
            >
              <Button
                variant="link"
                className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
              >
                <Image src={newTabIcon} alt="new tab" width={20} height={20} />
                Donate
              </Button>
            </Link>
          </div>
        </div>
      </header>

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
