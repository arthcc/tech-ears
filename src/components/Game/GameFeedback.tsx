import { AudioIcon } from "@/components/Icons/audio";

interface GameFeedbackProps {
  hasFeedback?: boolean;
  audioSrc?: string;
}

export const GameFeedback = ({ hasFeedback = false, audioSrc = "" }: GameFeedbackProps) => {
  return (
    <div className="flex items-center justify-center flex-col mb-6">
      {hasFeedback ? (
        <div>Tem feedback</div>
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
      {audioSrc && (
        <audio controls>
          <source src={audioSrc} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};
