import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

interface CustomProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  currentStep: number;
  totalSteps: number;

  indicatorColor: string;
  progress: number;
  height?: string;
  width?: string;
}

const ProgressBar: React.FC<CustomProgressProps> = ({
  currentStep,
  totalSteps,
  indicatorColor,
  height = "h-4",
  width = "w-[60%]"
}) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="step-component mb-2 w-full">
      <p className="text-center mb-1 text-black">
        Phrase {currentStep} of {totalSteps}
      </p>
      <div className="flex justify-center">
        <div className={`${width} mx-auto bg-progress-gray rounded-full ${height}`}>
          <div
            className={`${indicatorColor} ${height} rounded-full`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
