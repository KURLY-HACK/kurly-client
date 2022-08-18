import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  freshScore: 0,
  tasteScroe: 0,
  deliveryScore: 0,
  totalScore: 0,
};
export const reviewScoreSlice = createSlice({
  name: 'reviewscore',
  initialState,
  reducers: {
    resetReviewScore: (state) => {
      state.freshScore = 0;
      state.tasteScroe = 0;
      state.deliveryScore = 0;
      state.totalScore = 0;
    },
    setFreshReviewScore: (
      state,
      action: PayloadAction<{
        freshScore: number;
      }>
    ) => {
      state.freshScore = action.payload.freshScore;
    },
    setTasteReviewScore: (
      state,
      action: PayloadAction<{ tasteScroe: number }>
    ) => {
      state.tasteScroe = action.payload.tasteScroe;
    },
    setDeliveryReviewScore: (
      state,
      action: PayloadAction<{ deliveryScore: number }>
    ) => {
      state.deliveryScore = action.payload.deliveryScore;
    },
    setTotalReviewScore: (
      state,
      action: PayloadAction<{ totalScore: number }>
    ) => {
      state.totalScore = action.payload.totalScore;
    },
  },
});

export const { resetReviewScore } = reviewScoreSlice.actions;
export const {
  setFreshReviewScore,
  setTasteReviewScore,
  setDeliveryReviewScore,
  setTotalReviewScore,
} = reviewScoreSlice.actions;

export default reviewScoreSlice.reducer;
