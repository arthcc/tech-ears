import { MainButton } from "../mainButton/button";

export default function FooterButton() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-white dark:bg-mirage-700">
      <div className="text-center mb-auto mt-auto">
        <div className="flex justify-center mb-4"></div>
      </div>
      <div className="w-52">
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div>
          <MainButton text="Continue" />
        </div>
      </div>
    </div>
  );
}
