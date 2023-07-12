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
    <ul>
      {List.forEach((book) => {
        <li>
          {book.Bookname}
          by
          {book.author}
        </li>;
      })}
    </ul>
  );
};
export default BookList;
