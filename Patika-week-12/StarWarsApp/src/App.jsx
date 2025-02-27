
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StarshipList from './components/strashiplist/StrashipList';
import StarshipDetail from './components/Starshipdetail/StarshipDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<StarshipList />} />
          <Route path="/starship/:id" element={<StarshipDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


