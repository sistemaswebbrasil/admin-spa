// // O componente da página inicial é exibido depois de iniciar sessão no aplicativo, ele mostra o nome do usuário
// // registrado e mais uma lista de todos os usuários no aplicativo.Os usuários são carregados no state do
// // redux e enviando a ação redux userActions.getAll()do componentDidMount() equivalente a document.ready
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
        return () => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.firstName}!</h1>
                <p>You&apos;re logged in with React!!</p>
                <h3>All registered users:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user) =>
                            <li key={user.id}>
                                {user.name + ' ' + user.email}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                        : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                            : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
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
    users: PropTypes.any,
    dispatch: PropTypes.any,
};

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };