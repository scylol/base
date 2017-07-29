import io from 'socket.io-client';
import {CREATE_GROUP} from './actions/actions';
import {renderGroup} from './actions/lobby';

let socket;

export function socketConnect(store){
  socket = io.connect('http://localhost:3001');
  socket.on('create-group', (data) => {
    store.dispatch(renderGroup(data))
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
  };
}