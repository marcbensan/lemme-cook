'use client'

import { ingredientsAtom, recipesAtom } from '@/lib/store'
import { Recipe } from '@/lib/types/recipe'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'
import RecipesContainer from './recipes-container'
import { Button } from './ui/button'
import { Input } from './ui/input'

export default function RecipeList({ recipes }: { recipes: Recipe[] }) {
  const [filteredRecipes, setFilteredRecipes] = useAtom(recipesAtom)
  const [userIngredients, setUserIngredients] = useAtom(ingredientsAtom)
  const [searchInput, setSearchInput] = useState<string>('')

  function handleChangeh(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target.value
    setSearchInput(input)
    const filtered = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(input.toLowerCase())
    )

    setFilteredRecipes(input === '' ? recipes : filtered)
  }

  function handleRefresh() {
    setFilteredRecipes(recipes)
    setUserIngredients([])
  }

  useEffect(() => {
    if (filteredRecipes.length < 1 && !searchInput) {
      setFilteredRecipes(filteredRecipes.length > 0 ? filteredRecipes : recipes)
    }
  }, [filteredRecipes, setFilteredRecipes])

  return (
    <div className='flex flex-col w-full px-12'>
      <div className='flex w-full flex-row space-x-2 items-center'>
        <Input
          placeholder='Search for a recipe'
          onChange={handleChangeh}
          className='my-4 w-full'
        />
        <Button variant='secondary' onClick={handleRefresh}>
          Refresh
        </Button>
      </div>
      <hr />
      {filteredRecipes.length > 0 ? (
        <RecipesContainer sampleRecipes={filteredRecipes} />
      ) : (
        <div className='flex items-center justify-center my-24'>
          <p>No recipes found</p>
        </div>
      )}
    </div>
  )
}
