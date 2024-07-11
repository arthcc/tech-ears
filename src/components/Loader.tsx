import React from "react";
import { IconSolo } from "./Icons/logoSolo";


export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-white ">
      <div className="text-center mb-auto mt-auto">
        <div className="flex justify-center mb-4">
          <IconSolo />
        </div>
        <h1 className="font-bold text-4xl">
          Loading your <span className="text-blue-400">phrases</span> of the day...
        </h1>
      </div>
      <div className="w-full">
        <div>
          <hr className="h-px my-8 bg-gray-200 border-0 w-full" />
        </div>
      </div>
    </div>
  );
}
