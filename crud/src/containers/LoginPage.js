import React from 'react';
import { connect } from 'react-redux';
import {userActions}  from '../actions/userActions';
import LoginForm from '../components/LoginForm';
import { SubmissionError } from "redux-form";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.props.logout();
    }

    submit = (user) => {
        return this.props.login(user.email,user.password)
            .then(response => {
                this.props.history.push('/')
            })
            .catch(err => {
                throw new SubmissionError(err)
        })
    }

    render() {
        return (
            <div>
                <LoginForm onSubmit={this.submit} loading={this.props.loggingIn}  ></LoginForm>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps, userActions)(LoginPage);
