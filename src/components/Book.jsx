import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/Book/bookSlice';

const Book = ({
  title, author, id,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>
        {title}
        {' '}
        by
        {' '}
        {author}
      </p>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Delete</button>
    </div>
  );
};
export default Book;
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
