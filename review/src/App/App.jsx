// Componente da aplicação inicial ,ele contém o html externo, as rotas e a notificação de alerta global
import React from 'react';
import { Router, Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { NotFound } from '../App';
import { LoginPage } from '../LoginPage';
import { UserPage } from '../UserPage';
import { RegisterPage } from '../RegisterPage';
import { MesaPage,MesaDetalhe } from '../Mesa';
import './sticky-footer-navbar.css';

//import UserPage from '../UserPage';

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
            <div>


                <div className="">

                    <p> a</p>
                    <p> s</p>
                    <p></p>
                    <div className="container">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>
                                {alert.message}
                            </div>
                        }
                    </div>
                    <Router history={history}>
                        <div>
                            <nav className="navbar navbar-default navbar-fixed-top">
                                <div className="container">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                        <NavLink to="/" activeClassName="navbar-brand">Review</NavLink>
                                    </div>
                                    <div id="navbar" className="collapse navbar-collapse">
                                        <ul className="nav navbar-nav">
                                            <li className={location.pathname === '/' ? 'active' : ''} >
                                                <NavLink to="/" activeClassName="active">Home</NavLink>
                                            </li>
                                            <li className={location.pathname === '/mesas' ? 'active' : ''} >
                                                <NavLink to="/mesas" activeClassName="active">Mesas</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>

                            <div className="container">
                                <Switch>
                                    <PrivateRoute path="/" exact component={HomePage} />
                                    <Route path="/login" exact component={LoginPage} />
                                    <PrivateRoute path="/users" exact component={UserPage} />
                                    <Route path="/register" exact component={RegisterPage} />
                                    <Route path="/mesas" exact component={MesaPage} />
                                    <Route path="/mesa/edit/:id" component={MesaDetalhe} />
                                    { /* Finally, catch all unmatched routes */}
                                    <Route component={NotFound} />
                                </Switch>
                            </div>
                        </div>
                    </Router>

                </div>
                <footer className="footer">
                    <div className="container">
                        <p className="text-muted">Place sticky footer content here.</p>
                    </div>
                </footer>
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
export { connectedApp as App };
