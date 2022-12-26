import css from './ContactFilter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const ContactFilter = () => {
  const dispatch = useDispatch();

  const handleFilterInput = event => {
    const filterStr = event.target.value;
    dispatch(setFilter(filterStr));
  };

  return (
    <css.Filter>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleFilterInput}></input>
    </css.Filter>
  );
};

export default ContactFilter;
