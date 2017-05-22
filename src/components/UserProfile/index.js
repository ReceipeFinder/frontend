import React, {Component} from 'react';
import {connect} from 'react-redux';

import Spinner from '../../_components/Spinner'
import './styles.less'

class UserProfile extends Component {
  render() {
    let {isFetching, userProfile} = this.props;
    
    return (
      <div className="user-profile">
        {isFetching ?
          <div className="user-profile-spinner">
            <Spinner/>
          </div>
          : null}
        {console.log(userProfile)}
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


export default connect(mapStateToProps, null)(UserProfile)