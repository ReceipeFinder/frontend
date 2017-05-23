import API from '../../utils/APIHelper'

export const REQUEST_MY_FAVOURITES = 'REQUEST_MY_FAVOURITES';
function requestMyFavourites() {
  return {
    type: REQUEST_MY_FAVOURITES
  }
}


export const RECEIVE_MY_FAVOURITES = 'RECEIVE_MY_FAVOURITES';
function receiveMyFavourites(recipes) {
  return {
    type: RECEIVE_MY_FAVOURITES,
    recipes: recipes
  }
}

export const REQUEST_MY_DONE = 'REQUEST_MY_DONE';
function requestMyDone() {
  return {
    type: REQUEST_MY_DONE
  }
}


export const RECEIVE_MY_DONE = 'RECEIVE_MY_DONE';
function receiveMyDone(recipes) {
  return {
    type: RECEIVE_MY_DONE,
    recipes: recipes
  }
}

export const REQUEST_MY_TODO = 'REQUEST_MY_TODO';
function requestMyTodo() {
  return {
    type: REQUEST_MY_TODO
  }
}


export const RECEIVE_MY_TODO = 'RECEIVE_MY_TODO';
function receiveMyTodo(recipes) {
  return {
    type: RECEIVE_MY_TODO,
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

export function fetchMyFavouritesIfNeeded() {
  console.log('FETCHING RECIPES: ');
  return dispatch => {
    dispatch(requestMyFavourites());
    API.get(`/recipes/favourites`).then((data) => {
      dispatch(receiveMyFavourites(data))
    })
  }
}

export function fetchMyDoneIfNeeded() {
  console.log('FETCHING RECIPES: ');
  return dispatch => {
    dispatch(requestMyFavourites());
    API.get(`/recipes/done`).then((data) => {
      dispatch(receiveMyFavourites(data))
    })
  }
}

export function fetchMyTodoIfNeeded() {
  console.log('FETCHING RECIPES: ');
  return dispatch => {
    dispatch(requestMyFavourites());
    API.get(`/recipes/todo`).then((data) => {
      dispatch(receiveMyFavourites(data))
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

