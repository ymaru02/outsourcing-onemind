import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Layout/Home";
import Footer from "./components/Footer";
import Introduction from "./components/Deng/Introduction";
import Location from "./components/Deng/Location";
import Worship from "./components/Deng/Worship";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<NotFound />} />
        <Route path="/intro/introduction" element={<Introduction />} />
        <Route path="/intro/location" element={<Location />} />
        <Route path="/intro/worship" element={<Worship />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
