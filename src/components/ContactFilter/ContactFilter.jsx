import css from './ContactFilter.styled';
import PropTypes from 'prop-types';

const ContactFilter = ({ handleFilterInput }) => {
  return (
    <css.Filter>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleFilterInput}></input>
    </css.Filter>
  );
};

ContactFilter.propTypes = {
  handleFilterInput: PropTypes.func.isRequired,
};

export default ContactFilter;
