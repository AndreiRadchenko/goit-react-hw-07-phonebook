import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import ContactFilter from 'components/ContactFilter';
import Box from './Box';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import { fetchContactsOperation } from 'redux/operations';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsOperation());
  }, [dispatch]);

  return (
    <>
      <Box margin="30px auto" width="390px" as="section">
        <h1>Phonebook</h1>
        <ContactForm />
      </Box>

      <Box margin="0 auto" width="390px" as="section">
        <h2>Contacts</h2>
        <ContactFilter />
        {isLoading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}> {error} </p>}
        {!(isLoading || error) && <ContactList />}
      </Box>
    </>
  );
};

export default App;
