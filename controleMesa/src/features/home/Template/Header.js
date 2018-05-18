import React, { Component } from 'react';
import { Link} from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <Link className="navbar-brand" to="/">Controle de Mesa</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className={window.location.pathname === '/' ? 'nav-item active' : 'nav-item'} >
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className={window.location.pathname === '/examples' ? 'nav-item active' : 'nav-item'} >
                            <Link className="nav-link" to="/examples">Exemplos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
  }
};
