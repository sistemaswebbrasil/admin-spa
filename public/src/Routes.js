// Importando o react
import React from "react";

// Importando o pacote react router 
import { Route, Switch, Redirect } from "react-router-dom";

// Importando o componente home - página inicial
import Home from "./containers/Home";

// Importando a página de erro 404
import NotFound from "./containers/NotFound";

// Importando a página de login
import Login from "./containers/Login";

// Importando uma página vazia para o dashboard
import Dashboard from "./containers/Dashboard"

// O componente Switch do react-router-dom retorna o componente
// de acordo com a url
export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <AuthenticatedRoute path="/dashboard" component={Dashboard} />
        { /* Finally, catch all unmatched routes */}
        <Route component={NotFound} />
    </Switch>;

// Verifica se existe o token , se existir entende que o usuário está logado
const AuthenticatedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('token') ? (
            <Component {...props} />
        ) : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
            )
    )} />
)    

