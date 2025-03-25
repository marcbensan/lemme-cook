import { getIngredient } from "@/app/actions/ingredients";
import GroceryMap from "@/components/grocery-map";
import IngredientOffers from "@/components/ingredient-offers";
import PreviousPage from "@/components/previous-page";

export default async function IngredientPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const groceryStores = await getIngredient(id);
  return (
    <>
      <PreviousPage />
      <IngredientOffers groceryStores={groceryStores} />
      <div className="px-16 pb-24 flex flex-col space-y-12">
        <p className="font-bold text-5xl">STORE LOCATION</p>
        <GroceryMap />
      </div>
    </>
  );
}
