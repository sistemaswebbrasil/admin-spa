import React, { Component } from 'react';

import { Route, NavLink, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { Container, Image, Menu} from 'semantic-ui-react';
import Home from './Home';
import Contact from './ContactListPage';
import ContactFormPage from './ContactFormPage';
import Footer from '../components/Footer';
import Alerts from '../components/Alerts';
import { alert } from '../actions/alert';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.history.listen(() => {
      this.props.dispatch(alert.clear());
     });
  }

  render() {
    const { alert } = this.props;
    return (
      <div className="Site">
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image
                size='mini'
                src='/logo.png'
                style={{ marginRight: '1.5em' }}
              />
              React Crud
        </Menu.Item>
            <NavLink className="item" activeClassName="active" exact to="/">Home</NavLink>
            <NavLink className="item" activeClassName="active" exact to="/contacts">Contacts</NavLink>
            <NavLink className="item" activeClassName="active" exact to="/contacts/new">New Contact</NavLink>
          </Container>
        </Menu>
        <div className="Site-content">
          <Container text style={{ marginTop: '7em' }}>
            {alert.message &&
              <Alerts alert={alert} />
            }
            <Route exact path="/" component={Home} />
            <Route exact path="/contacts" component={Contact} />
            <Route path="/contacts/new" component={ContactFormPage} />
            <Route path="/contacts/edit/:id" component={ContactFormPage} />
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert,
  };
}

export default withRouter(connect(mapStateToProps)(App))
