import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ILogin, ILoginState } from '../../../lib/interface';

const initialState: ILoginState = {
  pending: false,
  success: false,
  data: '',
};

export const login = createAsyncThunk(
  'login/login',
  async (loginInfo: ILogin) => {
    const response = await axios.post('api/auth/login', loginInfo);
    const access_token = response.data.accessToken;
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    return response.data;
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.pending = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.pending = false;
        state.success = action.payload.success;
      })
      .addCase(login.rejected, (state, action) => {
        state.pending = false;
      });
  },
});

export default loginSlice.reducer;
