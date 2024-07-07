"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import FooterButton from "@/components/Footer/FooterButton";
import { TextInput } from "@/components/TextInput";
import ProgressBar from "@/components/ProgressBar";
import Loading from "@/components/Loader";
import React, { useState, useEffect } from "react";
import { AudioIcon } from "@/components/Icons/audio";

const PlayerPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="md:overflow-hidden flex flex-col bg-white">
      <GoogleAnalytics gaId="G-R5SCDC4C8D" />
      <div className="pt-10">
        <ProgressBar
          indicatorColor="bg-progress-blue"
          progress={15}
          height="h-5"
          width="sm:w-1/4 w-1/2"
          className="mt-4 mx-auto"
          currentStep={0}
          totalSteps={5}
        />
      </div>
      <div className="pt-10 mt-10"></div>
      <div className="flex flex-col items-center justify-center py-12  bg-white ">
        <AudioIcon />
        <h1 className="items-center text-center justify-center font-bold text-4xl mt-2">
          <span className="text-blue-400">
            {" "}
            Tap to <span className="text-black">hear </span>your phrase.
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center p-5 mt-32">
        <TextInput onChange={undefined} />
      </div>
      <FooterButton />
    </div>
  );
};

export default PlayerPage;
