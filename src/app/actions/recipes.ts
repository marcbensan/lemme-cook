"use server";

const API_URL = process.env.API_URL;

export async function getRecipes() {
  const res = await fetch(`${API_URL}/api/recipes`);
  if (!res.ok) {
    return { message: "No recipes found" };
  }

  return await res.json();
}

export async function getRecipe(recipeId: string) {
  const res = await fetch(`${API_URL}/api/recipes/${recipeId}`);
  console.log(res);

  if (!res.ok) {
    return { message: "No recipe found" };
  }

  return await res.json();
}
