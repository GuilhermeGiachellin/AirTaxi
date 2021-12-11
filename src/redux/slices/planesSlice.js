/* eslint-disable no-param-reassign */
import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'universal-cookie';

export const planesAdapter = createEntityAdapter();

const initialState = planesAdapter.getInitialState({ status: 'idle' });

export const fetchPlanes = createAsyncThunk('api/planes', async () => {
  const bolacha = new Cookies();
  const { data } = await axios.get('https://air-taxi.herokuapp.com/api/v1/users/id/planes', {
    headers: {
      Authorization: `${bolacha.get('MyToken')}`,
    },
  });
  console.log(data);
  return data;
});

export const fetchReservations = createAsyncThunk('api/reservations', async () => {
  const bolacha = new Cookies();
  // the id of the plane must be informed, the 1 is just a place holder
  const response = await axios.get('https://air-taxi.herokuapp.com/api/v1/users/id/planes/1/reservations', {
    headers: {
      Authorization: `${bolacha.get('MyToken')}`,
    },
  });
  console.log(response);
});

const planesSlice = createSlice({
  name: 'planes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlanes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPlanes.fulfilled, planesAdapter.upsertMany)
      .addCase(fetchPlanes.rejected, (state) => {
        state.status = 'idle';
      });
  },
});

export const {
  selectById: selectPlaneById,
  selectIds: selectPlaneId,
  selectEntities: selectPlaneEntitites,
  selectAll: selectAllPlanes,
  selectTotal: selectTotalPlane,
} = planesAdapter.getSelectors((state) => state.planes);

export default planesSlice.reducer;