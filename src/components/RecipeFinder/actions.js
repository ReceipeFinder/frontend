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

// export const INVALIDATE_RECIPES = 'INVALIDATE_RECIPES';
// export function invalidateRecipes() {
//   return {
//     type: INVALIDATE_RECIPES
//   }
// }
//
//
// case actions.INVALIDATE_RECIPES:
// return {
//   ...state,
//   recipes: {
//     didInvalidate: true
//   }
// };

export function fetchSingleRecipe(id) {
  console.log('FETCHING SINGLE RECIPE');
  return dispatch => {
    API.get(`/recipes/${id}`).then((data) => {
      dispatch(setRecipeInWorkspace(data))
    })
  }
}

export const SET_RECIPE_IN_WORKSPACE = 'SET_RECIPE_IN_WORKSPACE';
function setRecipeInWorkspace(recipe) {
  return {
    type: SET_RECIPE_IN_WORKSPACE,
    recipe
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

