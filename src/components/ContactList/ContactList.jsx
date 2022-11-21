import Contact from 'components/Contact';
import css from './ContactList.styled';
import PropTypes from 'prop-types';

const ContactList = ({ state: { contacts, filter }, handleContactDelete }) => {
  const contactsForRender = !filter
    ? contacts
    : contacts.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <css.List>
      {contactsForRender.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            handleContactDelete={handleContactDelete}
          />
        );
      })}
    </css.List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  handleContactDelete: PropTypes.func.isRequired,
};

export default ContactList;
