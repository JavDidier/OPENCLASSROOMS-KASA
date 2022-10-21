// UTILS
import React from 'react';
import ReactDOM from 'react-dom/client';

// COMPONENTS 
import App from './components/App.js';

// STYLE 
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
