import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducers, defaultState } from './store';
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware, promiseMiddleware]
if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`)
    middlewares.push(logger)
}

const store = createStore(reducers as any, defaultState as object, applyMiddleware(...middlewares))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root') as HTMLElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
