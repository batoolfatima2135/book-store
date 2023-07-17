import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../Redux/Book/bookSlice';
import '../styles/AddBook.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuther] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const addNewBook = () => {
    const newBook = {
      item_id: uuidv4(),
      title,
      category,
      author,
    };
    dispatch(addBook(newBook));
    setAuther('');
    setTitle('');
    setCategory('');
  };
  return (
    <>
      <div className="container my-4">
        <hr />
        <h2 className="Title Text-Style-12 my-4">
          ADD NEW BOOK
        </h2>
        <div className="row justify-content-center">
          <form>
            <div className="row align-items-center justify-content-center">
              <div className="col-4">
                <input
                  type="text"
                  className="form-control mb-2"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  placeholder="Book title"
                />
              </div>
              <div className="col-3">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Author"
                  onChange={(e) => setAuther(e.target.value)}
                  value={author}
                />
              </div>
              <div className="col-3">
                <div className="input-group mb-3">
                  <select
                    className="form-select"
                    id="inputGroupSelect01"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="Action">Action</option>
                    <option value="Science fiction">Science fiction</option>
                    <option value="Economy">Economy</option>
                  </select>
                </div>
              </div>
              <div className="col-2">
                <button type="button" className="w-100 p-3 mb-3 add" onClick={addNewBook}>Add Book</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddBook;
