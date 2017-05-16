import * as actions from './actions';

const initialState = {
  userProfile: {
    isFetching: true,
    name: ''
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_USER_PROFILE:
      return {
        ...state,
        userProfile: {
          ...state.userProfile,
        }
      };
    
    case actions.RECEIVE_USER_PROFILE:
      return {
        ...state,
        userProfile: {
          ...action.userProfile,
          isFetching: false
        }
      }
    
    default:
      return state
  }
}