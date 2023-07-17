import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = 'BZnFvnxNa2ESt3eSUXWL';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';
const initialState = {
  books: [],
  isloading: false,
  error: undefined,
};

export const fetchBooks = createAsyncThunk('books/fetchbooks', async (thunkAPI) => {
  try {
    const response = await axios(`${baseUrl}/${appId}/books`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const addBook = createAsyncThunk('books/addBook', async (data, thunkAPI) => {
  try {
    const response = await axios.post(`${baseUrl}/${appId}/books`, data);
    thunkAPI.dispatch(fetchBooks());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});
export const removeBook = createAsyncThunk('books/removeBook', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`${baseUrl}/${appId}/books/${id}`, id);
    thunkAPI.dispatch(fetchBooks());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (build) => {
    build
      .addCase(fetchBooks.pending, (state) => {
        state.isloading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isloading = false;
        const data = Object.keys(action.payload).map((item) => {
          const book = {};
          book.author = action.payload[item][0].author;
          book.category = action.payload[item][0].category;
          book.title = action.payload[item][0].title;
          book.item_id = item;
          return book;
        });
        state.books = data;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(addBook.pending, (state) => {
        state.isloading = true;
      })
      .addCase(addBook.fulfilled, (state) => {
        state.isloading = false;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(removeBook.pending, (state) => {
        state.isloading = true;
      })
      .addCase(removeBook.fulfilled, (state) => {
        state.isloading = false;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export default bookSlice.reducer;
