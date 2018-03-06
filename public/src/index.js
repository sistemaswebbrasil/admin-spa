import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store, defaultApi } from './_helpers';
import { App } from './App';

defaultApi();

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);