import React, {Component} from 'react';
import {connect} from 'react-redux'

import {searchRecipes} from './actions'

class RecipeFinder extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      inputIngredients: ''
    }
    
    this.handleIngredientsInputChange = this.handleIngredientsInputChange.bind(this)
    this.submitSearch = this.submitSearch.bind(this);
  }
  
  handleIngredientsInputChange(e) {
    this.setState({inputIngredients: e.target.value})
  }
  
  submitSearch(e) {
    e.preventDefault();
    
    this.props.searchRecipes(this.state.inputIngredients)
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.submitSearch}>
          <input type="text" placeholder="Ingredients..." onChange={this.handleIngredientsInputChange}/>
          {console.log(this.props.list)}
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.recipeFinder.recipes.list,
    isFetching: state.recipeFinder.recipes.isFetching
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    searchRecipes: (ingredients) => dispatch(searchRecipes(ingredients))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeFinder)