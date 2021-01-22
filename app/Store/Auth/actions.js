import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {AuthService} from '../../Services/AuthService';

export const login = createAsyncThunk('auth/login', async (data) => {
  const response = await AuthService.login(data);
  return response.data.token;
});

export const logout = createAction('auth/logout');
