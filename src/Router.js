import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import app from './components/app'

class Router extends Component {
  render() {
    return (
        <BrowserRouter>
          <Route path='/' component={app}/>
        </BrowserRouter>
    )
  }
}

export default Router