import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm , reset } from 'redux-form';
import classnames from 'classnames';

const validate = (values) => {
  const errors = {names:{}};
  if(!values.name) {
    errors.name = {
      message: 'You need to provide First Name'
    }
  }
  if (!values.last_name) {
    errors.last_name = {
      message: 'You need to provide Last Name'
    }

  }
  if(!values.phone) {
    errors.phone = {
      message: 'You need to provide a Phone number'
    }
  } else if(!/^\+(?:[0-9] ?){6,14}[0-9]$/.test(values.phone)) {
    errors.phone = {
      message: 'Phone number must be in International format'
    }
  }
  if(!values.email) {
    errors.email = {
      message: 'You need to provide an Email address'
    }
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = {
      message: 'Invalid email address'
    }
  }
  return errors;
}

class ContactForm extends Component {

  componentWillReceiveProps = (nextProps) => { // Load Contact Asynchronously
    const { contact } = nextProps;
    if(contact.id !== this.props.contact.id) { // Initialize form only once
      console.log(contact.updated_at)
      console.log(this.props)
      this.props.initialize(contact)
    }
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )

  render() {
    const { handleSubmit, pristine, submitting, loading, contact,reset } = this.props;
    return (
      <Grid centered columns={2}>
        {/* <h1>contact:{JSON.stringify(this.props.contact)}</h1> */}
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>{contact.id ? 'Edit Contact' : 'Add New Contact'}</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Form.Group widths='equal'>
              <Field name="name" type="text" component={this.renderField} label="First Name"/>
              <Field name="last_name" type="text" component={this.renderField} label="Last Name"/>
            </Form.Group>
            <Field name="phone" type="text" component={this.renderField} label="Phone"/>
            <Field name="email" type="text" component={this.renderField} label="Email"/>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'contact', validate})(ContactForm);
