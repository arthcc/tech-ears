import { useState } from "react";
import { phrases } from "@/mocks";

export const useAudioServer = () => {
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const getRandomPhrase = () => {
    const categories = Object.keys(phrases);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const phrasesInCategory = phrases[randomCategory];
    return phrasesInCategory[Math.floor(Math.random() * phrasesInCategory.length)];
  };

  const fetchRandomPhrase = async () => {
    const phrase = getRandomPhrase();
    console.log(phrase);

    if (!phrase) {
      return;
    }

    try {
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
      console.log(apiKey);
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
      setAudioSrc(audioBase64);
    } catch (error) {
      setErrorMessage("Failed to load audio. Please try again later.");
    }
  };

  return {
    fetchRandomPhrase,
    audioSrc,
    errorMessage
  };
};
