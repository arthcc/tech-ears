import React, { useEffect, useState } from "react";
import { MainButton } from "../PrimaryButton";
import { HomeIcon } from "../Icons/home";
import { ShareIcon } from "../Icons/share";
import Cookies from "js-cookie";
import { LogoIcon } from "../Icons/logo";
import Link from "next/link";
const LessonComplete = ({ correctCount }) => {
  const [storedCorrectCount, setStoredCorrectCount] = useState(0);

  useEffect(() => {
    const count = Cookies.get("correctCount");
    if (count) {
      setStoredCorrectCount(parseInt(count, 10));
    }
  }, []);

  const shareProgress = () => {
    const tweetText = `I just used TechEars to practice my English ✨, I got ${storedCorrectCount} phrases correctly! Join me at: techears.tech`;
    const twitterUrl = `https://twitter.com/compose/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(twitterUrl, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white h-full">
      <div className="flex flex-col items-center justify-center flex-grow">
        <LogoIcon />
        <h1 className="text-center font-bold text-4xl mt-2">
          <span className="text-mirage-500">
            Lesson <span className="text-black">Complete!</span>
          </span>
        </h1>
        {/* <MainButton
          title="Review Lesson"
          className="max-w-56 bg-white text-black py-3 border border-solid border-gray-300 text-center mt-20"
          icon={<ReviewIcon />}
        />*/}
      </div>

      <div className="w-full">
        <hr className="h-px my-6 bg-gray-200 border-0 w-full" />
        <div className="px-6 flex flex-wrap justify-center items-center gap-4">
          <Link
            href="https://www.techears.tech"
            className="sm:max-w-56 bg-white text-black py-3 px-4 border border-solid border-gray-300 text-center justify-center w-full flex rounded-2xl font-semibold text-xl gap-2 hover:scale-110 transition-all items-center"
          >
            <HomeIcon />  Back To Home

          </Link>

          <MainButton
            title="Share Progress"
            className="sm:max-w-56 bg-button-main text-white py-3 border border-solid border-gray-300 text-center"
            icon={<ShareIcon />}
            onClick={shareProgress}
          />
        </div>
      </div>
    </div>
  );
};

export default LessonComplete;
