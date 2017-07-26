import { FETCH_PLATFORM } from '../actions/lobby';

const initialState = {
  platform: '',
  region: '',
  game: '',
  lobbyLeader: '',
  capacity: '',
  maxParty: ''
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_PLATFORM:
      return { ...state, platform: action.payload };

    default:
      return state;
  }
}
