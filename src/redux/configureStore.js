import { configureStore } from '@reduxjs/toolkit';
import planes from './slices/planesSlice';

export default configureStore({
  reducer: {
    planes,
  },
});
