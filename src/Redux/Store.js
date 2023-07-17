import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from './Categories/categoriesSlice';
import bookReducer from './Book/bookSlice';

const Store = configureStore({
  reducer: {
    booksList: bookReducer,
    categories: categoriesReducer,
  },
});

export default Store;
