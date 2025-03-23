import { Recipe } from "@/lib/types/recipe";
import { redirect } from "next/navigation";
import RecipeCard from "./recipe-card";

interface RecipesContainerProps {
  sampleRecipes: Recipe[];
}

export default function RecipesContainer({
  sampleRecipes,
}: RecipesContainerProps) {
  function handleClick(recipe: Recipe) {
    redirect(`/recipe/${recipe.id}`);
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-8 my-12">
      {sampleRecipes.map((recipe: Recipe) => (
        <button key={recipe.name} onClick={() => handleClick(recipe)}>
          <RecipeCard recipe={recipe}/>
        </button>
      ))}
    </div>
  );
}
