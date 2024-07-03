import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

interface CustomProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  indicatorColor: string;
  progress: number;
  height?: string;
  width?: string;
}

const ProgressBar: React.FC<CustomProgressProps> = ({ indicatorColor, progress, height = 'h-4', width = 'w-1/2' }) => {
  return (
    <div className={`${width} mx-auto bg-progress-gray rounded-full ${height}`}>
      <div className={`${indicatorColor} ${height} rounded-full`} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;