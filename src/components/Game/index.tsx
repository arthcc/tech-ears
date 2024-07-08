import { GameInput } from "./Input";
import { GameFeedback } from "./GameFeedback";
import { useEffect, useState } from "react";
import FooterButton from "@/components/Footer/FooterButton";
import { AudioServer } from "@/service/AudioServer";
import { useAudioServer } from "@/hooks/useAudioServer";
import { useQuery } from "@tanstack/react-query";

// On Load da página
// 1. Dar o Fetch na frase e exibir a frase no componente de audio

export const Game = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean>(null);
  const [correctFeedback, setCorrectFeedback] = useState(null);
  const [userFeedback, setUserFeedback] = useState(null);

  const { fetchRandomPhrase, verifyAnswer, compareCorrectAnswer, compareUserAnswer } =
    useAudioServer();

  const { data, error, isLoading } = useQuery({
    queryKey: ["randomPhrase"],
    queryFn: fetchRandomPhrase
  });

  async function handleButtonPress() {
    const isCorrect = verifyAnswer(userAnswer, data?.phrase);
    setIsCorrect(isCorrect);

    const correctFeedbackComponent = compareCorrectAnswer(userAnswer, data?.phrase);
    const userFeedbackComponent = compareUserAnswer(userAnswer, data?.phrase);
    setCorrectFeedback(correctFeedbackComponent);
    setUserFeedback(userFeedbackComponent);
  }

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="h-full flex items-center justify-center flex-col gap-12">
        {/* <AudioServer /> */}
        <GameFeedback
          audioSrc={data?.audioBase64}
          feedbackType={isCorrect ? "correct" : "incorrect"}
          feedback={correctFeedback}
        />
         {data?.audioBase64&& !userFeedback && (
        <audio controls>
          <source src={data?.audioBase64} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
        {userFeedback ? (
          <GameInput.Field>
            <div className="flex flex-wrap">{userFeedback}</div>
          </GameInput.Field>
        ) : (
          <GameInput.Textarea onChange={e => setUserAnswer(e.target.value)} />
        )}

        {/* <GameInput onChange={e => setInputValue(e.target.value)} /> */}
      </div>

      <FooterButton buttonState={isCorrect} disabled={!userAnswer} onButtonPress={handleButtonPress} />
    </div>
  );
};
