import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IMainProductLists } from '../../../lib/interface';

const initialState: IMainProductLists = {
  pending: false,
  products: [],
};

export const getMainProductThunk = createAsyncThunk(
  'mainproduct/getmainproduct',
  async (thunkAPI) => {
    const response = await axios.get('api/products');
    return response.data;
  }
);

export const getRecommendedThunk = createAsyncThunk(
  'mainproduct/getrecommended',
  async (thunkAPI) => {
    const response = await axios.get('api/kurlyviews/products');
    return response.data;
  }
);

export const getMainProductSlice = createSlice({
  name: 'mainproduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMainProductThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(getRecommendedThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(getMainProductThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.products = action.payload.products;
      })
      .addCase(getRecommendedThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.products = action.payload.products;
      })
      .addCase(getMainProductThunk.rejected, (state, action) => {
        state.pending = false;
      })
      .addCase(getRecommendedThunk.rejected, (state, action) => {
        state.pending = false;
      });
  },
});

export default getMainProductSlice.reducer;
