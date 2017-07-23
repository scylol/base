import * as Cookies from 'js-cookie';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST
});

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  user

});

export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';
export const fetchUserError = error => ({
  type: FETCH_USER_ERROR,
  error
});

export const fetchUser = (accessToken) => (dispatch) => {
  console.log('accessToken', accessToken);
  dispatch(fetchUserRequest());
  fetch('/api/me', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  }).then(res => {
    console.log('RES', res);
    if(!res.ok) {
      if(res.status === 401) {
        Cookies.remove('accessToken');
        return;
      }
      return Promise.reject(res.statusText);
    }
    return res.json();
  }).then(user => {
    console.log(user);
    dispatch(fetchUserSuccess(user));
  }).catch(error => {
    console.log(error);
    dispatch(fetchUserError(error));
  });
  
 
};