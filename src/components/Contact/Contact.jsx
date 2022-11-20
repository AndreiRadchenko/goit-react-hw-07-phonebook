import css from './Contact.styled';

const Contact = ({ id, name, number, handleContactDelete }) => {
  return (
    <css.Item>
      <css.Text>
        {name}: {number}
      </css.Text>
      <button type="button" onClick={() => handleContactDelete(id)}>
        Delete
      </button>
    </css.Item>
  );
};

export default Contact;
