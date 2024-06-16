"use client";

import { AudioServer } from "@/components/audioServer/audioServer";
import { BackMenu } from "@/components/backMenu/backMenu";
import MenuTheme from "@/components/menuTheme/menuTheme";
import { TextInput } from "@/components/textInput/textInput";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function PlayerPage() {
  const [inputValue, setInputValue] = useState("");
  const [correction, setCorrection]: any = useState("");
  const [currentDate, setCurrentDate] = useState("");
  let mockCorrectAnswer: any = "Hello how can I help you today";
  mockCorrectAnswer = mockCorrectAnswer.split(" ");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    const options = { year: 'numeric' as const, month: 'long' as const, day: 'numeric' as const };
    setCurrentDate(new Date().toLocaleDateString('en-US', options));
    e.preventDefault();
    setCorrection(compareAnswer(inputValue, mockCorrectAnswer));
  };
  const handlePlayAgain = () => {
    setInputValue("");
    setCorrection("");
    setCurrentDate("");
  };
  const handleShareProgress = () => {
    const tweetText = "I just used TechEars to practice my English, join me at: techears.vercel.app";
    const twitterUrl = `https://x.com/compose/post?text=${encodeURIComponent(tweetText)}`;
    window.open(twitterUrl, '_blank');
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
            <div className="h-4 w-4" >
            <MenuTheme />
            </div>
          
          </div>
          <div className="absolute top-0 left-0 m-4">
            <BackMenu />
          </div>
        </header>
        <div className="flex flex-col items-center w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          {!correction && (
            <>
              <h4
                className="mt-6 text-2xl font-semibold tracking-tight text-blue-h1 dark:text-blue-400 mb-6 "
                style={{ textAlign: "justify" }}
              >
                Listen and type what you hear in the input below.
              </h4>

              <AudioServer />

      
              <form
                className="w-full flex flex-col items-center"
                onSubmit={handleSubmit}
              >
                <TextInput
                  placeholder="Enter your text"
                  value={inputValue}
                  onChange={handleChange}
                />
                <Button
                  className="mt-4"
                  
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </form>
            </>
          )}

          {correction && (
            <>
            <h2 className="w-full flex justify-center mt-2">Tech Ears</h2>
            <h1 className="w-full flex justify-center mt-2">
                {currentDate}
              </h1>
              
              <h1 className="w-full flex justify-center mt-5"> Today's phrase: {correction}</h1>
              <p className="w-full flex justify-center mt-2">
                Your input: {inputValue}
              </p>
            
              <div className="flex mt-4">
                <Button className="mr-4" onClick={handleShareProgress}>
                  Share Progress
                </Button>
                <Button variant="outline" onClick={handlePlayAgain}>
                  Play Again
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}
