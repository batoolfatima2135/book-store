import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const id = 'BZnFvnxNa2ESt3eSUXWL';
const initialState = {
  books: [],
  isloading: false,
  error: undefined,
};

export const fetchBooks = createAsyncThunk('books/fetchbooks', async (thunkAPI) => {
  try {
    const response = await axios(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${id}/books`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const addBook = createAsyncThunk('books/addBook', async (data, thunkAPI) => {
  try {
    console.log(data);
    const response = await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${id}/books`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});
export const removeBook = createAsyncThunk('books/removeBook', async (id, thunkAPI) => {
  try {
    const response = await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${id}/books`, id, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(addBook.pending, (state) => {
        state.isloading = true;
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(removeBook.pending, (state) => {
        state.isloading = true;
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export default bookSlice.reducer;
