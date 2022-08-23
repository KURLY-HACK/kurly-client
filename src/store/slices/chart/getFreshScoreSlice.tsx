import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IFreshScore } from '../../lib/interface';

const initialState: IFreshScore = {
  pending: false,
  rating: [],
  fresh_score: [],
  taste_score: [],
  delivery_score: [],
};

export const getFreshScoreThunk = createAsyncThunk(
  'freshscore/getFreshScore',
  async (id: string, thunkAPI) => {
    const response = await axios.get(`api/products/${id}/review/weekly-rate`);
    return response.data;
  }
);

export const getFreshScoreSlice = createSlice({
  name: 'freshscore',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFreshScoreThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(getFreshScoreThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.rating = action.payload.rating;
        state.fresh_score = action.payload.fresh_score;
        state.taste_score = action.payload.taste_score;
        state.delivery_score = action.payload.delivery_score;
      })
      .addCase(getFreshScoreThunk.rejected, (state, action) => {
        state.pending = false;
      });
  },
});

export default getFreshScoreSlice.reducer;
