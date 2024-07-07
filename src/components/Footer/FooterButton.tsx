import { MainButton } from "@/components/PrimaryButton";

export default function FooterButton() {
  return (
    <div className="flex flex-col items-center justify-center bg-white ">
      <div className="text-center mb-auto mt-auto">
        <div className="flex justify-center mb-4"></div>
      </div>
      <div className="w-52">
        <hr className="h-px my-8 bg-gray-200 border-0" />
        <div>
          <MainButton
            title="Continue"
            className=" border border-solid-100 gap-x-2 px-4 py-2 bg-button-main text-white py-3"
          />
        </div>
      </div>
    </div>
  );
}
