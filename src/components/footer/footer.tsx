import Link from "next/link";
import { BrazilIcon } from "../icons/brazil";

export default function Footer() {
  return (
    <footer>
      <div className="flex-col sm:flex-row gap-4 sm:gap-0 w-full max-w-screen-xl mx-auto p-4 md:py-8 flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 TechEars. All rights reserved.
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
          Made with Love by
          <Link href={"https://x.com/thurrdev"}>
            <span className="font-semibold ml-1">@ThurrDev</span>
          </Link>
          <span className="ml-1">from</span>
          <BrazilIcon />
        </span>
      </div>
    </footer>
  );
}
