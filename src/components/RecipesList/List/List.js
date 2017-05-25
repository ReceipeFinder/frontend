import React, {Component} from 'react';
import Scrollbar from 'react-perfect-scrollbar'

import ListItem from '../../RecipeFinder/ListItem'
import {fetchMyFavouritesIfNeeded} from '../actions'

class List extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let {recipes} = this.props
    
    return (
      <div className="list-of-recipes">
        <Scrollbar>
          {recipes.map((recipe, index) =>
            <ListItem key={index} index={index} recipe={recipe}/>
          )}
        </Scrollbar>
      </div>
    )
  }
}

export default List