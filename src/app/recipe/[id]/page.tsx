import { getRecipe } from "@/app/actions/recipes";
import PreviousPage from "@/components/previous-page";
import RecipeDetails from "@/components/recipe-details";
import { Recipe } from "@/lib/types/recipe";

export default async function RecipeDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const recipe: Recipe = await getRecipe(id);
  return (
    <>
      <PreviousPage route={"/"} />
      <RecipeDetails recipe={recipe} />
    </>
  );
}
