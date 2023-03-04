import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import StartPage from './Components/Pages/HomePage/StartPage';
import Home from './Components/Pages/HomePage/Home';
import Converter from './Components/Pages/Converter/Converter';
import ToDoPage from './Components/Pages/ToDoPage/ToDoPage';
import Weather from './Components/Pages/Weather/Weather';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/converter" element={<Converter />} />
        <Route path="/todo" element={<ToDoPage />} />
        <Route path="/weather" element={<Weather  />} />
      </Routes>
    </div>
  );
}

export default App;
