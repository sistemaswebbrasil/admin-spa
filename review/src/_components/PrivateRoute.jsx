// O componente de rota privada reage torna um componente de rota se o usuário estiver logado, caso contrário redireciona o
// usuário para a / loginpágina.

// A maneira como ele verifica se o usuário está logado é verificando se há um userobjeto no armazenamento local.
// Embora seja possível ignorar este cheque adicionando manualmente um objeto ao armazenamento local usando as ferramentas
// do desenvolvedor do navegador, isso só daria acesso ao componente do lado do cliente, não daria acesso a nenhum dado
// seguro real do servidor api porque uma autenticação válida token(JWT) é necessário para isso.
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            localStorage.getItem('user')
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )}
    />
);

// O plugin eslint-plugin-react pede que sempre seja definido o PropTypes das propriedades recebidas pelos props
PrivateRoute.propTypes = {
    component: PropTypes.any,
    location: PropTypes.any,
};
