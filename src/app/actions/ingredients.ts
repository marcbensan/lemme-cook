"use server";

import { Ingredient } from "@/lib/types/ingredient";

const URL = process.env.URL;

export async function getIngredients() {
  const res = await fetch(`${URL}/api/ingredients`);
  if (!res.ok) return { message: "No ingredients found" };

  return await res.json();
}

export async function getMissingIngredient(id: number) {
  const res = await fetch(
    `${URL}/api/ingredients/store?missingIngredientList=${id}`
  );
  if (!res.ok) return { message: "No ingredient found" };

  return await res.json();
}

export async function getIngredient(id: number) {
  const res = await fetch(`${URL}/api/ingredients`);

  if (!res.ok) return { message: "No ingredients found" };

  const ingredients = await res.json();

  console.log(ingredients);

  const ingredient: Ingredient = ingredients.find(
    (ingredient: Ingredient) => ingredient.id === Number(id)
  );

  console.log(ingredient);
  return ingredient;
}
