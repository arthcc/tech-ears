"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Header from "@/components/Header/Header";
import { PlayIcon } from "@/components/Icons/playIcon";
import { MainButton } from "@/components/PrimaryButton";
import { Icon } from "@/components/Icons/icon";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { TimeIcon } from "@/components/Icons/time";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [isLessonComplete, setIsLessonComplete] = useState(false);

  useEffect(() => {
    const lessonComplete = Cookies.get("lessonComplete");
    if (lessonComplete) {
      setIsLessonComplete(true);
    }
  }, []);

  return (
    <div className="md:overflow-hidden flex flex-col flex-1">
      <Header />
      <div className="flex flex-col items-center justify-center flex-grow p-6 bg-white h-full">
        <div className="">
          <Icon />
        </div>
        <div className="flex flex-col mt-20 text-center text-black">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-6 relative z-0">
            The
            <span className="text-mirage-500 "> newest way </span>
            to Learn English
          </h1>
        </div>
        <p className="mt-4 text-lg mb-6 text-[#747883] text-center">
          <span> Improve your listening with just a few minutes per day!</span>
        </p>
        <div className="flex gap-4 flex-col w-[280px]">
          <Link href="/game" className="w-full">
            <MainButton
              title={isLessonComplete ? "Available Tomorrow" : "Play Now"}
              icon={isLessonComplete ? <TimeIcon /> : <PlayIcon />}
              className={`bg-button-main text-white py-3 ${
                isLessonComplete ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLessonComplete}
            />
          </Link>
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
}
