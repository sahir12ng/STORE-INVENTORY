import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Inicio from "./components/inicio"

function App() {
  return (
    <Router>
      <Inicio />
    </Router>
  );
}

export default App;
