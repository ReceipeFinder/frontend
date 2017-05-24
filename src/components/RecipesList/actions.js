import API from '../../utils/APIHelper'


export const REQUEST_MY_RECIPES = 'REQUEST_MY_RECIPES';
function requestMyRecipes() {
  return {
    type: REQUEST_MY_RECIPES
  }
}

export const RECEIVE_MY_RECIPES = 'RECEIVE_MY_RECIPES';
function receiveMyRecipes(recipes) {
  return {
    type: RECEIVE_MY_RECIPES,
    recipes: recipes
  }
}


export function fetchMyRecipesIfNeeded() {
  return dispatch => {
    dispatch(requestMyRecipes());
    API.get(`/recipes/favourites`).then((favourites) => {
      API.get(`/recipes/done`).then(done => {
        API.get(`/recipes/todo`).then(todo => {
          dispatch(receiveMyRecipes({
            favourites: favourites.data,
            done: done.data,
            todo: todo.data
          }))
        })
      })
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

