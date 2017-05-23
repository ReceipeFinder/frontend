import React, {Component} from 'react';
import c from 'classnames';
import {connect} from 'react-redux';
import {fetchMyFavouritesIfNeeded, fetchMyDoneIfNeeded, fetchMyTodoIfNeeded} from './actions'

import List from './List/List'

class RecipesList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeTab: 0
    };
    
    this.changeActiveTab = this.changeActiveTab.bind(this);
  }
  
  componentDidMount() {
    this.props.refresh();
  }
  
  changeActiveTab(index) {
    this.setState({activeTab: index})
  }
  
  render() {
    return (
      <div className="recipes-list">
        <div className="recipes-list__sidebar">
          <div className="sidebar__tabs">
            <div className={c({"sidebar__tab clickable": true, "active": this.state.activeTab === 0})}
                 onClick={() => this.changeActiveTab(0)}>favourites
            </div>
            <div className={c({"sidebar__tab clickable": true, "active": this.state.activeTab === 1})}
                 onClick={() => this.changeActiveTab(1)}>done
            </div>
            <div className={c({"sidebar__tab clickable": true, "active": this.state.activeTab === 2})}
                 onClick={() => this.changeActiveTab(2)}>to do
            </div>
          </div>
        </div>
        <div className="list__wrapper">
          <List/>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList)