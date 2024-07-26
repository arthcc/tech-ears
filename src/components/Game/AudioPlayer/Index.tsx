interface AudioStateProps {
  state: "ready" | "pending" | "playing";
}

const PlayerReady = () => {};

export const AudioPlayer = ({ state }: AudioStateProps) => {
  return;
};
