;"use client";

import { Progress } from "@/app/_components/ui/progress";
import { getCookie, setCookie } from "cookies-next";
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { ACTIONS } from "./actions";

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
    "Optimizing database indexes for faster query performance",
    "Implementing GraphQL endpoints for flexible data retrieval",
    "Securing API endpoints against potential vulnerabilities",
    "Refactoring monolithic applications into microservices",
    "Designing caching strategies to improve response times",
    "Automating database backups and disaster recovery",
    "Analyzing server logs to optimize resource utilization",
    "Deploying serverless functions for cost-efficient scaling",
    "Integrating OAuth for third-party authentication",
    "Managing secrets and environment variables securely"
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
    "Implementing lazy loading to improve initial page load times",
    "Creating animations with CSS transitions and keyframes",
    "Ensuring accessibility standards with ARIA roles",
    "Using TypeScript for enhanced code integrity",
    "Testing responsiveness across multiple device types",
    "Optimizing SEO with structured data and meta tags",
    "Integrating WebSockets for real-time updates",
    "Utilizing WebAssembly to optimize performance-critical code",
    "Implementing PWA features for offline functionality",
    "Auditing performance metrics with Lighthouse"
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
    "Facilitating productive team retrospectives for continuous improvement",
    "Building consensus during decision-making processes",
    "Adopting Agile methodologies to streamline project workflows",
    "Demonstrating empathy in customer support interactions",
    "Managing expectations with stakeholders effectively",
    "Leading workshops to share best practices and insights",
    "Promoting a culture of knowledge sharing within the team",
    "Fostering diversity and inclusion initiatives",
    "Staying informed about industry trends and best practices",
    "Engaging in community outreach and mentorship programs"
  ]
};
const StepComponent = ({ currentStep, totalSteps }) => {
  return (
    <div className="step-component mb-2 w-full">
      <p className="text-center mb-1">
        Phrase {currentStep} of {totalSteps}
      </p>
      <div className="flex justify-center">
      <Progress value={(currentStep )  * 20}max={totalSteps} className="w-[60%]" />
      </div>
    </div>
  );
};

const compareAnswer = (inputValue, correctAnswer) => {
  const inputWords = inputValue.toLowerCase().split(" ");
  const correctWords = correctAnswer.map(word => word.toLowerCase());
  return correctAnswer.map((word, index) => {
    if (correctWords[index] !== inputWords[index]) {
      return (
        <span key={index} className="text-text-wrong ml-1">
          {word}
        </span>
      );
    } else {
      return (
        <span key={index} className="text-text-correct ml-1">
          {word}
        </span>
      );
    }
  });
};

