import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { getAuthorizationCookie, setAuthorizationCookie } from '../../component/lib/CookieManager';

const getIdFromToken = (token) => {
  const { user: { id } } = jwt_decode(token);
  setAuthorizationCookie('MyToken', token);
  return id;
};

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
  data.data.userId = getIdFromToken(authorization);
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
  data.data.userId = getIdFromToken(authorization);
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
    entity: null,
  },
  reducers: {
    reset: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signUp.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.entity = action.payload;
        state.status = 'logged';
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.entity = action.payload;
        state.status = 'logged';
      })
      .addCase(logIn.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(signUp.rejected, (state) => {
        state.status = 'error';
      })
      .addCase(logOut.fulfilled, (state) => {
        state.status = 'out';
      });
  },
});

export default sessionSlice.reducer;
export const { reset } = sessionSlice.actions;
