import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IReviewState } from '../../../lib/interface';

const initialState: IReviewState = {
  pending: false,
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
      })
      .addCase(getSubscribeUserThunk.rejected, (state, action) => {
        state.pending = false;
      });
  },
});

export default getSubscribeUserSlice.reducer;
