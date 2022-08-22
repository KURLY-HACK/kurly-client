import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IReviewState } from '../../../lib/interface';

const initialState: IReviewState = {
  pending: false,
  review: [],
};

export const getReviewThunk = createAsyncThunk(
  'review/getReview',
  async (id: string, thunkAPI) => {
    const response = await axios.get(`api/products/${id}/reviews`);
    return response.data;
  }
);

export const getReviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getReviewThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(getReviewThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.review = action.payload.reviews;
      })
      .addCase(getReviewThunk.rejected, (state, action) => {
        state.pending = false;
      });
  },
});

export default getReviewSlice.reducer;
