import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ILogin, ILoginState } from '../../../lib/interface';

const initialState: ILoginState = {
  pending: false,
  success: false,
  data: '',
  name: '',
};

export const login = createAsyncThunk(
  'login/login',
  async (loginInfo: ILogin) => {
    const response = await axios.post('api/auth/login', loginInfo);
    axios.defaults.headers.common['Authorization'] = response.data.accessToken;
    return response.data;
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
      delete axios.defaults.headers.common['Authorization'];
      state.success = false;
      state.name = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.pending = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.pending = false;
        state.success = action.payload.success;
        state.name = action.payload.name;
      })
      .addCase(login.rejected, (state, action) => {
        state.pending = false;
      });
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
