import { GoogleAnalytics } from "@next/third-parties/google";
import { ApiGoogle } from "../../components/apiGoogle/apiGoogle";
import MenuTheme from "../../components/menuTheme/menuTheme";
import Footer from "@/components/footer/footer";
import Loading from "@/components/loadingGame/loading";


const PlayerPage = () => {
  return (
    <>
      <GoogleAnalytics gaId="G-R5SCDC4C8D" />
      <Loading />
    </>
  );
};

export default PlayerPage;
