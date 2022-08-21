import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPostReviewState } from '../../../lib/interface';

export const postReview = createAsyncThunk(
  'postreview/postreview',
  async (reviewData: IPostReviewState, thunkAPI) => {
    const response = await axios.post('api/reviews', reviewData);
    return response.data;
  }
);
