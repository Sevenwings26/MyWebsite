import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

// Create a root element
const rootElement = document.getElementById('root');

// Create a React root and render the app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

