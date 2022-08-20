import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IMainProductLists } from '../../../lib/interface';
const initialState: IMainProductLists = {
  pending: false,
  products: [],
};

export const getRecommendedThunk = createAsyncThunk(
  'recommend/getrecommended',
  async (thunkAPI) => {
    const response = await axios.get('api/kurlyviews/products');
    return response.data;
  }
);

export const getRecommendedSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecommendedThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(getRecommendedThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.products = action.payload.products;
      })
      .addCase(getRecommendedThunk.rejected, (state, action) => {
        state.pending = false;
      });
  },
});

export default getRecommendedSlice.reducer;
