import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const List = useSelector((state) => state.booksList.books);
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
