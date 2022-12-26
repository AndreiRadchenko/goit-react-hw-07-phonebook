import { useEffect } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import ContactFilter from 'components/ContactFilter';
import Box from './Box';
import localStor from 'utils/storage';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
// import { deleteContact } from 'redux/contactsSlice';

const LS_KEY = 'contacts_list';

const App = () => {
  const contacts = useSelector(getContacts);
  // const dispatch = useDispatch();

  // const handleFormSubmit = ({ name, number }, { resetForm }) => {
  //   if (contacts.find(e => e.name === name)) {
  //     Notify.warning(`${name} is already in contacts`);
  //     return;
  //   }
  //   dispatch(addContact({ name, number }));
  //   resetForm();
  // };

  // const handleContactDelete = id => {
  //   dispatch(deleteContact(id));
  // };

  useEffect(() => {
    localStor.save(LS_KEY, contacts);
  }, [contacts]);

  return (
    <>
      <Box margin="30px auto" width="390px" as="section">
        <h1>Phonebook</h1>
        <ContactForm />
      </Box>

      <Box margin="0 auto" width="390px" as="section">
        <h2>Contacts</h2>
        <ContactFilter />
        <ContactList />
      </Box>
    </>
  );
};

export default App;
