"use client";

import { Ingredient } from "@/lib/types/ingredient";
import { Tag, TagInput } from "emblor";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function AddIngredient() {
  const [ingredientTags, setIngredientTags] = useState<Tag[]>([]);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
  const [options, setOptions] = useState<Tag[]>([]);

  useEffect(() => {
    async function getIngredients() {
      const res = await fetch("http://52.15.240.217:8080/api/ingredients");
      const data: Ingredient[] = await res.json();
      let modifiedData: Tag[] = [];

      data.forEach((ingredient) => {
        modifiedData.push({
          id: ingredient.id.toString(),
          text: ingredient.name,
        });
      });

      setOptions(modifiedData);
    }
    getIngredients();
  }, []);

  function handleSubmit() {
    console.log(ingredientTags);
  }

  return (
    <>
      <TagInput
        tags={ingredientTags}
        setTags={(newTags) => {
          setIngredientTags(newTags);
        }}
        placeholder="Add a tag"
        styleClasses={{
          input: "w-full outline-none",
          autoComplete: {
            popoverTrigger: "pr-5",
            popoverContent: "p-2 ml-[-24px]",
            commandItem: "cursor-pointer hover:bg-gray-600",
          },
          tag: {
            body: "flex items-center pl-4 cursor-pointer",
            closeButton: "cursor-pointer",
          },
          clearAllButton: "w-[30%] mb-3",
          tagList: {
            container: "my-4 flex flex-wrap",
          },
        }}
        activeTagIndex={activeTagIndex}
        setActiveTagIndex={setActiveTagIndex}
        inlineTags={false}
        inputFieldPosition={"top"}
        maxTags={10}
        showCounter={true}
        autocompleteOptions={options}
        enableAutocomplete={true}
        restrictTagsToAutocompleteOptions={false}
      />
      {ingredientTags.length > 0 && (
        <div className="flex items-end justify-end">
          <Button
            onClick={handleSubmit}
            className="bg-zinc-700 text-white hover:bg-zinc-600 cursor-pointer"
          >
            Find Recipes
          </Button>
        </div>
      )}
    </>
  );
}
