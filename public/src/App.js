// Importando o react dentro deste componente
import React, { Component } from 'react';

// Importando o componente link do react router
// redireciona para o link selecionado sem dar refresh
import { Link } from "react-router-dom";

// Importando a objeto navbar do react bootstrap
import { Nav, Navbar } from "react-bootstrap";

// Importando o conponente que irá renderizar o navItem  e
// irá marcar o link selecionado como ativo
import RouteNavItem from "./components/RouteNavItem";

// Importando o arquivo de rotas
import Routes from "./Routes";

// Importando um css
import './App.css';

// Definindo a classe do componente App
// Este componente é usado na página inicial do app
class App extends Component {
  // Define que a tela implementada aqui será renderizada
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">React App</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <RouteNavItem href="/signup">Signup</RouteNavItem>
              <RouteNavItem href="/login">Login</RouteNavItem>
            </Nav>
          </Navbar.Collapse>        
        </Navbar>
        <Routes />
      </div>
    );
  }
}

// Retorna o componente App definido neste arquivo para quem o chamar
export default App;
