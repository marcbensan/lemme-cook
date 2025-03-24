"use server";

const URL = process.env.URL;

export async function getIngredients() {
  const res = await fetch(`${URL}/api/ingredients`);
  if (!res.ok) return { message: "No ingredients found" };

  return await res.json();
}

export async function getIngredient(id: number) {
  const res = await fetch(
    `${URL}/api/ingredients/store?missingIngredientList=${id}`
  );
  if (!res.ok) return { message: "No ingredient found" };

  return await res.json();
}
