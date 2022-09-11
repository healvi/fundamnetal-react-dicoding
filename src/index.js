import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './styles/style.scss';
import "@popperjs/core"; 
import "bootstrap";
const root = createRoot(document.getElementById('root'));
root.render(
  <App />,
);
