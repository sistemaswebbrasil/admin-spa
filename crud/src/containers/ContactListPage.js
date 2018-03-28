import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll, deleteContact } from '../actions/contactActions';
import { Message, Icon } from 'semantic-ui-react';
import ContactList from "../components/ContactList";

class ContactListPage extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    handleDeleteUser(id) {
        //return () => this.props.dispatch(userActions.delete(id));
        // return () => this.props.deleteContact(id);

        this.props.deleteData(id);
    }

    render() {
        const { contacts } = this.props;

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.isLoading) {
            return <p>Carregando…</p>;
        }

        return (
            <div>
                {contacts.loading &&
                <Message icon info>
                    <Icon name='circle notched' loading />
                    <Message.Content>
                        <Message.Header>Just one second</Message.Header>
                        We are fetching that content for you.
                    </Message.Content>
                </Message>
                }

                <h1>List of Contacts</h1>
                <ContactList contacts={contacts} deleteContact={this.props.deleteContact} />
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         items: state.contacts.items,
//     };
// };

function mapStateToProps(state) {
    const { contacts } = state;
    return {
        contacts
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(getAll(url)),
        deleteContact: (id) => dispatch(deleteContact(id))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactListPage);
