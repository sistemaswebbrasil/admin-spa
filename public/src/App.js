// Importando o react dentro deste componente
import React, { Component } from 'react';

// Importando uma imagem para ser usado na página
import logo from './logo.svg';

// Importando um css
import './App.css';

// Definindo a classe do componente App
// Este componente é usado na página inicial do app
class App extends Component {
  // Define que a tela implementada aqui será renderizada
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bem vindo ao React</h1>
        </header>
        <p className="App-intro">
          Vamos aprender essa joça ??
        </p>
      </div>
    );
  }
}

// Retorna o componente App definido neste arquivo para quem o chamar
export default App;
