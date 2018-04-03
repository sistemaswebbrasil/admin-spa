import React, { Component } from "react";
import { Form, Grid, Button, Message } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import classnames from "classnames";
import normalizePhone from "../helpers/normalizePhone";
import { getByEmail} from "../actions/contactActions";


const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  // if (!values.email) {
  //   errors.email = "Required";
  // }
  return errors;
};

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values /*, dispatch */) => {
  if (values.email) {
    return getByEmail(values.email);
  }
}

class ContactForm extends Component {
  componentWillReceiveProps = nextProps => {
    // Load Contact Asynchronously
    const { contact } = nextProps;

    if (contact.id !== this.props.contact.id) {
      console.log(contact.updated_at)
      console.log(this.props)
      // Initialize form only once
      this.props.initialize(contact);
    }
  };

  renderField = ({ input, label, type, meta: { touched, error }, disabled }) => (
    <Form.Field className={classnames({ error: touched && error })}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type} disabled={disabled} />
      {touched &&
        error && <span className="error">{error}</span> && (
          <Message negative>{error}</Message>
        )}
    </Form.Field>
  );

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      contact,
      invalid,
      reset,
      loading
    } = this.props;
    return (
      <Grid centered>
        <Grid.Column>
          <h1>contact:{JSON.stringify(this.props.contact)}</h1>
          <h1 style={{ marginTop: "1em" }}>
            {contact.id ? "Edit Contact" : "Add New Contact"}
          </h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Form.Group widths="equal">
              <Field
                name="name"
                type="text"
                component={this.renderField}
                label="First Name"
              />
              <Field
                name="last_name"
                type="text"
                component={this.renderField}
                label="Last Name"
              />
            </Form.Group>
            <Field
              name="phone"
              type="text"
              component={this.renderField}
              label="Pholast_namene"
              normalize={normalizePhone}
            />
            <Field
              name="email"
              type="text"
              component={this.renderField}
              label="Email"
            />
            <Field
              name="created_at"
              type="text"
              component={this.renderField}
              label="Created At"
              disabled
            />

            <Field
              name="updated_at"
              readOnly="true"
              type="text"
              component={this.renderField}
              label="Update At"
              disabled
            />
            <Button
              primary
              type="submit"
              disabled={pristine || submitting || invalid || loading}
            >
              Save
            </Button>
            <Button
              type="button"
              disabled={submitting}
              onClick={reset}
            >
              Clear Values
            </Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

// export default reduxForm({form: 'contact', validate})(ContactForm);

export default reduxForm({
  form: "ContactForm", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  asyncValidate,
  getByEmail,
  asyncBlurFields: ['email']
})(ContactForm);
