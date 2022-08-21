import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ISubscribeState } from '../../../lib/interface';

const initialState: ISubscribeState = {
  pending: false,
  success: false,
};

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
      .addCase(setSubscribeThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(setSubscribeThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.success = action.payload.success;
      })
      .addCase(setSubscribeThunk.rejected, (state, action) => {
        state.pending = false;
        state.success = false;
      })
      .addCase(setUnsubscribeThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(setUnsubscribeThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.success = action.payload.success;
      })
      .addCase(setUnsubscribeThunk.rejected, (state, action) => {
        state.pending = false;
        state.success = false;
      });
  },
});

export default getSubscribeSlice.reducer;
