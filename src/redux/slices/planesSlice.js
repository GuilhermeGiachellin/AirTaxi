import {
  createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { getAuthorizationCookie } from '../../component/lib/CookieManager';

export const planesAdapter = createEntityAdapter();

const initialState = planesAdapter.getInitialState({ status: 'idle' });

export const fetchPlanes = createAsyncThunk('api/planes', async () => {
  const authCookie = getAuthorizationCookie('MyToken');
  const { data } = await axios.get('https://air-taxi.herokuapp.com/api/v1/planes', {
    headers: {
      Authorization: `${authCookie}`,
    },
  });
  return data;
});

export const createPlane = createAsyncThunk('api/planes', async ({
  model, registration, cruise_speed, description, tour_price, picture,
}) => {
  const authCookie = getAuthorizationCookie('MyToken');
  const { data } = await axios.post('https://air-taxi.herokuapp.com/api/v1/planes', {
    model, registration, cruise_speed, description, tour_price, picture,
  }, {
    headers: {
      Authorization: `${authCookie}`,
    },
  });
  return data;
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
