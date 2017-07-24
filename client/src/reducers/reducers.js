import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../actions/actions';

const initialState = {
  currentUser: {
    isLogged: false,
    name: '',
    googleId: '',
    photo: null
  },
  userSelections: {
    platform: '',
    region: '',
    game: ''
  },
  loading: false,
  error: null
};

const name = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USER_ERROR:
      return { ...state, loading: false, error: action.error };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        currentUser: {
          isLogged: true,
          name: action.user.name,
          googleId: action.user.googleId,
          photo: action.user.image
        },
        loading: false,
        error: null
      };
    case LOGOUT_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGOUT_SUCCESS:
      return {
        ...state
      };
    case LOGOUT_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default name;
