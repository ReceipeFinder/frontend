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
      showRecipesList: false,
      hideRecipeFinder: false
    };
    
    this.toggleUserProfile = this.toggleUserProfile.bind(this);
    this.toggleRecipesList = this.toggleRecipesList.bind(this);
    this.toggleRecipeFinder = this.toggleRecipeFinder.bind(this);
  }
  
  toggleUserProfile() {
    this.setState({showUserProfile: !this.state.showUserProfile})
  }
  
  toggleRecipesList() {
    this.setState({showRecipesList: !this.state.showRecipesList})
  }
  
  toggleRecipeFinder() {
    this.setState({hideRecipeFinder: !this.state.hideRecipeFinder})
  }
  
  render() {
    
    return (
      <div className="main__layout">
        {/*<TopBar/>*/}
        <main>
          {/*<div className={c({"user-profile__wrapper": true, "visible": this.state.showUserProfile})}>*/}
          {/*<UserProfile/>*/}
          {/*<div className="user-profile__toggler clickable" onClick={this.toggleUserProfile}>*/}
          {/*<span className={c({*/}
          {/*"pt-icon-standard": true,*/}
          {/*"pt-icon-chevron-right": !this.state.showUserProfile,*/}
          {/*"pt-icon-chevron-left": this.state.showUserProfile*/}
          {/*})}/>*/}
          {/*</div>*/}
          {/*</div>*/}
          <div className="recipes-list__wrapper">
            <RecipesList visible={this.state.hideRecipeFinder}/>
          </div>
          
          <div className={c({"recipe-finder__wrapper": true, "hidden": this.state.hideRecipeFinder})}>
            <div className="recipe-finder__toggler clickable" onClick={this.toggleRecipeFinder}>
            <span className={c({
              "pt-icon-standard": true,
              "pt-icon-chevron-right": !this.state.hideRecipeFinder,
              "pt-icon-chevron-left": this.state.hideRecipeFinder
            })}/>
            </div>
            <RecipeFinder hidden={this.state.hideRecipeFinder}/>
          </div>
        
        </main>
      </div>
    );
  }
}
