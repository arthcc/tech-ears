import { useState } from "react";
import { phrases } from "@/mocks";
import { textToSpeechAction } from "@/app/actions/textToSpeechAction";

export const useAudioServer = () => {
  const getRandomPhrase = () => {
    const categories = Object.keys(phrases);
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const phrasesInCategory = phrases[randomCategory];
    return phrasesInCategory[
      Math.floor(Math.random() * phrasesInCategory.length)
    ];
  };

  const fetchRandomPhrase = async () => {
    const phrase = getRandomPhrase();

    if (!phrase) {
      throw new Error("No phrase available");
    }

    try {
      return { phrase };
    } catch (error) {
      throw new Error(`Failed to load audio: ${error.message}`);
    }
  };

  const verifyAnswer = (answer: string, question: string): boolean => {
    const correctAnswer = question;
    const answerParsed = answer.toLowerCase().split(" ").join("").trim();
    const correctAnswerParsed = correctAnswer
      .toLowerCase()
      .split(" ")
      .join("")
      .trim();

    return answerParsed === correctAnswerParsed;
  };

  const compareCorrectAnswer = (inputValue: string, correctAnswer: string) => {
    const inputWords = inputValue.trim().split(" ");
    const correctWords = correctAnswer.trim().split(" ");

    return correctWords.map((word, index) => {
      const isCorrect =
        inputWords[index] &&
        inputWords[index].toLowerCase() === word.toLowerCase();

      return (
        <span
          key={index}
          className={`
          ${
            isCorrect ? "text-mirage-950 " : "text-text-correct "
          } text-xl font-medium`}
        >
          {word}
        </span>
      );
    });
  };

  const compareUserAnswer = (inputValue: string, correctAnswer: string) => {
    const inputWords = inputValue.trim().split(" ");
    const correctWords = correctAnswer.trim().split(" ");

    return inputWords.map((word, index) => {
      const isCorrect =
        correctWords[index] &&
        word.toLowerCase() === correctWords[index].toLowerCase();

      return (
        <span
          key={index}
          className={isCorrect ? "text-text-correct " : "text-text-wrong "}
        >
          {word}
        </span>
      );
    });
  };

  return {
    fetchRandomPhrase,
    verifyAnswer,
    compareCorrectAnswer,
    compareUserAnswer
  };
};
