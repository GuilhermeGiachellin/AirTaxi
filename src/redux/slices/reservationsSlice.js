/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'universal-cookie';

export const reservationAdapter = createEntityAdapter();

const initialState = reservationAdapter.getInitialState({ status: 'idle' });

export const fetchReservations = createAsyncThunk('api/reservations', async (id) => {
  const cookie = new Cookies();
  const { data } = await axios.get(`https://air-taxi.herokuapp.com/api/v1/planes/${id}/reservations`, {
    headers: {
      Authorization: `${cookie.get('MyToken')}`,
    },
  });
  console.log(reservationAdapter);
  return data;
});

export const createReservations = createAsyncThunk('api/reservations', async (id) => {
  const cookie = new Cookies();
  const res = await axios.post(`https://air-taxi.herokuapp.com/api/v1/planes/${id}/reservations`, {
    reserve_date: '11/01/1939',
  }, {
    headers: {
      Authorization: `${cookie.get('MyToken')}`,
    },
  });
  console.log(res);
  return res;
});

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReservations.fulfilled, reservationAdapter.upsertMany, (state) => {
        state.status = 'success';
      })
      .addCase(fetchReservations.rejected, (state) => {
        state.status = 'idle';
      });
  },
});

export const {
  selectById: selectReservationById,
  selectIds: selectReservationId,
  selectEntities: selectReservationEntitites,
  selectAll: selectAllReservations,
  selectTotal: selectTotalReservation,
} = reservationAdapter.getSelectors((state) => state.reservations);

export default reservationsSlice.reducer;
