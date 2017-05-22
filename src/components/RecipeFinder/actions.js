import axios from 'axios';
import API from '../../utils/APIHelper'

export const REQUEST_RECIPES_SEARCH = 'RECIPES_SEARCH';
function requestRecipesSearch() {
  return {
    type: REQUEST_RECIPES_SEARCH
  }
}


export const RECEIVE_RECIPES_SEARCH = 'RECIPES_SEARCH';
function receiveRecipesSearch(recipes) {
  return {
    type: RECEIVE_RECIPES_SEARCH,
    recipes: recipes
  }
}

export const RECIPES_SEARCH = 'RECIPES_SEARCH';
export function searchRecipes(ingredients) {
  requestRecipesSearch();
  
  let queryString = '?';
  let ingredientsArray = ingredients.split(', ').map(ingredient => {
    return (ingredient.replace(' ', '%20'))
  });
  
  ingredientsArray.forEach((ingredient, index) => {
    queryString += `ingredients[]=${ingredient}&`
  });
  
  return dispatch => {
    API.get(`/recipes/search${queryString}`).then(recipes => {
      dispatch(receiveRecipesSearch(recipes.data));
    });
  }
}

