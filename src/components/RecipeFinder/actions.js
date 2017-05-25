import API from '../../utils/APIHelper'

export const REQUEST_RECIPES_SEARCH = 'REQUEST_RECIPES_SEARCH';
function requestRecipesSearch() {
  return {
    type: REQUEST_RECIPES_SEARCH
  }
}


export const RECEIVE_RECIPES_SEARCH = 'RECEIVE_RECIPES_SEARCH';
function receiveRecipesSearch(recipes) {
  return {
    type: RECEIVE_RECIPES_SEARCH,
    recipes: recipes
  }
}

export function fetchSingleRecipe(id) {
  return dispatch => {
    API.get(`/recipes/${id}`).then((data) => {
      dispatch(setRecipeInWorkspace(data))
    })
  }
}

export const SET_RECIPE_IN_WORKSPACE = 'SET_RECIPE_IN_WORKSPACE';
export function setRecipeInWorkspace(recipe) {
  return {
    type: SET_RECIPE_IN_WORKSPACE,
    recipe
  }
}

export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE'
export function toggleFavourite(id) {
  return {
    type: TOGGLE_FAVOURITE,
    id: id
  }
}

export const TOGGLE_DONE = 'TOGGLE_DONE'
export function toggleDone(id) {
  return {
    type: TOGGLE_DONE,
    id: id
  }
}

export const TOGGLE_TODO = 'TOGGLE_TODO'
export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id: id
  }
}

export function searchRecipes(ingredients) {
  return dispatch => {
    dispatch(requestRecipesSearch());
    
    let queryString = '?';
    let ingredientsArray = ingredients.split(', ').map(ingredient => {
      return (ingredient.replace(' ', '%20'))
    });
    
    ingredientsArray.forEach((ingredient, index) => {
      queryString += `ingredients[]=${ingredient}&`
    });
    
    API.get(`/recipes/search${queryString}`).then(recipes => {
      dispatch(receiveRecipesSearch(recipes.data));
    });
  }
}

