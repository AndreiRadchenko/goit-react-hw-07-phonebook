import { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import shortid from 'shortid';
import ContactFilter from 'components/ContactFilter';
import Box from './Box';
import { Notify } from 'notiflix';
import localStor from 'utils/storage';
// import { useDispatch } from 'react-redux';
// import { setFilter } from '../redux/actions';

const LS_KEY = 'contacts_list';
const initContact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  // const dispatch = useDispatch();

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStor.load(LS_KEY);
    if (savedContacts) {
      return [...savedContacts];
    } else {
      return [...initContact];
    }
  });
  // const [filter, setFilter] = useState('');

  const handleFormSubmit = ({ name, number }, { resetForm }) => {
    if (contacts.find(e => e.name === name)) {
      Notify.warning(`${name} is already in contacts`);
      return;
    }
    const id = shortid.generate();
    setContacts(prevContacts => {
      return [...prevContacts, { id, name, number }];
    });
    resetForm();
  };

  const handleContactDelete = id => {
    setContacts(prevContacts => {
      return [...prevContacts.filter(e => e.id !== id)];
    });
  };

  // const handleFilterInput = event => {
  //   const filterStr = event.target.value;
  //   dispatch(setFilter(filterStr));
  //   // setFilter(filterStr);
  // };

  useEffect(() => {
    localStor.save(LS_KEY, contacts);
  }, [contacts]);

  return (
    <>
      <Box margin="30px auto" width="390px" as="section">
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={handleFormSubmit} />
      </Box>

      <Box margin="0 auto" width="390px" as="section">
        <h2>Contacts</h2>
        <ContactFilter />
        <ContactList handleContactDelete={handleContactDelete} />
      </Box>
    </>
  );
};

export default App;
