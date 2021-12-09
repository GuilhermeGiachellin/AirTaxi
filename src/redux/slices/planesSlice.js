/* eslint-disable no-param-reassign */
import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';

export const planesAdapter = createEntityAdapter();

const initialState = planesAdapter.getInitialState({ status: 'idle' });

export const fetchPlanes = createAsyncThunk('planes/fetchPlane', async () => {
  console.log('entrou?');
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  console.log('ha entro mermo');
  console.log(response);
  const res = await response.json();
  console.log('res');
  return res;
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