export const GamePage = ({ provider }: { provider: 'GOOGLE' | 'ELEVENLABS' | 'NATIVE' }) => {
  const getRandomPhrase = () => {
    const categories = Object.keys(phrases);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const phrasesInCategory = phrases[randomCategory];
    return phrasesInCategory[Math.floor(Math.random() * phrasesInCategory.length)];
  };

  const [inputValue, setInputValue] = useState("");
  const [corrections, setCorrections] = useState([]);
  const [audioSrc, setAudioSrc] = useState(null);
  const [randomPhrase, setRandomPhrase] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [rounds, setRounds] = useState(0);
  const [showShareProgress, setShowShareProgress] = useState(false);
  const [userResponses, setUserResponses] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const playAudio = () => {
    // setPlaying(true);
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    const voice = synth.getVoices()[5];
    utterance.text = randomPhrase;
    utterance.rate = 0.95;
    utterance.voice = voice;
    console.log(synth.getVoices());
    synth.speak(utterance);
    // setPlaying(false);
  };
  const fetchRandomPhrase = async () => {
    await ACTIONS[provider as keyof typeof ACTIONS]({getRandomPhrase, setAudioSrc, setErrorMessage, setRandomPhrase})
  };

  useEffect(() => {
    const cookieRounds = getCookie("rounds");
    const expirationDate = new Date(getCookie("expirationDate"));
    const now = new Date();

    if (cookieRounds && expirationDate > now) {
      setRounds(+cookieRounds);
      const storedStep = localStorage.getItem("currentStep");
      const storedCorrectCount = localStorage.getItem("correctCount");
      if (storedStep) {
        setCurrentStep(parseInt(storedStep));
      }
      if (storedCorrectCount) {
        setCorrectCount(parseInt(storedCorrectCount));
      }
    } else {
      setRounds(0);
      setCurrentStep(0);
      setCorrectCount(0);
      localStorage.removeItem("currentStep");
      localStorage.removeItem("correctCount");
      setCookie("rounds", "0", { expires: new Date(now.getTime() + 24 * 60 * 60 * 1000) });
      setCookie("expirationDate", new Date(now.getTime() + 24 * 60 * 60 * 1000).toISOString(), {
        expires: new Date(now.getTime() + 24 * 60 * 60 * 1000)
      });
    }

    fetchRandomPhrase();
  }, []);

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newCorrections = compareAnswer(inputValue.trim(), randomPhrase.split(" "));
    setCorrections(prevCorrections => [...prevCorrections, newCorrections]);
    setUserResponses(prevResponses => [...prevResponses, inputValue.trim()]);

    const isCorrect = newCorrections.every(correction =>
      correction.props.className.includes("text-text-correct")
    );
    if (isCorrect) {
      setCorrectCount(prev => prev + 1);
      localStorage.setItem("correctCount", (correctCount + 1).toString());
    }

    setInputValue("");

    if (rounds + 1 === 5) {
      const ONE_DAY_MS = 24 * 60 * 60 * 1000;
      const now = new Date();
      setCookie("rounds", `${rounds + 1}`, {
        expires: new Date(now.getTime() + ONE_DAY_MS)
      });
      setCookie("expirationDate", new Date(now.getTime() + ONE_DAY_MS).toISOString(), {
        expires: new Date(now.getTime() + ONE_DAY_MS)
      });
      setRounds(prev => prev + 1);
      setShowShareProgress(true);
    } else {
      setRounds(prevRounds => prevRounds + 1);
      fetchRandomPhrase();
    }

    const newStep = currentStep + 1;
    setCurrentStep(newStep);
    localStorage.setItem("currentStep", newStep.toString());
  };

  const handleShareProgress = () => {
    const ONE_DAY_MS = 24 * 60 * 60 * 1000;
    const now = new Date();

    setCookie("rounds", `${rounds + 1}`, {
      expires: new Date(now.getTime() + ONE_DAY_MS)
    });
    setCookie("expirationDate", new Date(now.getTime() + ONE_DAY_MS).toISOString(), {
      expires: new Date(now.getTime() + ONE_DAY_MS)
    });
    const tweetText = `I just used TechEars to practice my English ✨, I got ${correctCount} phrases correctly! Join me at: tech-ears.vercel.app`;
    const twitterUrl = `https://twitter.com/compose/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(twitterUrl, "_blank");
  };

    const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  } as const;

  const formattedDate = new Date().toLocaleDateString("en-US", options);

  return (
    <div className="flex flex-col gap-y-6 items-center w-full max-w-screen-md p-8 lg:bg-white lg:dark:bg-gray-800 rounded-lg shadow-lg">
      {!showShareProgress && (
        <>
          {errorMessage && (
            <h4 className="w-full bg-red-900 text-center p-2 rounded-lg font-semibold">
              {errorMessage}
            </h4>
          )}

          {rounds < 5 && (
            <>
             <StepComponent currentStep={currentStep + 1} totalSteps={5} />
              <h4 className="mt-6 text-2xl font-semibold tracking-tight text-blue-h1 dark:text-blue-400 mb-6">
                Listen and type what you hear in the input below.
              </h4>
              {audioSrc ? (
                <>
                  <audio ref={audioRef} controls src={audioSrc} />

                  <form
                    className="w-full mx-auto lg:max-w-md flex flex-col px-10"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="text"
                      placeholder="Listen and type what you hear here"
                      value={inputValue}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md px-3 py-2 w-full"
                    />
                    <button
                      type="submit"
                      className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full"
                    >
                      Next Phrase
                    </button>
                  </form>
                </>
              ) : provider == 'NATIVE' ? (
                <>
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
                <form
                    className="w-full mx-auto lg:max-w-md flex flex-col px-10"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="text"
                      placeholder="Listen and type what you hear here"
                      value={inputValue}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-md px-3 py-2 w-full"
                    />
                    <button
                      type="submit"
                      className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full"
                    >
                      Next Phrase
                    </button>
                  </form>
                </>
              ) : (
                <>Loading here</>
              )}
            </>
          )}

          {rounds >= 5 && (
            <p className="w-full flex justify-center mt-2">
              You have completed 5 rounds. Come back tomorrow for more! ✨
            </p>
          )}
        </>
      )}

      {showShareProgress && (
        <>
          <h2 className="w-full flex justify-center mt-1">✨ Tech Ears</h2>
          <h1 className="w-full flex justify-center mt-1">{formattedDate}</h1>
          
          <h4 className="text-2xl font-semibold tracking-tight text-blue-h1 dark:text-blue-400 mt-5 mb-2">
            Congratulations!
          </h4>
          <p className="mb-3">
            You have completed today's session. You got {correctCount} out of 5 phrases correctly!
          </p>
          
          {corrections.map((roundCorrections, roundIndex) => (
            <div key={roundIndex} className="w-full flex flex-col items-center mt-3">
              <div className="flex justify-center">
                {roundCorrections.map((correction, index) => (
                  <span key={index} className="ml-1">
                    {correction}
                  </span>
                ))}
              </div>
              <div className="mt-1">
                <span className="ml-1">Your Response: {userResponses[roundIndex]}</span>
              </div>
              
            </div>
            
          ))}
          <div className="flex justify-center mt-3">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              onClick={handleShareProgress}
            >
              Share Progress
            </button>
          </div>
        </>
      )}
    </div>
  );
};
