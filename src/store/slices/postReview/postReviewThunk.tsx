import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPostReviewProps, IPostReviewState } from '../../../lib/interface';

export const postReview = createAsyncThunk(
  'postreview/postreview',
  async (reviewData: IPostReviewProps, thunkAPI) => {
    const response = await axios.post(
      `api/products/${reviewData.product_id}/reviews`,
      reviewData.reviewData
    );
    return response.data;
  }
);
