"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import MenuTheme from "@/components/menuTheme/menuTheme";
import Header from "@/components/header/Header";
import { GoogleAnalytics } from "@next/third-parties/google";
import { LanguageContext } from "../context/LanguageContext";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const { language } = React.useContext(LanguageContext);

  return (
    <div className="flex flex-col min-h-screen">
      <GoogleAnalytics gaId="G-R5SCDC4C8D" />
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow p-6 bg-gray-100 dark:bg-gray-900 pt-24">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6">
          {language == "english" ? "The" : "A"}
          <span className="text-blue-h1 dark:text-blue-400">
            {language == "english" ? " newest way " : " nova maneira "}
          </span>
          {language == "english" ? " to Learn English " : " para Aprender Inglês "}
        </h1>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-blue-h1 dark:text-blue-400 mb-6">
          {language == "english"
            ? "Improve your listening with just a few minutes per day!"
            : "Melhore sua audição com apenas alguns minutos por dia!"}
        </h3>
        <div className="flex items-center space-x-4">
          <Link href="/player-pages" className="flex items-center space-x-4">
            <Button>{language == "english" ? "Get Started" : "Começar"}</Button>
          </Link>
          <div className="flex items-center space-x-4">
            <MenuTheme />
          </div>
        </div>
      </main>
    </div>
  );
}
