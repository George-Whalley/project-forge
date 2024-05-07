import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import FOOTER from './components/footer/footer';
import { createRoot } from "react-dom/client";


createRoot(
  document.getElementById('root'))
  .render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )