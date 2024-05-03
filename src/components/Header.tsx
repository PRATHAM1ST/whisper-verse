import Image from "next/image";
import { titleFont } from "./fonts";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";
import ThemeToggle from "./themeButton";

export default function Header({ url }: { url: string} ) {
  return (
    <header className="flex justify-between items-center py-8 px-6 md:px-16 lg:px-24">
      <Link href="/" className="flex justify-center items-center gap-2">
        <Image
          className="md:h-[50px] md:w-[50px] dark:invert"
          src={require("@/assets/svg/logo.svg")}
          alt="logo"
          width={40}
          height={40}
        />
        <h1
          className={cn(
            "hidden md:block text-xl md:text-3xl",
            titleFont.className
          )}
        >
          Whisper Verse
        </h1>
      </Link>
      <div className="flex justify-center items-center gap-3">
        <ThemeToggle />
        <Link href="/new">
          <Button size="sm">
            <Image
              className="dark:invert"
              src={require("@/assets/svg/up-arow-circle.svg")}
              alt="logo"
              width={14}
              height={14}
            />
            Share Your Story
          </Button>
        </Link>
      </div>
    </header>
  );
}
