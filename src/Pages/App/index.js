import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from '../../Pages/Landing-Page';
import Auth from '../../Layout/Auth';
import Login from "../Login";
import Register from '../Register';
import History from '../History';
import Home from '../Home';
import Content from '../../Layout/Content';
import Transfer from '../Transfer';


const index = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/layout' element={<Auth/>} />
            <Route path='/layout-content' element={<Content/>} />
            <Route path='/dashboard' element={<Home/>} />
            <Route path='/history' element={<History/>} />
            <Route path='/transfer' element={<Transfer/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default index