import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import ContactFilter from 'components/ContactFilter';
import Box from './Box';

const App = () => {
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
