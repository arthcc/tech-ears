"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "../components/header/Header";
import { PlayIcon } from "../components/icons/playIcon";
import { MainButton } from "../components/mainButton/button";
import {SecondButton }from "../components/secondButton/button";
import { LeadBoardIcon } from "../components/icons/leadboardIcon";
import { HowToPlayIcon } from "../components/icons/howPlay";
import { Icon } from "../components/icons/icon";
export default function HomePage() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="md:overflow-hidden flex flex-col h-screen">
      <GoogleAnalytics gaId="G-R5SCDC4C8D" />
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow p-6 bg-white">
        <div className="">
          <Icon />
        </div>
        <div className="flex flex-col mt-20 text-black">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6 relative z-0">
            The
            <span className="text-mirage-500 dark:text-blue-400"> newest way </span>
            to Learn English
          </h1>
        </div>

        <p className="mt-4 text-lg mb-6 text-[#747883]">
          <span> Improve your listening with just a few minutes per day!</span>
        </p>
        <div className="flex gap-4 flex-col w-[280px]">
          <Link href="/game" className="w-full">
            <MainButton text="Play Now" icon={<PlayIcon />} />
          </Link>
          <div className="w-full">
            <SecondButton text="Leaderboard" icon={<LeadBoardIcon />} />
          </div>
          <div className="w-full">
            <SecondButton text="How to Play?" icon={<HowToPlayIcon />} />
          </div>
        </div>
      </div>
    </div>
  );
}
