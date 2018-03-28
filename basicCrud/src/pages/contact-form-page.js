import React, { Component} from 'react';
import { Redirect } from 'react-router';
import { SubmissionError, reset } from 'redux-form';
import { connect } from 'react-redux';
import { newContact, saveContact, fetchContact, updateContact } from '../actions/contact-actions';
import ContactForm from '../components/contact-form';


class ContactFormPage extends Component {

  state = {
    redirect: false
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;
    if(id){
      this.props.fetchContact(id)
    } else {
      this.props.newContact();
    }
  }

  submit = (contact) => {
    const { createRecord, reset } = this.props;

    if(!contact.id) {
      return this.props.saveContact(contact)
        .then(response => this.setState({ redirect:true }))
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    } else {
      return this.props.updateContact(contact)
        .then(response => {
          this.setState({ redirect:false })
          // console.log(response.data);
          //this.props.reset();
          reset();
          //reset('contact');
          this.props.reset()
        })
        .catch(err => {
           throw new SubmissionError(this.props.errors)
         })
    }
  }

  render() {
    return (
      <div>
        <h1>props:{JSON.stringify(this.props)}</h1>
        {
          this.state.redirect ?
          <Redirect to="/" /> :
          <ContactForm contact={this.props.contact} loading={this.props.loading} onSubmit={this.submit} />
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contactStore.contact,
    errors: state.contactStore.errors
  }
}

export default connect(mapStateToProps, {newContact, saveContact, fetchContact, updateContact})(ContactFormPage);
