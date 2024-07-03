"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { ApiGoogle } from "../../components/apiGoogle/apiGoogle";
import MenuTheme from "../../components/PageTheme";
import Footer from "@/components/Footer";
import Mode from "@/components/Footer/footerButton";
import FooterButton from "@/components/Footer/footerButton";
import TextLogo from "@/components/ContentPage/textLogo";
import { TextInput } from "@/components/TextInput";
import ProgressBar from "@/components/ProgressBar/index.";
import Loading from "@/components/Loader";
import React, { useState, useEffect } from "react";
import { CorrectCard } from "@/components/correctCard";

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
    <>
      <GoogleAnalytics gaId="G-R5SCDC4C8D" />
      <div className="pt-10">
        <ProgressBar
          indicatorColor="bg-progress-blue"
          progress={15}
          height="h-5"
          width="w-1/4"
          className="mt-4 mx-auto"
        />
      </div>
      <div className="pt-10 mt-10">
      
      </div>

      <div className="flex flex-col items-center p-5 mt-32">
        <TextInput onChange={undefined} />
      </div>

      <FooterButton />
    </>
  );
};

export default PlayerPage;