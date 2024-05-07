"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function AudioSelection() {
  const [currentlySelected, setCurrentlySelected] =
    useState<string>("no-audio");

  const handleSelection = (e: any) => {
    setCurrentlySelected(e.target.value);
    console.log(e);
  };

  console.log("currentlySelected", currentlySelected);

  return (
    <RadioGroup defaultValue={currentlySelected}>
      <div className="flex">
        <input
          type="radio"
          id="ai-generated"
          value="ai-generated"
          name="audio-selection"
          onChange={handleSelection}
          className="hidden"
        />
        <Label htmlFor="ai-generated">
          <Button
            type="button"
            size="sm"
            disabled={currentlySelected !== "ai-generated"}
          >
            AI Generated
          </Button>
        </Label>
      </div>
      <div className="flex">
        <input
          type="radio"
          id="upload"
          value="upload"
          name="audio-selection"
          onChange={handleSelection}
          className="hidden"
        />
        <Label htmlFor="upload">
          <Button
            type="button"
            size="sm"
            disabled={currentlySelected !== "upload"}
          >
            Upload your own Audio
          </Button>
        </Label>
      </div>
      <div className="flex">
        <input
          type="radio"
          id="no-audio"
          value="no-audio"
          name="audio-selection"
          onChange={handleSelection}
          defaultChecked={currentlySelected !== "no-audio"}
          className="hidden"
        />
        <Label htmlFor="no-audio">
          <Button
            type="button"
            size="sm"
            disabled={currentlySelected !== "no-audio"}
          >
            No Audio
          </Button>
        </Label>
      </div>
    </RadioGroup>
  );
}
