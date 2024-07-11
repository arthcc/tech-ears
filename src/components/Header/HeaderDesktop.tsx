
import { GitHubIcon } from "@/components/Icons/github";
import { MainButton } from "@/components/PrimaryButton";
import { AlertPixIcon } from "../Icons/alertpix";
import Link from "next/link";

export default function HeaderDesktop() {
  return (
    <header className="hidden sm:flex px-6 lg:px-6 h-14 items-center bg-white w-full fixed top-0 z-10 ">
      <div className="w-full h-42 flex">
        <div className="w-6/12 border border-slate-100 mx-auto py-2 px-3 mt-1 flex items-center justify-center rounded-b-3xl">
          <div className=" flex gap-4 px-2 py-1">
            <Link
              href="https://www.alertpix.live/thurrdev"
              target="_blank"
            >
              <MainButton
                icon={<AlertPixIcon />}
                className="text-button-main border border-solid-100 gap-x-2 px-4 py-2"
              />
            </Link>
            <Link href="https://github.com/arthcc/tech-ears" target="_blank">
              <MainButton
                icon={<GitHubIcon />}
                title="GitHub"
                className="text-button-main border border-solid-100 gap-x-2 px-4 py-2"
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
