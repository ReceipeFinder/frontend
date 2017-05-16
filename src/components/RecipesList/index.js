import React, {Component} from 'react';

import Spinner from '../../_components/Spinner'

class RecipesList extends Component {
  render() {
    return (
      <div className="recipes-list">
        
        <div className="recipes-list-spinner">
          <Spinner/>
        </div>
      </div>
    )
  }
}

export default RecipesList