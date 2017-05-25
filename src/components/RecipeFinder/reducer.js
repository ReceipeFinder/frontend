import * as actions from './actions';

const initialState = {
  recipes: {
    didInvalidate: true,
    isFetching: true,
    list: [],
    workspace: {}
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_RECIPES_SEARCH:
      return {
        ...state,
        recipes: {
          ...state.userProfile,
          isFetching: true
        }
      };
    
    case actions.RECEIVE_RECIPES_SEARCH:
      return {
        ...state,
        recipes: {
          list: action.recipes,
          isFetching: false
        }
      };
    
    case actions.SET_RECIPE_IN_WORKSPACE:
      return {
        ...state,
        recipes: {
          ...state.recipes,
          workspace: {
            recipe: action.recipe
          }
        }
      };
    
    case actions.TOGGLE_FAVOURITE:
      let tmpRecipesList1 = state.recipes.list;
      if (state.recipes.list.length !== 0) {
        tmpRecipesList1[action.id].user_recipe.favourite = !tmpRecipesList1[action.id].user_recipe.favourite;
      }
      
      return {
        ...state,
        recipes: {
          ...state.recipes,
          list: tmpRecipesList1
        }
      }
    
    case actions.TOGGLE_DONE:
      let tmpRecipesList2 = state.recipes.list;
      if (state.recipes.list.length !== 0) {
        tmpRecipesList2[action.id].user_recipe.done = !tmpRecipesList2[action.id].user_recipe.done;
      }
      
      return {
        ...state,
        recipes: {
          ...state.recipes,
          list: tmpRecipesList2
        }
      }
    
    case actions.TOGGLE_TODO:
      let tmpRecipesList3 = state.recipes.list;
      
      if (state.recipes.list.length !== 0) {
        tmpRecipesList3[action.id].user_recipe.todo = !tmpRecipesList3[action.id].user_recipe.todo;
      }
      
      return {
        ...state,
        recipes: {
          ...state.recipes,
          list: tmpRecipesList3
        }
      }
    
    default:
      return state
  }
}