import {FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR, UPDATE_SLIDER_1} from '../actions/actions';

const initialState = {
  currentUser: null,
  loading: false,
  error: null,
  googleId: null,
  slider1: 50,
  slider2: 50,
  slider3: 50,
  slider4: 50,
  slider5: 50,
  slider6: 50
  
};

export default function reducer(state=initialState, action) {
  if(action.type === FETCH_USER_REQUEST) {
    return {...state, loading: true, error: null}
  }
  else if(action.type === FETCH_USER_ERROR) {
    return {...state, loading: false, error: action.error}
  }
  else if(action.type === FETCH_USER_SUCCESS) {
    return{...state, currentUser: action.user.name, loading: false, error: null, googleId: action.user.googleId, 
      slider1: action.user.slider1,
      slider2: action.user.slider2,
      slider3: action.user.slider3,
      slider4: action.user.slider4,
      slider5: action.user.slider5,
      slider6: action.user.slider6,
    }
  }
  else if(action.type === UPDATE_SLIDER_1) {
    if(action.sliderName === 'slider1') {
       return{...state, slider1: action.value}
    }
      else if (action.sliderName === 'slider2') {
         return{...state, slider2: action.value}
      }
        else if (action.sliderName === 'slider3') {
         return{...state, slider3: action.value}
      }
        else if (action.sliderName === 'slider4') {
         return{...state, slider4: action.value}
      }
        else if (action.sliderName === 'slider5') {
         return{...state, slider5: action.value}
      }
        else if (action.sliderName === 'slider6') {
         return{...state, slider6: action.value}
      }
   
  }
  return state;
}