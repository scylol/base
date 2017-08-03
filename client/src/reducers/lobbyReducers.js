import { RENDER_GROUP, GET_LOBBIES_REQUEST, GET_LOBBIES_SUCCESS, GET_LOBBIES_ERROR, RENDER_USER, STORE_ACCEPTED_USER, STORE_FEEDBACK  } from '../actions/lobby';


const initialState = {
  socketLobbies: [],
  databaseLobbies: [],
  loading: null,
  error: null,
  userInfo: [],
  acceptedUsers: [], 
  feedback: []

};

export default function(state = initialState, action) {
  switch (action.type) {
    case RENDER_GROUP:
      return {
        ...state,
        socketLobbies: [...state.socketLobbies, { ...action.selection.selection }]
      };
      case RENDER_USER:
      return {
        ...state,
        userInfo: [...state.userInfo, {...action.user}]
      }
      case STORE_ACCEPTED_USER:
      return {
        ...state,
        acceptedUsers: [...state.acceptedUsers, {...action.user}]
      }
      case STORE_FEEDBACK:
      return {
        ...state,
        feedback: [...state.feedback, action.feedback]
      }
      case GET_LOBBIES_REQUEST:
      return {...state, loading: true, error: null};

      case GET_LOBBIES_ERROR:
      return { ...state, loading: false, error: action.error };

      case GET_LOBBIES_SUCCESS:
      return {...state, databaseLobbies: action.lobbies}

    default:
      return state;
  }
}
