import React from 'react';
import './App.css';
import Navbar from './components/Navbar.component.jsx';
import {Routes, Route} from 'react-router-dom';
import HomeComponent from './components/Home.component.jsx';
import ProfileCard from './components/Profile.component.jsx';
import MySkills from './components/Skills.component.jsx';
import ProjectComponent from './components/Projects.component.jsx';
import ContactForm from './components/Contact.component.jsx';

const App = () => {

  return (
    <>
    <Navbar/>
  <Routes>
      <Route path='/' element={<HomeComponent/>}/>
      <Route path='/about' element={<ProfileCard/>}/>
      <Route path='/skills' element={<MySkills/>}/>
      <Route path='/projects' element={<ProjectComponent/>}/>
      <Route path='/contact' element={<ContactForm/>}/>
  </Routes>
  </>
  );
}

export default App;
