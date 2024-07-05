import React, { FC } from "react";
import { CorrectlIcon } from "../Icons/correct";
import { WrongIcon } from "../Icons/wrong";

interface AnswerCard {
  correct: boolean;
  pharse: string;
  correctPharse?: string;
}
const AnswerCard: FC<AnswerCard> = ({ correct, pharse, correctPharse }) => {
  return (
    <div>
      <div className="flex flex-col items-center p-5 mt-9">
        {correct ? <CorrectlIcon /> : <WrongIcon />}
        <span className="text-text-correct font-semibold text-2xl">{pharse}</span>

        {correctPharse && <p>{correctPharse}</p>}
      </div>
    </div>
  );
};

export default AnswerCard;