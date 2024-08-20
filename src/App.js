import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/login'
import Register from './component/register';
import Quiz from './component/quiz';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quiz" element={<Quiz />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
