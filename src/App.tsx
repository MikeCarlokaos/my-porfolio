import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BosCoffee from "./pages/projects/BosCoffee";
import Flickr from "./pages/projects/Flickr";
import Minecraft from "./pages/projects/Minecraft";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bos-coffee" element={<BosCoffee />} />
      <Route path="/minecraft" element={<Minecraft />} />
      <Route path="/flickr" element={<Flickr />} />
    </Routes>
  );
};

export default App;
