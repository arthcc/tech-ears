import { Button } from "../ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import SecondButton from "../secondButton/button";
import { SignInIcon } from "../../public/icons/signIn";
import HeaderButton from "../headerButton/button";
import { DonateIcon } from "../../public/icons/donate";
import { GitHubIcon } from "../../public/icons/github";

export default function HeaderDesktop() {
  return (
    <header className="hidden sm:flex px-6 lg:px-6 h-14 items-center bg-white w-full fixed top-0 z-10">
      <div className="w-full h-42 flex">
        <div className="w-6/12 border border-slate-100 mx-auto py-2 px-3 mt-1 flex items-center justify-between rounded-b-3xl">
          <div className="px-2 py-1">
            <HeaderButton text="Sign In" icon={<SignInIcon />} />
          </div>

          <div className="flex gap-4 px-2 py-1">
            <HeaderButton text="Donate" icon={<DonateIcon />} />
            <HeaderButton text="GitHub" icon={<GitHubIcon />} />
          </div>
        </div>
      </div>
    </header>
  );
}
