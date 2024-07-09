import React from "react";
import FooterButton from "../Footer/FooterButton";
import { MainButton } from "../PrimaryButton";
import { HomeIcon } from "../Icons/home";
import { ShareIcon } from "../Icons/share";
import { IconSolo } from "../Icons/logoSolo";
import { ReviewIcon } from "../Icons/review";
import { LogoIcon } from "../Icons/logo";

export const LessonComplete = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white h-full">
    <div className="flex flex-col items-center justify-center flex-grow">
      <LogoIcon />
      <h1 className="text-center font-bold text-4xl mt-2">
        <span className="text-mirage-500">
          Lesson <span className="text-black">Complete!</span>
        </span>
      </h1>
      <MainButton
        title="Review Lesson"
        className="max-w-56 bg-white text-black py-3 border border-solid border-gray-300 text-center mt-20"
        icon={<ReviewIcon />}
      />
    
      </div>
  
      <div className="w-full">
        <hr className="h-px my-6 bg-gray-200 border-0 w-full" />
        <div className="flex flex-row justify-center items-center gap-4">
          <MainButton
            title="Back To Home"
            className="max-w-56 bg-white text-black py-3 border border-solid border-gray-300 text-center"
            icon={<HomeIcon />}
          />
          <MainButton
            title="Share Progress"
            className="max-w-56 bg-button-main text-white py-3 border border-solid border-gray-300 text-center"
            icon={<ShareIcon />}
          />
        </div>
      </div>
    </div>
  );
};
