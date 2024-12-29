import { MainButton } from "@/components/PrimaryButton";
import { use, useEffect } from "react";

interface FooterButtonProps {
  disabled?: boolean;
  onButtonPress?: () => void;
  buttonState: boolean | null;
  children: React.ReactNode;
}

export default function FooterButton({ disabled, onButtonPress, buttonState, children }: FooterButtonProps) {
  const handleButton = () => {
    if ((buttonState = !null && buttonState)) {
      return "bg-green-500";
    }
    if (buttonState = !null && buttonState == false) {
      return "bg-red-500";
    }
    return;
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white ">
      <hr className="h-px my-6 bg-gray-200 border-0 w-full" />
      <div className="flex w-56 ">
        <MainButton
          title="Continue"
          className={`border border-solid-100 gap-x-2 px-4 bg-button-main text-white py-3  ${disabled ? "opacity-50 cursor-not-allowed" : "opacity-100  "
            }
          ${handleButton()}
          `}
          disabled={disabled}
          onPress={onButtonPress}
        />
      </div>
    </div>
  );
}
