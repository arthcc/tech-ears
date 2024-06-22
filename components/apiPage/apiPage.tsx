"use client";

import React, { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import { AudioButton } from "@/app/_components/AudioButton/AudioButton";

const phrases = {
  backEnd: [
    "Optimizing database queries for performance",
    "Implementing RESTful APIs for seamless integration",
    "Ensuring secure authentication and authorization",
    "Refactoring legacy code for better maintainability",
    "Scaling the server infrastructure for high traffic",
    "Automating deployment with CI/CD pipelines",
    "Monitoring server health with logging and alerts",
    "Managing microservices with container orchestration",
    "Integrating third-party services via APIs",
    "Handling data migrations with minimal downtime",
  ],
  frontEnd: [
    "Building responsive UIs with modern frameworks",
    "Enhancing user experience with intuitive designs",
    "Debugging front-end issues with browser dev tools",
    "Implementing state management for complex apps",
    "Optimizing load times with code splitting",
    "Ensuring cross-browser compatibility",
    "Using CSS preprocessors for better styling",
    "Integrating front-end with back-end APIs",
    "Creating interactive components with JavaScript",
    "Testing UI components for consistency",
  ],
  softSkills: [
    "Communicating effectively with team members",
    "Collaborating on code reviews for quality assurance",
    "Managing time efficiently to meet deadlines",
    "Adapting to new technologies and tools",
    "Providing constructive feedback during meetings",
    "Prioritizing tasks based on project goals",
    "Mentoring junior developers to foster growth",
    "Resolving conflicts with a positive attitude",
    "Documenting code and processes for clarity",
    "Balancing work and life for overall well-being",
  ],
};

export const ApiPage = () => {
const getRandomPhrase = () => {
  const categories = Object.keys(phrases);
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const phrasesInCategory = phrases[randomCategory];
  return phrasesInCategory[
    Math.floor(Math.random() * phrasesInCategory.length)
  ];
};


  const [inputValue, setInputValue] = useState("");
  const [correction, setCorrection] = useState<JSX.Element[]>([]);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [randomPhrase, setRandomPhrase] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [rounds, setRounds] = useState<number>(0);

  const fetchRandomPhrase = async () => {
    const phrase = getRandomPhrase();
    setRandomPhrase(phrase);
    try {
      const options = {
        method: "POST",
        headers: {
          "xi-api-key": process.env.ELEVENLABS_API_KEY!,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: phrase,
          voice_settings: {
            stability: 1,
            similarity_boost: 1,
          },
        }),
      };

      const response = await fetch(
        "https://api.elevenlabs.io/v1/text-to-speech/iP95p4xoKVk53GoZ742B",
        options
      );

      if (!response.ok) {
        setErrorMessage("Failed to fetch the audio.");
        console.error("Failed to fetch the audio");
        return null;
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      setAudioSrc(audioUrl);
      return audioUrl;
    } catch (error) {
      setErrorMessage("Error fetching the audio");
      console.error("Error fetching audio:", error);
      return null;
    }
  };

  useEffect(() => {
    const cookieRounds = getCookie("rounds");

    if (cookieRounds) setRounds(+cookieRounds);
    if (!(+cookieRounds >= 5)) {
      fetchRandomPhrase();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCorrection(compareAnswer(inputValue.trim(), randomPhrase.split(" ")));
  };

  const handlePlayAgain = () => {
    const ONE_DAY_MS = 24 * 60 * 60 * 1000;
    const now = new Date();
    setCookie("rounds", `${rounds + 1}`, {
      expires: new Date(now.getTime() + ONE_DAY_MS),
    });
    setRounds((prev) => prev + 1);
    setInputValue("");
    setCorrection([]);
    fetchRandomPhrase();
  };

  const handleShareProgress = () => {
    const tweetText =
      "I just used TechEars to practice my English ✨, join me at: tech-ears.vercel.app";
    const twitterUrl = `https://twitter.com/compose/tweet?text=${encodeURIComponent(
      tweetText
    )}`;
    window.open(twitterUrl, "_blank");
  };

  const compareAnswer = (inputValue: string, correctAnswer: string[]) => {
    const inputWords = inputValue.toLowerCase().split(" ");
    const correctWords = correctAnswer.map((word) => word.toLowerCase());
    return correctAnswer.map((word, index) => {
      if (correctWords[index] !== inputWords[index]) {
        return (
          <span key={index} className="text-red-500 ml-1">
            {word}
          </span>
        );
      } else {
        return (
          <span key={index} className="text-green-500 ml-1">
            {word}
          </span>
        );
      }
    });
  };

  return (
    <>
      <div className="flex flex-col items-center w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        {!correction.length && (
          <>
            {errorMessage && (
              <h4 className="w-full bg-red-900 text-center p-2 rounded-lg font-semibold">
                {errorMessage}
              </h4>
            )}
            <h4
              className="mt-6 text-2xl font-semibold tracking-tight text-blue-h1 dark:text-blue-400 mb-6"
              style={{ textAlign: "justify" }}
            >
              Listen and type what you hear in the input below.
            </h4>

            {rounds >= 5 ? (
              <p className="w-full flex justify-center mt-2">
                You exceeded your daily quota of 5 lessons
              </p>
            ) : (
              <>
                {audioSrc && <AudioButton src={audioSrc} />}
                <form
                  className="w-full max-w-md flex flex-col items-center px-10"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    placeholder="Enter your text"
                    value={inputValue}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md px-3 py-2 mt-4 w-full"
                  />
                  <button
                    type="submit"
                    className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full"
                  >
                    Submit
                  </button>
                </form>
              </>
            )}
          </>
        )}

        {correction.length > 0 && (
          <>
            <h2 className="w-full flex justify-center mt-2">✨ Tech Ears</h2>
            <h1 className="w-full flex justify-center mt-2">
              {new Date().toLocaleDateString("en-US")}
            </h1>
            <h1 className="w-full flex justify-center mt-5"> {correction}</h1>
            <p className="w-full flex justify-center mt-2">
              {" "}
              Your input: {inputValue}
            </p>
            <div className="flex mt-4">
              <button
                className="mr-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={handleShareProgress}
              >
                Share Progress
              </button>

              <button
                className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-100"
                onClick={handlePlayAgain}
              >
                Play Again
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
