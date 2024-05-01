import { titleFont } from "@/components/fonts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Category({ params }: { params: { category: string } }) {
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

  const titleObject = landingPageLinks.find((links) =>
    links.find((link) => link && link.href === `/${params.category}`)
  )?.[0];

  const storiesList = [
    [
      {
        title: "Star-Crossed Serenade",
        description:
          "In a world divided by rival musical factions, two prodigious musicians from opposing sides fall in love despite the odds. Their forbidden romance sparks a musical revolution that challenges societal norms...",
        image: "star-crossed-serenade.jpg",
        href: "/star-crossed-serenade",
        tags: [
          "ForbiddenLove",
          "MusicalRomance",
          "RevolutionaryLove",
          "OppositesAttract",
        ],
        likes: "150k",
        views: "5 million",
      },

      {
        title: "The Smile Project",
        description: "Witness the incredible ripple effect of a simple idea - a project where people commit to spreading smiles through random acts of kindness. From leaving uplifting notes to surprising strangers with small gifts...",
        image: "the-smile-project.jpg",
        href: "/the-smile-project",
        tags: ["Kindness", "Community", "Happiness", "RandomActsOfKindness"],
        likes: "200k",
        views: "7 million",
      }
    ],[
      {
        title: "The Last Dance",
        description:
          "In a post-apocalyptic world where humans are forced to live underground, a group of survivors discovers an abandoned dance studio. As they learn to dance, they rediscover their humanity and the power of hope...",
        image: "the-last-dance.jpg",
        href: "/the-last-dance",
        tags: ["PostApocalyptic", "Dance", "Hope", "Humanity"],
        likes: "100k",
        views: "3 million",
      },
      {
        title: "The Midnight Library",
        description:
          "In a hidden library that exists between life and death, visitors can explore infinite books that tell the stories of their lives. When Nora Seed finds herself at the Midnight Library, she discovers that she can undo her regrets...",
        image: "the-midnight-library.jpg",
        href: "/the-midnight-library",
        tags: ["Fantasy", "Regrets", "SecondChances", "LifeLessons"],
        likes: "250k",
        views: "10 million",
      }
    ]
  ];

  return (
    <div className="py-8 px-6 md:px-16 lg:px-24">
      <div className="grid grid-rows-2 place-items-center md:grid-cols-3 md:grid-rows-1 gap-4">
        <Link href="/" className="md:place-self-start">
          <Button size="sm">
            <Image
              src={require(`@/assets/svg/up-arow-circle.svg`)}
              alt={titleObject?.title ?? ""}
              height={14}
              width={14}
              className="-rotate-90"
            />
            Back To Categories
          </Button>
        </Link>
        <h1 className="flex gap-2 justify-center items-center uppercase font-semibold text-center tracking-widest text-3xl">
          {titleObject?.title}
          <Image
            src={require(`@/assets/svg/${titleObject?.icon}`)}
            alt={titleObject?.title ?? ""}
            height={50}
            width={50}
          />
        </h1>
        <div></div>
      </div>

      <div className="flex flex-col gap-8 py-8">
        {storiesList.map((stories, idx) => (
          <div key={idx} className="flex flex-col md:flex-row gap-8 w-full">
            {stories.map((story) => (
              <Link
                key={story.title}
                href={story.href}
                className={`flex flex-col gap-4 justify-start items-start w-full border-4 border-black rounded-lg shadow-lg hover:shadow-0 transition-shadow duration-300 ease-out overflow-hidden`}
              >
                <Image
                  src={
                    "https://images.unsplash.com/photo-1651613543604-195861551d15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  alt={story.title}
                  width={500}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="px-4">
                  <h3
                    className={cn(
                      "text-2xl font-semibold",
                      titleFont.className
                    )}
                  >
                    {story.title}
                  </h3>
                  <p>{story.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {story.tags.map((tag) => (
                      <small
                        key={tag}
                        className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </small>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex py-4 gap-4">
                      <h3 className="text-gray-800 flex gap-2 justify-center items-center">
                        <Image
                          src={require("@/assets/svg/heart.svg")}
                          alt="likes"
                          height={18}
                          width={18}
                        />
                        {story.likes}
                      </h3>
                      <h3 className="text-gray-800 flex gap-2 justify-center items-center">
                        <Image
                          src={require("@/assets/svg/eye.svg")}
                          alt="views"
                          height={18}
                          width={18}
                        />
                        {story.views}
                      </h3>
                    </div>
                    <Image
                      src={require("@/assets/svg/play.svg")}
                      alt="read more"
                      height={36}
                      width={36}
                      />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
        <div className="flex"></div>
      </div>
    </div>
  );
}
