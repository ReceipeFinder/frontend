import React, { Component } from 'react';

import '../styles/main.less'
import UserProfile from '../components/UserProfile'
import RecipeFinder from '../components/RecipeFinder'
import RecipesList from '../components/RecipesList'

export default class App extends Component {
  render() {
    return (
      <div className="main__layout">
        <UserProfile/>
        <RecipeFinder/>
        <RecipesList/>
      </div>
    );
  }
}
