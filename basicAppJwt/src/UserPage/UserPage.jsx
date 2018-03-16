import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userActions } from '../_actions';

// import { userActions } from '../_actions';

class UserPage extends Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    render() {
        const { users } = this.props;
        return (
            <div>
                <div>
                    Lista de usuários
                </div>

                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    {users.items &&
                        <tbody>
                            {users.items.map((user) =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )}
                        </tbody>
                    }
                </table>


            </div>
        );
    }
}

// exportação feita deste jeito para conseguir carregar somente pelo index da pasta
// export { UserPage as UserPage };
// O plugin eslint-plugin-react pede que sempre seja definido o PropTypes das propriedades recebidas pelos props
UserPage.propTypes = {
    user: PropTypes.object,
    users: PropTypes.object,
    dispatch: PropTypes.any,
};
// Dados vindo da Store
function mapStateToProps(state) {
    const { users } = state;
    return {
        users
    };
}
// Vincula a Store ao componente atual
const connectedHomePage = connect(mapStateToProps)(UserPage);
// Retorna a aplicação atual
export { connectedHomePage as UserPage };