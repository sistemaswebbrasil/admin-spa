// Componente da aplicação inicial ,ele contém o html externo, as rotas e a notificação de alerta global
import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen(() => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }
    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                        <div className={`alert ${alert.type}`}>
                            {alert.message}
                        </div>
                        }
                        <Router history={history}>
                            <div>
                                <PrivateRoute
                                    component={HomePage}
                                    exact
                                    path="/"
                                />
                                <Route
                                    component={LoginPage}
                                    path="/login"
                                />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}
// O plugin eslint-plugin-react pede que sempre seja definido o PropTypes(tipo) das propriedades recebidas pelos props(par)
App.propTypes = {
    dispatch: PropTypes.any,
    alert: PropTypes.object
};

// Dados vindo da Store
function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert,
    };
}

// Vincula a Store ao componente atual
const connectedApp = connect(mapStateToProps)(App);

// Retorna a aplicação atual
export  { connectedApp as App };
