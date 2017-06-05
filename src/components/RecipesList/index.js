import React, {Component} from 'react';
import c from 'classnames';
import {connect} from 'react-redux';
import {fetchMyRecipesIfNeeded} from './actions'

import List from './List/List'

class RecipesList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      activeTab: 0,
    };
    
    this.changeActiveTab = this.changeActiveTab.bind(this);
  }
  
  componentDidMount() {
    this.props.refresh();
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.favourites !== this.props.favourites
      || prevProps.done !== this.props.done
      || prevProps.todo !== this.props.todo) {
      this.props.refresh()
    }
  }
  
  changeActiveTab(index) {
    this.setState({activeTab: index})
  }
  
  render() {
    let {favourites, todo, done, userProfile} = this.props;
    
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
          <div className="list__wrapper">
            {
              favourites.length !== 0 && this.state.activeTab === 0
                ? <List recipes={favourites}/>
                : null
            }
            {
              done.length !== 0 && this.state.activeTab === 1
                ? <List recipes={done}/>
                : null
            }
            {
              todo.length !== 0 && this.state.activeTab === 2
                ? <List recipes={todo}/>
                : null
            }
            {
              favourites.length !== 0 && done.length !== 0 && todo.length !== 0
                ? null
                : <div style={{color: 'white', fontSize: '25px', marginTop: '50px'}}>
                No recipes in here :(
              </div>
            }
            {/*<div className="user-details">*/}
              {/*<div className="user-name">Logged in as {userProfile.name}</div>*/}
              {/*<div className="user-logout clickable">logout</div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    favourites: state.myRecipes.favourites,
    done: state.myRecipes.done,
    todo: state.myRecipes.todo,
    userProfile: state.userProfile.userProfile
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    refresh: () => dispatch(fetchMyRecipesIfNeeded())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList)