import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import user from './modules/userM';
import tasks from './modules/taskM';
import item from './modules/EventsM';
import {Provider} from "react-redux";
import logger from 'redux-logger';
import reminder from './modules/remindersM';


const asyncMiddleware = storeAPI => next => action => {
    if(typeof action === 'function') {
        return action(storeAPI.dispatch, storeAPI.getState)
    }
    return next(action)
}

const middlewareEnhancer = applyMiddleware(asyncMiddleware, logger)
const rootReducer = combineReducers({
    user,
    tasks,
    item,
    reminder,
})
const store = createStore(rootReducer, middlewareEnhancer)

ReactDOM.render(
    <Provider store={store}>
        <App />

    </Provider>,
    document.getElementById('root')
);

