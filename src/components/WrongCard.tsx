
import { WrongIcon } from "./Icons/wrong";

export function WrongCard() {
  return (
    <div className="flex flex-col items-center p-5 mt-9">
      <WrongIcon />
      <span className="text-text-wrong font-semibold text-2xl">Correct Solution:</span>
    </div>
  );
}
