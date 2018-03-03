// Importa o react 
import React from 'react';

// Importa o react dom 
import ReactDOM from 'react-dom';

//  Importa um css básico 
import './index.css';

// Importa um componente inicial chamado App 
// que se refere o arquivo App.js neste  mesmo diretório 
import App from './App';

// Importa um componente que trabalha com um cache quando
// o servidor estiver off-line
import registerServiceWorker from './registerServiceWorker';

// Pega o componente inicial App e renderiza no div com id = root 
// na página html inicial , que neste caso é public/index.html
ReactDOM.render(<App />, document.getElementById('root'));

// Inicial o registerServiceWorker importado acima
registerServiceWorker();
