import {  createStore , applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/RootReducer'; // Adjust path as needed

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
