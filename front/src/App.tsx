import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound'
import Home from './components/Home'
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
