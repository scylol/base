import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR} from '../actions/actions';

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
  googleId: null
};

export default function reducer(state=initialState, action) {
  if(action.type === FETCH_USER_REQUEST) {
    return {...state, loading: true, error: null}
  }
  else if(action.type === FETCH_USER_ERROR) {
    return {...state, loading: false, error: action.error}
  }
  else if(action.type === FETCH_USER_SUCCESS) {
    return{...state, currentUser: action.user.name, loading: false, error: null, googleId: action.user.googleId}
  }
  return state;
}