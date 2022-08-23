import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICommonScore } from '../../lib/interface';

const initialState: ICommonScore = {
  pending: false,
  rating: [],
};

export const getCommonScoreThunk = createAsyncThunk(
  'commonscore/getCommonScore',
  async (id: string, thunkAPI) => {
    const response = await axios.get(`api/products/${id}/review/montly-rate`);
    return response.data;
  }
);

export const getCommonScoreSlice = createSlice({
  name: 'commonscore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommonScoreThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(getCommonScoreThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.rating = action.payload.rating;
      })
      .addCase(getCommonScoreThunk.rejected, (state, action) => {
        state.pending = false;
      });
  },
});

export default getCommonScoreSlice.reducer;
