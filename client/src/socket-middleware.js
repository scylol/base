import io from 'socket.io-client';
import {CREATE_GROUP, JOIN_LOBBIES_ROOM} from './actions/actions';
import {SIGN_UP, USER_ACCEPTED, USER_DECLINED} from './actions/lobby';
import {renderGroup, renderUser, storeAcceptedUser, storeFeedback} from './actions/lobby';

let socket;

export function socketConnect(store){
  socket = io.connect('http://localhost:3001');
  socket.on('create-group', (data) => {
    store.dispatch(renderGroup(data));
  });
  socket.on('sign-up', (user) => {
    store.dispatch(renderUser(user));
  });
  socket.on('user-accepted', (user) => {
    console.log('firing ma LZER!!!!!');
    store.dispatch(storeAcceptedUser(user));
  });
  socket.on('user-declined', (feedback) => {
    console.log('TACOS!!!!!!!!!!');
    store.dispatch(storeFeedback(feedback));
  });
}

export function socketMiddleware(store) {
  return next => action => {
    const result = next(action);

    if(socket && action.type === CREATE_GROUP) {
      socket.emit('create-group', {
        selection: action.selection
      });
    }
    if(socket && action.type === JOIN_LOBBIES_ROOM) {
      socket.emit('join-room', {
        selection: action.selection
      });
    }
    if(socket && action.type === SIGN_UP) {
      socket.emit('sign-up', {
        user: action.user
      });
    }
    if(socket && action.type === USER_ACCEPTED) {
      socket.emit('user-accepted', {
        user: action.user
      });
    }

    if(socket && action.type === USER_DECLINED) {
      socket.emit('user-declined', {
        socketId: action.socketId
      });
    }

  };
}