import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  LogIn,
  MainPage,
  DetailPage,
  SubscribeListPage,
  SubscribePage,
  PostReview,
} from './pages';

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/subscribe-list" element={<SubscribeListPage />} />
        <Route path="/post" element={<PostReview />} />
        <Route path="/subscribe/:id" element={<SubscribePage />} />
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </section>
  );
}

export default App;
