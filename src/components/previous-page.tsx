"use client";

import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function PreviousPage({ route }: { route?: string }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => (route ? router.push(route) : router.back())}
      className="flex flex-row space-x-2 mx-4 p-8 bg-transparent hover:bg-transparent cursor-pointer text-white"
    >
      <ChevronLeftIcon />
      <p>Back to Recipe List</p>
    </Button>
  );
}
