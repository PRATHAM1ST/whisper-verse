"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Cross2Icon } from "@radix-ui/react-icons";

export default function TagsMakerInput() {
  const [tags, setTags] = useState<string[]>(["hello"]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const newTags = [...tags, inputValue];
      setTags(newTags);
      setInputValue("");
    }
  };

  const handleTagDelete = (event: React.MouseEvent<SVGSVGElement>) => {
    const tagToDelete = event.currentTarget.previousSibling?.textContent;
    if (tagToDelete) {
      const newTags = tags.filter((tag) => tag !== tagToDelete);
      setTags(newTags);
    }
  };

  return (
    <>
      <div className="flex gap-2 flex-wrap py-2">
        {tags.map((tag) => (
          <small
            key={tag}
            className="flex justify-center items-center bg-gray-200 dark:text-dark-foreground text-gray-800 px-2 py-1 rounded-full text-xs"
          >
            {tag}
            <Cross2Icon
              className="w-3 h-3 ml-1 cursor-pointer"
              onClick={handleTagDelete}
            />
          </small>
        ))}
      </div>
      <Input
        type="text"
        id="tags"
        name="tags"
        required
        onKeyDown={handleKeyDown}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
}
