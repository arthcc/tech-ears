"use client";

import { AudioServer } from "@/components/audioServer/audioServer";
import { BackMenu } from "@/components/backMenu/backMenu";
import MenuTheme from "@/components/menuTheme/menuTheme";
import { TextInput } from "@/components/textInput/textInput";

export default function PlayerPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-100 dark:bg-gray-900 w-full fixed top-0 z-10">
        <div className="container mx-auto flex items-center justify-end">
          <MenuTheme />
        </div>
        <div className="absolute top-0 left-0 m-4">
          <BackMenu />
        </div>
      </header>
      <div className="flex flex-col items-center w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h4 className="mb-6 text-xl tracking-tight">
          Listen and type what you hear in the input below without being
          concerned about capitalization and punctuation.
        </h4>
        <AudioServer />
        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-blue-h1 dark:text-blue-400 mb-6">
          What did you hear?
        </h3>
        <TextInput />
        <button className="w-full px-6 py-3 font-semibold text-white bg-black rounded-lg hover:bg-gray-900 focus:outline-none">
          Submit
        </button>
      </div>
    </main>
  );
}
