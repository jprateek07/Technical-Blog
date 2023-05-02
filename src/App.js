import React from 'react'
import Home from './pages/home';
import Listing from './pages/Listing';
import SubMenu from './pages/sub-menu';
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

export default function App() {
  return (
      <div className='main-container'>
    <BrowserRouter>
      <Routes>
        <Route exact path="/listing" element={<Listing/>} />
        <Route exact path="/listing/:id" element={<SubMenu/>} />
        <Route exact path="/" element={  <Home/>} />
        <Route exact path="*" element={  <Home/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}