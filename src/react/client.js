// Startup point for the client side application
import '@babel/polyfill';
import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import Routes from './Routes';
import reducers from './reducers';
import {renderRoutes} from 'react-router-config';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme/theme';

const axiosInstance = axios.create({
    baseURL: '/api'
});

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

ReactDOM.hydrate(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <BrowserRouter>
                {renderRoutes(Routes)}
            </BrowserRouter>
        </Provider>
    </ThemeProvider>, 
    document.querySelector("#root"));