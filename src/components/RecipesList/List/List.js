import React, {Component} from 'react';
import {connect} from 'react-redux'
import c from 'classnames';


import {fetchMyFavouritesIfNeeded} from '../actions'

class List extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    this.props.refresh();
  }
  
  render() {
    return (
      <div className="recipes-list">
      
      
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    refresh: () => dispatch(fetchMyFavouritesIfNeeded())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)