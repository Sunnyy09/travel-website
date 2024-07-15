import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='/sign-up' exact element={<SignUp />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
