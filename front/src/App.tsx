import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Introduction from "./components/Deng/Introduction";
import Location from "./components/Deng/Location";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<NotFound />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
