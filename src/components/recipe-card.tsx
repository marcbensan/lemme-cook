import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Recipe } from "@/lib/types/recipe";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { name, description } = recipe;

  return (
    <Card
      className="cursor-pointer group/card relative overflow-hidden h-96 rounded-md shadow-xl mx-auto flex flex-col justify-between bg-cover bg-center"
      style={{ backgroundImage: `url(${recipe.imageUrl})` }}
    >
      <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
      <CardContent>
        <div className="flex flex-row items-center space-x-4 z-10">
          <div className="flex flex-col w-200">
            <p className="font-semibold text-base text-gray-200 relative z-10">
              {recipe.userName}
            </p>
            <p className="text-sm text-gray-100">
              requires {recipe.requiredIngredients.length} ingredients
            </p>
          </div>
        </div>
      </CardContent>
      <div className="flex flex-col items-start px-4">
        <CardTitle className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
          {name}
        </CardTitle>
        <CardDescription className="font-normal text-sm text-gray-50 relative z-10 my-4 line-clamp-2">
          {description}
        </CardDescription>
      </div>
    </Card>
  );
}
