import Header from "@/components/Header";
import TagsMakerInput from "@/components/TagsMakerInput";
import TextEditor from "@/components/TextEditor";
import AudioSelection from "@/components/audioSelection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function New() {
  const categories = [
    "Love Stories",
    "Happy Stories",
    "Tragic Stories",
    "Horror Stories",
  ];
  return (
    <>
      <Header url="/new" />
      <div className="py-8 px-6 md:px-16 lg:px-24">
        <h1 className="uppercase font-semibold text-center tracking-widest text-3xl">
          Share Your Story
        </h1>
        <form className="flex flex-col gap-4 py-8">
          <div>
            <Label htmlFor="title">title of the story*</Label>
            <Input type="text" id="title" name="title" required />
          </div>
          <div>
            <Label htmlFor="title">Category of the story*</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select A Story Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {categories.map((category, idx) => (
                    <SelectItem key={idx} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="title">The story*</Label>
            <TextEditor story="Once upon a time..." />
          </div>
          <div>
            <Label htmlFor="title">Give Tags to the story*</Label>
            <TagsMakerInput />
          </div>
          <div>
            <Label htmlFor="title">Hero image*</Label>
            <Input
              type="file"
              id="title"
              name="title"
              placeholder="Choose a hero image"
              required
            />
          </div>
          <div>
            <Label htmlFor="title">Audio*</Label>
            <div className="flex gap-4">
              <AudioSelection />
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2 py-4">
            <h3 className="uppercase font-semibold text-center tracking-widest text-xl">
              {" "}
              Disclaimer{" "}
            </h3>
            <p>
              Thank you for contributing to our creative community! To ensure a
              positive and respectful environment, please adhere to the
              following guidelines when uploading your story:
            </p>
            <div className="flex flex-col gap-2">
              <li>
                <b>
                  <u>Content Review:</u>
                </b>
                &nbsp; All stories and content will undergo a thorough review
                process by our website moderators. Please refrain from
                submitting content that includes explicit or NSFW (Not Safe For
                Work) material. Such content may be flagged and removed to
                maintain a safe and inclusive space for all users.
              </li>
              <li>
                <b>
                  <u>Authenticity:</u>
                </b>
                &nbsp; Ensure that your uploaded story is authentic and created
                by a human author. We value genuine contributions from our
                community members. AI-generated content is not permitted. Let
                your unique voice and creativity shine through in your
                storytelling.
              </li>
              <li>
                <b>
                  <u>Narration:</u>
                </b>
                &nbsp; If you choose to upload an audio version of your story,
                it should align with the written content. The audio should be a
                narration of the text rather than an AI-generated reading. This
                enhances the personal touch and ensures that the essence of your
                story is accurately conveyed.
              </li>
              <li>
                <b>
                  <u>Respectful Content:</u>
                </b>
                &nbsp; Please be mindful of the content you share. Avoid any
                discriminatory, offensive, or harmful material. We encourage
                stories that promote inclusivity, creativity, and positive
                engagement within our community.
              </li>
              <li>
                <b>
                  <u>Originality:</u>
                </b>
                &nbsp; Only upload content that you have created yourself.
                Plagiarism is strictly prohibited. Celebrate your original ideas
                and stories, and respect the intellectual property of others.
              </li>
            </div>
          </div>
          <Button type="submit" size="lg">
            Accept and Upload the story
          </Button>
        </form>
      </div>
    </>
  );
}
