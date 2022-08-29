import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IKurlyviewLists } from '../../../lib/interface';

const initialState: IKurlyviewLists = {
  pending: false,
  kurlyviews: [],
};

export const getSubscribeKurlyviewsThunk = createAsyncThunk(
  'subscribeKurlyviews/getSubscribeKurlyviews',
  async (thunkAPI) => {
    const response = await axios.get('api/kurlyviews');
    return response.data;
  }
);

export const getSubscribeKurlyviewsSlice = createSlice({
  name: 'subscribeKurlyviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSubscribeKurlyviewsThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(getSubscribeKurlyviewsThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.kurlyviews = action.payload.kurlyviews;
      })
      .addCase(getSubscribeKurlyviewsThunk.rejected, (state, action) => {
        state.pending = false;
      });
  },
});

export default getSubscribeKurlyviewsSlice.reducer;
