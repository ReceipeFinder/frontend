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
    
    default:
      return state
  }
}