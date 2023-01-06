import * as css from './Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactOperation } from 'redux/operations';
import Highlighter from 'react-highlight-words';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import BeatLoader from 'react-spinners/BeatLoader';
import { useShowLoader } from 'hooks/useShowLoader';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const { isLoaderVisible, showLoader } = useShowLoader();

  const handleClick = () => {
    showLoader();
    dispatch(deleteContactOperation(id));
  };

  return (
    <css.Item>
      <css.Text>
        <Highlighter
          searchWords={[filter]}
          autoEscape={true}
          textToHighlight={name}
        />
        : {number}
      </css.Text>
      <button
        type="button"
        onClick={handleClick}
        style={{ width: '65px' }}
        disabled={isLoaderVisible}
      >
        {!isLoaderVisible && 'Delete'}
        <BeatLoader color="#36d7b7" size={6} loading={isLoaderVisible} />
      </button>
    </css.Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
