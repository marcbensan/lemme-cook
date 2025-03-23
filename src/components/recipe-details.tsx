"use client";

import { Recipe } from "@/lib/types/recipe";
import {
  ClockIcon,
  EggIcon,
  PlusIcon,
  UserRoundPenIcon,
  UtensilsIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function RecipeDetails({ recipe }: { recipe: Recipe }) {
  const [instructions, setInstructions] = useState<string[]>([]);

  useEffect(() => {
    function parseInstructions() {
      const parsedData = recipe.instructions.split(".").filter(Boolean);
      setInstructions(parsedData);
    }

    parseInstructions();
  }, []);
  return (
    <div className="py-12 px-16">
      <p className="font-bold text-7xl">{recipe.name}</p>
      <hr className="my-12" />
      <div className="flex flex-row space-x-24">
        <div className="w-1/2 flex flex-col">
          <Image
            width={4000}
            height={2000}
            alt="recipe-img"
            src={recipe.imageUrl}
            className="rounded-lg object-cover object-center h-150"
          />
          <hr className="my-12" />
          <SummaryContainer
            prepTime={recipe.prepTime}
            servings={recipe.servings}
            numOfIngredients={recipe.requiredIngredients.length}
          />
        </div>
        <div className="flex flex-col w-1/2 h-auto space-y-12">
          <div className="flex flex-row space-x-4 items-center max-w-100">
            <UserRoundPenIcon className="size-12" />
            <p className="font-semibold text-xl">{recipe.userName}</p>
            <Button className="flex flex-row bg-transparent text-white cursor-pointer hover:bg-transparent">
              <PlusIcon />
              <p className="text-lg">Follow</p>
            </Button>
          </div>
          <div>
            <p className="font-bold text-2xl">INGREDIENTS:</p>
            <div className="grid grid-cols-2 w-full">
              {recipe.requiredIngredients.map((ingredient) => (
                <p
                  key={ingredient.id}
                  className="text-lg my-4 w-80 font-semibold"
                >
                  {ingredient.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="my-12" />
      <p className="mb-12 text-lg">"{recipe.description}"</p>
      <div>
        <p className="font-semibold text-5xl">INSTRUCTIONS</p>
        <ol>
          {instructions.map((instruction, index) => (
            <li key={index} className="my-12 text-xl">
              {index + 1}. {instruction}
            </li>
          ))}
        </ol>
      </div>
      <hr className="my-12" />
      <p className="font-semibold text-5xl mb-12">INGREDIENTS YOU DON'T HAVE</p>
      <div className="space-y-8">
        <p className="text-xl">Find the best deals for these ingredients</p>
        <Link href="/ingredient/123">Tomato Sauce</Link>
      </div>
    </div>
  );
}

function SummaryContainer({
  prepTime,
  servings,
  numOfIngredients,
}: {
  prepTime: number;
  servings: number;
  numOfIngredients: number;
}) {
  return (
    <div className="grid grid-cols-2 gap-y-8">
      <div className="flex flex-row space-x-2 items-center">
        <ClockIcon />
        <p className="text-xl font-semibold">Ready in: </p>
        <p className="text-xl font-bold">{prepTime} mins</p>
      </div>
      <div className="flex flex-row space-x-2 items-center">
        <UtensilsIcon />
        <p className="text-xl font-semibold">Servings: </p>
        <p className="text-xl font-bold">{servings}</p>
      </div>
      <div className="flex flex-row space-x-2 items-center">
        <EggIcon />
        <p className="text-xl font-semibold">Ingredients: </p>
        <p className="text-xl font-bold">{numOfIngredients}</p>
      </div>
    </div>
  );
}
