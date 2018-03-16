// Importa o react
import React from "react";

// Importa o react router
import { Route } from "react-router-dom";

// Importa o componente NavItem do react-bootstrap
import { NavItem } from "react-bootstrap";

// Este componente irá marcar o link selecionado no menu como ativo e encapsular o NavItem
export default props =>
    <Route
        path={props.href}
        exact
        children={({ match, history }) =>
            <NavItem
                onClick={e => history.push(e.currentTarget.getAttribute("href"))}
                {...props}
                active={match ? true : false}
            >
                {props.children}
            </NavItem>}
    />;

