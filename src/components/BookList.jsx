import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const List = useSelector((state) => state.booksList.books);
  return (
    <>
      <div className="Lesson-Panel row m-5 p-2 align-items-center justify-content-center">
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
      </div>
    </>

  );
};
export default BookList;
