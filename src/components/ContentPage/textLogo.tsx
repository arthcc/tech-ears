import { AudioIcon } from "../Icons/audio";


export default function TextLogo() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-white dark:bg-mirage-700">
      <div className="text-center mb-auto mt-auto">
        <div className="flex justify-center mb-4"></div>
      </div>
      <AudioIcon />
      <h1 className="text-align: center font-bold text-4xl mt-2">
        <span className="text-blue-400">
          {" "}
          Tap to <span className="text-black">hear </span>your phrase.
        </span>
      </h1>
    </div>
  );
}
