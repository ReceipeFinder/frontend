import * as actions from './actions';

const initialState = {
  myRecipes: {
    didInvalidate: true,
    isFetching: true,
    favourites: [],
    todo: [],
    done: [],
    workspace: {}
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    
    default:
      return state
  }
}