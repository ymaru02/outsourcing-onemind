import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Footer from "./components/common/Footer/Footer";
import Greeting from "./pages/Greeting";
import Introduction from "./pages/Introduction";
import News from "./pages/News";
import Album from "./pages/Album";
import Location from "./pages/Location";
import Worship from "./pages/Worship";
import Navbar from "./components/common/Navbar/Navbar";
import MakePost from "./components/features/PostComp/MakePost";
import Pastor from "./pages/Pastor";

import Sermon from "./pages/Sermon";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import ShowPost from "./components/features/PostComp/ShowPost";
import Login from "./pages/Login";
import MakeSermon from "./pages/MakeSermon";
import ShowSermon from "./pages/ShowSermon";
import PostUpdataDefault from "./pages/PostUpdataDefault";
import Contribution from "./pages/Contribution";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<NotFound />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/pastor" element={<Pastor />} />
        <Route path="/sermon" element={<Sermon />} />
        <Route path="/news" element={<News />} />
        <Route path="/album" element={<Album />} />
        <Route path="/location" element={<Location />} />
        <Route path="/worship" element={<Worship />} />
        <Route path="/makepost" element={<MakePost />} />
        <Route path="/pastor" element={<Pastor />} />
        <Route path="/history" element={<History />} />
        <Route path="/contribution" element={<Contribution />} />
        <Route path="/showpost/:id" element={<ShowPost />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/makesermon" element={<MakeSermon />} />
        <Route path="/showsermond/:id" element={<ShowSermon />} />
        <Route path="/updatepost/:id" element={<PostUpdataDefault />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
