"use client";

import { AudioServer } from "@/components/audioServer/audioServer";
import { BackMenu } from "@/components/backMenu/backMenu";
import MenuTheme from "@/components/menuTheme/menuTheme";
import { TextInput } from "@/components/textInput/textInput";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function PlayerPage() {
  const [inputValue, setInputValue] = useState("");
  const [correction, setCorrection]: any = useState("");
  let mockCorrectAnswer: any = "Hello how can I help you today";
  mockCorrectAnswer = mockCorrectAnswer.split(" ");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCorrection(compareAnswer(inputValue, mockCorrectAnswer));
  };

  const compareAnswer = (inputValue, correctAnswer) => {
    const inputWords = inputValue.split(" ");
    return correctAnswer.map((word, index) => {
      if (word !== inputWords[index]) {
        return (
          <span key={index} className="text-red-500 ml-1">
            {" "}
            {word}{" "}
          </span>
        );
      } else {
        return (
          <span key={index} className="text-green-500 ml-1">
            {word}{" "}
          </span>
        );
      }
    });
  };

  return (
    <>
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
          <form className="w-full flex flex-col items-center" onSubmit={handleSubmit}>
            <TextInput
              placeholder="Enter your text"
              value={inputValue}
              onChange={handleChange}
            />
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="mt-4" variant="outline">
                  Submit
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Results</AlertDialogTitle>
                  <AlertDialogDescription>
                    <h1 className="w-full flex justify-center mt-5">
                      {correction}
                    </h1>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                  <AlertDialogAction>Share</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </form>
        </div>
      </main>
    </>
  );
}