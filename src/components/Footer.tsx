/* eslint-disable react/no-unescaped-entities */
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { titleFont } from "./fonts";

export default function Footer() {
  const footerTitles: {
    titles: string[];
    jsonKeys: string[];
  } = {
    titles: [
      "Love stories",
      "Tragic stories",
      "Horror stories",
      "Happy stories",
    ],
    jsonKeys: [
      "love-stories",
      "tragic-stories",
      "horror-stories",
      "happy-stories",
    ],
  };
  const footerLinks: {
    [key: string]: {
      title: string;
      link: string;
    }[];
  } = {
    "love-stories": [
      { title: "Captain Corelli's Mandolin", link: "" },
      { title: "Away", link: "" },
      { title: "A Heart's Enchantment", link: "" },
      { title: "Starstruck Lovers", link: "" },
      { title: "Whispered Promises of Love", link: "" },
      { title: "Through the Gates of Love", link: "" },
      { title: "Passionate Embrace", link: "" },
      { title: "Undying Devotion", link: "" },
      { title: "True Love's Fury", link: "" },
      { title: "Tender Trifles of Love", link: "" },
    ],
    "tragic-stories": [
      {
        title:
          "Unbroken: A World War II Story of Survival, Resilience, and Redemption",
        link: "",
      },
      { title: "Nineteen Minutes", link: "" },
      { title: "The Hate U Give", link: "" },
      {
        title: "Maus I: A Survivor's Tale: My Father Bleeds History",
        link: "",
      },
      { title: "As I Lay Dying", link: "" },
      { title: "And Then There Were None", link: "" },
    ],
    "horror-stories": [
      { title: "The Haunting of Hill House", link: "" },
      { title: "The Exorcist", link: "" },
      { title: "Dracula", link: "" },
      { title: "Frankenstein", link: "" },
      { title: "The Turn of the Screw", link: "" },
      { title: "Carrie", link: "" },
      { title: "A Head Full of Ghosts", link: "" },
      { title: "Psyco", link: "" },
    ],
    "happy-stories": [
      { title: "Happy heart", link: "" },
      { title: "Hugs & Kisses", link: "" },
      { title: "Key to my heart", link: "" },
      { title: "Light my fire", link: "" },
      { title: "A Short Guide to a Happy Life", link: "" },
    ],
  };

  return (
    <footer className="flex flex-col justify-center items-center gap-16 bg-primary py-8 px-6 rounded-t-3xl border-4 border-black md:px-16 lg:px-24">
      <div className="md:flex flex-row justify-between w-full">
        <div className="flex justify-center items-center lg:justify-start lg:h-full gap-6 py-6 lg:p-0">
          <Image
            src={require("@/assets/svg/logo.svg")}
            alt="logo"
            width={70}
            height={70}
          />
          <h1
            className={cn(
              "text-5xl md:text-5xl whitespace-nowrap",
              titleFont.className
            )}
          >
            Whisper Verse
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center md:flex-wrap md:justify-start md:items-start lg:flex-row gap-4">
          {footerTitles.jsonKeys.map((key, idx) => (
            <div
              key={key}
              className="flex flex-col items-center justify-center lg:items-start gap-1 text-sm max-w-60"
            >
              <Link
                className={cn(
                  "text-3xl hover:underline text-center capitalize",
                  titleFont.className
                )}
                href={`/${key}`}
              >
                {footerTitles.titles[idx]}
              </Link>
              {footerLinks[key].map((footerLink, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-1"
                >
                  <Link
                    href={`/${key}/${footerLink.link}`}
                    className="text-sm hover:underline text-center md:text-left"
                  >
                    {footerLink.title}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-center">
        ©️ 2023 Copyrights reserved to{" "}
        <Link
          className="font-bold underline"
          href="https://www.prathamchudasama.com"
          target="_blank"
        >
          Pratham
        </Link>
      </p>
    </footer>
  );
}
