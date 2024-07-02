import { GoogleAnalytics } from "@next/third-parties/google";
import { ApiGoogle } from "../../components/apiGoogle/apiGoogle";
import MenuTheme from "../../components/menuTheme/menuTheme";
import Footer from "@/components/footer/footer";
import Loading from "@/components/loadingGame/loading";
import Mode from "@/components/gameMode/footerButton";
import FooterButton from "@/components/gameMode/footerButton";
import TextLogo from "@/components/gameMode/textLogo";


const PlayerPage = () => {
  return (
    <>
      <GoogleAnalytics gaId="G-R5SCDC4C8D" />
      <TextLogo/>
      <FooterButton/>
    
    </>
  );
};

export default PlayerPage;
