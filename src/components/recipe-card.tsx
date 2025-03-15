import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface RecipeCardProps {
  name: string;
  description: string;
}

export default function RecipeCard({ name, description }: RecipeCardProps) {
  return (
    <Card className="w-[300px]">
      <CardContent>
        <Image
          className="rounded-lg"
          alt="recipe-placeholder"
          width={300}
          height={400}
          src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
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
