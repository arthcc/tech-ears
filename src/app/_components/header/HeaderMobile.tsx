"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ExternalLink, Menu, X } from "lucide-react";

export default function HeaderMobile() {
  const [menuMobile, setMenuMobile] = useState(false);

  const handleMenu = () => setMenuMobile(!menuMobile);

  return (
    <header className="flex sm:hidden px-4 lg:px-6 h-14 items-center bg-gray-100 dark:bg-gray-900 w-full fixed top-0 z-10">
      <div className="sm:container pt-4 mx-auto flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="text-lg font-bold text-gray-800 dark:text-gray-200">TechEars</div>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={handleMenu}
            className="border-none bg-transparent pr-0 hover:bg-transparent"
          >
            <Menu size={20} className="text-gray-800 dark:text-gray-200" />
          </Button>
        </div>
      </div>

      <div
        className={`${
          menuMobile ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } duration-300 absolute w-full h-screen top-0 left-0`}
      >
        <div
          onClick={handleMenu}
          className="content-[''] w-full h-screen bg-[rgba(0,0,0,0.4)] absolute top-0 left-0 z-10"
        />
        <div
          className={`${
            menuMobile ? "right-0" : "-right-[220px]"
          } duration-300 absolute w-[220px] h-screen bg-background top-0 z-20`}
        >
          <div className="flex items-end flex-col p-4">
            <Button
              onClick={handleMenu}
              variant="ghost"
              className="mr-3 mb-4 px-3 text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
            >
              <X className="text-gray-800 dark:text-gray-200" />
            </Button>

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
                className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 flex gap-2 items-center"
              >
                <ExternalLink size={20} />
                <span>Donate</span>
              </Button>
            </Link>
            <Link
              href="https://github.com/arthcc/tech-ears"
              target="_blank"
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
            >
              <Button
                variant="link"
                className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
              >
                GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
