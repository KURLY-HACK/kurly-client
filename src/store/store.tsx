import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import reviewScoreReducer from './slices/review/reviewScoreSlice';
import getMainProductReducer from './slices/main/getMainProductSlice';
import getRecommendedReducer from './slices/main/getRecommendedSlice';
import gerReviewReducer from './slices/review/getReviewSlice';
import loginReducer from './slices/login/loginSlice';
import getProductReducer from './slices/product/getProductSlice';

export const store = configureStore({
  reducer: {
    reviewscore: reviewScoreReducer,
    mainproduct: getMainProductReducer,
    recommend: getRecommendedReducer,

    login: loginReducer,

    product: getProductReducer,
    review: gerReviewReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
