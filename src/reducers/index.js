import {combineReducers} from 'redux';
import loginReducer from '../components/Login/reducer'
import recipeFinderReducer from '../components/RecipeFinder/reducer'

const rootReducer = combineReducers({
  state: (state = {}) => state,
  userProfile: loginReducer,
  recipeFinder: recipeFinderReducer
});

export default rootReducer;
