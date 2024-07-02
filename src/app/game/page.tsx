import { GoogleAnalytics } from "@next/third-parties/google";
import { ApiGoogle } from "../../components/apiGoogle/apiGoogle";
import MenuTheme from "../../components/menuTheme/menuTheme";
import Footer from "@/components/footer/footer";
import Loading from "@/components/loadingGame/loading";
import Mode from "@/components/gameMode/footerButton";
import FooterButton from "@/components/gameMode/footerButton";
import TextLogo from "@/components/gameMode/textLogo";
import { TextInput } from "@/components/textInput/textInput";

const PlayerPage = () => {
  return (
    <>
      <GoogleAnalytics gaId="G-R5SCDC4C8D" />
      <TextLogo />
      <div className="flex flex-col items-center p-5 mt-8">
        <TextInput onChange={undefined} />
      </div>

      <FooterButton />
    </>
  );
};

export default PlayerPage;
