import React, {Component} from 'react';

import c from 'classnames'

import UserProfile from '../components/UserProfile'
import RecipeFinder from '../components/RecipeFinder'
import RecipesList from '../components/RecipesList'

import '../styles/main.less'

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showUserProfile: false,
      showRecipesList: false
    };
    
    this.toggleUserProfile = this.toggleUserProfile.bind(this);
  }
  
  toggleUserProfile() {
    this.setState({showUserProfile: !this.state.showUserProfile})
  }
  
  render() {
    
    return (
      <div className="main__layout">
        <div className={c({"user-profile__wrapper": true, "visible": this.state.showUserProfile})}>
          <UserProfile/>
          <div className="user-profile__toggler clickable" onClick={this.toggleUserProfile}>
            <span className={c({
              "pt-icon-standard": true,
              "pt-icon-chevron-right": !this.state.showUserProfile,
              "pt-icon-chevron-left": this.state.showUserProfile
            })}/>
          </div>
        </div>
        
        <RecipeFinder/>
        <RecipesList/>
      </div>
    );
  }
}
