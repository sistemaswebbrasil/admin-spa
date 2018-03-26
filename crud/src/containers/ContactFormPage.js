import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { newContact, createContact, getContact, updateContact } from '../actions/contactActions';
import * as actionCreators from '../actions/contactActions';
import ContactForm from '../components/ContactForm';
import { bindActionCreators } from 'redux';


class ContactFormPage extends Component {

    state = {
        redirect: false
    }

    componentDidMount = () => {
        const { id } = this.props.match.params;
        if (id) {
            this.props.getContact(id)
        } else {
            this.props.newContact();
        }
    }

    submit = (contact) => {
        if (!contact.id) {


            return this.props.createContact(contact)
                .then(response => {
                    return setTimeout(() => {
                        this.props.history.push('/contacts')
                    }, 2000);
                })
                .catch(err => {
                    throw new SubmissionError(err)
                })
        } else {
            return this.props.updateContact(contact)
                .then(response => this.setState({ redirect: true }))
                .catch(err => {
                    throw new SubmissionError(err)
                })
        }
    }

    render() {
        return (
            <div>
                <h1>param:{JSON.stringify(this.props.match.params)}</h1>
                <ContactForm contact={this.props.contact}  loading={this.props.contacts.loading} onSubmit={this.submit} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    //const { contacts } = state;
    return {
        contact: state.contacts.contact,
        //contact: state.contacts,
        contacts: state.contacts
    };
}

export default connect(mapStateToProps, { newContact, createContact, getContact, updateContact })(ContactFormPage);

