import { Component } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import shortid from 'shortid';
// import ContactFilter from 'components/ContactFilter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  handleFormSubmit = ({ name, number }, { resetForm }) => {
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

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleFormSubmit} />

        <h2>Contacts</h2>
        {/* <ContactFilter /> */}
        <ContactList
          state={this.state}
          handleContactDelete={this.handleContactDelete}
        />
      </div>
    );
  }
}

export default App;
