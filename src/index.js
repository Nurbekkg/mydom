import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store, {history} from "./store/configureStore";

import axios from './axios-api';
import {logoutExpiredUser} from "./store/actions/users";

axios.interceptors.request.use(config => {
    try {
        config.headers['authorization'] = store.getState().users.token;
    } catch (e) {
        //do nothing
    }

    return config;
});

axios.interceptors.response.use(response => response,
    error => {
        if (error.response.status === 401) {
            store.dispatch(logoutExpiredUser());
        }
    });


const app = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
