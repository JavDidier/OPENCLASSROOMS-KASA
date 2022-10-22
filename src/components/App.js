// IMPORT UTILS
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// IMPORT COMPONENTS
import Header   from './Header/Header.js';
import Home     from './pages/Home/Home.js';
import About    from './pages/About/About.js';
import Error    from './pages/Error/Error.js';
import Housing  from './pages/Housing/Housing.js';
import Footer   from './Footer/Footer.js';


// COMPONENT APP
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home"         element= {<Home />}/>
        <Route path="/about"        element= {<About />}/>
        <Route path="*"             element= {<Error />}/>
        <Route path="/housing/:id"  element= {<Housing />}/>
        <Route path="/redirect"     element= {<Navigate to="/404"/>}/>
        <Route path=""              element= {<Navigate to="/home" />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;