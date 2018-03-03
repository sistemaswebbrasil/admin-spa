// Importando o react
import React from "react";

// Importando o pacote react router 
import { Route, Switch } from "react-router-dom";

// Importando o componente home - página inicial
import Home from "./containers/Home";

// Importando a página de erro 404
import NotFound from "./containers/NotFound";

// Importando a página de login
import Login from "./containers/Login";

// O componente Switch do react-router-dom retorna o componente
// de acordo com a url
export default () =>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        { /* Finally, catch all unmatched routes */}
        <Route component={NotFound} />
    </Switch>;

