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
import loginReducer from './slices/login/loginSlice';

export const store = configureStore({
  reducer: {
    reviewscore: reviewScoreReducer,
    mainproduct: getMainProductReducer,
    recommend: getRecommendedReducer,

    login: loginReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
