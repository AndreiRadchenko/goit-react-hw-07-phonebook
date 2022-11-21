import * as css from './Contact.styled';
import PropTypes from 'prop-types';

const Contact = ({ id, name, number, handleContactDelete }) => {
  return (
    <css.Item>
      <css.Text>
        {name}: {number}
      </css.Text>
      <button type="button" onClick={() => handleContactDelete(id)}>
        Delete
      </button>
    </css.Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleContactDelete: PropTypes.func.isRequired,
};

export default Contact;
