import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Customer, NotFound } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Customer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
