import * as actions from './actions';

const initialState = {
  didInvalidate: true,
  isFetching: true,
  favourites: [],
  todo: [],
  done: [],
  workspace: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.RECEIVE_MY_RECIPES:
      return {
        ...state,
        favourites: action.recipes.favourites,
        done: action.recipes.done,
        todo: action.recipes.todo,
        isFetching: false,
        didInvalidate: false
      };
    
    case actions.REQUEST_MY_RECIPES:
      return {
        ...state,
        isFetching: true
      };
      
    case actions.INVALIDATE_MY_RECIPES:
      return {
        ...state,
        didInvalidate: true
      };
    
    default:
      return state
  }
}