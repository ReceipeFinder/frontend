import React, {Component} from 'react';

class ListItem extends Component {
  render() {
    let {recipe} = this.props
    
    return (
      <div className="list-of-recipes__item">
        <div className="list-of-recipes__img__wrapper">
          <img src={recipe.image_url} alt=""/>
        </div>
        <p>{recipe.title}</p>
      </div>
    );
  }
}

export default ListItem;
