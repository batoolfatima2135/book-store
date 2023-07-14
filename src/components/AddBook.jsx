import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../Redux/Book/bookSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuther] = useState('');
  const dispatch = useDispatch();
  const addNewBook = () => {
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));
  };
  return (
    <form>
      <h1>Create New Book</h1>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Book title"
      />
      <input
        type="text"
        placeholder="Author"
        onChange={(e) => setAuther(e.target.value)}
        value={author}
      />
      <button type="button" onClick={addNewBook}>Add Book</button>
    </form>
  );
};
export default AddBook;
