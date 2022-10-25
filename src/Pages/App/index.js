import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from '../../Layout/Auth';
import Login from "../Login";
import Register from '../Register';
import History from '../History';

import Home from '../Home';


const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/layout' element={<Auth />} />
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </BrowserRouter>
  )
}

export default index