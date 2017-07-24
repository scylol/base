/* eslint-disable */
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

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const logoutRequest = () => ({
  type: LOGOUT_REQUEST
});
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
});
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const logoutFailure = () => ({
  type: LOGOUT_FAILURE
});

export const fetchUser = accessToken => dispatch => {
  dispatch(fetchUserRequest());
  fetch('/api/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
    .then(res => {
      if (!res.ok) {
        if (res.status === 401) {
          Cookies.remove('accessToken');
          return;
        }
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(user => {
      dispatch(fetchUserSuccess(user));
    })
    .catch(error => {
      console.log(error);
      dispatch(fetchUserError(error));
    });
};
export const logoutUser = () => dispatch => {
  dispatch(logoutRequest());
      console.log('hit success')
      dispatch(logoutSuccess())
};
