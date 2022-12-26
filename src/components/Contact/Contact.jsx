import * as css from './Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <css.Item>
      <css.Text>
        {name}: {number}
      </css.Text>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </css.Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
