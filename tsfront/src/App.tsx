import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home'
import About from './page/About'

function App() {
  return (
    <>
      <header>
        <a 
          href="http://test.test"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
