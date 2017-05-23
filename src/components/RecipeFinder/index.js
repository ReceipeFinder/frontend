import React, {Component} from 'react';
import {connect} from 'react-redux'

import ListItem from './ListItem';
import {searchRecipes} from './actions'
import PerfectScrollbar from 'react-perfect-scrollbar'
import c from 'classnames'

class RecipeFinder extends Component {
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
    let {list} = this.props;
    return (
      <div className="recipe-finder">
        <div className={c({"recipe-finder__form__wrapper": true, "closed": list && list.length > 0})}>
          <p className="description">Search for recipes by ingredients <br/>you feel like to eat</p>
          <form onSubmit={this.submitSearch} className="recipe-finder__form">
            <input type="text" placeholder="Ingredients..." onChange={this.handleIngredientsInputChange}/>
          </form>
          <p className="details">Type in ingredients seperated by comma</p>
        </div>
        {/*<div>*/}
          <PerfectScrollbar>
            <div className="recipe-finder__recipes" style={{height: '100%'}}>
              {
                list ?
                  list.length > 0 ? list.map((recipe, idx) => {
                    return (
                      <ListItem key={idx} index={idx} recipe={recipe}/>
                    )
                  })
                    : null
                  : null
              }
            </div>
          </PerfectScrollbar>
        {/*</div>*/}
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