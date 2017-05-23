import {combineReducers} from 'redux';
import loginReducer from '../components/Login/reducer'
import recipeFinderReducer from '../components/RecipeFinder/reducer'
import myRecipesReducer from '../components/RecipesList/reducer'

const rootReducer = combineReducers({
  state: (state = {}) => state,
  userProfile: loginReducer,
  recipeFinder: recipeFinderReducer,
  myRecipes: myRecipesReducer
});

export default rootReducer;
