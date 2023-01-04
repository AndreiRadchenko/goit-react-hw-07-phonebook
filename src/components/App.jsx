import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import ContactFilter from 'components/ContactFilter';
import Box from './Box';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContactsOperation } from 'redux/operations';
import { useEffect, useState } from 'react';
import DotLoader from 'react-spinners/DotLoader';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);

  useEffect(() => {
    dispatch(fetchContactsOperation());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading) {
      setIsLoaderVisible(false);
    }
  }, [isLoading]);

  return (
    <>
      <Box margin="30px auto" width="390px" as="section">
        <h1>Phonebook</h1>
        <ContactForm />
      </Box>

      <Box margin="0 auto" width="390px" as="section">
        <h2>Contacts</h2>
        <ContactFilter />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '40px 0 0',
          }}
        >
          <DotLoader color="#36d7b7" loading={isLoaderVisible} />
        </div>
        {error && <p style={{ color: 'red' }}> {error} </p>}
        {!(error || isLoaderVisible) && <ContactList />}
      </Box>
    </>
  );
};

export default App;
