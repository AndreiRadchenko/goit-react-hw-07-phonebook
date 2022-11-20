import css from './ContactFilter.styled';

const ContactFilter = ({ handleFilterInput }) => {
  return (
    <css.Filter>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleFilterInput}></input>
    </css.Filter>
  );
};

export default ContactFilter;
