import React, {Component} from 'react';
import {connect} from 'react-redux'

import {login} from './actions'
import './styles.less'

class Login extends Component {
  constructor(props) {
    super(props);
    
  }
  
  componentDidMount() {
    this.props.login();
  }
  
  componentWillReceiveProps(nextProps) {
    // if(nextProps.userProfile.userProfile.loggedIn)
    // this.props.history.push('/')
  }
  
  render() {
    return (
      <div className="login-modal__wrapper">
        <div className="login-modal">
          <div>
            <p className="login__logo">
              Recipe Finder
            </p>
            <p className="login-modal__text">Register and log in with Facebook and take advantage of <span
              className="secondary-color">the best</span> recipes management application!</p>
          </div>
          <div className="facebook__button">
            <div className="facebook__icon">
              <i className="fa fa-facebook fa-3x" aria-hidden="true"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
  
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    login: () => dispatch(login())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)