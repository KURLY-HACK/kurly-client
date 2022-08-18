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
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/subscribe-list" element={<SubscribeListPage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/post" element={<PostReview />} />
      </Routes>
    </section>
  );
}

export default App;
