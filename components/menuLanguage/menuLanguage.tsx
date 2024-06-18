"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { LanguageContext } from "@/src/context/LanguageContext";

export const MenuLanguage = props => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>
        <Button size="icon">
          {language == "english" ? (
            <img src="/usaFlag.svg" className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <img src="/brazilFlag.svg" className="absolute h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("english")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("portuguese")}>Portuguese</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
