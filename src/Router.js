import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import app from './components/app'

class Router extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path='/' component={app}/>
          </Switch>
        </BrowserRouter>
    )
  }
}

export default Router