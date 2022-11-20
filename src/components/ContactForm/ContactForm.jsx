import { Formik } from 'formik';
import css from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ handleSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <css.ContactForm autoComplete="off">
        <css.Label htmlFor="name">
          Name
          <css.Input
            type="text"
            name="name"
            id="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></css.Input>
        </css.Label>
        <css.Label htmlFor="number">
          Number
          <css.Input
            type="tel"
            name="number"
            id="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></css.Input>
        </css.Label>
        <css.Button type="submit">Add contact</css.Button>
      </css.ContactForm>
    </Formik>
  );
};

export default ContactForm;
