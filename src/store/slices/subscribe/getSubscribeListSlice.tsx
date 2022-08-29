import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ISubscribeListState } from '../../../lib/interface';

const initialState: ISubscribeListState = {
  pending: false,
  subscribeList: [],
};

export const getSubscribeListThunk = createAsyncThunk(
  'subscribe/getSubscribeList',
  async (thunkAPI) => {
    const response = await axios.get(`api/kurlyview-reviews`);
    return response.data;
  }
);

export const getSubscribeListSlice = createSlice({
  name: 'subscribeList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSubscribeListThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(getSubscribeListThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.subscribeList = action.payload.reviews;
      })
      .addCase(getSubscribeListThunk.rejected, (state, action) => {
        state.pending = false;
      });
  },
});

export default getSubscribeListSlice.reducer;
