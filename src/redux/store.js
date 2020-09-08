import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from "redux-logger";
import postReducer from "./postReducer";

const store = createStore(
    combineReducers( { post : postReducer} ),
    {},
        applyMiddleware(logger)
);

export default store;

