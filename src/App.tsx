import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LogIn, MainPage } from './pages';

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </section>
  );
}

export default App;
