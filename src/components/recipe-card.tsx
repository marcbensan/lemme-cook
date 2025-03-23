import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Recipe } from "@/lib/types/recipe";
import Image from "next/image";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const { name, description } = recipe;

  return (
    <Card className="cursor-pointer">
      <CardContent>
        <Image
          className="rounded-lg object-cover w-200 h-80"
          alt="recipe-placeholder"
          width={1000}
          height={400}
          src={recipe.imageUrl}
        />
      </CardContent>
      <CardFooter className="flex flex-col items-start space-y-4">
        <CardTitle>{name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
