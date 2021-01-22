import {INITIAL_STATE} from './initialState';
import {createSlice} from '@reduxjs/toolkit';
import {login, logout} from './actions';

export const loginLoading = (state) => ({
  ...state,
  token: null,
  loading: true,
  error: null,
});

export const loginSuccess = (state, {payload}) => ({
  ...state,
  token: payload,
  loading: false,
  error: null,
});

export const loginFailure = (state, {payload}) => ({
  ...state,
  token: null,
  loading: false,
  error: payload,
});

export const logoutSuccess = (state) => ({
  ...state,
  token: null,
  loading: false,
  error: null,
});

export const authReducer = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  extraReducers: {
    [login.fulfilled]: loginSuccess,
    [login.rejected]: loginFailure,
    [login.pending]: loginLoading,
    [logout]: logoutSuccess,
  },
}).reducer;
