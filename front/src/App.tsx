import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/Layout/NotFound";
import Home from "./components/Layout/Home";
import Footer from "./components/Footer/Footer";
import Greeting from "./components/Layout/Greeting";
import Introduction from "./components/Layout/Introduction";
import News from "./components/Layout/News";
import Album from "./components/Layout/Album";
import Location from "./components/Layout/Location";
import Worship from "./components/Layout/Worship";
import Navbar from "./components/Navbar/Navbar";
import MakePost from "./components/PostComp/MakePost";
import Pastor from "./components/Layout/Pastor";

import Sermon from "./components/Layout/Sermon";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import ShowPost from "./components/PostComp/ShowPost";
import Login from "./components/Layout/Login";
import MakeSermon from "./components/Layout/MakeSermon";
import ShowSermon from "./components/Layout/ShowSermon";
import PostUpdataDefault from "./components/Layout/PostUpdataDefault";
import Contribution from "./components/Layout/Contribution";
import History from "./components/Layout/History";

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
