import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import combineReducers from './reducers';

import reducer from './reducers/reducers';
// import lobbyReducers from './reducers/lobbyReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


