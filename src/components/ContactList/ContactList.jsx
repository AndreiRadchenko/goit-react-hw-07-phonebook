import Contact from 'components/Contact';
import css from './ContactList.styled';

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

export default ContactList;
