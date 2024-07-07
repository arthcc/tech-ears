import { SignInIcon } from "@/components/Icons/signIn";
import { DonateIcon } from "@/components/Icons/donate";
import { GitHubIcon } from "@/components/Icons/github";
import { MainButton } from "@/components/PrimaryButton";

export default function HeaderDesktop() {
  return (
    <header className="hidden sm:flex px-6 lg:px-6 h-14 items-center bg-white w-full fixed top-0 z-10">
      <div className="w-full h-42 flex">
        <div className="w-6/12 border border-slate-100 mx-auto py-2 px-3 mt-1 flex items-center justify-between rounded-b-3xl">
          <div className="px-2 py-1">
            <MainButton
              icon={<SignInIcon />}
              title="Sign In"
              className="text-button-main border border-solid-100 gap-x-2 px-4 py-2"
              iconPosition="right"
            />
          </div>

          <div className="flex gap-4 px-2 py-1">
            <MainButton
              icon={<DonateIcon />}
              title="Donate"
              className="text-button-main border border-solid-100 gap-x-2 px-4 py-2"
            />
            <MainButton
              icon={<GitHubIcon />}
              title="GitHub"
              className="text-button-main border border-solid-100 gap-x-2 px-4 py-2"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
