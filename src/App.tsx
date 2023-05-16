import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./components/main/Home";
import Projects from "./components/main/Projects";
import Interests  from "./components/main/Interests";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/interests" element={<Interests />} />

      </Routes>
    </div>
  );
}

export default App;
