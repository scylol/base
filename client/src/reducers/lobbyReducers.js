import {
  RENDER_GROUP,
  GET_LOBBIES_REQUEST,
  GET_LOBBIES_SUCCESS,
  GET_LOBBIES_ERROR,
  RENDER_USER,
  CHAT_ROOM,
  RENDER_CHAT
} from '../actions/lobby';

const initialState = {
  socketLobbies: [],
  databaseLobbies: [],
  loading: null,
  error: null,
  userInfo: [],
  message: ''
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
      case RENDER_CHAT:
      return {
        ...state,
        userInfo: [...state.message, {...action.message}]
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
