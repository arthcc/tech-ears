import { phrases } from "@/mocks/phrases";
import { useEffect, useState } from "react";
import { textToSpeechAction } from "@/app/actions/textToSpeechAction";

export const AudioServer = () => {
  const getRandomPhrase = () => {
    const categories = Object.keys(phrases);
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)];
    const phrasesInCategory = phrases[randomCategory];
    return phrasesInCategory[
      Math.floor(Math.random() * phrasesInCategory.length)
    ];
  };

  const [corrections, setCorrections] = useState([]);
  const [audioSrc, setAudioSrc] = useState(null);
  const [randomPhrase, setRandomPhrase] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [rounds, setRounds] = useState(0);
  const [showShareProgress, setShowShareProgress] = useState(false);
  const [userResponses, setUserResponses] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const fetchRandomPhrase = async () => {
    const phrase = getRandomPhrase();
    setRandomPhrase(phrase);

    try {
      const audioBase64 = await textToSpeechAction(phrase);
      setAudioSrc(audioBase64);
    } catch (error) {
      setErrorMessage("Failed to load audio. Please try again later.");
    }
  };

  useEffect(() => {
    fetchRandomPhrase();
  }, []);

  return (
    <div>
      {audioSrc && (
        <audio controls>
          <source src={audioSrc} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
