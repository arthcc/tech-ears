import { AudioIcon } from "@/components/Icons/audio";
import { CorrectIcon } from "../Icons/correct";
import { WrongIcon } from "../Icons/wrong";

interface GameFeedbackProps {
  feedback: React.ReactNode;
  feedbackType?: "correct" | "incorrect";
}

export const GameFeedback = ({
  feedback,
  feedbackType = "correct"
}: GameFeedbackProps) => {
  return (
    <div className="flex items-center justify-center flex-col mb-6 ">
      {feedback ? (
        <div className="flex flex-col items-center justify-center">
          {feedbackType === "correct" ? <CorrectIcon /> : <WrongIcon />}
          <span
            className={`font-bold mt-2 text-2xl text-center
            ${
              feedbackType === "correct"
                ? "text-text-correct"
                : "text-text-wrong"
            }
            `}
          >
            {feedbackType === "correct"
              ? "Your phrase is correct!"
              : "Correct Solution:"}{" "}
            <br />
          </span>
          <span className="flex flex-wrap justify-center gap-1">
            {feedbackType === "incorrect" && feedback}
          </span>
        </div>
      ) : (
        <div>
          <div className="flex flex-col items-center justify-center py-12  bg-white ">
            <AudioIcon />
            <h1 className="items-center text-center justify-center font-bold text-4xl mt-2">
              <span className="text-blue-400">
                Tap to <span className="text-black">hear </span>your phrase.
              </span>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};
