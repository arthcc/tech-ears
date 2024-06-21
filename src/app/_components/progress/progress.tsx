import React, { useState, useEffect } from 'react';


const Progress = ({ value, max, className }) => {
  const percentage = (value / max) * 100;
  return (
    <div className={className}>
      <div className="bg-gray-200 h-2 rounded">
        <div className="bg-blue-500 h-2 rounded" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};


const StepComponent = ({ currentStep, totalSteps }) => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="step-component mb-2 w-full">
      <p className="text-center mb-1">
        Phrase {currentStep + 1} of {totalSteps}
      </p>
      <Progress value={progress} max={100} className="w-60 mb-1" />
      <Progress value={currentStep + 1} max={totalSteps} className="w-full" />
    </div>
  );
};

export default StepComponent;
