import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import reviewScoreReducer from './slices/review/reviewScoreSlice';
import getMainProductReducer from './slices/main/getMainProductSlice';
import getRecommendedReducer from './slices/main/getRecommendedSlice';
import gerReviewReducer from './slices/review/getReviewSlice';
import loginReducer from './slices/login/loginSlice';
import getProductReducer from './slices/product/getProductSlice';
import getSubscribeListReducer from './slices/subscribe/getSubscribeListSlice';
import getSubscribeUserReducer from './slices/subscribe/getSubscribeUserSlice';
import getCommonScoreReducer from './slices/chart/getCommonScoreSlice';
import getFreshScoreReducer from './slices/chart/getFreshScoreSlice';
import setSubscribeReducer from './slices/subscribe/setSubscribeSlice';

export const store = configureStore({
  reducer: {
    reviewscore: reviewScoreReducer,
    mainproduct: getMainProductReducer,
    recommend: getRecommendedReducer,

    login: loginReducer,

    product: getProductReducer,
    review: gerReviewReducer,

    subscribeList: getSubscribeListReducer,
    subscribe: getSubscribeUserReducer,

    commonscore: getCommonScoreReducer,
    freshscore: getFreshScoreReducer,

    setsubscribe: setSubscribeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
