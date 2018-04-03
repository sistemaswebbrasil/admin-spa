import React, { Component } from "react";

import { Route, NavLink, withRouter, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { Container, Image, Menu, Grid } from "semantic-ui-react";
import Home from "./Home";
import Contact from "./ContactListPage";
import ContactFormPage from "./ContactFormPage";
import LoginPage from "./LoginPage";
import Footer from "../components/Footer";
import NotFound from "../components/NotFound";
import PrivateRoute from "../components/PrivateRoute";
import Alerts from "../components/Alerts";
import { alert } from "../actions/alert";

class App extends Component {
  constructor(props) {
    super(props);

    this.props.history.listen(() => {
      this.props.dispatch(alert.clear());
    });
  }

  render() {
    const { alert, loggedIn } = this.props;
    return (
      <div className="Site ">
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item as="a" header>
              <Image
                size="mini"
                src="/logo.png"
                style={{ marginRight: "1.5em" }}
              />
              React Crud
            </Menu.Item>
            {loggedIn &&
            <NavLink className="item" activeClassName="active" exact to="/">
              Home
            </NavLink>
            }
            {loggedIn &&
            <NavLink
              className="item"
              activeClassName="active"
              exact
              to="/contacts"
            >
              Contacts
            </NavLink>
            }
            {loggedIn &&
            <NavLink
              className="item"
              activeClassName="active"
              exact
              to="/contacts/new"
            >
              New Contact
            </NavLink>
            }

            <NavLink className="item" activeClassName="active" exact to="/login">
              {loggedIn ? 'Logout' : 'Login'}
            </NavLink>

          </Container>
        </Menu>
        <div className="Site-content">
          <Grid>
            <Grid.Row>
              <Container style={{ marginTop: "7em", marginBottom: "5em" }}>
                {alert.message && <Alerts alert={alert} />}

                <Switch>
                  {/* <PrivateRoute path="/" exact component={HomePage} />
                  <Route path="/login" exact component={LoginPage} />
                  <PrivateRoute path="/users" exact component={UserPage} />
                  <Route path="/register" exact component={RegisterPage} /> */}


                  <PrivateRoute exact path="/" component={Home} />
                  <PrivateRoute path="/contacts" exact component={Contact} />
                  <PrivateRoute path="/contacts/new" component={ContactFormPage} />
                  <PrivateRoute path="/contacts/edit/:id" component={ContactFormPage} />
                  <Route path="/login" component={LoginPage} />
                  { /* Finally, catch all unmatched routes */}
                  <Route component={NotFound} />
                </Switch>
              </Container>
            </Grid.Row>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert, authentication } = state;
  const { user, loggedIn } = authentication;
  return {
    alert,
    user,
    loggedIn
  };
}

export default withRouter(connect(mapStateToProps)(App));
