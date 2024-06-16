import { Button } from "../ui/button"
import Link from "next/link"
import Image from "next/image"
import newTabIcon from "@/components/svg/new-tab-light.png";

export default function HeaderDesktop() {
  return (
    <header className="hidden sm:flex px-4 lg:px-6 h-14 items-center bg-gray-100 dark:bg-gray-900 w-full fixed top-0 z-10">
      <div className="sm:container pt-4 mx-auto flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
            TechEars
          </div>
        </div>
        <div className="flex items-center space-x-4">
            <Link
              href="/about-me"
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 flex items-center"
            >
              <Button
                variant="link"
                className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
              >
                About Me
              </Button>
            </Link>
            <Link
              href="/how-to-play"
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
            >
              <Button
                variant="link"
                className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
              >
                How to Play?
              </Button>
            </Link>
            <Link
              href="https://github.com/arthcc/tech-ears"
              target="_blank"
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
            >
              <Button
                variant="link"
                className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
              >
               GitHub
              </Button>
            </Link>
            <Link
              href="https://pixmeacoffee.vercel.app/techears"
              target="_blank"
              className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
            >
              <Button
                variant="link"
                className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
              >
                <Image src={newTabIcon} alt="new tab" width={20} height={20} />
                Donate
              </Button>
            </Link>
        </div>
      </div>
    </header>
  )
}
