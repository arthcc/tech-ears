"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import ProgressBar from "@/components/ProgressBar";
import Loading from "@/components/Loader";
import React, { useState, useEffect } from "react";
import { Game } from "@/components/Game";
import { useQuery } from "@tanstack/react-query";

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
    <div className="flex flex-col bg-white h-full">
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

      <Game />
    </div>
  );
};

export default PlayerPage;
