import { combineReducers } from 'redux';
import nameReducers from './nameReducers';
import lobbyReducers from './lobbyReducers';

export default combineReducers({
  nameReducers,
  lobbyReducers
});