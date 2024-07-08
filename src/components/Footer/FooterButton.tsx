import { MainButton } from "@/components/PrimaryButton";

interface FooterButtonProps {
  disabled: boolean;
  onButtonPress?: () => void;
}

export default function FooterButton({ disabled, onButtonPress }: FooterButtonProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-white ">
      <hr className="h-px my-8 bg-gray-200 border-0 w-full" />
      <div className="flex w-52 ">
        <MainButton
          title="Continue"
          className={`border border-solid-100 gap-x-2 px-4 bg-button-main text-white py-3  ${
            disabled ? "opacity-50 cursor-not-allowed" : "opacity-100 "
          }`}
          disabled={disabled}
          onPress={onButtonPress}
        />
      </div>
    </div>
  );
}
