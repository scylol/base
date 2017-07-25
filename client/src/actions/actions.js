/* eslint-disable */
import * as Cookies from 'js-cookie';

export const UPDATE_SLIDER_1 = ' UPDATE_SLIDER_1';
export const updateSliders = (value, sliderName) => ({
  type: UPDATE_SLIDER_1,
  value,
  sliderName
});

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
export const updateGameSelection = selection => ({
  type: 'UPDATE_GAME',
  selection
})
export const updateRegionSelection = selection => ({
  type: 'UPDATE_REGION',
  selection
})
export const updatePlatformSelection = selection => ({
  type: 'UPDATE_PLATFORM',
  selection
})

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

export const updateUserProfile = (accessToken) => (dispatch, getState) => {
  const state = getState();
  console.log(state.score);
  fetch(`/api/users/${state.googleId.toString()}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      'slider1': state.slider1,
      'slider2': state.slider2,
      'slider3': state.slider3,
      'slider4': state.slider4,
      'slider5': state.slider5,
      'slider6': state.slider6
    })
  }).then(res => {
    console.log(res);
    return res.json();
  }).catch(err => {
    console.log(err);
  });
};
export const logoutUser = () => dispatch => {
  dispatch(logoutRequest());
      console.log('hit success')
      dispatch(logoutSuccess())
};
