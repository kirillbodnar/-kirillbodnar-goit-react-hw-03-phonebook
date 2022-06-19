import Form from 'components/Form/Form';
import Section from 'components/Section/Section';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Component } from 'react';
import initialContacts from './initialContacts.json';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  componentDidMount() {
    const contactsJSON = localStorage.getItem('contacts');
    const contacts = JSON.parse(contactsJSON);
    console.log(contacts);
    if (contacts !== initialContacts || contacts) {
      this.setState({ contacts: contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  contactHandler = contact => {
    if (this.uniqueContactValidator(contact) === true) {
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  uniqueContactValidator = newContact => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      window.alert(`'${newContact.name}' is already in contacts`);
      return true;
    }
  };

  filterHandler = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  deleteHandler = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().startsWith(this.state.filter.toLowerCase())
    );

    const { filter } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <Form onAddContact={this.contactHandler} />
        </Section>
        <Section title="Contacts">
          <Filter queryValue={filter} onFilter={this.filterHandler} />
          <ContactList
            contacts={filteredContacts}
            onDelete={this.deleteHandler}
          />
        </Section>
      </>
    );
  }
}
