/* eslint-disable camelcase */
/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
import {
//   createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { getAuthorizationCookie, setAuthorizationCookie } from '../../component/lib/CookieManager';

export const logIn = createAsyncThunk('api/login', async ({ email, password }) => {
  const response = await axios.post('https://air-taxi.herokuapp.com/api/login', {
    user: {
      email,
      password,
    },
  });
  const { data } = response;
  const { headers: { authorization } } = response;
  setAuthorizationCookie('MyToken', authorization);
  return data;
});

export const signUp = createAsyncThunk('api/signUp', async ({
  name, email, password, password_confirmation,
}) => {
  const response = await axios.post('https://air-taxi.herokuapp.com/api/signup', {
    user: {
      name,
      email,
      password,
      password_confirmation,
    },
  });
  const { data } = response;
  const { headers: { authorization } } = response;
  setAuthorizationCookie('MyToken', authorization);
  return data;
});

export const logOut = createAsyncThunk('api/logOut', async () => {
  const authCookie = getAuthorizationCookie('MyToken');
  const { data } = await axios.delete('https://air-taxi.herokuapp.com/api/logout', {
    headers: {
      Authorization: `${authCookie}`,
    },
  });
  return data;
});

const sessionSlice = createSlice({
  name: 'sessions',
  initialState: {
    status: 'idle',
    entities: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.status = 'logged';
      })
      .addCase(logIn.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(logOut.fulfilled, (state) => {
        state.status = 'out';
      });
  },
});

export default sessionSlice.reducer;
