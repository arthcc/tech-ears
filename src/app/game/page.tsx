import { GoogleAnalytics } from "@next/third-parties/google";
import { ApiGoogle } from "../../components/apiGoogle/apiGoogle";
import MenuTheme from "../../components/PageTheme";
import Footer from "@/components/Footer";
import Loading from "@/components/Loader";
import Mode from "@/components/Footer/footerButton";
import FooterButton from "@/components/Footer/footerButton";
import TextLogo from "@/components/ContentPage/textLogo";
import { TextInput } from "@/components/TextInput";
import ProgressBar from "@/components/ProgressBar/index.";

const PlayerPage = () => {
  return (
    <>
      <GoogleAnalytics gaId="G-R5SCDC4C8D" />
      <div className="pt-44">
        <ProgressBar 
          indicatorColor="bg-progress-blue"
          progress={15}
          height="h-5"
          width="w-1/4"
          className="mt-4"
        />
      </div>

      <TextLogo />

      <div className="flex flex-col items-center p-5 mt-8">
        <TextInput onChange={undefined} />
      </div>

      <FooterButton />
    </>
  );
};

export default PlayerPage;
