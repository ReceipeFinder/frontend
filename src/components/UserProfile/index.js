import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUserProfile} from './actions.js'

import Spinner from '../../_components/Spinner'
import './styles.less'

class UserProfile extends Component {
  componentDidMount() {
    this.props.refresh();
  }
  
  render() {
    let {isFetching, userProfile} = this.props;
    
    return (
      <div className="user-profile">
        {console.log(userProfile, isFetching)}
        {isFetching ?
          <div className="user-profile-spinner">
            <Spinner/>
          </div>
          : null}
          
        {
          userProfile ?
            <div>
              {userProfile.name}
            </div>
          :null
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userProfile: state.userProfile.userProfile,
    isFetching: state.userProfile.userProfile.isFetching
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    refresh: () => dispatch(fetchUserProfile())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)