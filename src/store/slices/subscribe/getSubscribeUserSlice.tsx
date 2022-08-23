import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ISubscribeUserState } from '../../../lib/interface';

const initialState: ISubscribeUserState = {
  pending: false,
  name: '',
  review: [],
};

export const getSubscribeUserThunk = createAsyncThunk(
  'subscribe/getSubscribeUser',
  async (id: string, thunkAPI) => {
    const response = await axios.get(`api/users/${id}/reviews`);
    return response.data;
  }
);

export const getSubscribeUserSlice = createSlice({
  name: 'subscribeUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSubscribeUserThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(getSubscribeUserThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.review = action.payload.reviews;
        state.name = action.payload.name;
      })
      .addCase(getSubscribeUserThunk.rejected, (state, action) => {
        state.pending = false;
      });
  },
});

export default getSubscribeUserSlice.reducer;
