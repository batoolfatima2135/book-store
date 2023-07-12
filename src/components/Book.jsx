import { useState } from 'react';

const Book = () => {
  const [book] = useState({ Bookname: 'book1', author: 'Author1' });
  return (
    <div>
      <p>{book}</p>
      <button type="button">Delete</button>
    </div>
  );
};
export default Book;
