import { Recipe } from "@/lib/types/recipe";
import Link from "next/link";
import RecipeCard from "./recipe-card";

interface RecipesContainerProps {
  sampleRecipes: Recipe[];
}

export default function RecipesContainer({
  sampleRecipes,
}: RecipesContainerProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-8 my-12">
      {sampleRecipes.map((recipe: Recipe) => (
        <Link href={`/recipe/${recipe.id}`} key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </Link>
      ))}
    </div>
  );
}
