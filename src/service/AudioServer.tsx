import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";


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

const fetchRandomPhrase = async () => {
  const phrase = getRandomPhrase();
  setRandomPhrase(phrase);

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
