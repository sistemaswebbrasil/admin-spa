// Importa o react dentro arquivo
import React from 'react';
// Importa o dom dentro deste arquivo
import ReactDOM from 'react-dom';
// Importa o módulo App
import App from './App';
// Roda os testes
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
