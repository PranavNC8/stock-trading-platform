import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import Productpage from './landing_page/products/Productpage';
import PricingPage from './landing_page/pricing/PricingPage';
import Supportpage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/login/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/product' element={<Productpage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/support' element={<Supportpage />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
);


