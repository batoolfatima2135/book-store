import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { fetchBooks } from '../Redux/Book/bookSlice';

const BookList = () => {
  const List = useSelector((state) => state.booksList.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  });
  return (
    <>
      {
       List.map((book) => (
         <Book
           title={book.title}
           key={book.item_id}
           id={book.item_id}
           author={book.author}
           category={book.category}
         />
       ))
    }
    </>

  );
};
export default BookList;
