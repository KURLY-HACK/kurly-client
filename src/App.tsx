import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LogIn, MainPage, DetailPage } from './pages';

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </section>
  );
}

export default App;
