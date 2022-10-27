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
import TopUp from '../TopUp';
import Profile from '../Profile';
import CreatePin from '../CreatePin';
import SuccessPin from '../SuccessPin/SuccessPin';
import ResetPass from '../ResetPassword';
import NewPassword from '../NewPassword';
import ChangePassword from '../ChangePassword';


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
            <Route path='/topup' element={<TopUp/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/history' element={<History />} />
            <Route path='/create-pin' element={<CreatePin/>} />
            <Route path='/success-pin' element={<SuccessPin/>} />
            <Route path='/reset-password' element={<ResetPass/>} />
            <Route path='/new-password' element={<NewPassword/>} />
            <Route path='/changepassword' element={<ChangePassword/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default index