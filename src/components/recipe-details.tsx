"use client";

import {
  ClockIcon,
  EggIcon,
  PlusIcon,
  UserRoundPenIcon,
  UtensilsIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function RecipeDetails() {
  const sampleRecipe = {
    name: "Spaghetti Carbonara",
    author: "John Doe",
    ingredients: [
      "200g Spaghetti",
      "100g Pancetta",
      "2 large eggs",
      "50g Pecorino cheese",
      "50g Parmesan",
      "Freshly ground black pepper",
      "Salt",
      "2 cloves of garlic",
      "50g unsalted butter",
    ],
    time: "25 mins",
    serving: "2 - 3",
    numOfIngredients: 9,
    description:
      "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    instructions: [
      "Put a large saucepan of water on to boil.",
      "Finely chop the pancetta, having first removed any rind.",
      "Finely grate both cheeses and mix them together.",
      "Beat the eggs in a medium bowl, season with a little freshly grated black pepper and set everything aside.",
      "Add 1 tsp salt to the boiling water, add the spaghetti and when the water comes back to the boil, cook at a constant simmer.",
      "Squash 2 peeled plump garlic cloves with the blade of a knife, just to bruise it.",
      "Melt the butter in a large frying pan and, as soon as the butter has melted, tip in the pancetta and garlic.",
      "Leave to cook on a medium heat for about 5 minutes, stirring often, until the pancetta is golden and crisp.",
      "Keep the heat under the pancetta on low. When the pasta is ready, lift it from the water with a pasta fork or tongs and put it in the frying pan with the pancetta.",
      "Take the pan of spaghetti and pancetta off the heat.",
      "Quickly pour in the eggs and cheese. Using the tongs or a long fork, lift up the spaghetti so it mixes easily with the egg mixture, which thickens but doesn’t scramble, and everything is coated.",
      "Add extra pasta cooking water to keep it saucy.",
      "Serve immediately with a little sprinkling of the remaining cheese and a grating of black pepper.",
    ],
  };

  return (
    <div className="py-12 px-16">
      <p className="font-bold text-7xl">{sampleRecipe.name}</p>
      <hr className="my-12" />
      <div className="flex flex-row space-x-24">
        <div className="w-1/2 flex flex-col">
          <Image
            width={4000}
            height={2000}
            alt="recipe-img"
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            className="rounded-lg"
          />
          <hr className="my-12" />
          <SummaryContainer />
        </div>
        <div className="flex flex-col w-1/2 h-auto space-y-12">
          <div className="flex flex-row space-x-4 items-center max-w-100">
            <UserRoundPenIcon className="size-12" />
            <p className="font-semibold text-xl">{sampleRecipe.author}</p>
            <Button className="flex flex-row bg-transparent text-white cursor-pointer hover:bg-transparent">
              <PlusIcon />
              <p className="text-lg">Follow</p>
            </Button>
          </div>
          <div>
            <p className="font-bold text-2xl">INGREDIENTS:</p>
            <div className="grid grid-cols-2 w-full">
              {sampleRecipe.ingredients.map((ingredient) => (
                <p key={ingredient} className="text-lg my-4 w-80 font-semibold">
                  {ingredient}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="my-12" />
      <p className="mb-12 text-lg">"{sampleRecipe.description}"</p>
      <div>
        <p className="font-semibold text-5xl">INSTRUCTIONS</p>
        <ol>
          {sampleRecipe.instructions.map((instruction, index) => (
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

function SummaryContainer() {
  return (
    <div className="grid grid-cols-2 gap-y-8">
      <div className="flex flex-row space-x-2 items-center">
        <ClockIcon />
        <p className="text-xl font-semibold">Ready in: </p>
        <p className="text-xl font-bold">25 mins</p>
      </div>
      <div className="flex flex-row space-x-2 items-center">
        <UtensilsIcon />
        <p className="text-xl font-semibold">Servings: </p>
        <p className="text-xl font-bold">6 - 8</p>
      </div>
      <div className="flex flex-row space-x-2 items-center">
        <EggIcon />
        <p className="text-xl font-semibold">Ingredients: </p>
        <p className="text-xl font-bold">12</p>
      </div>
    </div>
  );
}
