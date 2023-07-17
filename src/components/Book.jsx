import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../Redux/Book/bookSlice';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="col-lg-5 col-md-4 col-12">
        <div className="School-of Text-Style-9 p-2">
          {category}
        </div>
        <div className="Title Text-Style-5 px-2">
          {title}
        </div>
        <div className="Suzanne-Collins Text-Style-8 px-2  py-1">
          {author}
        </div>
        <div className="p-2 row ">
          <div className="col-lg-3 col-md-5">
            <span className="Comments Text-Style-8">
              Comments
            </span>
          </div>
          <div className="col-lg-3 col-md-5">
            <button type="button" className="Remove Text-Style-8" onClick={() => dispatch(removeBook(id))}>
              Remove
            </button>
          </div>
          <div className="col-lg-3 col-md-4">
            <span className="Edit Text-Style-8">
              Edit
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-12 row align-items-center my-4">
        <div className="col-lg-3 col-md-5 col-6">
          <div className="Oval-2 rounded-circle"> </div>
        </div>
        <div className="col-lg-3 col-md-5 col-6">
          <span className="-Percent-Complete Text-Style-10">
            64%
          </span>
          <div className="Completed Text-Style-2">
            Completed
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-sm-12">
        <div className="Current-Chapter Text-Style-7">
          CURRENT CHAPTER
        </div>
        <div className="Current-Lesson Text-Style-4 my-2">
          Chapter 17
        </div>
        <button type="button" className="Update-progress my-2 w-lg-50 w-md-75">
          UPDATE PROGRESS
        </button>
      </div>
    </>
  );
};
export default Book;
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
