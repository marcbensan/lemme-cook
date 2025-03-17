"use client";

import RecipesContainer from "@/components/recipes-container";
import { Recipe } from "@/lib/types/recipe";
import { useState } from "react";
import { Input } from "./ui/input";

interface RecipesProps {
  recipes: Recipe[];
}

export default function RecipeList({ recipes }: RecipesProps) {
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes);
  const [searchInput, setSearchInput] = useState<string>("");

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value);
    const filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
    );

    if (!searchInput) setFilteredRecipes(recipes);
    else setFilteredRecipes(filtered);
  }

  return (
    <div className="flex flex-col min-w-300 w-full px-12">
      <Input
        placeholder="Search for a recipe"
        onChange={handleSearch}
        className="my-4"
      />
      <hr />
      {filteredRecipes.length > 0 ? (
        <RecipesContainer sampleRecipes={filteredRecipes} />
      ) : (
        <div className="w-full flex items-center justify-center my-24">
          <p>No recipes found</p>
        </div>
      )}
    </div>
  );
}
