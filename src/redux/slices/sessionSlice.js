/* eslint-disable camelcase */
/* eslint-disable arrow-body-style */
/* eslint-disable no-param-reassign */
import {
//   createEntityAdapter,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'universal-cookie';

// export const sessionAdapter = createEntityAdapter();

// const initialState = sessionAdapter.getInitialState({ status: 'idle' });

export const logIn = createAsyncThunk('api/login', async ({ email, password }) => {
  const response = await axios.post('https://air-taxi.herokuapp.com/users/sign_in', {
    user: {
      email,
      password,
    },
  });
  const cookies = new Cookies();
  const { data } = response;
  const { headers: { authorization } } = response;
  cookies.set('MyToken', authorization, { path: '/' });
  return data;
});

export const signUp = createAsyncThunk('api/signUp', async ({
  name, email, password, password_confirmation,
}) => {
  const response = await axios.post('https://air-taxi.herokuapp.com/users', {
    user: {
      name,
      email,
      password,
      password_confirmation,
    },
  });
  const cookies = new Cookies();
  const { data } = response;
  const { headers: { authorization } } = response;
  cookies.set('MyToken', authorization, { path: '/' });
  return data;
});

export const logOut = createAsyncThunk('api/logOut', async () => {
  const cookies = new Cookies();
  const { data } = await axios.delete('https://air-taxi.herokuapp.com/users/sign_out', {
    headers: {
      Authorization: `${cookies.get('MyToken')}`,
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

// export const {
//   selectById: selectSessionById,
// } = sessionAdapter.getSelectors((state) => state.sessions);

export default sessionSlice.reducer;
