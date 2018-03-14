// Inicialização do projeto
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import NetworkService from './_helpers/network-service';
import { store, defaultApi } from './_helpers';
import { App } from './App';
// Configuração do api como url e header com axios
defaultApi();
// Interceptor do axios
NetworkService.setupInterceptors(store);
// Renderiza a aplicação inicial
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
