import React from 'react';
import './App.css';
import Navbar from './components/Navbar.component.jsx';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home.page.js';

const App = () => {

  return (
    <>
    <Navbar/>
  <Routes>
      <Route path='/' element={<HomePage/>}/>
  </Routes>
  </>
  );
}

export default App;
