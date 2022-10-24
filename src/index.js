// IMPORT UTILS
import React from 'react';
import ReactDOM from 'react-dom/client';

// IMPORT COMPONENTS 
import App from './App.js';

// IMPORT STYLE 
import './index.css';

// ROOT
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // STRICTMODE: IDENTIFIE LES PROBLÈMES POTENTIELS
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
