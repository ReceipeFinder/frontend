import API from '../../utils/APIHelper'

export const REQUEST_USER_PROFILE = 'REQUEST_USER_PROFILE'
function requestUserProfile() {
  return {
    type: REQUEST_USER_PROFILE
  }
}

export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';
function receiveUserProfile(data) {
  return {
    type: RECEIVE_USER_PROFILE,
    userProfile: data
  }
}

export function login() {
  return dispatch => {
    requestUserProfile();
    
    API.post('/users/1/login').then(result => {
      if (result.status === 200) {
        API.get('/users/me').then(userProfile => {
          dispatch(receiveUserProfile(userProfile.data))
        })
      }
    })
  }
}