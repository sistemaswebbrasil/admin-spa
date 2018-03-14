import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import NetworkService from './_helpers/network-service';
import { store, defaultApi } from './_helpers';
import { App } from './App';

defaultApi();

NetworkService.setupInterceptors(store);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);