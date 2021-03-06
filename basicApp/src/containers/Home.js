// Importa o react 
import React, { Component } from "react";

// Importa o css específico da página
import "./Home.css";

import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import Footer from '../components/Footer';

// Retorna este componente que será usado como a página inicial
export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="lander">
                    <h1>React</h1>
                    <p>Aprendendo a programar com o React</p>
                </div>
                <AddTodo />
                <VisibleTodoList />          
                <Footer />
            </div>
        );
    }
}
