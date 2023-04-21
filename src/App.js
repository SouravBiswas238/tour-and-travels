import React from 'react';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import './Component/Shared/Button.css'
import HomeIndex from './Component/Home/HomeIndex';
import Footer from './Component/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import SingleTour from './Component/Pages/SingleTour/SingleTour';

function App() {
  return (
    <div className='mx-auto container overflow-hidden'>

      <Navigation></Navigation>

      <Routes>
        <Route path="/" element={<HomeIndex />} />
        <Route path="/single" element={<SingleTour />} />


      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
