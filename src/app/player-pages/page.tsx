"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

export default function PlayerPage() {
  const { theme, setTheme } = useTheme();

  return (
    
    <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
       <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-100 dark:bg-gray-900 w-full fixed top-0 z-10">
        <div className="container mx-auto flex items-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="absolute top-0 left-0 m-4">
      <Button variant="outline" size="icon" onClick={handleClick}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
    </div>
      </header>
      <div className="flex flex-col items-center w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h4 className="mb-6 text-xl tracking-tight">
          Listen and type what you hear in the input below without being
          concerned about capitalization and punctuation.
        </h4>
        <audio controls className="w-full mb-6">
          <source src="speech.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-blue-h1 dark:text-blue-400 mb-6">
          What did you hear?
        </h3>
        <Input
          type="text"
          placeholder="Type here"
          className="w-full p-4 mb-6 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button className="w-full px-6 py-3 font-semibold text-white bg-black rounded-lg hover:bg-gray-900 focus:outline-none">
          Submit
        </button>
      </div>

    
    </main>
  );
}
const handleClick = () => {
  window.location.href = 'http://localhost:3000';
};