// Importa o React
import React, { Component } from "react";

// Importa vários componentes do react-bootstrap
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

// Importa o css
import "./Login.css";

// Retorna a página de login
export default class Login extends Component {
    //  Construtor recebe as propriedades
    constructor(props) {
        super(props);

        // Objeto que irá armazenar o usuário que será submetido
        // pelo formulário
        this.state = {
            email: "",
            password: ""
        };
    }

    // Valida o formulário - por enquanto verifica se o campos foram preenchidos
    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    // Identifica as mudanças feitas no formulário
    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    // Submete o formulário para o servidor , por enquanto não faz nada
    handleSubmit = event => {
        event.preventDefault();
    }

    // Renderiza o formulário
    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
          </Button>
                </form>
            </div>
        );
    }
}

