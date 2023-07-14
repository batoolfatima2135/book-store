import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const List = useSelector((state) => state.booksList.books);
  console.log(List);
  return (
    <>
      {
       List.map((book) => <Book title={book.title} key={book.item_id} author={book.author} />)
    }
    </>

  );
};
export default BookList;
