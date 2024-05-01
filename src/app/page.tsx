import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const landingPageLinks = [
    [
      {
        title: "Love Stories",
        icon: "heart.svg",
        color: "pink-200",
        href: "/love-stories",
      },
      {
        title: "Happy Stories",
        icon: "party.svg",
        color: "purple-200",
        href: "/happy-stories",
      },
    ],
    [
      {
        title: "Tragic Stories",
        icon: "play.svg",
        color: "amber-700",
        href: "/tragic-stories",
      },
      {
        title: "Horror Stories",
        icon: "eye.svg",
        color: "green-200",
        href: "/horror-stories",
      },
    ],
  ];

  return (
    <div className="py-8 px-6 md:px-16 lg:px-24">
      <h1 className="uppercase font-semibold text-center tracking-widest text-3xl">
        Start Reading
      </h1>
      <div className="flex flex-col gap-8 py-8">
        {landingPageLinks.map((links, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-8 w-full">
            {links.map((link, idx) => (
              <Link
                key={link.title}
                href={link.href}
                className={`flex ${idx % 2 ? "flex-row-reverse" : "flex-row"} text-3xl uppercase font-bold gap-4 justify-center items-center py-16 md:py-20 text-right bg-${link.color} w-full border-4 border-black rounded-lg shadow-lg hover:shadow-0 transition-shadow duration-300 ease-out`}
              >
                {link.title.split(" ").map((word) => (
                  <>
                    {word}
                    <br />
                  </>
                ))}
                <Image
                  src={require(`@/assets/svg/${link.icon}`)}
                  alt={link.title}
                />
              </Link>
            ))}
          </div>
        ))}
        <div className="flex"></div>
      </div>
    </div>
  );
}
