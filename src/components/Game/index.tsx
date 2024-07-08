import { GameInput } from "./GameInput";
import { GameFeedback } from "./GameFeedback";
import { useEffect, useState } from "react";
import FooterButton from "@/components/Footer/FooterButton";
import { AudioServer } from "@/service/AudioServer";
import { useAudioServer } from "@/hooks/useAudioServer";

// On Load da página
// 1. Dar o Fetch na frase e exibir a frase no componente de audio

export const Game = () => {
  const [inputValue, setInputValue] = useState("");
  const { fetchRandomPhrase, audioSrc, errorMessage } = useAudioServer();

  async function handleButtonPress() {
    console.log("Button pressed");
  }

  useEffect(() => {
    fetchRandomPhrase();
  }, []);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="h-full flex items-center justify-center flex-col">
        {/* <AudioServer /> */}
        <GameFeedback audioSrc={audioSrc} />
        <GameInput onChange={e => setInputValue(e.target.value)} />
      </div>

      <FooterButton disabled={!inputValue} onButtonPress={handleButtonPress} />
    </div>
  );
};
