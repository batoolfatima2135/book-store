import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { fetchBooks } from '../Redux/Book/bookSlice';
import '../styles/BookList.css';


const BookList = () => {
  const List = useSelector((state) => state.booksList.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <>
      <div className="Lesson-Panel row m-5 p-2 align-items-center justify-content-center">

        { List
          ? List.map((book) => (
            <Book
              title={book.title}
              key={book.item_id}
              id={book.item_id}
              author={book.author}
              category={book.category}
            />
          )) : (
            <div>
              <h3>No Books</h3>
            </div>
          )}
      </div>
    </>

  );
};
export default BookList;
