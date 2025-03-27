import { atom } from 'jotai'
import { Recipe } from './types/recipe'

export const recipesAtom = atom<Recipe[]>([])
export const ingredientsAtom = atom<string[]>([])
