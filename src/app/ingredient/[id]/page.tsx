import GroceryMap from "@/components/grocery-map";
import IngredientOffers from "@/components/ingredient-offers";
import PreviousPage from "@/components/previous-page";

export default function IngredientPage() {
  return (
    <>
      <PreviousPage />
      <IngredientOffers />
      <div className="px-16 pb-24 flex flex-col space-y-12">
        <p className="font-bold text-5xl">STORE LOCATION</p>
        <GroceryMap />
      </div>
    </>
  );
}
