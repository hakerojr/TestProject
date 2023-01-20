
import * as React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </div>
  );
}

function Home() {
  return {
    
  };
}

function About() {
  return {

  };
}

export default App;
