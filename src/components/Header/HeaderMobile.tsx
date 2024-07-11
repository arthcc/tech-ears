"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Menu, X } from "lucide-react";
import { MainButton } from "../PrimaryButton";
import { AlertPixIcon } from "../Icons/alertpix";

export default function HeaderMobile() {
  const [menuMobile, setMenuMobile] = useState(false);

  const handleMenu = () => setMenuMobile(!menuMobile);

  return (
    <header className="flex sm:hidden px-4 lg:px-6 h-14 items-center bg-trasparent w-full fixed top-0 z-10">
      <div className="sm:container pt-4 mx-auto flex items-center justify-between w-full">
        <div className="flex items-center"></div>
        <div className="flex items-center space-x-4">
          <Button
            onClick={handleMenu}
            className="border-none bg-transparent pr-0 hover:bg-transparent"
          >
            <Menu size={20} className="text-gray-800 dark:text-black" />
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

        {/* the content at the start and the close button at the end looks better then all of them at the end */}

        <div
          className={`${
            menuMobile ? "right-0" : "-right-[220px]"
          } duration-300 absolute w-[220px] h-screen bg-background top-0 z-20`}
        >
          <div className="w-full flex justify-end p-4">
            <Button
              onClick={handleMenu}
              variant="ghost"
              className="mr-3 mb-4 px-3 text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
            >
              <X className="text-gray-800 dark:text-gray-200" />
            </Button>
          </div>

          <div className="flex items-start flex-col p-4">
            
            <Link
              href="https://www.alertpix.live/thurrdev"
              target="_blank"
            >
              <MainButton
                icon={<AlertPixIcon />}
                className="text-button-main border border-solid-100 gap-x-2 px-4 py-2"
              />
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
