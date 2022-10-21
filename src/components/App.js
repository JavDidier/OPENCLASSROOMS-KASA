import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from './pages/Home/Home.js';
import Product from './pages/Product/Product.js';
import About from './pages/About/About.js';
import Error from './pages/Error/Error.js';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home"   element= {<Home />} />
        <Route path="/about"  element= {<About />} />
        <Route path="*"       element= {<Error />} />
        <Route path="/product/:id"    element={<Product />} />
        <Route path='/redirect' element={<Navigate to="/404" />} />
        <Route path='' element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;


