import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './slices/bookSlice';
import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    books: bookSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;