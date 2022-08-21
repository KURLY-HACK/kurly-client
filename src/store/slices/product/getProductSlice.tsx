import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IProductState } from '../../../lib/interface';

const initialState: IProductState = {
  pending: false,
  product: {
    id: '',
    title: '',
    price: 0,
    photo: '',
    h1: '',
    details: [],
    product_photo: '',
    detailed_photo: '',
  },
};

export const getProductThunk = createAsyncThunk(
  'product/getProduct',
  async (id: string, thunkAPI) => {
    const response = await axios.get(`api/products/${id}`);
    return response.data;
  }
);

export const getProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(getProductThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.product = action.payload;
      })
      .addCase(getProductThunk.rejected, (state, action) => {
        state.pending = false;
      });
  },
});

export default getProductSlice.reducer;
