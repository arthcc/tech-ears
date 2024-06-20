import { ApiGoogle } from "@/components/apiGoogle/apiGoogle";
import { ApiPage } from "@/components/apiPage/apiPage";
import { BackMenu } from "@/components/backMenu/backMenu";
import { ListenContainer } from "@/components/listenConteiner/listenConteiner";
import MenuTheme from "@/components/menuTheme/menuTheme";
import { GoogleAnalytics } from "@next/third-parties/google";

const PlayerPage = () => {
  return (
    <>
      <GoogleAnalytics gaId="G-R5SCDC4C8D" />
      <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <header className="hidden sm:flex px-4 lg:px-6 h-14 items-center bg-gray-100 dark:bg-gray-900 w-full fixed top-0 z-10">
          <div className="sm:container pt-4 mx-auto flex items-center justify-between w-full">
            <div className="flex items-center flex-1 flex-wrap justify-between">
              <div className="flex items-center">
                <BackMenu />
              </div>
              <div className="flex items-center space-x-4">
                <MenuTheme />
              </div>
            </div>
          </div>
        </header>
        <ApiGoogle />
      </main>
    </>
  );
};

export default PlayerPage;
