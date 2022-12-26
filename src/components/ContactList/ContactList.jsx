import Contact from 'components/Contact';
import css from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const contactsForRender = !filter
    ? contacts
    : contacts.filter(e => e.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <css.List>
      {contactsForRender.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </css.List>
  );
};

export default ContactList;
