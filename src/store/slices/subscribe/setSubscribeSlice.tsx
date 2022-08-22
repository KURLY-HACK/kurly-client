import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ISubscribeState } from '../../../lib/interface';

const initialState: ISubscribeState = {
  pending: false,
  subscribe: false,
};

export const setSubscribeStatusThunk = createAsyncThunk(
  'subscribe/subscribeStatus',
  async (id: string, thunkAPI) => {
    const response = await axios.get(`api/kurlyviews/${id}/status`);
    return response.data;
  }
);

export const setSubscribeThunk = createAsyncThunk(
  'subscribe/setSubscribe',
  async (id: string, thunkAPI) => {
    const response = await axios.post(`api/kurlyviews`, { id: id });
    return response.data;
  }
);

export const setUnsubscribeThunk = createAsyncThunk(
  'subscribe/setUnsubscribe',
  async (id: string, thunkAPI) => {
    const response = await axios.post(`api/kurlyviews/unsubscribe`, { id: id });
    return response.data;
  }
);

export const getSubscribeSlice = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setSubscribeStatusThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(setSubscribeStatusThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.subscribe = action.payload.result;
      })
      .addCase(setSubscribeStatusThunk.rejected, (state, action) => {
        state.pending = false;
        state.subscribe = false;
      })
      .addCase(setSubscribeThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(setSubscribeThunk.fulfilled, (state) => {
        state.pending = false;
        state.subscribe = true;
      })
      .addCase(setSubscribeThunk.rejected, (state, action) => {
        state.pending = false;
        state.subscribe = false;
      })
      .addCase(setUnsubscribeThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(setUnsubscribeThunk.fulfilled, (state) => {
        state.pending = false;
        state.subscribe = false;
      })
      .addCase(setUnsubscribeThunk.rejected, (state, action) => {
        state.pending = false;
        state.subscribe = false;
      });
  },
});

export default getSubscribeSlice.reducer;
