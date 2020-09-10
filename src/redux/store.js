import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from "redux-logger";
import thunk from "redux-thunk";
import postReducer from "./postReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    combineReducers( { post : postReducer} ),
    {},
        composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;

