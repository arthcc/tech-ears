import { CorrectIcon } from "./Icons/correct";

export function CorrectCard() {
  return (
    <div className="flex flex-col items-center p-5 mt-9">
      <CorrectIcon />
      <span className="text-text-correct font-semibold text-2xl">Your phrase is correct!</span>
    </div>
  );
}
