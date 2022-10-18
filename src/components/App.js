import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home.js';
import Product from './pages/Product/Product.js';
import About from './pages/About/About.js';
import Error from './pages/Error/Error.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element= {<Home />} />
        <Route path="/about" element= {<About />} />
        <Route path="/product" element= {<Product />} />
        <Route path="*" element= {<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
