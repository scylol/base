import { combineReducers } from 'redux';
import reducer from './reducers';
import lobbyReducers from './lobbyReducers';

export default combineReducers({
  lobbyReducers,
  reducer
});