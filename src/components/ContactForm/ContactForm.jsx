import { Formik, ErrorMessage } from 'formik';
import css from './ContactForm.styled';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { Notify } from 'notiflix';
import { addContactOperation } from 'redux/operations';

const regExName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const regExNumber =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      regExName,
      'Name may contain only letters, apostrophe, dash and spaces.'
    )
    .required('Name required'),
  number: Yup.string()
    .matches(
      regExNumber,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Phone number required'),
});

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleFormSubmit = ({ name, number }, { resetForm }) => {
    if (contacts.find(e => e.name === name)) {
      Notify.warning(`${name} is already in contacts`);
      return;
    }
    dispatch(addContactOperation({ name, number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={validationSchema}
    >
      <css.ContactForm autoComplete="off">
        <css.Label htmlFor="name">
          Name
          <css.InputWrap>
            <css.Input type="text" name="name" id="name"></css.Input>
            <ErrorMessage
              name="name"
              render={message => <css.ErrorText>{message}</css.ErrorText>}
            />
          </css.InputWrap>
        </css.Label>
        <css.Label htmlFor="number">
          Number
          <css.InputWrap>
            <css.Input type="tel" name="number" id="number"></css.Input>
            <ErrorMessage
              name="number"
              render={message => <css.ErrorText>{message}</css.ErrorText>}
            />
          </css.InputWrap>
        </css.Label>
        <css.Button type="submit">Add contact</css.Button>
      </css.ContactForm>
    </Formik>
  );
};

export default ContactForm;
