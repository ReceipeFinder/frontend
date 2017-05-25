import API from '../../utils/APIHelper'
import {toggleFavourite, toggleDone, toggleTodo} from '../RecipeFinder/actions'

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

export const INVALIDATE_MY_RECIPES = 'INVALIDATE_MY_RECIPES';
export function invalidateMyRecipes() {
  return {
    type: INVALIDATE_MY_RECIPES
  }
}

export function addToFavourites(id, index) {
  return dispatch => {
    API.post(`/recipes/favourites/${id}`).then(() => {
      dispatch(invalidateMyRecipes())
      dispatch(fetchMyRecipesIfNeeded())
      dispatch(toggleFavourite(index))
    })
  }
}

export function removeFromFavourites(id, index) {
  return dispatch => {
    API.remove(`/recipes/favourites/${id}`).then(() => {
      dispatch(invalidateMyRecipes())
      dispatch(fetchMyRecipesIfNeeded())
      dispatch(toggleFavourite(index))
    })
  }
}

export function addToDone(id, index) {
  return dispatch => {
    API.post(`/recipes/done/${id}`).then(() => {
      dispatch(invalidateMyRecipes())
      dispatch(fetchMyRecipesIfNeeded())
      dispatch(toggleDone(index))
    })
  }
}

export function removeFromDone(id, index) {
  return dispatch => {
    API.remove(`/recipes/done/${id}`).then(() => {
      dispatch(invalidateMyRecipes())
      dispatch(fetchMyRecipesIfNeeded())
      dispatch(toggleDone(index))
    })
  }
}

export function addToTodo(id, index) {
  return dispatch => {
    API.post(`/recipes/todo/${id}`).then(() => {
      dispatch(invalidateMyRecipes())
      dispatch(fetchMyRecipesIfNeeded())
      dispatch(toggleTodo(index))
    })
  }
}

export function removeFromTodo(id, index) {
  return dispatch => {
    API.remove(`/recipes/todo/${id}`).then(() => {
      dispatch(invalidateMyRecipes())
      dispatch(fetchMyRecipesIfNeeded())
      dispatch(toggleTodo(index))
    })
  }
}



export function fetchMyRecipesIfNeeded() {
  return (dispatch, getState) => {
    let currentState = getState();
    if (currentState.myRecipes.didInvalidate) {
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
}

export const SET_RECIPE_IN_WORKSPACE = 'SET_RECIPE_IN_WORKSPACE';
function setRecipeInWorkspace(recipe) {
  return {
    type: SET_RECIPE_IN_WORKSPACE,
    recipe
  }
}

