import Link from "next/link";
import { BrazilIcon } from "@/components/Icons/brazil";

export default function Footer() {
  return (
    <footer className="flex-col bg-white sm:flex-row gap-4 sm:gap-0 w-full max-w-screen-xl mx-auto p-4 md:py-8 flex justify-between items-center">
      <span className="text-sm text-gray-500">© 2024 TechEars. All rights reserved.</span>
      <span className="text-sm text-gray-500 flex items-center">
        Made with Love by
        <Link target="_blank" href={"https://x.com/tech_ears"}>
          <span className="font-semibold ml-1">@ThurrDev</span>
        </Link>
        <span className="mx-1">from</span>
        <BrazilIcon />
      </span>
    </footer>
  );
}
