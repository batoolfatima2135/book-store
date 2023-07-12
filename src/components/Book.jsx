// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div>
    <p>
      {title}
      {' '}
      by
      {' '}
      {author}
    </p>
    <button type="button">Delete</button>
  </div>
);
export default Book;
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
