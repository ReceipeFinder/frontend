import React, {Component} from 'react';

import c from 'classnames'

import TopBar from '../_components/TopBar'
import UserProfile from '../components/UserProfile'
import RecipeFinder from '../components/RecipeFinder'
import RecipesList from '../components/RecipesList'

import '../styles/main.less'
import './UserProfile/styles.less'
import './RecipesList/styles.less'
import './RecipeFinder/styles.less'

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showUserProfile: false,
      showRecipesList: false
    };
  
    this.toggleUserProfile = this.toggleUserProfile.bind(this);
    this.toggleRecipesList = this.toggleRecipesList.bind(this);
  }
  
  toggleUserProfile() {
    this.setState({showUserProfile: !this.state.showUserProfile})
  }
  
  toggleRecipesList() {
    this.setState({showRecipesList: !this.state.showRecipesList})
  }
  
  render() {
    
    return (
      <div className="main__layout">
        {/*<TopBar/>*/}
        <main>
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
  
          <div className={c({"recipes-list__wrapper": true, "visible": this.state.showRecipesList})}>
            <RecipesList/>
            <div className="recipes-list__toggler clickable" onClick={this.toggleRecipesList}>
            <span className={c({
              "pt-icon-standard": true,
              "pt-icon-chevron-right": this.state.showRecipesList,
              "pt-icon-chevron-left": !this.state.showRecipesList
            })}/>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
