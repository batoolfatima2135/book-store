import Book from './Book';

const BookList = () => {
  const List = [
    {
      Bookname: 'book1',
      author: 'abc',
    },
    {
      Bookname: 'book2',
      author: 'author2',
    },
    {
      Bookname: 'book3',
      author: 'author3',
    },

  ];
  return (
    <>
      {
        List.map((book) => <Book title={book.title} key={book.key} author={book.author} />)
    }
    </>

  );
};
export default BookList;
