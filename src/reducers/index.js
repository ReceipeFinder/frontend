import {combineReducers} from 'redux';
import userProfileReducer from '../components/UserProfile/reducer'

const rootReducer = combineReducers({
  state: (state = {}) => state,
  userProfile: userProfileReducer
});

export default rootReducer;
