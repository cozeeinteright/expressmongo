import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './page/Home'
import About from './page/About'
import SignIn from './page/SignIn'
import OurDocument from './page/OurDocument'

function App() {
  return (
    <>
      satoyama
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="document" element={<OurDocument />} />
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
