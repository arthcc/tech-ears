"use client";
import React, { useEffect, useState } from "react";

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

export const ListenContainer = () => {
  const getRandomPhrase = () => {
    const categories = Object.keys(phrases);
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const phrasesInCategory = phrases[randomCategory];
    const randomPhrase =
      phrasesInCategory[Math.floor(Math.random() * phrasesInCategory.length)];
    return randomPhrase;
  };

  const [inputValue, setInputValue] = useState("");
  const [correction, setCorrection] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [randomPhrase, setRandomPhrase] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const fetchRandomPhrase = () => {
      const phrase = getRandomPhrase();
      setRandomPhrase(phrase);
    };

    fetchRandomPhrase();
  }, []);

  let mockCorrectAnswer: string[] = randomPhrase.split(" ");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    const options = {
      year: "numeric" as const,
      month: "long" as const,
      day: "numeric" as const,
    };
    setCurrentDate(new Date().toLocaleDateString("en-US", options));
    e.preventDefault();
    setCorrection(compareAnswer(inputValue.trim(), mockCorrectAnswer));
  };

  const handlePlayAgain = () => {
    setInputValue("");
    setCorrection("");
    setCurrentDate("");
  };

  const handleShareProgress = () => {
    const tweetText =
      "I just used TechEars to practice my English ✨, join me at: tech-ears.vercel.app";
    const twitterUrl = `https://twitter.com/compose/tweet?text=${encodeURIComponent(
      tweetText
    )}`;
    window.open(twitterUrl, "_blank");
  };

  const playAudio = () => {
    setPlaying(true);
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    const voice = synth.getVoices()[30];
    utterance.text = randomPhrase;
    utterance.rate = 0.95;
    utterance.voice = voice;

    console.log(synth.getVoices());
    synth.speak(utterance);
    setPlaying(false);
  };

  const compareAnswer = (inputValue, correctAnswer) => {
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
    <div className="flex flex-col items-center w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {!correction && (
        <>
          {errorMessage && (
            <h4 className="w-full bg-red-900 text-center p-2 rounded-lg font-semibold">
              {errorMessage}
            </h4>
          )}
          <h4
            className="mt-6 text-2xl font-semibold tracking-tight text-blue-h1 dark:text-blue-400 mb-6 "
            style={{ textAlign: "justify" }}
          >
            Listen and type what you hear in the input below.
          </h4>
          {!playing && (
            <button onClick={() => playAudio()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            </button>
          )}
          {playing && (
            <button onClick={() => playAudio()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              </svg>
            </button>
          )}
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

      {correction && (
        <>
          <h2 className="w-full flex justify-center mt-2">✨ Tech Ears</h2>
          <h1 className="w-full flex justify-center mt-2">{currentDate}</h1>
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
  );
};
