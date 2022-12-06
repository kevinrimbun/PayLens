import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from '../../Pages/Landing-Page';
import Auth from '../../Layout/Auth';
import Login from "../Login";
import Register from '../Register';
import History from '../History';
import Home from '../Home';
import Content from '../../Layout/Content';
import Status from '../../Layout/Status';
import Transfer from '../Transfer';
import TopUp from '../TopUp';
import Profile from '../Profile';
import PersonalInformation from '../PersonalInformation';
import CreatePin from '../CreatePin';
import SuccessPin from '../SuccessPin/SuccessPin';
import ResetPass from '../ResetPassword';
import NewPassword from '../NewPassword';
import ChangePassword from '../ChangePassword';
import DetailTransfer from '../DetailTransfer';
import TransferConfirmation from '../TransferConfirmation';
import TopUpConfirmation from '../TopUpConfirmation';
import AddPhoneNum from '../AddPhoneNum';
import ManagePhoneNum from '../ManagePhoneNum';
import ChangePin from '../ChangePin';
import ChangePinAfter from '../ChangePinAfter';
import StatusBerhasil from '../StatusBerhasil';
import StatusGagal from '../StatusGagal';


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
            <Route path='/transfer-confirmation/:id' element={<TransferConfirmation/>} />
            <Route path='/topup-confirmation' element={<TopUpConfirmation/>} />
            <Route path='/transfer-detail/:id' element={<DetailTransfer/>} />
            <Route path='/topup' element={<TopUp/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/information' element={<PersonalInformation/>} />
            <Route path='/history' element={<History />} />
            <Route path='/create-pin' element={<CreatePin/>} />
            <Route path='/success-pin' element={<SuccessPin/>} />
            <Route path='/reset-password' element={<ResetPass/>} />
            <Route path='/new-password/:id' element={<NewPassword/>} />
            <Route path='/change-password' element={<ChangePassword/>} />
            <Route path='/add-phone' element={<AddPhoneNum/>} />
            <Route path='/manage-phone' element={<ManagePhoneNum/>} />
            <Route path='/change-pin' element={<ChangePin/>} />
            <Route path='/new-pin' element={<ChangePinAfter/>} />
            <Route path='/layout-status' element={<Status />} />
            <Route path='/success-transfer/:id' element={<StatusBerhasil />} />
            <Route path='/failed-transfer/:id' element={<StatusGagal />} />
        </Routes>
    </BrowserRouter>
  )
}

export default index