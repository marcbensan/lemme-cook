import RecipeList from "@/components/recipe-list";
import { Recipe } from "@/lib/types/recipe";
import { getRecipes } from "../actions/recipes";

export default async function Home() {
  const recipes: Recipe[] = await getRecipes();

  return <RecipeList recipes={recipes} />;
}
