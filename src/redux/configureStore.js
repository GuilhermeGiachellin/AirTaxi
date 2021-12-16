import { configureStore } from '@reduxjs/toolkit';
import planes from './slices/planesSlice';
import sessions from './slices/sessionSlice';
import reservations from './slices/reservationsSlice';

export default configureStore({
  reducer: {
    planes,
    sessions,
    reservations,
  },
});
