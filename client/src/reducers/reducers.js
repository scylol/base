import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR} from '../actions/actions';

const initialState = {
  currentUser: {
    isLogged: false,
    name: '',
    googleId: ''
  },
  loading: false,
  error: null
};

export default function reducer(state=initialState, action) {
  if(action.type === FETCH_USER_REQUEST) {
    return {...state, loading: true, error: null}
  }
  else if(action.type === FETCH_USER_ERROR) {
    return {...state, loading: false, error: action.error}
  }
  else if(action.type === FETCH_USER_SUCCESS) {
    return{...state, currentUser: {
      isLogged: true,
      name: action.user.name,
      googleId: action.user.googleId
    }, loading: false, error: null}
  }
  return state;
}