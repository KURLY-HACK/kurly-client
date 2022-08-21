import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {
  LogIn,
  MainPage,
  DetailPage,
  SubscribeListPage,
  SubscribePage,
  PostReview,
} from './pages';
import { RootState, useAppSelector } from './store/store';

function App() {
  const success = useAppSelector((state: RootState) => state.login.success);

  return (
    <section>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/login"
          element={success ? <Navigate to="/" replace /> : <LogIn />}
        />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route
          path="/subscribe-list"
          element={
            success ? <SubscribeListPage /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/post/:id"
          element={success ? <PostReview /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/subscribe/:id"
          element={
            success ? <SubscribePage /> : <Navigate to="/login" replace />
          }
        />
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </section>
  );
}

export default App;
