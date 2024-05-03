import { titleFont } from "@/components/fonts";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ExclamationTriangleIcon,
  EyeOpenIcon,
  ReaderIcon,
  Share1Icon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Story({
  params,
}: {
  params: { category: string; story: string };
}) {
  const story = {
    title: "Star-Crossed Serenade",
    tags: [
      "ForbiddenLove",
      "MusicalRomance",
      "RevolutionaryLove",
      "OppositesAttract",
    ],
    story: `
    In the bustling city of Crescendo, music was more than just an art form—it was a way of life. The city was divided into rival musical factions, each with its unique style and traditions. The Crescendo Symphony, known for its classical elegance, had long been at odds with the Rhythm Rebels, a group of innovative musicians pushing the boundaries of contemporary beats.

In the heart of this musical battleground, two prodigious musicians emerged from opposing factions. Adrian, a virtuoso violinist from the Crescendo Symphony, and Aria, a talented pianist from the rebellious Rhythm Rebels, found themselves drawn to each other despite the deep-rooted animosity between their factions.

Their first encounter was at the Crescendo Ball, an event where the Symphony showcased its classical prowess. Aria, with her fiery spirit and unconventional style, crashed the event, creating a stir among the attendees. Adrian, initially skeptical, found himself captivated by the passion in her music.

The connection between Adrian and Aria deepened as they began to secretly meet, sharing their love for music and life beyond the rigid boundaries of their factions. They discovered a shared dream—to bridge the gap between their worlds through a groundbreaking musical collaboration.

As their secret rendezvous continued, whispers of their forbidden love spread like wildfire through Crescendo. The city became divided not only by musical preferences but by opinions about the star-crossed lovers. Some saw their union as a symbol of unity and change, while others considered it a betrayal to tradition.

Adrian and Aria decided to defy the odds and announce their collaboration, a composition that seamlessly merged classical and contemporary elements. The performance was scheduled at the Crescendo Harmony Festival, an event that attracted music enthusiasts from all walks of life.

On the night of the festival, tension hung in the air as Adrian and Aria took the stage. The Crescendo Symphony and Rhythm Rebels watched in anticipation, unsure of what to expect. As the first notes resonated through the air, a harmonious blend of violin and piano, the city held its breath.

The performance was nothing short of magical. Adrian and Aria's collaboration transcended the boundaries of tradition and rebellion, creating a symphony that echoed the harmony of their love. The audience, initially divided, rose in a unanimous standing ovation, acknowledging the power of unity through music.

In that moment, the walls between the Crescendo Symphony and Rhythm Rebels crumbled. Adrian and Aria's love had not only created a musical revolution but had also ignited a change in the hearts of the people. The factions, once at odds, began to appreciate the beauty in each other's music.

Adrian and Aria's love story became a legend in Crescendo, a tale told through the city's streets and concert halls. Their collaboration became a symbol of breaking barriers, and the once-divided factions started to collaborate more, blurring the lines between classical and contemporary music.

As for Adrian and Aria, they continued to make music together, their love story inspiring generations to come. The Crescendo Symphony and Rhythm Rebels found common ground, and the city that was once divided by musical rivalry became a thriving hub of diverse musical expression.

And so, in the heart of Crescendo, the serenade of love played on, echoing through the streets, carrying with it the melody of unity that Adrian and Aria had created against all odds.
`,
    likes: 150320,
    views: "5 million",
    readTime: "10 Minutes",
  };

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
        description:
          "Witness the incredible ripple effect of a simple idea - a project where people commit to spreading smiles through random acts of kindness. From leaving uplifting notes to surprising strangers with small gifts...",
        image: "the-smile-project.jpg",
        href: "/the-smile-project",
        tags: ["Kindness", "Community", "Happiness", "RandomActsOfKindness"],
        likes: "200k",
        views: "7 million",
      },
    ],
  ];

  return (
    <div className="py-8 px-6 md:px-16 lg:px-24">
      <div className="flex justify-between">
        <Link href="/" className="md:place-self-start">
          <Button size="sm">
            <Image
              src={require(`@/assets/svg/up-arow-circle.svg`)}
              alt={`Back to ${params.category}`}
              height={14}
              width={14}
              className="-rotate-90 dark:invert"
            />
            Back To{" "}
            {params.category.replace(/\w\S*/g, function (txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            })}
          </Button>
        </Link>
        <div></div>
        <Link href="/" className="md:place-self-end">
          <Button size="sm">
            <Share1Icon />
            Share
          </Button>
        </Link>
      </div>
      <div className="flex flex-col py-8 gap-4">
        <h1 className={cn("text-7xl font-semibold", titleFont.className)}>
          {story.title}
        </h1>
        <div className="flex gap-2 flex-wrap">
          {story.tags.map((tag) => (
            <small
              key={tag}
              className="bg-gray-200 dark:text-dark-foreground text-gray-800 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </small>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 justify-center items-center">
            <ReaderIcon />
            <p>{story.readTime}</p>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <EyeOpenIcon />
            <p>{story.views}</p>
          </div>
        </div>
        <Image
          src={
            "https://images.unsplash.com/photo-1651613543604-195861551d15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={story.title}
          width={1920}
          height={1080}
          className="w-full h-[50vh] object-cover"
        />
        <div dangerouslySetInnerHTML={{ __html: story.story }} />
        <div className="flex justify-center items-center">
          <Button variant="destructive">
            <ExclamationTriangleIcon />
            Report Story
          </Button>
        </div>
        <div className="flex flex-col py-20">
          <h2 className="flex gap-2 justify-center md:justify-start items-center uppercase font-medium text-center tracking-widest text-2xl">
            Recommendation
          </h2>
          <div className="flex flex-col gap-8 py-8">
            {storiesList.map((stories, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-8 w-full">
                {stories.map((story) => (
                  <Link
                    key={story.title}
                    href={`${params.category}/${story.href}`}
                    className={`flex flex-col gap-4 justify-start items-start w-full border-4 border-black dark:border-secondary-foreground rounded-lg shadow-lg dark:shadow-dark-foreground hover:shadow-0 transition-shadow duration-300 ease-out overflow-hidden`}
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
                            className="bg-gray-200 dark:text-dark-foreground text-gray-800 px-2 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </small>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex py-4 gap-4">
                          <h3 className="text-gray-800 dark:text-secondary-foreground flex gap-2 justify-center items-center">
                            <Image
                              src={require("@/assets/svg/heart.svg")}
                              alt="likes"
                              height={18}
                              width={18}
                            />
                            {story.likes}
                          </h3>
                          <h3 className="text-gray-800 dark:text-secondary-foreground flex gap-2 justify-center items-center">
                            <Image
                              src={require("@/assets/svg/eye.svg")}
                              alt="views"
                              height={18}
                              width={18}
                              className="dark:invert"
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
      </div>
    </div>
  );
}
