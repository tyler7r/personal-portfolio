import React from 'react';
import ReactDOM from 'react-dom/client';
import { Portfolio } from './Portfolio';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Portfolio />
    </BrowserRouter>
  </React.StrictMode>
);
