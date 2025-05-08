import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import FakeImageDetector from './FakeImageDetector';
import About from './pages/About';
import Explore from './pages/Explore';
import Blogs from './pages/Blogs';
import Result from './pages/Result';
import Generator from './pages/Generator';
import Guide from './pages/Guide';
import History from './pages/History';
import Catfishes from './pages/Catfishes';
import Humanability from './pages/Humanability';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FakeImageDetector />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/result" element={<Result />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/history" element={<History />} />
        <Route path="/catfishes" element={<Catfishes />} />
        <Route path="/humanability" element={<Humanability />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
