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
        clicked: number;
      }>
    ) => {
      state.freshScore = action.payload.clicked;
    },
    setTasteReviewScore: (
      state,
      action: PayloadAction<{ clicked: number }>
    ) => {
      state.tasteScroe = action.payload.clicked;
    },
    setDeliveryReviewScore: (
      state,
      action: PayloadAction<{ clicked: number }>
    ) => {
      state.deliveryScore = action.payload.clicked;
    },
    setTotalReviewScore: (
      state,
      action: PayloadAction<{ clicked: number }>
    ) => {
      state.totalScore = action.payload.clicked;
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
