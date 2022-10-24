import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from '../../Layout/Auth'; 
import Login from "../Login";
import Register from '../Register';

const index = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/layout' element={<Auth/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default index