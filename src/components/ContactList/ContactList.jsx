import Contact from 'components/Contact';
import css from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const reversedContacts = [...contacts].reverse();
  return (
    <css.List>
      {reversedContacts.map(({ id, name, number }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </css.List>
  );
};

export default ContactList;
