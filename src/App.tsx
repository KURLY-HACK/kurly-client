import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LogIn, MainPage, DetailPage, SubscribeListPage } from './pages';

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/subscribe-list" element={<SubscribeListPage />} />
      </Routes>
    </section>
  );
}

export default App;
