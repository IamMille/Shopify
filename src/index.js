import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

import shop from './reducers/shopReducer';
import cart from './reducers/cartReducer';
import app from './reducers/appReducer';

import { appHistoryAdd } from './actions/appActions';


const historyMiddleware = store => next => action =>
{

    next(action);

    const ignore = ['HISTORY_ADD', 'VIEW_CHANGE'];

    if (!ignore.some(e => e === action.type))
    {
        store.dispatch(appHistoryAdd({
            ...action,
            payload: {...action.payload}
        }));
    }

};

const store = createStore(
    combineReducers({shop, cart, app}),
    {},
    applyMiddleware(logger, historyMiddleware)
);


render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root')
);
registerServiceWorker();



