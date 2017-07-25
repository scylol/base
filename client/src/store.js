import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import reducer from './reducers';

import reducer from './reducers/nameReducers';
// import lobbyReducers from './reducers/lobbyReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


