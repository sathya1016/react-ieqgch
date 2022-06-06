import React from 'react';
import './style.css';
import Home from './Home.js';
import {LocalizationProvider} from "@mui/lab";
impo

export default function App() {
  return (
    <>
    <LocalizationProvider>
      <Home />
      </LocalizationProvider>
    </>
  );
}
