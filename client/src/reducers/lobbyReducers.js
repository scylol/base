import { RENDER_GROUP } from '../actions/lobby';

const initialState = {
  lobbies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RENDER_GROUP:
      return {
        ...state,
        lobbies: [...state.lobbies, { ...action.selection.selection }]
      };

    default:
      return state;
  }
}
