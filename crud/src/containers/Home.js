// import React, { Component } from 'react';

// export default class Home extends Component {
//   render() {
//     return (
//       <div>
//         Home
//       </div>
//     )
//   }
// };

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Home extends Component {
  static propTypes = {
    user: PropTypes.object,
  };

  render() {
    const { user } = this.props;
    return (
      <div>

        <h1>Hi {user.name}!</h1>
        <p>You&apos;re logged in with React!!</p>

      </div>
    )
  };
};

function mapStateToProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return {
    user
  };
}




export default connect(mapStateToProps)(Home)

