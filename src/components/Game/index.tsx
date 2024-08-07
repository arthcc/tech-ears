import { GameInput } from "./Input";
import { GameFeedback } from "./GameFeedback";
import { useEffect, useState } from "react";
import FooterButton from "@/components/Footer/FooterButton";
import { AudioServer } from "@/service/AudioServer";
import { useAudioServer } from "@/hooks/useAudioServer";
import { useQuery } from "@tanstack/react-query";
import ProgressBar from "@/components/ProgressBar";
import Cookies from "js-cookie";
import LessonComplete from "../LessonComplete/lessonComplete";
// On Load da página
// 1. Dar o Fetch na frase e exibir a frase no componente de audio

const Game = () => {
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [correctFeedback, setCorrectFeedback] = useState(null);
  const [userFeedback, setUserFeedback] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLessonComplete, setIsLessonComplete] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [canContinue, setCanContinue] = useState(false); // Novo estado para controle de continuação
  const totalSteps = 5;

  const { fetchRandomPhrase, verifyAnswer, compareCorrectAnswer, compareUserAnswer } =
    useAudioServer();

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["randomPhrase", currentStep],
    queryFn: fetchRandomPhrase,
    enabled: currentStep <= totalSteps,
  });

  useEffect(() => {
    const lessonComplete = Cookies.get("lessonComplete");
    const storedCorrectCount = Cookies.get("correctCount");
    if (lessonComplete) {
      setIsLessonComplete(true);
    } else if (storedCorrectCount) {
      setCorrectCount(parseInt(storedCorrectCount, 10));
    } else if (currentStep <= totalSteps) {
      refetch();
    }
  }, [currentStep, refetch]);

  async function handleButtonPress() {
    const isCorrect = verifyAnswer(userAnswer, data?.phrase);
    setIsCorrect(isCorrect);

    if (isCorrect) {
      setCorrectCount((prevCount) => {
        const newCount = prevCount + 1;
        Cookies.set("correctCount", newCount.toString(), { expires: 1 });
        return newCount;
      });
    }

    const correctFeedbackComponent = compareCorrectAnswer(userAnswer, data?.phrase);
    const userFeedbackComponent = compareUserAnswer(userAnswer, data?.phrase);
    setCorrectFeedback(correctFeedbackComponent);
    setUserFeedback(userFeedbackComponent);
    setCanContinue(true); // Permitir que o usuário continue
  }

  function handleContinue() {
    if (currentStep < totalSteps) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setIsLessonComplete(true);
      Cookies.set("lessonComplete", "true", { expires: 1 });
    }

    // Limpar estados
    setUserAnswer("");
    setIsCorrect(null);
    setUserFeedback(null);
    setCorrectFeedback(null);
    setCanContinue(false); // Resetar o estado de continuação
  }

  return (
    <div className="h-full flex flex-col justify-between">
      {isLessonComplete ? (
        <LessonComplete correctCount={correctCount} />
      ) : (
        <>
          <ProgressBar
            indicatorColor="bg-progress-blue"
            progress={(currentStep / totalSteps) * 100}
            height="h-5"
            width="sm:w-1/4 w-1/2"
            className="mt-4 mx-auto"
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
          <div className="h-full flex items-center justify-center flex-col gap-12 p-6">
            <GameFeedback
              audioSrc={data?.audioBase64}
              feedbackType={isCorrect ? "correct" : "incorrect"}
              feedback={correctFeedback}
            />
            {data?.audioBase64 && !userFeedback && (
              <audio controls>
                <source src={data?.audioBase64} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            )}
            {userFeedback ? (
              <GameInput.Field>
                <div className="flex flex-wrap gap-1">{userFeedback}</div>
              </GameInput.Field>
            ) : (
              <GameInput.Textarea
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleButtonPress();
                  }
                }}
                onChange={(e) => setUserAnswer(e.target.value)}
                value={userAnswer}
              />
            )}
          </div>
          {canContinue ? (
            <FooterButton buttonState={isCorrect} onButtonPress={handleContinue}>
              Continue
            </FooterButton>
          ) : (
            <FooterButton buttonState={isCorrect} disabled={!userAnswer} onButtonPress={handleButtonPress}>
              Submit
            </FooterButton>
          )}
        </>
      )}
    </div>
  );
};

export default Game;