import Contact from 'components/Contact';
import css from './ContactList.styled';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = ({ handleContactDelete }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(filter);
  console.log(contacts);
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
  handleContactDelete: PropTypes.func.isRequired,
};

export default ContactList;
