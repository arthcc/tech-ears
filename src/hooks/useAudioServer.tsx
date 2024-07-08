import { useState } from "react";
import { phrases } from "@/mocks";

export const useAudioServer = () => {
  const getRandomPhrase = () => {
    const categories = Object.keys(phrases);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const phrasesInCategory = phrases[randomCategory];
    return phrasesInCategory[Math.floor(Math.random() * phrasesInCategory.length)];
  };

  const fetchRandomPhrase = async () => {
    const phrase = getRandomPhrase();

    if (!phrase) {
      throw new Error("No phrase available");
    }

    const data = {
      input: { text: phrase },
      voice: { languageCode: "en-US", ssmlGender: "MALE" },
      audioConfig: { audioEncoding: "MP3" }
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    const apiKey = process.env.GOOGLE_API_KEY;
    const response = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
      options
    );

    if (!response.ok) {
      throw new Error(`Error with the Text-to-Speech API: ${response.statusText}`);
    }

    const responseData = await response.json();
    const audioContent = responseData.audioContent;
    const audioBase64 = `data:audio/mp3;base64,${audioContent}`;

    return { phrase, audioBase64 };
  };

  const verifyAnswer = (answer: string, question: string): boolean => {
    const correctAnswer = question;
    const answerParsed = answer.toLowerCase().split(" ").join("").trim();
    const correctAnswerParsed = correctAnswer.toLowerCase().split(" ").join("").trim();

    return answerParsed === correctAnswerParsed;
  };

  const compareCorrectAnswer = (inputValue: string, correctAnswer: string) => {
    const inputWords = inputValue.trim().split(" ");
    const correctWords = correctAnswer.trim().split(" ");

    return correctWords.map((word, index) => {
      const isCorrect = inputWords[index] && inputWords[index].toLowerCase() === word.toLowerCase();

      return (
        <span
          key={index}
          className={`${
            isCorrect ? "text-mirage-950 ml-1" : "text-text-correct ml-1"
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
        correctWords[index] && word.toLowerCase() === correctWords[index].toLowerCase();

      return (
        <span key={index} className={isCorrect ? "text-text-correct ml-1" : "text-text-wrong ml-1"}>
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
