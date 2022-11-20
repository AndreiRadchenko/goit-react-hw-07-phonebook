import Contact from 'components/Contact';
import css from './ContactList.styled';

const ContactList = ({ state: { contacts }, handleContactDelete }) => (
  <css.List>
    {contacts.map(({ id, name, number }) => {
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

export default ContactList;
