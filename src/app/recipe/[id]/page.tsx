import RecipeDetails from "@/components/recipe-details";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";

export default function RecipeDetailsPage() {
  return (
    <div>
      <Link href="/" className="flex flex-row space-x-2 p-4">
        <ChevronLeftIcon />
        <p>Back to Recipe List</p>
      </Link>
      <RecipeDetails />
    </div>
  );
}
