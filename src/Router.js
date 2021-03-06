import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import app from './components/app'
import Login from './components/Login'

import {checkUserProfile} from './components/Login/actions'

class Router extends Component {
  
  componentDidMount() {
    this.props.checkUser();
  }
  
  render() {
    let {userProfile} = this.props;
    
    
    return (
      <BrowserRouter>
        
        <Switch>
          <Route exact path="/" render={() => (
            userProfile.loggedIn ?
              <Route path='/' component={app}/>
              :
              <Redirect to="/login"/>
          )}/>
          
          <Route path='/login' component={Login}/>
          <Route path='*'>
            <Redirect to="/"/>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}


function mapStateToProps(state) {
  return {
    userProfile: state.userProfile.userProfile
  }
}

function mapDispatchToProps(dispatch) {
  return {
    checkUser: () => {
      dispatch(checkUserProfile())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Router)