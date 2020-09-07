import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import logger from "redux-logger";

const postReducer = (
    state = {
        currentIdPost : 0,
        lastPostsViewed : []
    }, action) => {

        switch(action.type){
            case "CHANGE_POST" :
                state = {
                    ...state,
                    currentIdPost: action.payload,
                    lastPostsViewed: [...state.lastPostsViewed, action.payload]
                };
                break;
        }
    return state;
};

const store = createStore( combineReducers( {postReducer} ), {}, applyMiddleware(logger) );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

