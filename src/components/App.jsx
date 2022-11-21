import { Component } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import shortid from 'shortid';
import ContactFilter from 'components/ContactFilter';
import Box from './Box';
import { Notify } from 'notiflix';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFormSubmit = ({ name, number }, { resetForm }) => {
    if (this.state.contacts.find(e => e.name === name)) {
      Notify.warning(`${name} is already in contacts`);
      return;
    }
    const id = shortid.generate();
    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id, name, number }],
    }));
    resetForm();
  };

  handleContactDelete = id => {
    this.setState(({ contacts: prevContacts }) => ({
      contacts: prevContacts.filter(e => e.id !== id),
    }));
  };

  handleFilterInput = event => {
    const filterStr = event.target.value;
    this.setState({
      filter: filterStr,
    });
  };

  render() {
    return (
      <>
        <Box margin="30px auto" width="390px" as="section">
          <h1>Phonebook</h1>
          <ContactForm handleSubmit={this.handleFormSubmit} />
        </Box>

        <Box margin="0 auto" width="390px" as="section">
          <h2>Contacts</h2>
          <ContactFilter handleFilterInput={this.handleFilterInput} />
          <ContactList
            state={this.state}
            handleContactDelete={this.handleContactDelete}
          />
        </Box>
      </>
    );
  }
}

export default App;
