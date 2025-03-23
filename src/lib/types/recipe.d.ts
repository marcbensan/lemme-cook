import { Ingredient } from "./ingredient";

export interface Recipe {
  id: number;
  userId: number;
  userName: string;
  name: string;
  description: string;
  instructions: string;
  imageUrl: string;
  prepTime: number;
  servings: number;
  createdAt: string;
  updatedAt: string;
  requiredIngredients: Ingredient[];
}
