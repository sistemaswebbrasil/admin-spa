import React, { Component } from 'react';
import { Form, Grid, Button, Message, Icon, Loader } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  }
  return errors
}

class ContactForm extends Component {

  componentWillReceiveProps = (nextProps) => { // Load Contact Asynchronously
    const { contact } = nextProps;
    if (contact.id != this.props.contact.id) { // Initialize form only once
      this.props.initialize(contact)
    }
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({ error: touched && error })}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type} />
      {touched && error &&
      <span className="error">{error}
      </span>
      &&
      <Message negative>
        {error}
      </Message>
      }
    </Form.Field>
  )

  render() {
    const { handleSubmit, pristine, submitting, contact, invalid, reset, loading} = this.props;
    return (
      <div>
        <h1>contact:{JSON.stringify(contact) }</h1>
      <Grid centered >
        <Grid.Column>
          <h1 style={{ marginTop: "1em" }}>{contact.id ? 'Edit Contact' : 'Add New Contact'}</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Form.Group widths='equal'>
              <Field name="name" type="text" component={this.renderField} label="First Name" />
              <Field name="last_name" type="text" component={this.renderField} label="Last Name" />
            </Form.Group>
            <Field name="phone" type="text" component={this.renderField} label="Phone" />
            <Field name="email" type="text" component={this.renderField} label="Email" />
              <Button primary type='submit' disabled={pristine || submitting || invalid || loading }>Save</Button>
            <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
          </Form>
        </Grid.Column>
      </Grid>
      </div>
    )
  }
}

// export default reduxForm({form: 'contact', validate})(ContactForm);

export default reduxForm({
  form: 'ContactForm', // a unique identifier for this form
  validate // <--- validation function given to redux-form

})(ContactForm)