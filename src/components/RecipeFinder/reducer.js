import * as actions from './actions';

const initialState = {
  recipes: {
    isFetching: true,
    list: []
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
    
    default:
      return state
  }
}