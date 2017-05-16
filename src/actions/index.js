import API from '../utils/APIHelper'

export const FETCH_DONE_RECIPES = 'FETCH_DONE_RECIPES';
export const FETCH_TODO_RECIPES = 'FETCH_TODO_RECIPES';
export const FETCH_FAVOURITES_RECIPES = 'FETCH_TODO_RECIPES';

export const DELETE_DONE_RECIPE = 'DELETE_DONE_RECIPE';
export const DELETE_TODO_RECIPE = 'DELETE_TODO_RECIPE';
export const DELETE_FAVOURITE_RECIPE = 'DELETE_FAVOURITE_RECIPE';

export function invalidateDoneRecipes() {

}

export function invalidateTodoRecipes() {

}

export function invalidateFavouritesRecipes() {

}

export function fetchDoneRecipesIfNeeded() {
  console.log(API.get('/recipes/done'))
}

export function fetchTodoRecipesIfNeeded() {

}

export function fetchFavouritesRecipesIfNeeded() {

}

