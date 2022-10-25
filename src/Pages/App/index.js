import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from '../../Layout/Auth';
import Login from "../Login";
import Register from '../Register';
import History from '../History';

import Home from '../Home';
import Content from '../../Layout/Content';


const index = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/layout' element={<Auth/>} />
            <Route path='/layout-content' element={<Content/>} />
            <Route path='/' element={<Home/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default index