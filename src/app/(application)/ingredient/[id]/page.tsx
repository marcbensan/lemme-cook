import { getIngredient, getMissingIngredient } from "@/app/actions/ingredients";
import GroceryMap from "@/components/grocery-map";
import IngredientOffers from "@/components/ingredient-offers";
import PreviousPage from "@/components/previous-page";

export default async function IngredientPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const groceryStores = await getMissingIngredient(id);
  const ingredient = await getIngredient(id);
  return (
    <div className="flex flex-col items-start">
      <PreviousPage />
      <IngredientOffers groceryStores={groceryStores} ingredient={ingredient} />
      <div className="px-16 pb-24 flex flex-col w-full space-y-12">
        <p className="font-bold text-5xl">STORE LOCATION</p>
        <GroceryMap />
      </div>
    </div>
  );
}
