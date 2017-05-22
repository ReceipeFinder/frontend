import React, {Component} from 'react';
import {connect} from 'react-redux';

import './styles.less'

class ListItem extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    let {recipe} = this.props;
    return (
      <div className="rf__list-item__wrapper">
        <div className="rf__list-item">
          <div className="rf__list-item__img__wrapper">
            {recipe.image_url ? <img src={recipe.image_url}/> : null}
          </div>
          <p>{recipe.title}</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)