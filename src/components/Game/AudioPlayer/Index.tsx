import { PlayIcon } from "@/components/Icons/playIcon";
import { TimeIcon } from "@/components/Icons/time";
import { AudioIcon } from "@/components/Icons/audio";

export type AudioStateEnum = "PENDING" | "READY" | "PLAYING";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state: AudioStateEnum;
}

const Ready = () => {
  return <PlayIcon />;
};

const Pending = () => {
  return <TimeIcon />;
};

const Playing = () => {
  return <AudioIcon color="#FFF" height={30} />;
};

const StatesMapper = ({ state }) => {
  switch (state) {
    case "PENDING":
      return <Pending />;
    case "READY":
      return <Ready />;
    case "PLAYING":
      return <Playing />;
    default:
      return <Pending />;
  }
};

export const AudioPlayer = ({ state, onClick }: ButtonProps) => {
  return (
    <button
      className="w-fit h-fit min-h-12 justify-center bg-button-main flex rounded-2xl font-semibold text-xl gap-2 hover:scale-110 transition-all items-center px-4"
      onClick={onClick}
    >
      <StatesMapper state={state} />
    </button>
  );
};
