"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";

export default function GoBackButton() {
  const router = useRouter();
  return (
    <Button
      size="sm"
      variant="destructive"
      onClick={() => {
        router.back();
      }}
    >
      <Cross2Icon />
      Cancel Go Back
    </Button>
  );
}
