// O componente da página inicial é exibido depois de iniciar sessão no aplicativo, ele mostra o nome do usuário
// registrado e mais uma lista de todos os usuários no aplicativo.Os usuários são carregados no state do
// redux e enviando a ação redux userActions.getAll()do componentDidMount() equivalente a document.ready
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.name}!</h1>
                <p>You re logged in with React & JWT!!</p>
                <h3>Users from secure api end point:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.data.map((user) =>
                            <li key={user.id}>
                                {user.name + ' ' + user.email}
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}
// O plugin eslint-plugin-react pede que sempre seja definido o PropTypes das propriedades recebidas pelos props
HomePage.propTypes = {
    user: PropTypes.object,
    users: PropTypes.object,
    dispatch: PropTypes.any,
};
// Dados vindo da Store
function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}
// Vincula a Store ao componente atual
const connectedHomePage = connect(mapStateToProps)(HomePage);
// Retorna a aplicação atual
export { connectedHomePage as HomePage };