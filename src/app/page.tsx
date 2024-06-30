"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "../../components/header/Header";
import { PlayIcon } from "../../public/icons/playIcon";
import MainButton from "../../components/mainButton/button";
import SecondButton from "../../components/secondButton/button";
import { LeadBoardIcon } from "../../public/icons/leadboardIcon";
import { HowToPlayIcon } from "../../public/icons/howPlay";
import { Icon } from "../../public/icons/icon";
export default function HomePage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col h-screen">
      <GoogleAnalytics gaId="G-R5SCDC4C8D" />
      <Header />
      <main className="flex flex-col items-center justify-center flex-grow p-6 bg-white">
        <div className="hero-background w-full h-full absolute top-0 left-0"></div>
        <div className="flex flex-col space-y-4">
          <Icon />
        </div>
        <div className="flex flex-col space-y-4 mt-20">

          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6 relative z-10">
            The
            <span className="text-mirage-500 dark:text-blue-400"> newest way </span>
            to Learn English
          </h1>
        </div>

        <p className="mt-4 text-lg mb-6 relative z-10">
          <span> Improve your listening with just a few minutes per day!</span>
        </p>
        <div className="flex gap-4 flex-col w-[280px]">
          <Link href="/player-pages" className="w-full">
            <MainButton text="Play Now" icon={<PlayIcon />} />
          </Link>
          <div className="w-full">
            <SecondButton text="Leaderboard" icon={<LeadBoardIcon />} />
          </div>
          <div className="w-full">
            <SecondButton text="How to Play?" icon={<HowToPlayIcon />} />
          </div>
        </div>
      </main>
    </div>
  );
}
