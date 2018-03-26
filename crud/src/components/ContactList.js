import React from "react";
import { Icon, Label, Menu, Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ContactList = props => {
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {props.contacts.items && (
          <Table.Body>
            {props.contacts.items.map(contact => (
              <Table.Row key={contact.id}>
                <Table.Cell>{contact.id}</Table.Cell>
                <Table.Cell>{contact.name}</Table.Cell>
                <Table.Cell>{contact.email}</Table.Cell>

                <Table.Cell>
                  <div className="ui two buttons">
                    <Link
                      to={`/contacts/edit/${contact.id}`}
                      className="ui basic button green"
                    >
                      Edit
                    </Link>
                    {/* <Button basic color="red" onClick={() => deleteContact(contact.id)} >Delete</Button> */}
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        )}
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              {/* <Button floated='right' icon labelPosition='left' primary size='small'>
                              <Icon name='user' /> Add Contact
                          </Button> */}
                          <Link to={`/contacts/new`} className="ui basic button green" primary="true" size='small' ><Icon name='user' /> Add Contact</Link>
                      </Table.HeaderCell>
                  </Table.Row>
              </Table.Footer>
          </Table>
    </div>
  );
};

export default ContactList;
