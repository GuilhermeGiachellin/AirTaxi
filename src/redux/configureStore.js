import { configureStore } from '@reduxjs/toolkit';
import planes from './slices/planesSlice';
import sessions from './slices/sessionSlice';

export default configureStore({
  reducer: {
    planes,
    sessions,
  },
});
