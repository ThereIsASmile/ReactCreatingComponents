// Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// reference to div by using ID root
const el = document.getElementById('root');

// take control of element
const root = ReactDOM.createRoot(el);

// create component


root.render(<App />);


