// Importa o react 
import React from 'react';

// Importa o react dom 
import ReactDOM from 'react-dom';

// Importa o redux
import { createStore } from 'redux';

// Importa o react redux
import { Provider } from 'react-redux';

// Importa o react router dom para trabalhar as rotas
//import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'

//  Importa um css básico 
import './index.css';

// Importa um componente inicial chamado App 
// que se refere o arquivo App.js neste  mesmo diretório 
import App from './App';

// Importa os reducers
import reducer from './reducers'

// Importa um componente que trabalha com um cache quando
// o servidor estiver off-line
import registerServiceWorker from './registerServiceWorker';

// Cria a sessão do redux
const store = createStore(reducer);

// Pega o componente inicial App e renderiza no div com id = root 
// na página html inicial , que neste caso é public/index.html
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// Inicial o registerServiceWorker importado acima
registerServiceWorker();
